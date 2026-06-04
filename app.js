const routes = [
  { origin: "Villarrica", destination: "Pucón", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Loncoche", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Lican Ray", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Coñaripe", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Panguipulli", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Temuco", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Santiago", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Pitrufquén", duration: "Consultar en boletería", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "El Coihue", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Milleuco", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Chaura", duration: "Zona rural", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Voipir Seco", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Huincacara", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Relún", duration: "Zona rural", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Challupén", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Malloco Lolenco", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Huilipilun Alto", duration: "Zona rural", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Puente Long Long", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Catrico", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Rayen Lafquen", duration: "Zona rural", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Los Copihues", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Rallenlafquen", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Funalhue", duration: "Zona rural", distance: "", basePrice: null, image: "assets/minibus-side.png" },
  { origin: "Villarrica", destination: "Copihuelpe", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-front.png" },
  { origin: "Villarrica", destination: "Pinohuacho", duration: "Zona rural", distance: "", basePrice: null, image: "assets/terminal-night.png" },
  { origin: "Villarrica", destination: "Los Laureles", duration: "Zona rural", distance: "", basePrice: null, image: "assets/minibus-side.png" }
];

const services = [
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
  { id: "ARM-COI-1300", destination: "El Coihue", time: "Lunes a viernes 13:00 y 19:00 / sábado 13:00", company: "Buses Manuel Armona", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "ARM-MIL-1600", destination: "Milleuco", time: "Lunes a viernes 16:00", company: "Buses Manuel Armona", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "ARM-CHA", destination: "Chaura", time: "Lunes a viernes 12:00 y 17:00", company: "Buses Manuel Armona", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "LEO-VOI", destination: "Voipir Seco", time: "Lunes a viernes 13:00 / lunes a sábado 17:00", company: "Buses Leonardo del Valle", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "LEO-HUI", destination: "Huincacara", time: "Lunes a viernes 13:00 / lunes a sábado 17:00", company: "Buses Leonardo del Valle", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "LEO-REL", destination: "Relún", time: "Lunes, miércoles y viernes 13:00 y 17:00", company: "Buses Leonardo del Valle", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "LEO-CHA", destination: "Challupén", time: "Lunes a viernes 16:00", company: "Buses Leonardo del Valle", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "ESP-MAL", destination: "Malloco Lolenco", time: "Lunes a viernes 16:30", company: "Transportes Esperanza (Surtran)", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "ESP-HUI", destination: "Huilipilun Alto", time: "Consultar en terminal", company: "Transportes Esperanza (Surtran)", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "ESP-LON", destination: "Puente Long Long", time: "18:00", company: "Transportes Esperanza (Surtran)", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "EDET-CAT", destination: "Catrico", time: "Lunes a viernes 16:00", company: "Buses E.De.T. De Eoca Bus Limitada", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "EDET-RAY", destination: "Rayen Lafquen", time: "Lunes a viernes 16:00", company: "Buses E.De.T. De Eoca Bus Limitada", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "CAS-COP", destination: "Los Copihues", time: "Lunes, miércoles y viernes 13:00 / lunes a viernes 18:30", company: "Buses José Castillo", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "CAS-RAL", destination: "Rallenlafquen", time: "Lunes a viernes 16:30", company: "Buses José Castillo", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "CAS-FUN", destination: "Funalhue", time: "Lunes a viernes 18:30 / lunes a sábado 13:00", company: "Buses José Castillo", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "CAS-CPE", destination: "Copihuelpe", time: "Lunes a sábado 13:00 y 17:00", company: "Buses José Castillo", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "CAS-PIN", destination: "Pinohuacho", time: "Lunes a viernes 16:30", company: "Buses José Castillo", service: "Zona rural", price: null, availability: "Consultar en terminal" },
  { id: "CAS-LAU", destination: "Los Laureles", time: "Martes y jueves 16:00", company: "Buses José Castillo", service: "Zona rural", price: null, availability: "Consultar en terminal" }
];

const companies = [
  { name: "Buses Vipu Ray", logo: "Vipu Ray", logoImage: "assets/vipuray-logo-wide.png", destinations: "Pucón, Loncoche", ticketOffice: "N° 2" },
  { name: "Buses Coñaripe", logo: "Coñaripe", logoImage: "assets/company-logos/buses-conaripe.png", destinations: "Lican Ray, Coñaripe, Panguipulli", ticketOffice: "N° 1" },
  { name: "Buses Villarrica", logo: "Villarrica", logoImage: "assets/company-logos/buses-villarrica.png", destinations: "Temuco", ticketOffice: "N° 4" },
  { name: "Buses Transantin", logo: "Transantin", logoImage: "assets/company-logos/buses-transantin.png", destinations: "Santiago", ticketOffice: "N° 5" },
  { name: "Buses Pullman Tur", logo: "Pullman Tur", logoImage: "assets/company-logos/buses-pullman-tur.png", destinations: "Santiago", ticketOffice: "N° 6" },
  { name: "Buses Oro Verde", logo: "Oro Verde", logoImage: "assets/company-logos/buses-oro-verde.png", destinations: "Santiago", ticketOffice: "N° 7" },
  { name: "Buses Lista Azul", logo: "Lista Azul", logoImage: "assets/company-logos/buses-lista-azul.png", destinations: "Santiago", ticketOffice: "N° 8" },
  { name: "Buses Barahona", logo: "Barahona", logoImage: "assets/company-logos/buses-barahona.png", destinations: "Pitrufquén, Temuco", ticketOffice: "Consultar" },
  { name: "Buses Manuel Armona", logo: "Armona", logoImage: "assets/company-logos/buses-armona.png", destinations: "El Coihue, Milleuco, Chaura", ticketOffice: "Zona rural" },
  { name: "Buses Leonardo del Valle", logo: "Del Valle", logoImage: "assets/company-logos/buses-del-valle.png", destinations: "Voipir Seco, Huincacara, Relún, Challupén", ticketOffice: "Zona rural" },
  { name: "Transportes Esperanza (Surtran)", logo: "Surtran", logoImage: "assets/company-logos/buses-surtran.png", destinations: "Malloco Lolenco, Huilipilun Alto, Puente Long Long", ticketOffice: "Zona rural" },
  { name: "Buses E.De.T. De Eoca Bus Limitada", logo: "E.De.T.", logoImage: "assets/company-logos/buses-edet.png", destinations: "Catrico, Rayen Lafquen", ticketOffice: "Zona rural" },
  { name: "Buses José Castillo", logo: "José Castillo", logoImage: "", destinations: "Los Copihues, Rallenlafquen, Funalhue, Copihuelpe, Pinohuacho, Los Laureles", ticketOffice: "Zona rural" }
];

const state = {
  visibleDestinations: 12,
  activeInfoSlide: 0,
  infoSliderTimer: null,
  revealObserver: null
};

const companyCardThemes = [
  { accent: "#1e7cff", tint: "rgba(0, 46, 145, 0.88)", image: "assets/minibus-side.png" },
  { accent: "#ffca0a", tint: "rgba(213, 80, 0, 0.88)", image: "assets/terminal-front.png" },
  { accent: "#7ce04b", tint: "rgba(0, 92, 45, 0.9)", image: "assets/terminal-night.png" },
  { accent: "#a544ff", tint: "rgba(64, 21, 128, 0.9)", image: "assets/terminal-front.png" },
  { accent: "#19d5ca", tint: "rgba(0, 126, 130, 0.88)", image: "assets/minibus-side.png" },
  { accent: "#ffe200", tint: "rgba(92, 99, 0, 0.9)", image: "assets/terminal-night.png" },
  { accent: "#2f95ff", tint: "rgba(0, 70, 165, 0.88)", image: "assets/terminal-front.png" },
  { accent: "#ff4bad", tint: "rgba(158, 0, 68, 0.88)", image: "assets/terminal-night.png" },
  { accent: "#8a35ff", tint: "rgba(73, 25, 155, 0.9)", image: "assets/terminal-front.png" },
  { accent: "#62d957", tint: "rgba(0, 99, 35, 0.88)", image: "assets/terminal-night.png" },
  { accent: "#ff5b13", tint: "rgba(157, 53, 0, 0.88)", image: "assets/terminal-front.png" },
  { accent: "#6e9dff", tint: "rgba(22, 62, 150, 0.88)", image: "assets/terminal-night.png" }
];

const companyCardThemeByName = {
  "Buses Vipu Ray": { accent: "#11b7e8", tint: "rgba(0, 61, 145, 0.9)", plate: "rgba(255, 255, 255, 0.1)" },
  "Buses Coñaripe": { accent: "#ff1717", tint: "rgba(128, 0, 0, 0.9)", plate: "rgba(255, 255, 255, 0.14)" },
  "Buses Villarrica": { accent: "#ff2525", tint: "rgba(142, 0, 0, 0.9)", plate: "rgba(255, 255, 255, 0.16)" },
  "Buses Transantin": { accent: "#0068ff", tint: "rgba(0, 35, 126, 0.9)", plate: "rgba(255, 255, 255, 0.15)" },
  "Buses Pullman Tur": { accent: "#ff3bb4", tint: "rgba(100, 0, 74, 0.9)", plate: "rgba(255, 255, 255, 0.16)" },
  "Buses Oro Verde": { accent: "#7bd64a", tint: "rgba(3, 39, 42, 0.94)", plate: "rgba(255, 255, 255, 0.24)" },
  "Buses Lista Azul": { accent: "#075cff", tint: "rgba(0, 20, 92, 0.92)", plate: "rgba(255, 255, 255, 0.24)" },
  "Buses Barahona": { accent: "#2053d6", tint: "rgba(2, 24, 94, 0.92)", plate: "rgba(255, 255, 255, 0.18)" },
  "Buses Manuel Armona": { accent: "#8a35ff", tint: "rgba(66, 21, 130, 0.9)", plate: "rgba(255, 255, 255, 0.24)" },
  "Buses Leonardo del Valle": { accent: "#ffffff", tint: "rgba(31, 44, 59, 0.9)", plate: "rgba(0, 12, 28, 0.34)" },
  "Transportes Esperanza (Surtran)": { accent: "#9cff31", tint: "rgba(22, 94, 0, 0.91)", plate: "rgba(255, 255, 255, 0.16)" },
  "Buses E.De.T. De Eoca Bus Limitada": { accent: "#6e9dff", tint: "rgba(22, 62, 150, 0.9)", plate: "rgba(255, 255, 255, 0.24)" },
  "Buses José Castillo": { accent: "#2f95ff", tint: "rgba(0, 48, 104, 0.9)", plate: "rgba(255, 255, 255, 0.12)" }
};

const infoSlides = [
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
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const DASHBOARD_STORAGE_KEY = "vipurayDashboardData";
const ANALYTICS_STORAGE_KEY = "vipurayAnalyticsEvents";
const ANALYTICS_SESSION_KEY = "vipurayAnalyticsSession";

const formatMoney = (value) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value);

function init() {
  applyDashboardData();
  populateSearch();
  renderDestinations();
  renderInfoSlider();
  renderInitialResults();
  bindEvents();
  startInfoSlider();
  setActiveNavOnScroll();
  setupPageMotion();
  trackAnalyticsEvent("page_view", {
    source: "site",
    label: document.title
  });
}

function applyDashboardData() {
  try {
    const saved = JSON.parse(localStorage.getItem(DASHBOARD_STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;

    if (Array.isArray(saved.companies) && saved.companies.length) {
      companies.splice(0, companies.length, ...saved.companies);
    }

    if (Array.isArray(saved.services) && saved.services.length) {
      services.splice(0, services.length, ...saved.services);
    }

    if (Array.isArray(saved.infoSlides) && saved.infoSlides.length) {
      infoSlides.splice(0, infoSlides.length, ...saved.infoSlides);
    }
  } catch (error) {
    console.warn("No se pudieron cargar los datos del dashboard.", error);
  }
}

function populateSearch() {
  const form = $("[data-search-form]");
  const company = form.elements.company;

  company.innerHTML = `<option value="" disabled selected>Seleccione empresa</option>${companies
    .map((item) => `<option value="${item.name}">${item.name}</option>`)
    .join("")}`;
}

function renderDestinations() {
  const grid = $("[data-destination-grid]");
  grid.innerHTML = companies
    .slice(0, state.visibleDestinations)
    .map((company, index) => renderCompanyCard(company, index))
    .join("");
  prepareRevealElements($$(".destination-card", grid));
}

function renderCompanyCard(company, index) {
  const theme = companyCardThemeByName[company.name] || companyCardThemes[index % companyCardThemes.length];
  const label = company.logo;
  const displayName = getCompanyDisplayName(company);
  const destinationList = company.destinations.split(",").map((item) => item.trim()).join(", ");

  return `
    <article class="destination-card company-destination-card" style="--card-accent: ${theme.accent}; --card-tint: ${theme.tint}; --logo-plate: ${theme.plate || "rgba(255, 255, 255, 0.14)"}">
      <div class="company-card-pattern" aria-hidden="true"></div>
      <div class="company-card-badge${company.logoImage ? " has-logo" : ""}">
        ${company.logoImage ? `<img src="${company.logoImage}" alt="${company.name}">` : `<span>${label}</span>`}
      </div>
      <div class="company-card-body">
        <h3>${displayName.prefix}<span>${displayName.highlight}</span></h3>
        <p>Destinos principales</p>
        <div class="company-card-divider"></div>
        <div class="company-card-meta">
          <span class="meta-destinations">${locationIcon()}${destinationList}</span>
          <span>${ticketIcon()}Boletería ${company.ticketOffice}</span>
        </div>
      </div>
      <button class="company-card-action" type="button" aria-label="Consultar ${company.name}" data-card-company="${company.name}">
        ${arrowIcon()}
      </button>
    </article>
  `;
}

function getCompanyDisplayName(company) {
  if (company.name === "Transportes Esperanza (Surtran)") return { prefix: "Buses", highlight: "Surtran" };
  if (company.name === "Buses E.De.T. De Eoca Bus Limitada") return { prefix: "Buses", highlight: "E.De.T." };
  if (company.name === "Buses Manuel Armona") return { prefix: "Buses", highlight: "Armona" };
  if (company.name === "Buses Leonardo del Valle") return { prefix: "Buses", highlight: "Del Valle" };
  return { prefix: "Buses", highlight: company.name.replace(/^Buses\s+/i, "") };
}

function renderInitialResults() {
  const results = $("[data-results]");
  results.innerHTML = `
    <article class="result-card route-summary-card">
      <div class="route-title">Selecciona una empresa para consultar</div>
      <p class="result-details">Elige una empresa en el buscador para ver sus destinos, horarios informados, servicios y boletería.</p>
    </article>
  `;
  prepareRevealElements($$(".result-card", results));
}

function renderResults(companyName) {
  const results = $("[data-results]");
  const company = companies.find((item) => item.name === companyName);
  const matchedServices = services.filter((service) => service.company === companyName);

  if (!company || !matchedServices.length) {
    results.innerHTML = `
      <article class="result-card">
        <div class="route-title">No encontramos información para esa empresa</div>
        <p class="result-details">Prueba con otra empresa o consulta por correo o Instagram para revisar alternativas.</p>
      </article>
    `;
    prepareRevealElements($$(".result-card", results));
    return;
  }

  const groupedServices = groupServicesByDestination(matchedServices);
  const serviceTypes = [...new Set(matchedServices.map((service) => service.service))].join(", ");
  const availabilityText = [...new Set(matchedServices.map((service) => service.availability))].join(", ");

  results.innerHTML = `
    <article class="result-card route-summary-card company-result-card">
      <div class="result-top company-result-header">
        <div class="company-result-title">
          ${company.logoImage ? `<img src="${company.logoImage}" alt="${company.name}">` : `<span>${company.logo}</span>`}
          <div>
            <div class="route-title">${company.name}</div>
            <p>Información disponible desde el Terminal de Buses Vipu-Ray.</p>
          </div>
        </div>
        <span class="company-pill">Boletería ${company.ticketOffice}</span>
      </div>
      <div class="company-info-grid">
        <div>
          <small>Destinos principales</small>
          <strong>${company.destinations}</strong>
        </div>
        <div>
          <small>Tipo de servicio</small>
          <strong>${serviceTypes}</strong>
        </div>
        <div>
          <small>Atención / boletería</small>
          <strong>${availabilityText}</strong>
        </div>
      </div>
      <div class="service-list">
        ${groupedServices.map(renderCompanyService).join("")}
      </div>
      <div class="price-row">
        <strong>Valores: consultar en boletería</strong>
        <a class="table-action" href="${companyEmailUrl(company.name)}">Consultar por correo</a>
      </div>
    </article>
  `;
  prepareRevealElements($$(".result-card", results));
}

function groupServicesByDestination(companyServices) {
  const groups = new Map();
  companyServices.forEach((service) => {
    if (!groups.has(service.destination)) {
      groups.set(service.destination, {
        destination: service.destination,
        times: new Set(),
        services: new Set(),
        availability: new Set()
      });
    }

    const group = groups.get(service.destination);
    group.times.add(service.time);
    group.services.add(service.service);
    group.availability.add(service.availability);
  });

  return Array.from(groups.values()).map((group) => ({
    destination: group.destination,
    times: Array.from(group.times).join(" / "),
    services: Array.from(group.services).join(", "),
    availability: Array.from(group.availability).join(", ")
  }));
}

function renderCompanyService(service) {
  return `
    <div class="service-item">
      <div>
        <small>Destino</small>
        <strong>${service.destination}</strong>
      </div>
      <div>
        <small>Horario / frecuencia</small>
        <span>${service.times}</span>
      </div>
      <div>
        <small>Servicio</small>
        <span>${service.services}</span>
      </div>
      <div>
        <small>Boletería</small>
        <span>${service.availability}</span>
      </div>
    </div>
  `;
}

function bindEvents() {
  const navToggle = $(".nav-toggle");
  navToggle.addEventListener("click", () => {
    const links = $("[data-nav-links]");
    const isOpen = links.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("[data-nav-links] a").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#inicio") {
        event.preventDefault();
        scrollToStart();
      }
      closeMobileNav(navToggle);
    });
  });

  $$(".brand, .footer a[href='#inicio']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToStart();
      closeMobileNav(navToggle);
    });
  });

  $("[data-search-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const companyName = form.elements.company.value;
    const selectedCompany = companies.find((company) => company.name === companyName);
    renderResults(companyName);
    trackAnalyticsEvent("schedule_query", {
      source: "search_form",
      company: companyName,
      destination: selectedCompany?.destinations || ""
    });
    scrollToSection("#resultados");
    showToast("Información actualizada.");
  });

  $("[data-search-form]").elements.company.addEventListener("change", renderInitialResults);

  $("[data-clear-results]").addEventListener("click", () => {
    $("[data-search-form]").reset();
    renderInitialResults();
  });

  $("[data-show-all-destinations]").addEventListener("click", (event) => {
    state.visibleDestinations = state.visibleDestinations === 12 ? companies.length : 12;
    event.currentTarget.textContent = state.visibleDestinations === 12 ? "Ver todos" : "Ver principales";
    renderDestinations();
  });

  document.addEventListener("click", (event) => {
    const companyButton = event.target.closest("[data-card-company]");
    if (companyButton) {
      const form = $("[data-search-form]");
      const companyName = companyButton.dataset.cardCompany;
      const selectedCompany = companies.find((company) => company.name === companyName);
      trackAnalyticsEvent("company_card_click", {
        source: "company_card",
        company: companyName,
        destination: selectedCompany?.destinations || ""
      });
      form.elements.company.value = companyButton.dataset.cardCompany;
      form.requestSubmit();
      return;
    }

    const instagramLink = event.target.closest("a[href*='instagram.com']");
    if (instagramLink) {
      trackAnalyticsEvent("instagram_click", {
        source: "external_link",
        label: instagramLink.textContent.trim() || "Instagram"
      });
      return;
    }

    const emailLink = event.target.closest("a[href^='mailto:']");
    if (emailLink) {
      trackAnalyticsEvent("email_click", {
        source: "email_link",
        label: emailLink.textContent.trim() || "Correo"
      });
      return;
    }

    const infoCta = event.target.closest(".info-slide-cta");
    if (infoCta) {
      const slide = infoSlides[state.activeInfoSlide];
      trackAnalyticsEvent("info_cta_click", {
        source: "info_slider",
        label: slide?.label || "Aviso"
      });
    }

    const sliderDot = event.target.closest("[data-slider-dot]");
    if (sliderDot) {
      showInfoSlide(Number(sliderDot.dataset.sliderDot));
      startInfoSlider();
    }
  });

  $("[data-slider-prev]").addEventListener("click", () => {
    showInfoSlide(state.activeInfoSlide - 1);
    startInfoSlider();
  });

  $("[data-slider-next]").addEventListener("click", () => {
    showInfoSlide(state.activeInfoSlide + 1);
    startInfoSlider();
  });

  $("[data-contact-form]").addEventListener("submit", handleContactSubmit);
}

