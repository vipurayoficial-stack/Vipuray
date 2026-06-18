const STORAGE_KEY = "vipurayDashboardData";
const ANALYTICS_STORAGE_KEY = "vipurayAnalyticsEvents";

const defaultData = {
  companies: [
    { name: "Buses Vipu Ray", logo: "Vipu Ray", logoImage: "assets/vipuray-logo-wide.png", destinations: "Pucón, Loncoche", ticketOffice: "N° 2" },
    { name: "Buses Coñaripe", logo: "Coñaripe", logoImage: "assets/company-logos/buses-conaripe.png", destinations: "Lican Ray, Coñaripe, Panguipulli", ticketOffice: "N° 1" },
    { name: "Buses Villarrica", logo: "Villarrica", logoImage: "assets/company-logos/buses-villarrica.png", destinations: "Temuco", ticketOffice: "N° 4" },
    { name: "Buses Transantin", logo: "Transantin", logoImage: "assets/company-logos/buses-transantin.png", destinations: "Santiago", ticketOffice: "N° 5" },
    { name: "Buses Pullman Tur", logo: "Pullman Tur", logoImage: "assets/company-logos/buses-pullman-tur.png", destinations: "Santiago", ticketOffice: "N° 6" },
    { name: "Buses Oro Verde", logo: "Oro Verde", logoImage: "assets/company-logos/buses-oro-verde.png", destinations: "Santiago", ticketOffice: "N° 7" },
    { name: "Buses Lista Azul", logo: "Lista Azul", logoImage: "assets/company-logos/buses-lista-azul.png", destinations: "Santiago", ticketOffice: "N° 8" },
    { name: "Buses Barahona", logo: "Barahona", logoImage: "assets/company-logos/buses-barahona.png", destinations: "Pitrufquén, Temuco", ticketOffice: "Consultar" },
    { name: "Servicios Rurales", logo: "Rural", logoImage: "assets/company-logos/servicios-rurales.png", destinations: "El Coihue, Milleuco, Chaura, Voipir Seco, Huincacara, Relún, Challupén, Malloco Lolenco, Huilipilun Alto, Puente Long Long, Catrico, Rayen Lafquen y más", ticketOffice: "Consultar" }
  ],
  services: [
    { id: "VIP-PUC", destination: "Pucón", time: "Consultar en boletería", company: "Buses Vipu Ray", service: "Ventas de pasajes", price: null, availability: "Boletería N° 2" },
    { id: "VIP-LON", destination: "Loncoche", time: "Consultar en boletería", company: "Buses Vipu Ray", service: "Ventas de pasajes", price: null, availability: "Boletería N° 2" },
    { id: "CON-LIC", destination: "Lican Ray", time: "Consultar horarios", company: "Buses Coñaripe", service: "Información y horarios", price: null, availability: "Boletería N° 1" },
    { id: "CON-CON", destination: "Coñaripe", time: "Consultar horarios", company: "Buses Coñaripe", service: "Información y horarios", price: null, availability: "Boletería N° 1" },
    { id: "CON-PAN", destination: "Panguipulli", time: "Consultar horarios", company: "Buses Coñaripe", service: "Información y horarios", price: null, availability: "Boletería N° 1" },
    { id: "VIL-TEM", destination: "Temuco", time: "Consultar en boletería", company: "Buses Villarrica", service: "Ventas de pasajes", price: null, availability: "Boletería N° 4" },
    { id: "TRA-SAN", destination: "Santiago", time: "Consultar en boletería", company: "Buses Transantin", service: "Ventas de pasajes", price: null, availability: "Boletería N° 5" },
    { id: "PUL-SAN", destination: "Santiago", time: "Consultar en boletería", company: "Buses Pullman Tur", service: "Ventas de pasajes", price: null, availability: "Boletería N° 6" },
    { id: "ORO-SAN", destination: "Santiago", time: "Consultar en boletería", company: "Buses Oro Verde", service: "Ventas de pasajes", price: null, availability: "Boletería N° 7" },
    { id: "LIS-SAN", destination: "Santiago", time: "Consultar en boletería", company: "Buses Lista Azul", service: "Ventas de pasajes", price: null, availability: "Boletería N° 8" },
    { id: "BAR-PIT", destination: "Pitrufquén", time: "Consultar horarios", company: "Buses Barahona", service: "Consultar en terminal", price: null, availability: "Consultar en terminal" },
    { id: "BAR-TEM", destination: "Temuco", time: "Consultar horarios", company: "Buses Barahona", service: "Consultar en terminal", price: null, availability: "Consultar en terminal" },
    { id: "ARM-COI-1300", destination: "El Coihue", time: "Lunes a viernes 13:00 y 19:00 / sábado 13:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "ARM-MIL-1600", destination: "Milleuco", time: "Lunes a viernes 16:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "ARM-CHA", destination: "Chaura", time: "Lunes a viernes 12:00 y 17:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "LEO-VOI", destination: "Voipir Seco", time: "Lunes a viernes 13:00 / lunes a sábado 17:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "LEO-HUI", destination: "Huincacara", time: "Lunes a viernes 13:00 / lunes a sábado 17:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "LEO-REL", destination: "Relún", time: "Lunes, miércoles y viernes 13:00 y 17:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "LEO-CHA", destination: "Challupén", time: "Lunes a viernes 16:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "ESP-MAL", destination: "Malloco Lolenco", time: "Lunes a viernes 16:30", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "ESP-HUI", destination: "Huilipilun Alto", time: "Consultar en terminal", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "ESP-LON", destination: "Puente Long Long", time: "18:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "EDET-CAT", destination: "Catrico", time: "Lunes a viernes 16:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "EDET-RAY", destination: "Rayen Lafquen", time: "Lunes a viernes 16:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "CAS-COP", destination: "Los Copihues", time: "Lunes, miércoles y viernes 13:00 / lunes a viernes 18:30", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "CAS-RAL", destination: "Rallenlafquen", time: "Lunes a viernes 16:30", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "CAS-FUN", destination: "Funalhue", time: "Lunes a viernes 18:30 / lunes a sábado 13:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "CAS-CPE", destination: "Copihuelpe", time: "Lunes a sábado 13:00 y 17:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "CAS-PIN", destination: "Pinohuacho", time: "Lunes a viernes 16:30", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" },
    { id: "CAS-LAU", destination: "Los Laureles", time: "Martes y jueves 16:00", company: "Servicios Rurales", service: "Zona rural", price: null, availability: "Consultar en terminal" }
  ],
  infoSlides: [
    {
      label: "Recomendación",
      title: "Llega con",
      highlight: "anticipación",
      text: "Para consultar recorridos o confirmar salidas, llega con tiempo suficiente y ten a mano el destino exacto que necesitas.",
      cta: "Viaje más tranquilo",
      image: "assets/andenes-frontis-terminal.png",
      features: [
        { icon: "clock", title: "Viaja tranquilo", text: "Planifica tu viaje con tiempo." },
        { icon: "ticket", title: "Consulta fácil", text: "Horarios claros por empresa." },
        { icon: "pin", title: "Múltiples destinos", text: "Conectamos con rutas urbanas y rurales." }
      ]
    },
    {
      label: "Horarios",
      title: "Consulta por",
      highlight: "empresa",
      text: "Selecciona primero la empresa y luego el destino para ver solo las salidas que corresponden a ese operador.",
      cta: "Consultar ahora",
      image: "assets/fachada-trasera-terminal.png",
      features: [
        { icon: "bus", title: "Filtro directo", text: "Evita recorridos que no aplican." },
        { icon: "clock", title: "Frecuencia", text: "Revisa salidas disponibles." },
        { icon: "ticket", title: "Boletería", text: "Ubica dónde consultar." }
      ]
    },
    {
      label: "Zona rural",
      title: "Revisa días",
      highlight: "de salida",
      text: "Algunos servicios rurales operan solo ciertos días de la semana. Confirma la salida antes de dirigirte al andén.",
      cta: "Ver recorridos",
      image: "assets/andenes-traseros-noche.png",
      features: [
        { icon: "pin", title: "Rutas rurales", text: "Servicios con días específicos." },
        { icon: "clock", title: "Horarios útiles", text: "Salidas según recorrido." },
        { icon: "bus", title: "Atención local", text: "Consulta en el terminal." }
      ]
    },
    {
      label: "Información",
      title: "Encuentra tu",
      highlight: "boletería",
      text: "Cada empresa atiende sus propios destinos. Revisa el número de boletería antes de acercarte al mesón.",
      cta: "Ver empresas",
      image: "assets/patio-trasero-noche.png",
      features: [
        { icon: "ticket", title: "Boleterías", text: "Números por empresa." },
        { icon: "pin", title: "Destinos", text: "Recorridos desde Villarrica." },
        { icon: "clock", title: "Atención", text: "Consulta presencial." }
      ]
    }
  ],
  reports: [
    {
      id: "sample-report",
      month: "2026-06",
      websiteVisits: 0,
      scheduleQueries: 0,
      instagramMessages: 0,
      emailRequests: 0,
      instagramReach: 0,
      instagramFollowers: 0,
      topCompany: "Por definir",
      topRoute: "Por definir",
      highlights: "Completar con resultados reales al cierre del mes.",
      opportunities: "Registrar preguntas frecuentes, rutas mas consultadas y dudas repetidas.",
      nextActions: "Actualizar contenido, reforzar publicaciones y revisar datos del mes siguiente.",
      vipurayQueries: 0,
      vipurayMessages: 0,
      vipurayTopRoute: "Por definir",
      vipurayTopContent: "Por definir",
      vipurayAnalysis: "Completar con aprendizajes especificos sobre Buses Vipu-Ray.",
      vipurayRecommendations: "Definir acciones concretas para mejorar la comunicacion y claridad de informacion de Buses Vipu-Ray."
    }
  ]
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const RURAL_GROUP_NAME = "Servicios Rurales";
const LEGACY_RURAL_GROUP_NAME = "Servicios rurales";
const RURAL_COMPANY_NAMES = new Set([
  "Buses Manuel Armona",
  "Buses Leonardo del Valle",
  "Transportes Esperanza (Surtran)",
  "Buses E.De.T. De Eoca Bus Limitada",
  "Buses José Castillo"
]);
const RURAL_COMPANY = {
  name: RURAL_GROUP_NAME,
  logo: "Rural",
  logoImage: "assets/company-logos/servicios-rurales.png",
  destinations: "El Coihue, Milleuco, Chaura, Voipir Seco, Huincacara, Relún, Challupén, Malloco Lolenco, Huilipilun Alto, Puente Long Long, Catrico, Rayen Lafquen y más",
  ticketOffice: "Consultar"
};

let activeCompanyIndex = 0;
let activeSlideIndex = 0;
let activeServiceId = "";
let activeServiceFilter = "";
let data = loadData();
let activeReportId = data.reports?.[0]?.id || "";
let analyticsState = {
  loading: false,
  source: "local",
  range: getDefaultDateRange(),
  data: emptyAnalyticsData(),
  error: ""
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizedKey(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function isRuralGroupName(value) {
  return [RURAL_GROUP_NAME, LEGACY_RURAL_GROUP_NAME].some((name) => normalizedKey(name) === normalizedKey(value));
}

function isLegacyRuralOperator(value) {
  const key = normalizedKey(value);
  return Array.from(RURAL_COMPANY_NAMES).some((name) => normalizedKey(name) === key);
}

function canonicalCompanyName(value = "") {
  if (isRuralGroupName(value) || isLegacyRuralOperator(value)) return RURAL_GROUP_NAME;
  return String(value).trim().replace(/\s+/g, " ");
}

function findCompanyIndexByName(name, excludeIndex = -1) {
  const key = normalizedKey(name);
  return data.companies.findIndex((company, index) => index !== excludeIndex && normalizedKey(company.name) === key);
}

function mergeCompany(existing, incoming) {
  return {
    ...existing,
    ...incoming,
    logo: incoming.logo || existing.logo,
    logoImage: incoming.logoImage || existing.logoImage,
    destinations: incoming.destinations || existing.destinations,
    ticketOffice: incoming.ticketOffice || existing.ticketOffice
  };
}

function normalizeDataSet(value) {
  const normalized = {
    ...value,
    companies: normalizeCompanies(Array.isArray(value.companies) ? value.companies : []),
    services: normalizeServices(Array.isArray(value.services) ? value.services : []),
    infoSlides: Array.isArray(value.infoSlides) ? value.infoSlides : clone(defaultData.infoSlides),
    reports: Array.isArray(value.reports) ? value.reports : clone(defaultData.reports)
  };

  if (activeCompanyIndex >= normalized.companies.length) activeCompanyIndex = Math.max(0, normalized.companies.length - 1);
  if (activeServiceFilter && !normalized.companies.some((company) => company.name === activeServiceFilter)) {
    activeServiceFilter = "";
  }
  if (activeServiceId && !normalized.services.some((service) => service.id === activeServiceId)) {
    activeServiceId = "";
  }

  return normalized;
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && Array.isArray(saved.companies) && Array.isArray(saved.services) && Array.isArray(saved.infoSlides)) {
      if (!Array.isArray(saved.reports)) saved.reports = clone(defaultData.reports);
      return normalizeDataSet(saved);
    }
  } catch (error) {
    console.warn("No se pudieron cargar los datos guardados.", error);
  }
  return normalizeDataSet(clone(defaultData));
}

function normalizeCompanies(items) {
  const byName = new Map();

  items.forEach((company) => {
    if (!company?.name || isLegacyRuralOperator(company.name)) return;
    const normalizedCompany = isRuralGroupName(company.name)
      ? {
          ...RURAL_COMPANY,
          ...company,
          name: RURAL_GROUP_NAME,
          logoImage: company.logoImage || RURAL_COMPANY.logoImage
        }
      : {
          ...company,
          name: String(company.name).trim().replace(/\s+/g, " ")
        };
    const key = normalizedKey(normalizedCompany.name);
    byName.set(key, byName.has(key) ? mergeCompany(byName.get(key), normalizedCompany) : normalizedCompany);
  });

  if (!byName.has(normalizedKey(RURAL_GROUP_NAME))) {
    byName.set(normalizedKey(RURAL_GROUP_NAME), { ...RURAL_COMPANY });
  }

  return Array.from(byName.values());
}

function normalizeServices(items) {
  return items.map((service) => {
    const company = canonicalCompanyName(service.company);
    const normalized = { ...service, company };
    delete normalized.operator;
    if (company === RURAL_GROUP_NAME) {
      normalized.service = "Zona rural";
      normalized.availability = "Consultar en terminal";
    }
    return normalized;
  });
}

function saveData(message = "Cambios guardados.") {
  data = normalizeDataSet(data);
  data.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  renderAll();
  showToast(message);
}

function renderAll() {
  renderMetrics();
  renderAnalytics();
  renderCompanies();
  renderCompanyForm();
  renderServiceOptions();
  renderServices();
  renderServiceForm();
  renderSlides();
  renderSlideForm();
  renderReportOptions();
  renderReportForm();
  renderReportPreview();
  renderSavedStatus();
}

function renderMetrics() {
  const destinations = new Set(data.services.map((service) => service.destination));
  $("[data-metric-companies]").textContent = data.companies.length;
  $("[data-metric-services]").textContent = data.services.length;
  $("[data-metric-destinations]").textContent = destinations.size;
  $("[data-metric-slides]").textContent = data.infoSlides.length;
}

function renderSavedStatus() {
  const label = data.updatedAt
    ? `Ultimo guardado: ${new Date(data.updatedAt).toLocaleString("es-CL")}.`
    : "Usando datos base. Guarda cambios para aplicarlos en la pagina publica.";
  $("[data-last-saved]").textContent = label;
}

function renderAnalytics() {
  const analytics = analyticsState.data || emptyAnalyticsData();
  const totals = analytics.totals || emptyAnalyticsData().totals;

  $("[data-analytics-from]").value = analyticsState.range.from;
  $("[data-analytics-to]").value = analyticsState.range.to;
  $("[data-analytics-source]").textContent = analyticsState.source === "remote" ? "D1 conectado" : "Datos locales";
  $("[data-analytics-source]").classList.toggle("is-remote", analyticsState.source === "remote");
  $("[data-analytics-visits]").textContent = formatNumber(totals.page_view);
  $("[data-analytics-queries]").textContent = formatNumber(totals.schedule_query);
  $("[data-analytics-instagram]").textContent = formatNumber(totals.instagram_click);
  $("[data-analytics-vipuray]").textContent = formatNumber(totals.vipurayInteractions);
  $("[data-analytics-status]").textContent = analyticsState.error
    ? analyticsState.error
    : `Rango activo: ${formatDate(analyticsState.range.from)} al ${formatDate(analyticsState.range.to)}.`;

  renderAnalyticsList("[data-analytics-companies]", analytics.companies, "Sin consultas de empresas en este rango.");
  renderAnalyticsList("[data-analytics-destinations]", analytics.destinations, "Sin destinos consultados en este rango.");
  renderAnalyticsTimeline(analytics.timeline || []);
}

function renderAnalyticsList(selector, rows = [], emptyText) {
  const list = $(selector);
  if (!rows.length) {
    list.innerHTML = `<p class="empty-state">${emptyText}</p>`;
    return;
  }

  const max = Math.max(...rows.map((row) => row.total), 1);
  list.innerHTML = rows
    .slice(0, 6)
    .map((row, index) => `
      <article>
        <div>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(row.name)}</strong>
        </div>
        <em>${formatNumber(row.total)}</em>
        <i style="--bar-width: ${(row.total / max) * 100}%"></i>
      </article>
    `)
    .join("");
}

function renderAnalyticsTimeline(rows = []) {
  const chart = $("[data-analytics-timeline]");
  if (!rows.length) {
    chart.innerHTML = `<p class="empty-state">Aun no hay movimiento diario para este rango.</p>`;
    return;
  }

  const max = Math.max(...rows.map((row) => row.total), 1);
  chart.innerHTML = rows
    .slice(-18)
    .map((row) => `
      <div title="${formatDate(row.day)}: ${formatNumber(row.total)} eventos">
        <span style="height: ${Math.max(8, (row.total / max) * 100)}%"></span>
        <small>${row.day.slice(8, 10)}</small>
      </div>
    `)
    .join("");
}

async function refreshAnalytics() {
  analyticsState.loading = true;
  analyticsState.error = "Cargando datos...";
  renderAnalytics();

  const from = $("[data-analytics-from]").value;
  const to = $("[data-analytics-to]").value;
  analyticsState.range = normalizeDateRange(from, to);

  try {
    const response = await fetch(`/api/analytics?from=${analyticsState.range.from}&to=${analyticsState.range.to}`, {
      headers: { accept: "application/json" }
    });
    const payload = await response.json();

    if (payload.configured && payload.ok) {
      analyticsState.data = payload;
      analyticsState.source = "remote";
      analyticsState.error = "Datos cargados desde Cloudflare D1.";
    } else {
      analyticsState.data = summarizeLocalAnalytics(analyticsState.range);
      analyticsState.source = "local";
      analyticsState.error = "D1 aun no esta conectado. Mostrando datos locales de este navegador.";
    }
  } catch (_error) {
    analyticsState.data = summarizeLocalAnalytics(analyticsState.range);
    analyticsState.source = "local";
    analyticsState.error = "No se pudo leer la API remota. Mostrando datos locales de este navegador.";
  }

  analyticsState.loading = false;
  renderAnalytics();
}

function summarizeLocalAnalytics(range) {
  let events = [];
  try {
    events = JSON.parse(localStorage.getItem(ANALYTICS_STORAGE_KEY) || "[]");
  } catch (_error) {
    events = [];
  }

  const fromTime = new Date(`${range.from}T00:00:00`).getTime();
  const toTime = new Date(`${range.to}T23:59:59`).getTime();
  const filtered = events.filter((event) => {
    const time = new Date(event.createdAt || event.created_at || "").getTime();
    return Number.isFinite(time) && time >= fromTime && time <= toTime;
  });

  const totals = emptyAnalyticsData().totals;
  const companyCounts = new Map();
  const destinationCounts = new Map();
  const dayCounts = new Map();
  const sessions = new Set();

  filtered.forEach((event) => {
    totals[event.type] = (totals[event.type] || 0) + 1;
    if (event.sessionId) sessions.add(event.sessionId);
    if (event.company) companyCounts.set(event.company, (companyCounts.get(event.company) || 0) + 1);
    if (event.destination) {
      event.destination
        .split(",")
        .map((destination) => destination.trim())
        .filter(Boolean)
        .forEach((destination) => destinationCounts.set(destination, (destinationCounts.get(destination) || 0) + 1));
    }
    const day = (event.createdAt || "").slice(0, 10);
    if (day) dayCounts.set(day, (dayCounts.get(day) || 0) + 1);
    if (isVipurayEvent(event)) totals.vipurayInteractions += 1;
  });

  totals.uniqueVisitors = sessions.size;

  const companies = mapToRows(companyCounts);
  const destinations = mapToRows(destinationCounts);

  return {
    ok: true,
    configured: false,
    range,
    totals,
    topCompany: companies[0]?.name || "",
    topRoute: destinations[0]?.name || "",
    companies,
    destinations,
    timeline: mapToRows(dayCounts).map((row) => ({ day: row.name, total: row.total }))
  };
}

function applyAnalyticsToReport() {
  const analytics = analyticsState.data || emptyAnalyticsData();
  const totals = analytics.totals || emptyAnalyticsData().totals;
  const report = getActiveReport();

  report.month = analyticsState.range.from.slice(0, 7);
  report.websiteVisits = totals.page_view || 0;
  report.scheduleQueries = totals.schedule_query || 0;
  report.instagramMessages = totals.instagram_click || 0;
  report.emailRequests = (totals.email_click || 0) + (totals.contact_form || 0);
  report.topCompany = analytics.topCompany || analytics.companies?.[0]?.name || "Por definir";
  report.topRoute = analytics.topRoute || analytics.destinations?.[0]?.name || "Por definir";
  report.vipurayQueries = analytics.companies?.find((row) => row.name === "Buses Vipu Ray")?.total || 0;
  report.vipurayMessages = totals.vipurayInteractions || 0;
  report.vipurayTopRoute = getVipurayTopRoute(analytics.destinations) || "Por definir";
  report.highlights = report.highlights || "Se registraron interacciones digitales reales para revisar comportamiento de pasajeros.";
  report.opportunities = report.opportunities || "Analizar empresas y destinos con mayor consulta para reforzar informacion publica.";
  report.nextActions = report.nextActions || "Actualizar horarios visibles, responder dudas frecuentes y reforzar contenido en Instagram.";
  report.vipurayAnalysis = report.vipurayAnalysis || "Buses Vipu-Ray cuenta con lectura separada para medir consultas e interes sobre Pucón y Loncoche.";
  report.vipurayRecommendations = report.vipurayRecommendations || "Publicar contenido mensual claro sobre salidas, boleteria y recomendaciones de viaje para pasajeros de Vipu-Ray.";

  const index = data.reports.findIndex((item) => item.id === report.id);
  if (index >= 0) data.reports[index] = report;
  activeReportId = report.id;
  saveData("Datos aplicados al informe.");
}

function getDefaultDateRange() {
  const now = new Date();
  const from = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  const to = now.toISOString().slice(0, 10);
  return { from, to };
}

function normalizeDateRange(from, to) {
  const fallback = getDefaultDateRange();
  const normalizedFrom = /^\d{4}-\d{2}-\d{2}$/.test(from || "") ? from : fallback.from;
  const normalizedTo = /^\d{4}-\d{2}-\d{2}$/.test(to || "") ? to : fallback.to;
  return normalizedFrom <= normalizedTo
    ? { from: normalizedFrom, to: normalizedTo }
    : { from: normalizedTo, to: normalizedFrom };
}

function emptyAnalyticsData() {
  return {
    ok: false,
    configured: false,
    range: getDefaultDateRange(),
    totals: {
      page_view: 0,
      schedule_query: 0,
      company_card_click: 0,
      contact_form: 0,
      instagram_click: 0,
      email_click: 0,
      info_cta_click: 0,
      uniqueVisitors: 0,
      vipurayInteractions: 0
    },
    topCompany: "",
    topRoute: "",
    companies: [],
    destinations: [],
    timeline: []
  };
}

function mapToRows(map) {
  return Array.from(map.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

function isVipurayEvent(event) {
  const combined = `${event.company || ""} ${event.destination || ""}`.toLowerCase();
  return combined.includes("vipu") || combined.includes("pucón") || combined.includes("pucon") || combined.includes("loncoche");
}

function getVipurayTopRoute(destinations = []) {
  return destinations.find((row) => /puc[oó]n|loncoche/i.test(row.name))?.name || "";
}

function formatDate(value) {
  if (!value) return "sin fecha";
  return new Intl.DateTimeFormat("es-CL", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function renderCompanies() {
  const list = $("[data-company-list]");
  list.innerHTML = data.companies.map((company, index) => `
    <button class="company-row${index === activeCompanyIndex ? " is-active" : ""}" type="button" data-company-index="${index}">
      <span class="row-pill">Boletería ${escapeHtml(company.ticketOffice)}</span>
      <strong>${escapeHtml(company.name)}</strong>
      <span>${escapeHtml(company.destinations)}</span>
    </button>
  `).join("");
}

function renderCompanyForm() {
  const form = $("[data-company-form]");
  const company = data.companies[activeCompanyIndex];
  if (!company) return;
  form.elements.index.value = activeCompanyIndex;
  form.elements.name.value = company.name || "";
  form.elements.logo.value = company.logo || "";
  form.elements.logoImage.value = company.logoImage || "";
  form.elements.destinations.value = company.destinations || "";
  form.elements.ticketOffice.value = company.ticketOffice || "";
  $("[data-company-form-title]").textContent = company.name || "Nueva empresa";
  renderCompanyUnifiedEditor(company);
}

function renderCompanyUnifiedEditor(company) {
  const hero = $("[data-company-editor-hero]");
  const list = $("[data-company-service-list]");
  const note = $("[data-company-services-note]");
  const services = getCompanyServices(company.name);
  const isRural = isRuralGroupName(company.name);

  hero.innerHTML = `
    <div class="company-editor-logo">
      ${company.logoImage ? `<img src="${escapeHtml(company.logoImage)}" alt="${escapeHtml(company.name)}">` : `<span>${escapeHtml(company.logo || company.name)}</span>`}
    </div>
    <div>
      <span>${isRural ? "Grupo protegido" : "Empresa seleccionada"}</span>
      <strong>${escapeHtml(company.name)}</strong>
      <p>${services.length} destino${services.length === 1 ? "" : "s"} configurado${services.length === 1 ? "" : "s"} para la web.</p>
    </div>
  `;

  note.textContent = isRural
    ? "Servicios Rurales funciona como una sola tarjeta. Edita aqui solo destino y horario/frecuencia."
    : "Cada destino que edites aqui actualiza la informacion que aparece al consultar esta empresa en la web.";

  if (!services.length) {
    list.innerHTML = `<p class="empty-state">Esta empresa aun no tiene destinos. Agrega uno para que aparezca en la consulta publica.</p>`;
    return;
  }

  list.innerHTML = services.map((service, index) => renderCompanyServiceEditor(service, index, isRural)).join("");
}

function renderCompanyServiceEditor(service, index, isRural) {
  return `
    <article class="company-service-editor" data-company-service-id="${escapeHtml(service.id)}">
      <div class="company-service-index">${String(index + 1).padStart(2, "0")}</div>
      <div class="company-service-fields">
        <label>
          <span>Destino visible</span>
          <input data-route-field="destination" value="${escapeHtml(service.destination)}" required>
        </label>
        <label>
          <span>Horario o frecuencia</span>
          <textarea data-route-field="time" rows="2" required>${escapeHtml(service.time)}</textarea>
        </label>
        ${isRural ? "" : `
          <label>
            <span>Servicio visible</span>
            <input data-route-field="service" value="${escapeHtml(service.service || "")}" placeholder="Ej: Ventas de pasajes">
          </label>
        `}
      </div>
      <div class="company-service-actions">
        <button class="small-button" type="button" data-save-company-service>Guardar ruta</button>
        <button class="danger-button" type="button" data-delete-company-service>Eliminar</button>
      </div>
    </article>
  `;
}

function getCompanyServices(companyName) {
  const key = normalizedKey(canonicalCompanyName(companyName));
  return data.services.filter((service) => normalizedKey(service.company) === key);
}

function getCompanyByName(companyName) {
  const key = normalizedKey(canonicalCompanyName(companyName));
  return data.companies.find((company) => normalizedKey(company.name) === key);
}

function formatTicketOfficeLabel(companyName, ticketOffice) {
  if (isRuralGroupName(companyName)) return "Consultar en terminal";
  const clean = String(ticketOffice || "").trim();
  if (!clean || normalizedKey(clean) === "consultar") return "Consultar en terminal";
  return /^boleter/i.test(clean) ? clean : `Boletería ${clean}`;
}

function getDefaultServiceForCompany(companyName) {
  if (isRuralGroupName(companyName)) return "Zona rural";
  return getCompanyServices(companyName)[0]?.service || "Ventas de pasajes";
}

function syncCompanyDestinationsFromServices(companyName) {
  const company = getCompanyByName(companyName);
  if (!company) return;
  const destinations = Array.from(new Set(getCompanyServices(company.name).map((service) => service.destination.trim()).filter(Boolean)));
  company.destinations = destinations.length ? destinations.join(", ") : "Sin destinos configurados";
}

function syncCompanyServicesMeta(companyName) {
  const company = getCompanyByName(companyName);
  if (!company) return;
  data.services.forEach((service) => {
    if (normalizedKey(service.company) !== normalizedKey(company.name)) return;
    service.company = company.name;
    service.availability = formatTicketOfficeLabel(company.name, company.ticketOffice);
    if (isRuralGroupName(company.name)) service.service = "Zona rural";
    if (!service.service) service.service = getDefaultServiceForCompany(company.name);
  });
}

function renderServiceOptions() {
  const filter = $("[data-service-filter]");
  const companySelect = $("[data-service-form]").elements.company;
  const options = data.companies.map((company) => `<option value="${company.name}">${company.name}</option>`).join("");
  filter.innerHTML = `<option value="">Todas</option>${options}`;
  filter.value = activeServiceFilter;
  companySelect.innerHTML = options;
}

function renderServices() {
  const filterValue = activeServiceFilter;
  const services = filterValue ? data.services.filter((service) => service.company === filterValue) : data.services;
  const list = $("[data-service-list]");
  const summary = $("[data-service-summary]");

  if (summary) {
    const ruralCount = services.filter((service) => service.company === RURAL_GROUP_NAME).length;
    summary.textContent = filterValue
      ? `${services.length} servicios visibles para ${filterValue}.`
      : `${services.length} servicios cargados. ${ruralCount} corresponden a Servicios Rurales.`;
  }

  list.innerHTML = services.map((service) => `
    <button class="service-row${service.id === activeServiceId ? " is-active" : ""}" type="button" data-service-id="${service.id}">
      <span class="row-pill">${escapeHtml(service.company)}</span>
      <strong>${escapeHtml(service.destination)}</strong>
      <span>${escapeHtml(service.time)}</span>
    </button>
  `).join("");
}

function renderServiceForm() {
  const form = $("[data-service-form]");
  const service = data.services.find((item) => item.id === activeServiceId);

  form.elements.editingId.value = service?.id || "";
  form.elements.company.value = service?.company || activeServiceFilter || data.companies[0]?.name || "";
  form.elements.destination.value = service?.destination || "";
  form.elements.time.value = service?.time || "";
  form.elements.service.value = service?.service || "";
  form.elements.availability.value = service?.availability || "";
  updateServiceFormMode();
  $("[data-service-form-title]").textContent = service ? "Editar horario" : "Agregar horario";
}

function updateServiceFormMode() {
  const form = $("[data-service-form]");
  const note = $("[data-rural-service-note]", form);
  const isRural = isRuralGroupName(form.elements.company.value);
  if (note) note.hidden = !isRural;
  $$("[data-service-meta-field]", form).forEach((field) => {
    field.hidden = isRural;
    $$("input, select, textarea", field).forEach((input) => {
      input.disabled = isRural;
    });
  });
}

function renderSlides() {
  const list = $("[data-slide-list]");
  list.innerHTML = data.infoSlides.map((slide, index) => `
    <button class="slide-row${index === activeSlideIndex ? " is-active" : ""}" type="button" data-slide-index="${index}">
      <span class="row-pill">${escapeHtml(slide.label)}</span>
      <strong>${escapeHtml(`${slide.title} ${slide.highlight}`)}</strong>
      <span>${escapeHtml(slide.text)}</span>
    </button>
  `).join("");
}

function renderSlideForm() {
  const form = $("[data-slide-form]");
  const slide = data.infoSlides[activeSlideIndex];
  if (!slide) return;
  form.elements.index.value = activeSlideIndex;
  form.elements.label.value = slide.label || "";
  form.elements.title.value = slide.title || "";
  form.elements.highlight.value = slide.highlight || "";
  form.elements.text.value = slide.text || "";
  form.elements.cta.value = slide.cta || "";
  form.elements.image.value = slide.image || "";
  $("[data-slide-form-title]").textContent = slide.label || "Nuevo aviso";
}

function getActiveReport() {
  if (!Array.isArray(data.reports)) data.reports = [];
  if (!activeReportId && data.reports[0]) activeReportId = data.reports[0].id;
  return data.reports.find((report) => report.id === activeReportId) || data.reports[0] || createBlankReport();
}

function createBlankReport() {
  const now = new Date();
  const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return {
    id: `report-${Date.now()}`,
    month,
    websiteVisits: 0,
    scheduleQueries: 0,
    instagramMessages: 0,
    emailRequests: 0,
    instagramReach: 0,
    instagramFollowers: 0,
    topCompany: "",
    topRoute: "",
    highlights: "",
    opportunities: "",
    nextActions: "",
    vipurayQueries: 0,
    vipurayMessages: 0,
    vipurayTopRoute: "",
    vipurayTopContent: "",
    vipurayAnalysis: "",
    vipurayRecommendations: ""
  };
}

function renderReportOptions() {
  const select = $("[data-report-select]");
  if (!data.reports.length) {
    data.reports.push(createBlankReport());
    activeReportId = data.reports[0].id;
  }

  select.innerHTML = data.reports
    .map((report) => `<option value="${report.id}">${formatMonth(report.month)}</option>`)
    .join("");
  select.value = activeReportId;
}

function renderReportForm() {
  const form = $("[data-report-form]");
  const report = getActiveReport();
  form.elements.id.value = report.id;
  form.elements.month.value = report.month || "";
  form.elements.websiteVisits.value = report.websiteVisits || 0;
  form.elements.scheduleQueries.value = report.scheduleQueries || 0;
  form.elements.instagramMessages.value = report.instagramMessages || 0;
  form.elements.emailRequests.value = report.emailRequests || 0;
  form.elements.instagramReach.value = report.instagramReach || 0;
  form.elements.instagramFollowers.value = report.instagramFollowers || 0;
  form.elements.topCompany.value = report.topCompany || "";
  form.elements.topRoute.value = report.topRoute || "";
  form.elements.highlights.value = report.highlights || "";
  form.elements.opportunities.value = report.opportunities || "";
  form.elements.nextActions.value = report.nextActions || "";
  form.elements.vipurayQueries.value = report.vipurayQueries || 0;
  form.elements.vipurayMessages.value = report.vipurayMessages || 0;
  form.elements.vipurayTopRoute.value = report.vipurayTopRoute || "";
  form.elements.vipurayTopContent.value = report.vipurayTopContent || "";
  form.elements.vipurayAnalysis.value = report.vipurayAnalysis || "";
  form.elements.vipurayRecommendations.value = report.vipurayRecommendations || "";
}

function renderReportPreview() {
  const report = getActiveReport();
  $("[data-report-title]").textContent = `Informe ${formatMonth(report.month)}`;
  const totalContacts = numberValue(report.instagramMessages) + numberValue(report.emailRequests);
  const totalInteractions = numberValue(report.scheduleQueries) + totalContacts;
  const engagement = numberValue(report.websiteVisits)
    ? Math.round((numberValue(report.scheduleQueries) / numberValue(report.websiteVisits)) * 100)
    : 0;
  const vipurayShare = numberValue(report.scheduleQueries)
    ? Math.round((numberValue(report.vipurayQueries) / numberValue(report.scheduleQueries)) * 100)
    : 0;

  $("[data-report-preview]").innerHTML = `
    <div class="report-cover">
      <div>
        <span>Informe ejecutivo</span>
        <strong>Terminal Vipu-Ray</strong>
        <p>${formatMonth(report.month)} · Gestion web, consultas digitales, redes sociales y foco Buses Vipu-Ray.</p>
      </div>
      <dl>
        <div>
          <dt>Periodo</dt>
          <dd>${formatMonth(report.month)}</dd>
        </div>
        <div>
          <dt>Interacciones</dt>
          <dd>${formatNumber(totalInteractions)}</dd>
        </div>
      </dl>
    </div>

    ${reportSectionTitle("01", "Panorama mensual", "Indicadores principales de presencia digital y consultas recibidas.")}
    <div class="report-kpis report-kpis-featured">
      ${reportKpi("Visitas web", report.websiteVisits)}
      ${reportKpi("Consultas horarios", report.scheduleQueries)}
      ${reportKpi("Contactos", totalContacts)}
      ${reportKpi("Alcance Instagram", report.instagramReach)}
      ${reportKpi("Seguidores", report.instagramFollowers)}
      ${reportKpi("Conversion consulta", `${engagement}%`)}
    </div>

    <div class="report-snapshot">
      <article>
        <span>Mayor atención</span>
        <strong>${escapeHtml(report.topCompany || "Por definir")}</strong>
        <p>Empresa que concentra mayor interés informado durante el periodo.</p>
      </article>
      <article>
        <span>Destino clave</span>
        <strong>${escapeHtml(report.topRoute || "Por definir")}</strong>
        <p>Ruta con mayor cantidad de consultas o necesidad de refuerzo comunicacional.</p>
      </article>
    </div>

    ${reportSectionTitle("02", "Canales y comportamiento", "Distribucion de consultas y senales de interes de pasajeros.")}
    <div class="report-analysis-grid">
      <div class="report-chart-card">
        <h3>Canales de atencion digital</h3>
        ${barChart([
          ["Consultas web", numberValue(report.scheduleQueries)],
          ["Instagram", numberValue(report.instagramMessages)],
          ["Correo", numberValue(report.emailRequests)]
        ])}
      </div>
      <div class="ratio-grid">
        ${ratioCard("Conversion a consulta", engagement, "Consultas sobre visitas web")}
        ${ratioCard("Peso Vipu-Ray", vipurayShare, "Participacion de la marca")}
      </div>
    </div>

    ${reportSectionTitle("03", "Lectura ejecutiva", "Sintesis para decidir que mantener, corregir y reforzar.")}
    ${reportBlock("Logros del mes", report.highlights)}
    ${reportBlock("Oportunidades detectadas", report.opportunities)}
    ${reportBlock("Acciones recomendadas", report.nextActions)}

    ${reportSectionTitle("04", "Foco Buses Vipu-Ray", "Analisis dedicado al operador principal y a su impacto digital.")}
    <section class="vipuray-report-card">
      <div class="vipuray-report-head">
        <span>Marca prioritaria</span>
        <strong>Buses Vipu-Ray</strong>
        <p>Lectura dedicada a la marca principal: consultas, percepcion digital y oportunidades concretas para el operador.</p>
      </div>
      <div class="report-kpis vipuray-kpis">
        ${reportKpi("Consultas Vipu-Ray", report.vipurayQueries)}
        ${reportKpi("Mensajes Vipu-Ray", report.vipurayMessages)}
        ${reportKpi("Peso en consultas", `${vipurayShare}%`)}
      </div>
      <div class="report-insights">
        <article>
          <span>Destino Vipu-Ray mas consultado</span>
          <strong>${escapeHtml(report.vipurayTopRoute || "Por definir")}</strong>
        </article>
        <article>
          <span>Contenido con mejor respuesta</span>
          <strong>${escapeHtml(report.vipurayTopContent || "Por definir")}</strong>
        </article>
      </div>
      ${reportBlock("Analisis especifico Vipu-Ray", report.vipurayAnalysis)}
      ${reportBlock("Recomendaciones para Vipu-Ray", report.vipurayRecommendations)}
    </section>
  `;
}

function persistCompanyFromForm(form) {
  const index = Number(form.elements.index.value);
  const oldName = data.companies[index]?.name || "";
  const wasRural = isRuralGroupName(oldName) || isLegacyRuralOperator(oldName);
  let company = Object.fromEntries(new FormData(form).entries());
  company.name = canonicalCompanyName(company.name);

  if (wasRural || isRuralGroupName(company.name)) {
    company = {
      ...RURAL_COMPANY,
      ...company,
      name: RURAL_GROUP_NAME,
      logoImage: company.logoImage || RURAL_COMPANY.logoImage
    };
  }

  const duplicateIndex = findCompanyIndexByName(company.name, index);
  if (duplicateIndex >= 0) {
    data.companies[duplicateIndex] = mergeCompany(data.companies[duplicateIndex], company);
    data.companies.splice(index, 1);
    activeCompanyIndex = duplicateIndex > index ? duplicateIndex - 1 : duplicateIndex;
  } else {
    data.companies[index] = company;
    activeCompanyIndex = index;
  }

  if (oldName && normalizedKey(oldName) !== normalizedKey(company.name)) {
    data.services.forEach((service) => {
      if (normalizedKey(service.company) === normalizedKey(oldName)) service.company = company.name;
    });
  }

  const savedCompany = data.companies[activeCompanyIndex] || company;
  syncCompanyDestinationsFromServices(savedCompany.name);
  syncCompanyServicesMeta(savedCompany.name);
  activeServiceFilter = savedCompany.name;
  return savedCompany;
}

function readRouteEditor(row, company) {
  const destination = $("[data-route-field='destination']", row)?.value.trim() || "";
  const time = $("[data-route-field='time']", row)?.value.trim() || "";
  const service = $("[data-route-field='service']", row)?.value.trim() || getDefaultServiceForCompany(company.name);
  if (!destination || !time) return null;

  return {
    id: row.dataset.companyServiceId || "",
    destination,
    time,
    company: company.name,
    service: isRuralGroupName(company.name) ? "Zona rural" : service,
    price: null,
    availability: formatTicketOfficeLabel(company.name, company.ticketOffice)
  };
}

function bindEvents() {
  $("[data-company-list]").addEventListener("click", (event) => {
    const button = event.target.closest("[data-company-index]");
    if (!button) return;
    activeCompanyIndex = Number(button.dataset.companyIndex);
    activeServiceFilter = data.companies[activeCompanyIndex]?.name || "";
    activeServiceId = "";
    renderAll();
  });

  $("[data-company-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    persistCompanyFromForm(event.currentTarget);
    saveData("Empresa guardada.");
  });

  $("[data-company-form]").addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-company-service]");
    const saveButton = event.target.closest("[data-save-company-service]");
    const deleteButton = event.target.closest("[data-delete-company-service]");
    if (!addButton && !saveButton && !deleteButton) return;

    const form = event.currentTarget;
    const company = persistCompanyFromForm(form);

    if (addButton) {
      const service = {
        id: createServiceId({ company: company.name, destination: "Nuevo destino" }),
        destination: "Nuevo destino",
        time: isRuralGroupName(company.name) ? "Indicar horario o frecuencia" : "Consultar en boletería",
        company: company.name,
        service: getDefaultServiceForCompany(company.name),
        price: null,
        availability: formatTicketOfficeLabel(company.name, company.ticketOffice)
      };
      data.services.push(service);
      activeServiceId = service.id;
      syncCompanyDestinationsFromServices(company.name);
      saveData("Destino agregado a la empresa.");
      return;
    }

    const row = event.target.closest("[data-company-service-id]");
    if (!row) return;

    if (deleteButton) {
      const service = data.services.find((item) => item.id === row.dataset.companyServiceId);
      if (!service || !confirm(`¿Eliminar el destino ${service.destination}?`)) return;
      data.services = data.services.filter((item) => item.id !== service.id);
      activeServiceId = "";
      syncCompanyDestinationsFromServices(company.name);
      saveData("Destino eliminado.");
      return;
    }

    const route = readRouteEditor(row, company);
    if (!route) {
      showToast("Completa destino y horario/frecuencia.");
      return;
    }
    route.id = route.id || createServiceId(route);
    const existingIndex = data.services.findIndex((item) => item.id === route.id);
    if (existingIndex >= 0) {
      data.services[existingIndex] = route;
    } else {
      data.services.push(route);
    }
    activeServiceId = route.id;
    syncCompanyDestinationsFromServices(company.name);
    saveData("Destino y horario guardados.");
  });

  $("[data-add-company]").addEventListener("click", () => {
    data.companies.push({
      name: "Nueva empresa",
      logo: "Nueva",
      logoImage: "",
      destinations: "Destino",
      ticketOffice: "Consultar"
    });
    activeCompanyIndex = data.companies.length - 1;
    saveData("Empresa agregada.");
  });

  $("[data-delete-company]").addEventListener("click", () => {
    const company = data.companies[activeCompanyIndex];
    if (company && isRuralGroupName(company.name)) {
      showToast("Servicios Rurales es un grupo protegido. Puedes editar sus destinos y horarios.");
      return;
    }
    if (!company || !confirm(`¿Eliminar ${company.name}? Tambien se eliminaran sus servicios.`)) return;
    data.services = data.services.filter((service) => service.company !== company.name);
    data.companies.splice(activeCompanyIndex, 1);
    activeCompanyIndex = Math.max(0, activeCompanyIndex - 1);
    activeServiceId = "";
    saveData("Empresa eliminada.");
  });

  $("[data-service-filter]").addEventListener("change", () => {
    activeServiceFilter = $("[data-service-filter]").value;
    activeServiceId = "";
    renderAll();
  });

  $("[data-show-rural-services]").addEventListener("click", () => {
    activeServiceFilter = RURAL_GROUP_NAME;
    activeServiceId = "";
    renderAll();
  });

  $("[data-service-list]").addEventListener("click", (event) => {
    const button = event.target.closest("[data-service-id]");
    if (!button) return;
    activeServiceId = button.dataset.serviceId;
    renderAll();
  });

  $("[data-service-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const service = Object.fromEntries(new FormData(form).entries());
    const editingId = service.editingId;
    delete service.editingId;
    service.price = null;
    service.company = canonicalCompanyName(service.company);
    if (service.company === RURAL_GROUP_NAME) {
      service.service = "Zona rural";
      service.availability = "Consultar en terminal";
    }
    delete service.operator;
    service.id = editingId || createServiceId(service);

    const existingIndex = data.services.findIndex((item) => item.id === editingId);
    if (existingIndex >= 0) {
      data.services[existingIndex] = service;
    } else {
      data.services.push(service);
    }
    activeServiceId = service.id;
    syncCompanyDestinationsFromServices(service.company);
    syncCompanyServicesMeta(service.company);
    saveData("Servicio guardado.");
  });

  $("[data-new-service]").addEventListener("click", () => {
    activeServiceId = "";
    renderServiceForm();
  });

  $("[data-service-form]").elements.company.addEventListener("change", updateServiceFormMode);

  $("[data-delete-service]").addEventListener("click", () => {
    if (!activeServiceId) {
      showToast("Selecciona un servicio para eliminar.");
      return;
    }
    const service = data.services.find((item) => item.id === activeServiceId);
    if (!service || !confirm(`¿Eliminar el servicio a ${service.destination}?`)) return;
    data.services = data.services.filter((item) => item.id !== activeServiceId);
    activeServiceId = "";
    syncCompanyDestinationsFromServices(service.company);
    saveData("Servicio eliminado.");
  });

  $("[data-slide-list]").addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide-index]");
    if (!button) return;
    activeSlideIndex = Number(button.dataset.slideIndex);
    renderAll();
  });

  $("[data-slide-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const index = Number(form.elements.index.value);
    const slide = Object.fromEntries(new FormData(form).entries());
    slide.features = data.infoSlides[index]?.features || [];
    data.infoSlides[index] = slide;
    saveData("Aviso guardado.");
  });

  $("[data-add-slide]").addEventListener("click", () => {
    data.infoSlides.push({
      label: "Aviso",
      title: "Nuevo",
      highlight: "mensaje",
      text: "Describe aqui la informacion importante para pasajeros.",
      cta: "Ver mas",
      image: "assets/frontis-terminal.jpg",
      features: []
    });
    activeSlideIndex = data.infoSlides.length - 1;
    saveData("Aviso agregado.");
  });

  $("[data-delete-slide]").addEventListener("click", () => {
    if (data.infoSlides.length <= 1) {
      showToast("Debe quedar al menos un aviso.");
      return;
    }
    data.infoSlides.splice(activeSlideIndex, 1);
    activeSlideIndex = Math.max(0, activeSlideIndex - 1);
    saveData("Aviso eliminado.");
  });

  $("[data-report-select]").addEventListener("change", () => {
    activeReportId = $("[data-report-select]").value;
    renderAll();
  });

  $("[data-refresh-analytics]").addEventListener("click", refreshAnalytics);
  $("[data-apply-analytics]").addEventListener("click", applyAnalyticsToReport);

  $("[data-report-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const report = Object.fromEntries(new FormData(form).entries());
    report.id = report.id || `report-${Date.now()}`;
    [
      "websiteVisits",
      "scheduleQueries",
      "instagramMessages",
      "emailRequests",
      "instagramReach",
      "instagramFollowers",
      "vipurayQueries",
      "vipurayMessages"
    ].forEach((field) => {
      report[field] = numberValue(report[field]);
    });

    const index = data.reports.findIndex((item) => item.id === report.id);
    if (index >= 0) {
      data.reports[index] = report;
    } else {
      data.reports.push(report);
    }
    activeReportId = report.id;
    saveData("Informe guardado.");
  });

  $("[data-new-report]").addEventListener("click", () => {
    const report = createBlankReport();
    data.reports.push(report);
    activeReportId = report.id;
    saveData("Nuevo informe creado.");
  });

  $("[data-print-report]").addEventListener("click", printReport);
  $("[data-save-all]").addEventListener("click", () => saveData("Todo guardado."));
  $("[data-export]").addEventListener("click", exportData);
  $("[data-reset]").addEventListener("click", resetData);
}

