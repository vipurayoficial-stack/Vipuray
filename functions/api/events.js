const EVENT_TYPES = new Set([
  "page_view",
  "schedule_query",
  "company_card_click",
  "contact_form",
  "instagram_click",
  "email_click",
  "info_cta_click"
]);

const MAX_FIELD_LENGTH = 500;

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  const body = await readJson(request);
  const event = normalizeEvent(body, request);

  if (!EVENT_TYPES.has(event.type)) {
    return json({ ok: false, error: "Invalid event type." }, { status: 400 });
  }

  if (!env.DB) {
    return json({ ok: false, configured: false, error: "D1 binding DB is not configured." }, { status: 202 });
  }

  await ensureEventsTable(env.DB);
  await env.DB
    .prepare(`
      INSERT INTO analytics_events (
        id,
        created_at,
        type,
        path,
        source,
        company,
        destination,
        label,
        session_id,
        referrer,
        user_agent,
        metadata
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      event.id,
      event.createdAt,
      event.type,
      event.path,
      event.source,
      event.company,
      event.destination,
      event.label,
      event.sessionId,
      event.referrer,
      event.userAgent,
      JSON.stringify(event.metadata || {})
    )
    .run();

  return json({ ok: true, id: event.id });
}

export async function onRequestGet() {
  return json({ ok: false, error: "Method not allowed." }, { status: 405 });
}

async function readJson(request) {
  try {
    return await request.json();
  } catch (_error) {
    return {};
  }
}

function normalizeEvent(body, request) {
  const createdAt = new Date().toISOString();
  const url = new URL(request.url);

  return {
    id: crypto.randomUUID(),
    createdAt,
    type: clean(body.type),
    path: clean(body.path || url.pathname),
    source: clean(body.source),
    company: clean(body.company),
    destination: clean(body.destination),
    label: clean(body.label),
    sessionId: clean(body.sessionId),
    referrer: clean(body.referrer || request.headers.get("referer")),
    userAgent: clean(request.headers.get("user-agent")),
    metadata: body.metadata && typeof body.metadata === "object" ? body.metadata : {}
  };
}

function clean(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, MAX_FIELD_LENGTH);
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