function renderInfoSlider() {
  const slider = $("[data-info-slider]");
  const dots = $("[data-slider-dots]");
  const slide = infoSlides[state.activeInfoSlide];

  slider.style.setProperty("--slide-image", `url('${slide.image}')`);
  slider.innerHTML = `
    <article class="info-slide">
      <span class="info-slide-badge">${infoFeatureIcon("shield")}${slide.label}</span>
      <h3>${slide.title} <span>${slide.highlight}</span></h3>
      <p>${slide.text}</p>
      <div class="info-slide-features">
        ${(slide.features || [])
          .map((feature) => `
            <div>
              <span>${infoFeatureIcon(feature.icon)}</span>
              <strong>${feature.title}</strong>
              <small>${feature.text}</small>
            </div>
          `)
          .join("")}
      </div>
      <a class="info-slide-cta" href="#consulta">${slide.cta}${arrowIcon()}</a>
    </article>
  `;

  dots.innerHTML = infoSlides
    .map((_, index) => `
      <button type="button" aria-label="Ver aviso ${index + 1}" aria-current="${index === state.activeInfoSlide}" data-slider-dot="${index}"></button>
    `)
    .join("");
}

function infoFeatureIcon(type) {
  const icons = {
    bus: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 16V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9M7 19h.01M17 19h.01M4 16h16v3H4v-3Z"/></svg>',
    clock: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
    pin: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11Z"/><path d="M12 10h.01"/></svg>',
    shield: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></svg>',
    ticket: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 9V5h16v4a3 3 0 0 0 0 6v4H4v-4a3 3 0 0 0 0-6Z"/><path d="M9 5v14"/></svg>'
  };
  return icons[type] || icons.shield;
}

