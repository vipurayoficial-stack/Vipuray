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
);

CREATE INDEX IF NOT EXISTS idx_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_events_type ON analytics_events(type);
CREATE INDEX IF NOT EXISTS idx_events_company ON analytics_events(company);
