const CONTENT_KEY = "dashboardData";
const MAX_CONTENT_BYTES = 1_000_000;

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestGet({ env }) {
  if (!env.DB) {
    return json({
      ok: false,
      configured: false,
      data: null,
      updatedAt: "",
      error: "D1 binding DB is not configured."
    });
  }

  await ensureContentTable(env.DB);

  const row = await env.DB
    .prepare("SELECT value, updated_at FROM site_content WHERE key = ?")
    .bind(CONTENT_KEY)
    .first();

  if (!row) {
    return json({
      ok: true,
      configured: true,
      data: null,
      updatedAt: ""
    });
  }

  try {
    return json({
      ok: true,
      configured: true,
      data: JSON.parse(row.value),
      updatedAt: row.updated_at || ""
    });
  } catch (_error) {
    return json({ ok: false, configured: true, error: "Stored content is not valid JSON." }, { status: 500 });
  }
}

export async function onRequestPut({ request, env }) {
  if (!env.DB) {
    return json({ ok: false, configured: false, error: "D1 binding DB is not configured." }, { status: 503 });
  }

  const body = await readJson(request);
  const content = body && typeof body === "object" && "data" in body ? body.data : body;

  if (!isValidContent(content)) {
    return json({ ok: false, error: "Invalid dashboard content." }, { status: 400 });
  }

  const value = JSON.stringify(content);
  if (new TextEncoder().encode(value).length > MAX_CONTENT_BYTES) {
    return json({ ok: false, error: "Dashboard content is too large." }, { status: 413 });
  }

  const updatedAt = new Date().toISOString();
  await ensureContentTable(env.DB);
  await env.DB
    .prepare(`
      INSERT INTO site_content (key, value, updated_at)
      VALUES (?, ?, ?)
      ON CONFLICT(key) DO UPDATE SET
        value = excluded.value,
        updated_at = excluded.updated_at
    `)
    .bind(CONTENT_KEY, value, updatedAt)
    .run();

  return json({ ok: true, configured: true, updatedAt });
}

export async function onRequestPost() {
  return json({ ok: false, error: "Method not allowed." }, { status: 405 });
}

export async function onRequestDelete() {
  return json({ ok: false, error: "Method not allowed." }, { status: 405 });
}

async function readJson(request) {
  try {
    return await request.json();
  } catch (_error) {
    return null;
  }
}

function isValidContent(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      Array.isArray(value.companies) &&
      Array.isArray(value.services) &&
      Array.isArray(value.infoSlides)
  );
}

async function ensureContentTable(db) {
  await db
    .prepare(`
      CREATE TABLE IF NOT EXISTS site_content (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    `)
    .run();
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