function showInfoSlide(index) {
  state.activeInfoSlide = (index + infoSlides.length) % infoSlides.length;
  renderInfoSlider();
}

function startInfoSlider() {
  clearInterval(state.infoSliderTimer);
  state.infoSliderTimer = setInterval(() => {
    showInfoSlide(state.activeInfoSlide + 1);
  }, 5200);
}

function closeMobileNav(navToggle) {
  $("[data-nav-links]").classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

function scrollToStart() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  $$("[data-nav-links] a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#inicio");
  });
}

function scrollToSection(selector) {
  const target = $(selector);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const messages = JSON.parse(localStorage.getItem("vipurayMessages") || "[]");
  messages.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem("vipurayMessages", JSON.stringify(messages));
  trackAnalyticsEvent("contact_form", {
    source: "contact_form",
    label: "Solicitud enviada"
  });
  $("[data-contact-status]").textContent = "Solicitud enviada. Te contactaremos a la brevedad.";
  form.reset();
  showToast("Mensaje recibido.");
}

function trackAnalyticsEvent(type, payload = {}) {
  const event = {
    type,
    path: window.location.pathname,
    referrer: document.referrer,
    sessionId: getAnalyticsSessionId(),
    createdAt: new Date().toISOString(),
    ...payload
  };

  storeLocalAnalyticsEvent(event);

  try {
    fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(event),
      keepalive: true
    }).catch(() => {});
  } catch (_error) {
    // La copia local permite revisar eventos aun si la API todavia no esta conectada.
  }
}