function bindNavigationState() {
  const links = $$(".dashboard-sidebar nav a");
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateActiveLink = () => {
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top < 160) current = section;
    });
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}

function createServiceId(service) {
  const base = `${service.company}-${service.destination}-${Date.now()}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toUpperCase();
  return base.slice(0, 42);
}

function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "vipuray-contenido.json";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("JSON exportado.");
}

function resetData() {
  if (!confirm("¿Restaurar los datos base? Se perderan los cambios locales.")) return;
  localStorage.removeItem(STORAGE_KEY);
  data = normalizeDataSet(clone(defaultData));
  activeCompanyIndex = 0;
  activeSlideIndex = 0;
  activeServiceId = "";
  activeServiceFilter = "";
  renderAll();
  showToast("Datos restaurados.");
}

function numberValue(value) {
  return Number(value) || 0;
}

function formatNumber(value) {
  if (typeof value === "string") return value;
  return new Intl.NumberFormat("es-CL").format(numberValue(value));
}

function formatMonth(value) {
  if (!value) return "Mes sin definir";
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat("es-CL", { month: "long", year: "numeric" }).format(date);
}

function reportKpi(label, value) {
  return `
    <article>
      <span>${label}</span>
      <strong>${formatNumber(value)}</strong>
    </article>
  `;
}

function reportSectionTitle(number, title, text) {
  return `
    <div class="report-section-title">
      <span>${number}</span>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    </div>
  `;
}

function ratioCard(label, value, detail) {
  const percent = Math.max(0, Math.min(100, numberValue(value)));
  return `
    <article class="ratio-card">
      <div class="ratio-ring" style="--ratio: ${percent}%">
        <strong>${percent}%</strong>
      </div>
      <div>
        <span>${label}</span>
        <p>${detail}</p>
      </div>
    </article>
  `;
}

function barChart(items) {
  const max = Math.max(...items.map((item) => item[1]), 1);
  return `
    <div class="bar-chart">
      ${items.map(([label, value]) => `
        <div class="bar-row">
          <span>${label}</span>
          <div><i style="width: ${Math.max(4, (value / max) * 100)}%"></i></div>
          <strong>${formatNumber(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function reportBlock(title, text) {
  return `
    <article class="report-text-block">
      <h3>${title}</h3>
      <p>${escapeHtml(text || "Sin informacion registrada.")}</p>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function printReport() {
  const report = getActiveReport();
  const preview = $("[data-report-preview]").innerHTML;
  const printWindow = window.open("", "_blank", "width=980,height=760");
  if (!printWindow) {
    showToast("Permite ventanas emergentes para imprimir.");
    return;
  }

  printWindow.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Informe Vipu-Ray ${formatMonth(report.month)}</title>
        <style>
          body { color: #071b3b; font-family: Inter, Arial, sans-serif; margin: 0; padding: 36px; }
          .report-cover { background: linear-gradient(135deg, #00294f, #0077d9); border-radius: 10px; color: white; display:grid; gap:22px; grid-template-columns: 1fr 220px; padding: 32px; }
          .report-cover span { display:block; font-size: 13px; font-weight: 900; letter-spacing: .04em; text-transform: uppercase; }
          .report-cover strong { display:block; font-size: 42px; margin-top: 8px; }
          .report-cover p { color: rgba(255,255,255,.82); font-size: 18px; }
          .report-cover dl { display:grid; gap:12px; margin:0; }
          .report-cover dl div { border:1px solid rgba(255,255,255,.24); border-radius:10px; padding:14px; }
          .report-cover dt { color:rgba(255,255,255,.64); font-size:11px; font-weight:900; text-transform:uppercase; }
          .report-cover dd { color:white; font-size:18px; font-weight:900; margin:4px 0 0; }
          .report-section-title { align-items:start; border-top: 1px solid #dbe6f2; display:grid; gap:12px; grid-template-columns:42px 1fr; margin-top:22px; padding-top:18px; }
          .report-section-title > span { align-items:center; background:#eef7ff; border-radius:999px; color:#0077d9; display:flex; font-size:12px; font-weight:950; height:34px; justify-content:center; width:34px; }
          .report-section-title h3 { font-size:22px; margin:0; }
          .report-section-title p { margin-top:5px; }
          .report-kpis, .report-insights, .report-snapshot { display: grid; gap: 14px; grid-template-columns: repeat(3, 1fr); margin-top: 18px; }
          .report-snapshot { grid-template-columns: repeat(2, 1fr); }
          .report-analysis-grid { display:grid; gap:14px; grid-template-columns: 1.2fr .8fr; margin-top:18px; }
          .ratio-grid { display:grid; gap:14px; }
          .ratio-card { align-items:center; border:1px solid #dbe6f2; border-radius:10px; display:grid; gap:12px; grid-template-columns:72px 1fr; padding:18px; }
          .ratio-ring { align-items:center; background:#eef7ff; border-radius:999px; display:flex; height:68px; justify-content:center; width:68px; }
          .ratio-ring strong { font-size:18px; }
          .report-kpis article, .report-insights article, .report-chart-card, .report-text-block, .report-snapshot article { border: 1px solid #dbe6f2; border-radius: 10px; padding: 18px; }
          span { color: #5d6b81; font-weight: 800; }
          strong { color: #071b3b; display:block; font-size: 24px; margin-top: 6px; }
          .report-chart-card, .report-text-block { margin-top: 18px; }
          .vipuray-report-card { background: linear-gradient(180deg, #f4fbff, #ffffff); border: 2px solid #bde9ff; border-radius: 10px; margin-top: 22px; padding: 22px; }
          .vipuray-report-head span { color: #0077d9; font-size: 12px; font-weight: 950; letter-spacing: .05em; text-transform: uppercase; }
          .vipuray-report-head strong { color: #00294f; font-size: 34px; }
          .vipuray-report-head p { margin-top: 8px; }
          .bar-row { align-items:center; display:grid; gap:12px; grid-template-columns: 140px 1fr 80px; margin: 12px 0; }
          .bar-row div { background:#eef4fb; border-radius:999px; height:12px; overflow:hidden; }
          .bar-row i { background: linear-gradient(90deg, #0077d9, #18a8e0); display:block; height:100%; }
          p { color: #33445d; line-height: 1.6; white-space: pre-line; }
        </style>
      </head>
      <body>${preview}</body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

bindEvents();
bindNavigationState();
renderAll();
refreshAnalytics();
