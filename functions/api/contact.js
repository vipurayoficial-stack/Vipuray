const MAX_FIELD_LENGTH = 2000;
const CONTACT_TO_EMAIL = "vipuray.oficial@gmail.com";
const DEFAULT_FROM_EMAIL = "Vipu-Ray <onboarding@resend.dev>";

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  const body = await readJson(request);
  const contact = normalizeContact(body);
  const validationError = validateContact(contact);

  if (validationError) {
    return json({ ok: false, error: validationError }, { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return json(
      {
        ok: false,
        configured: false,
        error: "El envio de correos aun no esta configurado."
      },
      { status: 503 }
    );
  }

  const to = clean(env.CONTACT_TO_EMAIL || CONTACT_TO_EMAIL);
  const from = clean(env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL);
  const subject = "Nueva solicitud desde la web Vipu-Ray";
  const sentAt = new Date().toLocaleString("es-CL", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Santiago"
  });

  const emailPayload = {
    from,
    to,
    reply_to: contact.email,
    subject,
    text: buildTextEmail(contact, sentAt),
    html: buildHtmlEmail(contact, sentAt)
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(emailPayload)
  });

  if (!response.ok) {
    return json(
      {
        ok: false,
        error: "No se pudo enviar el correo en este momento."
      },
      { status: 502 }
    );
  }

  return json({ ok: true });
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

function normalizeContact(body) {
  return {
    name: clean(body.name),
    email: clean(body.email),
    message: clean(body.message)
  };
}

function validateContact(contact) {
  if (!contact.name) return "Ingresa tu nombre.";
  if (!contact.email) return "Ingresa tu correo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) return "Ingresa un correo valido.";
  if (!contact.message) return "Ingresa tu mensaje.";
  return "";
}

function clean(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, MAX_FIELD_LENGTH);
}

function buildTextEmail(contact, sentAt) {
  return [
    "Nueva solicitud desde la web Vipu-Ray",
    "",
    `Nombre: ${contact.name}`,
    `Correo: ${contact.email}`,
    `Fecha: ${sentAt}`,
    "",
    "Mensaje:",
    contact.message
  ].join("\n");
}

function buildHtmlEmail(contact, sentAt) {
  return `
    <div style="font-family: Arial, sans-serif; color: #071833; line-height: 1.55;">
      <h2 style="margin: 0 0 14px;">Nueva solicitud desde la web Vipu-Ray</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(contact.name)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(contact.email)}</p>
      <p><strong>Fecha:</strong> ${escapeHtml(sentAt)}</p>
      <div style="margin-top: 18px; padding: 16px; border: 1px solid #dce8f5; border-radius: 10px; background: #f7fbff;">
        <strong>Mensaje</strong>
        <p style="white-space: pre-wrap; margin-bottom: 0;">${escapeHtml(contact.message)}</p>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