function getAnalyticsSessionId() {
  const fallbackSessionId = `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  try {
    let sessionId = localStorage.getItem(ANALYTICS_SESSION_KEY);
    if (!sessionId) {
      sessionId = fallbackSessionId;
      localStorage.setItem(ANALYTICS_SESSION_KEY, sessionId);
    }
    return sessionId;
  } catch (_error) {
    return fallbackSessionId;
  }
}

function storeLocalAnalyticsEvent(event) {
  try {
    const events = JSON.parse(localStorage.getItem(ANALYTICS_STORAGE_KEY) || "[]");
    events.push(event);
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(events.slice(-1000)));
  } catch (_error) {
    // Si el navegador bloquea almacenamiento local, la API remota sigue intentando registrar el evento.
  }
}

function setActiveNavOnScroll() {
  const links = $$("[data-nav-links] a");
  const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function setupPageMotion() {
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  state.revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      state.revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  prepareRevealElements($$([
    ".search-panel",
    ".section-heading",
    ".result-card",
    ".destination-card",
    ".info-slider-panel",
    ".about-copy",
    ".about-gallery",
    ".fleet > div",
    ".fleet > img",
    ".cta-band",
    ".faq-card",
    ".contact-card",
    ".contact-form",
    ".footer-grid > div"
  ].join(",")));
}

function prepareRevealElements(elements) {
  if (!state.revealObserver) return;

  elements.forEach((element, index) => {
    if (element.dataset.revealBound) return;
    element.dataset.reveal = "";
    element.dataset.revealBound = "true";
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    state.revealObserver.observe(element);
  });
}

function updateHeaderState() {
  document.body.classList.toggle("is-scrolled", window.scrollY > 12);
}

function getFrequencyText(destinationServices) {
  const count = destinationServices.length;
  const times = destinationServices.map((service) => service.time.toLowerCase());
  if (times.every((time) => time.includes("consultar"))) return "Frecuencia: consultar en boletería o terminal";
  if (count >= 5) return `Salidas referenciales: ${count} al día`;
  if (count >= 3) return `Salidas referenciales: cada 2 a 4 horas`;
  if (count === 2) return `Salidas referenciales: 2 al día`;
  return "Horario informado por el terminal";
}

function companyEmailUrl(company) {
  const subject = `Consulta de horarios - ${company}`;
  const body = `Hola Vipu-Ray,\n\nQuiero consultar horarios, valores y frecuencia de salidas de ${company}.\n\nGracias.`;
  return `mailto:vipuray.oficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function locationIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z"/><path d="M12 10h.01"/></svg>`;
}

function ticketIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 8a2 2 0 0 1 2-2h12v4a2 2 0 0 0 0 4v4H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"/><path d="M9 9h5M9 15h5"/></svg>`;
}

function arrowIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
}

init();
