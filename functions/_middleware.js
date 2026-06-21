const PROTECTED_PATHS = new Set([
  "/dashboard",
  "/dashboard.html",
  "/api/analytics"
]);

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  if (!isProtectedPath(url.pathname, request.method)) {
    return next();
  }

  const user = env.DASHBOARD_USER || "";
  const password = env.DASHBOARD_PASSWORD || "";

  if (!user || !password) {
    return new Response("Dashboard protection is not configured.", {
      status: 503,
      headers: privateHeaders()
    });
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"));
  if (credentials && timingSafeEqual(credentials.user, user) && timingSafeEqual(credentials.password, password)) {
    const response = await next();
    const headers = new Headers(response.headers);
    headers.set("cache-control", "no-store");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  return new Response("Autenticacion requerida.", {
    status: 401,
    headers: {
      ...privateHeaders(),
      "www-authenticate": 'Basic realm="Dashboard Vipu-Ray", charset="UTF-8"'
    }
  });
}

function isProtectedPath(pathname, method = "GET") {
  if (pathname === "/api/content" && !["GET", "HEAD", "OPTIONS"].includes(method)) return true;
  return PROTECTED_PATHS.has(pathname) || pathname.startsWith("/dashboard/");
}

function parseBasicAuth(header) {
  if (!header || !header.startsWith("Basic ")) return null;

  try {
    const decoded = atob(header.slice(6));
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex < 0) return null;

    return {
      user: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1)
    };
  } catch (_error) {
    return null;
  }
}

function timingSafeEqual(left, right) {
  const leftBytes = new TextEncoder().encode(left);
  const rightBytes = new TextEncoder().encode(right);
  const maxLength = Math.max(leftBytes.length, rightBytes.length);
  let result = leftBytes.length === rightBytes.length ? 0 : 1;

  for (let index = 0; index < maxLength; index += 1) {
    result |= (leftBytes[index] || 0) ^ (rightBytes[index] || 0);
  }

  return result === 0;
}

function privateHeaders() {
  return {
    "cache-control": "no-store",
    "content-type": "text/plain; charset=utf-8",
    "x-robots-tag": "noindex, nofollow"
  };
}
