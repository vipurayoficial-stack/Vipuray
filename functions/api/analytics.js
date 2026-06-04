export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const range = getDateRange(url);

  if (!env.DB) {
    return json({
      ok: false,
      configured: false,
      range,
      totals: emptyTotals(),
      topCompany: "",
      topRoute: "",
      companies: [],
      destinations: [],
      timeline: []
    });
  }

  await ensureEventsTable(env.DB);

  const params = [range.fromIso, range.toIso];
  const [totalsRows, uniqueRows, companyRows, destinationRows, vipurayRows, timelineRows] = await Promise.all([
    env.DB
      .prepare(`
        SELECT type, COUNT(*) AS total
        FROM analytics_events
        WHERE created_at >= ? AND created_at <= ?
        GROUP BY type
      `)
      .bind(...params)
      .all(),
    env.DB
      .prepare(`
        SELECT COUNT(DISTINCT session_id) AS total
        FROM analytics_events
        WHERE created_at >= ? AND created_at <= ? AND session_id != ''
      `)
      .bind(...params)
      .first(),
    env.DB
      .prepare(`
        SELECT company, COUNT(*) AS total
        FROM analytics_events
        WHERE created_at >= ? AND created_at <= ? AND company != ''
        GROUP BY company
        ORDER BY total DESC, company ASC
        LIMIT 10
      `)
      .bind(...params)
      .all(),
    env.DB
      .prepare(`
        SELECT destination, COUNT(*) AS total
        FROM analytics_events
        WHERE created_at >= ? AND created_at <= ? AND destination != ''
        GROUP BY destination
        ORDER BY total DESC, destination ASC
        LIMIT 10
      `)
      .bind(...params)
      .all(),
    env.DB
      .prepare(`
        SELECT COUNT(*) AS total
        FROM analytics_events
        WHERE created_at >= ? AND created_at <= ?
          AND (
            company = 'Buses Vipu Ray'
            OR destination LIKE '%Pucón%'
            OR destination LIKE '%Pucon%'
            OR destination LIKE '%Loncoche%'
          )
      `)
      .bind(...params)
      .first(),
    env.DB
      .prepare(`
        SELECT substr(created_at, 1, 10) AS day, COUNT(*) AS total
        FROM analytics_events
        WHERE created_at >= ? AND created_at <= ?
        GROUP BY day
        ORDER BY day ASC
      `)
      .bind(...params)
      .all()
  ]);

  const totals = emptyTotals();
  for (const row of totalsRows.results || []) {
    totals[row.type] = Number(row.total) || 0;
  }
  totals.uniqueVisitors = Number(uniqueRows?.total) || 0;
  totals.vipurayInteractions = Number(vipurayRows?.total) || 0;

  const companies = normalizeRows(companyRows.results, "company");
  const destinations = normalizeRows(destinationRows.results, "destination");

  return json({
    ok: true,
    configured: true,
    range,
    totals,
    topCompany: companies[0]?.name || "",
    topRoute: destinations[0]?.name || "",
    companies,
    destinations,
    timeline: normalizeTimeline(timelineRows.results)
  });
}

function getDateRange(url) {
  const now = new Date();
  const fallbackFrom = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  const fallbackTo = now.toISOString().slice(0, 10);
  const from = validDate(url.searchParams.get("from")) || fallbackFrom;
  const to = validDate(url.searchParams.get("to")) || fallbackTo;

  return {
    from,
    to,
    fromIso: `${from}T00:00:00.000Z`,
    toIso: `${to}T23:59:59.999Z`
  };
}

function validDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value || "") ? value : "";
}

function emptyTotals() {
  return {
    page_view: 0,
    schedule_query: 0,
    company_card_click: 0,
    contact_form: 0,
    instagram_click: 0,
    email_click: 0,
    info_cta_click: 0,
    uniqueVisitors: 0,
    vipurayInteractions: 0
  };
}

function normalizeRows(rows = [], key) {
  return rows
    .filter((row) => row[key])
    .map((row) => ({
      name: row[key],
      total: Number(row.total) || 0
    }));
}

function normalizeTimeline(rows = []) {
  return rows.map((row) => ({
    day: row.day,
    total: Number(row.total) || 0
  }));
}

async function ensureEventsTable(db) {
  await db
    .prepare(`
      CREATE TABLE IF NOT EXISTS analytics_events (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        type TEXT NOT NULL,
        path TEXT,
        source TEXT,
        company TEXT,
        destination TEXT,
        label TEXT,
        session_id TEXT,
        referrer TEXT,
        user_agent TEXT,
        metadata TEXT
      )
    `)
    .run();

  await db.prepare("CREATE INDEX IF NOT EXISTS idx_events_created_at ON analytics_events(created_at)").run();
  await db.prepare("CREATE INDEX IF NOT EXISTS idx_events_type ON analytics_events(type)").run();
  await db.prepare("CREATE INDEX IF NOT EXISTS idx_events_company ON analytics_events(company)").run();
}

function json(payload, init = {}) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(init.headers || {})
    }
  });
}
