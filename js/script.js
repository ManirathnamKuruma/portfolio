/* ============================================
   Premium Portfolio - JavaScript
   ============================================ */

/* ---------- CONFIG / DATA ---------- */
const CONFIG = {
  name: "Manirathnam Babu Kuruma",
  initials: "",
  title: "Assistant Professor and Vibe Coder",
  tagline: "Building Intelligent Solutions Through Technology & Creativity.",
  availability: "Available for Opportunities",
  email: "manirathnambabuk@gmail.com",
  location: "Hyderabad, India",
  social: {
    github: "https://github.com/ManirathnamKuruma",
    linkedin: "https://www.linkedin.com/in/manirathnam-kuruma",
    twitter: "https://twitter.com/",
    dribbble: "https://dribbble.com/"
  },
  resumeUrl: "#",
  // Contact form backend endpoint (optional).
  // Leave empty to fall back to opening the visitor's email client (mailto).
  // Vercel (built-in): "/api/contact"  (requires RESEND_API_KEY env var)
  // Formspree:          "https://formspree.io/f/yourFormId"
  // Web3Forms:          "https://api.web3forms.com/submit"  (also set formAccessKey)
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "a6b67e54-a307-4351-807e-591850dcc5f1"
};

const STATS = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 40, suffix: "+" },
  { label: "Technologies Explored", value: 25, suffix: "+" },
  { label: "Students Mentored", value: 1, suffix: "K+" }
];

const SKILLS = {
  "Programming Languages": [
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "TypeScript", icon: "fa-brands fa-js" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "C++", icon: "fa-solid fa-code" },
    { name: "Go", icon: "fa-brands fa-golang" }
  ],
  "Frontend Development": [
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Next.js", icon: "fa-brands fa-react" },
    { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
    { name: "Vue.js", icon: "fa-brands fa-vuejs" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" }
  ],
  "Backend Development": [
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express", icon: "fa-solid fa-server" },
    { name: "Django", icon: "fa-brands fa-python" },
    { name: "FastAPI", icon: "fa-solid fa-bolt" },
    { name: "Spring Boot", icon: "fa-brands fa-java" },
    { name: "GraphQL", icon: "fa-solid fa-diagram-project" }
  ],
  "Database Technologies": [
    { name: "PostgreSQL", icon: "fa-solid fa-database" },
    { name: "MongoDB", icon: "fa-solid fa-leaf" },
    { name: "Redis", icon: "fa-solid fa-bolt" },
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "Firebase", icon: "fa-solid fa-fire" },
    { name: "Supabase", icon: "fa-solid fa-database" }
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", icon: "fa-solid fa-brain" },
    { name: "PyTorch", icon: "fa-solid fa-brain" },
    { name: "OpenAI API", icon: "fa-solid fa-robot" },
    { name: "LangChain", icon: "fa-solid fa-link" },
    { name: "scikit-learn", icon: "fa-solid fa-chart-line" },
    { name: "Hugging Face", icon: "fa-solid fa-face-smile" }
  ],
  "Developer Tools": [
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "Kubernetes", icon: "fa-solid fa-dharmachakra" },
    { name: "AWS", icon: "fa-brands fa-aws" },
    { name: "GitHub Actions", icon: "fa-brands fa-github" },
    { name: "Figma", icon: "fa-brands fa-figma" }
  ]
};

const EXPERIENCE = [
  {
    type: "work",
    role: "Assistant Professor",
    org: "Guru Nanak Institutions Technical Campus (GNITC) — Department of IT",
    period: "2024 — Present",
    points: [
      "Working as Assistant Professor in the Department of IT.",
      "Teaching, mentoring students, and contributing to academic activities."
    ]
  },
  {
    type: "work",
    role: "Assistant Professor",
    org: "Vignan Institute of Technology and Science (VITS) — Department of AIML",
    period: "2023 — 2024",
    points: [
      "Served as Assistant Professor in the Department of AIML.",
      "Delivered coursework and guided student projects."
    ]
  },
  {
    type: "work",
    role: "Assistant Professor",
    org: "Visvesvaraya College of Engineering and Technology (VCET) — Department of CSE",
    period: "2019 — 2023",
    points: [
      "Served as Assistant Professor in the Department of CSE.",
      "Taught core computer science subjects and mentored students."
    ]
  },
  {
    type: "work",
    role: "Remote Data Engineer",
    org: "ATMECS Global Inc (now merged into Sutherland Global Services)",
    period: "2021 — 2023",
    points: [
      "Served as Remote Data Engineer.",
      "Built and maintained data pipelines and data engineering solutions."
    ]
  }
];

const PROJECTS = [
  {
    title: "AI Task Assistant",
    desc: "An intelligent task management app powered by LLMs that summarizes, prioritizes, and automates daily workflows.",
    category: "AI Applications",
    tech: ["React", "Node.js", "OpenAI", "MongoDB"],
    image: "assets/images/project-1.svg",
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with cart, payments, admin dashboard, and real-time inventory.",
    category: "Full-Stack Development",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    image: "assets/images/project-2.svg",
    github: "#",
    live: "#"
  },
  {
    title: "ML Image Classifier",
    desc: "Deep learning model for image classification with a web interface for real-time predictions.",
    category: "Machine Learning",
    tech: ["Python", "PyTorch", "FastAPI", "Docker"],
    image: "assets/images/project-3.svg",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio CMS",
    desc: "Headless CMS for managing portfolio content with a clean admin interface and REST API.",
    category: "Web Applications",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    image: "assets/images/project-4.svg",
    github: "#",
    live: "#"
  },
  {
    title: "Chatbot Platform",
    desc: "Multi-channel chatbot builder with analytics, NLP intents, and webhook integrations.",
    category: "AI Applications",
    tech: ["Node.js", "LangChain", "React", "Firebase"],
    image: "assets/images/project-5.svg",
    github: "#",
    live: "#"
  },
  {
    title: "Academic Research Tool",
    desc: "Tool for organizing research papers, citations, and collaborative notes for academic teams.",
    category: "Academic Projects",
    tech: ["Python", "Django", "PostgreSQL"],
    image: "assets/images/project-6.svg",
    github: "#",
    live: "#"
  }
];

const SERVICES = [
  { icon: "fa-solid fa-code", title: "Web Development", desc: "Modern, responsive, performant web applications tailored to your needs." },
  { icon: "fa-solid fa-robot", title: "AI Application Development", desc: "Intelligent apps leveraging LLMs, ML models, and automation." },
  { icon: "fa-solid fa-layer-group", title: "Full-Stack Development", desc: "End-to-end product development from database to polished UI." },
  { icon: "fa-solid fa-lightbulb", title: "Technical Consulting", desc: "Architecture reviews, tech stack guidance, and scalability planning." },
  { icon: "fa-solid fa-chalkboard-user", title: "Mentoring & Training", desc: "Hands-on mentoring for developers and teams." }
];

/* ---------- UTIL ---------- */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

/* ---------- NAV ---------- */
const navbar = $("#navbar");
const mobileMenu = $("#mobile-menu");
const hamburger = $("#hamburger");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
  updateActiveNav();
  toggleBackToTop();
}, { passive: true });

function updateActiveNav() {
  const sections = $$("section[id]");
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  $$(".nav-link").forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
}

hamburger?.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  mobileMenu.classList.toggle("closed");
});

$$(".mobile-link").forEach(l => l.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  mobileMenu.classList.add("closed");
}));

/* ---------- SMOOTH SCROLL ---------- */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id === "#") return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ---------- REVEAL ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
$$(".reveal, .reveal-left, .reveal-right").forEach(el => revealObserver.observe(el));

/* ---------- COUNTERS ---------- */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || "";
      const duration = 1600;
      const start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
$$(".counter").forEach(el => counterObserver.observe(el));

/* ---------- PROJECTS RENDER & FILTER ---------- */
const projectsGrid = $("#projects-grid");
const filtersWrap = $("#project-filters");

function renderProjects(filter = "All") {
  if (!projectsGrid) return;
  const cats = ["All", ...new Set(PROJECTS.map(p => p.category))];
  // filters
  if (filtersWrap && filtersWrap.children.length === 0) {
    cats.forEach(c => {
      const btn = document.createElement("button");
      btn.className = "filter-btn px-4 py-2 rounded-full border border-white/10 text-sm text-zinc-300 hover:border-violet-500/50 transition";
      btn.textContent = c;
      if (c === "All") btn.classList.add("active");
      btn.addEventListener("click", () => {
        $$(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(c);
      });
      filtersWrap.appendChild(btn);
    });
  }
  projectsGrid.innerHTML = "";
  const list = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card card overflow-hidden reveal";
    card.innerHTML = `
      <div class="project-img relative aspect-[16/10] overflow-hidden">
        <img src="${p.image}" alt="${p.title} screenshot" class="w-full h-full object-cover" loading="lazy">
        <div class="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-5">
          <div class="flex gap-3">
            <a href="${p.github}" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg bg-white/10 backdrop-blur text-sm hover:bg-white/20 transition"><i class="fa-brands fa-github mr-1"></i>Code</a>
            <a href="${p.live}" target="_blank" rel="noopener" class="px-3 py-2 rounded-lg bg-violet-600 text-sm hover:bg-violet-500 transition"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i>Live</a>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold">${p.title}</h3>
          <span class="text-xs text-violet-300">${p.category}</span>
        </div>
        <p class="text-sm text-zinc-400 mb-4">${p.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tech.map(t => `<span class="text-xs px-2 py-1 rounded-md bg-white/15 border border-white/14 text-zinc-300">${t}</span>`).join("")}
        </div>
      </div>`;
    projectsGrid.appendChild(card);
  });
  // re-observe reveals
  $$(".reveal", projectsGrid).forEach(el => revealObserver.observe(el));
}
renderProjects();

/* ---------- SKILLS RENDER ---------- */
const skillsWrap = $("#skills-wrap");
if (skillsWrap) {
  Object.entries(SKILLS).forEach(([cat, items]) => {
    const col = document.createElement("div");
    col.className = "card p-6 reveal";
    col.innerHTML = `
      <h3 class="text-lg font-semibold mb-4 gradient-text">${cat}</h3>
      <div class="flex flex-wrap gap-2">
        ${items.map(s => `<span class="skill-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-200"><i class="${s.icon} text-violet-300"></i>${s.name}</span>`).join("")}
      </div>`;
    skillsWrap.appendChild(col);
  });
  $$(".reveal", skillsWrap).forEach(el => revealObserver.observe(el));
}

/* ---------- EXPERIENCE RENDER ---------- */
const expWrap = $("#experience-wrap");
if (expWrap) {
  const items = EXPERIENCE.map(e => `
    <div class="relative pl-12 pb-10 reveal">
      <div class="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white shadow-lg">
        <i class="${e.type === 'work' ? 'fa-solid fa-briefcase' : e.type === 'education' ? 'fa-solid fa-graduation-cap' : 'fa-solid fa-certificate'}"></i>
      </div>
      <div class="card p-6">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 class="text-lg font-semibold">${e.role}</h3>
          <span class="text-xs text-violet-300 px-2 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">${e.period}</span>
        </div>
        <p class="text-sm text-zinc-400 mb-3">${e.org}</p>
        <ul class="space-y-1.5">
          ${e.points.map(p => `<li class="text-sm text-zinc-300 flex gap-2"><span class="text-violet-400 mt-1">▸</span><span>${p}</span></li>`).join("")}
        </ul>
      </div>
    </div>`).join("");
  expWrap.innerHTML = `<div class="relative"><div class="timeline-line"></div>${items}</div>`;
  $$(".reveal", expWrap).forEach(el => revealObserver.observe(el));
}

/* ---------- SERVICES RENDER ---------- */
const servicesWrap = $("#services-wrap");
if (servicesWrap) {
  SERVICES.forEach(s => {
    const c = document.createElement("div");
    c.className = "card p-6 reveal";
    c.innerHTML = `
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/20 flex items-center justify-center mb-4">
        <i class="${s.icon} text-xl text-violet-300"></i>
      </div>
      <h3 class="text-lg font-semibold mb-2">${s.title}</h3>
      <p class="text-sm text-zinc-400">${s.desc}</p>`;
    servicesWrap.appendChild(c);
  });
  $$(".reveal", servicesWrap).forEach(el => revealObserver.observe(el));
}

/* ---------- STATS RENDER ---------- */
const statsWrap = $("#stats-wrap");
if (statsWrap) {
  STATS.forEach(s => {
    const c = document.createElement("div");
    c.className = "card p-6 text-center reveal";
    c.innerHTML = `
      <div class="text-4xl font-bold gradient-text counter" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="text-sm text-zinc-400 mt-2">${s.label}</div>`;
    statsWrap.appendChild(c);
  });
  // observe counters
  $$(".counter", statsWrap).forEach(el => counterObserver.observe(el));
  $$(".reveal", statsWrap).forEach(el => revealObserver.observe(el));
}

/* ---------- CONFIG APPLY ---------- */
function applyConfig() {
  document.title = `${CONFIG.name} — ${CONFIG.title}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `${CONFIG.name}, ${CONFIG.title}. ${CONFIG.tagline}`;
  // hero name
  const heroName = $("#hero-name");
  if (heroName) heroName.textContent = CONFIG.name;
  const heroTitle = $("#hero-title");
  if (heroTitle) heroTitle.textContent = CONFIG.title;
  const heroTag = $("#hero-tagline");
  if (heroTag) heroTag.textContent = CONFIG.tagline;
  const avail = $("#availability");
  if (avail) avail.textContent = CONFIG.availability;
  const logo = $("#logo-text");
  if (logo) logo.textContent = CONFIG.initials;
  const brand = $("#brand-name");
  if (brand) brand.textContent = CONFIG.name;
  // social
  const socialMap = {
    github: ".social-github", linkedin: ".social-linkedin",
    twitter: ".social-twitter", dribbble: ".social-dribbble"
  };
  Object.entries(socialMap).forEach(([k, sel]) => {
    $$(sel).forEach(el => el.href = CONFIG.social[k] || "#");
  });
  const emailLinks = $$(".email-link");
  emailLinks.forEach(el => { el.href = "mailto:" + CONFIG.email; el.textContent = CONFIG.email; });
  const resume = $("#resume-btn");
  if (resume) resume.href = CONFIG.resumeUrl;
}
applyConfig();

/* ---------- CONTACT FORM ---------- */
const form = $("#contact-form");
const formStatus = $("#form-status");
form?.addEventListener("submit", async e => {
  e.preventDefault();
  const name = $("#cf-name").value.trim();
  const email = $("#cf-email").value.trim();
  const subject = $("#cf-subject").value.trim();
  const message = $("#cf-message").value.trim();
  if (!name || !email || !message) {
    showStatus("Please fill in all required fields.", "error");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showStatus("Please enter a valid email address.", "error");
    return;
  }
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn ? submitBtn.textContent : "";
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending..."; }

  // If a backend endpoint is configured, send the inquiry there (Formspree / Web3Forms / custom).
  if (CONFIG.formEndpoint) {
    try {
      const payload = { name, email, subject: subject || "Portfolio Contact", message };
      if (CONFIG.formAccessKey) payload.access_key = CONFIG.formAccessKey;
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        showStatus("Thanks! Your message has been sent. I'll get back to you soon.", "success");
        form.reset();
      } else {
        showStatus(data.message || data.error || "Something went wrong. Please email me directly.", "error");
      }
    } catch (err) {
      showStatus("Network error. Please email me directly at " + CONFIG.email, "error");
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
    }
    return;
  }

  // Static fallback: open mailto
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${body}`;
  window.location.href = mailto;
  showStatus("Your email client should open. Alternatively, email me directly.", "success");
  form.reset();
  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
});
function showStatus(msg, type) {
  if (!formStatus) return;
  formStatus.textContent = msg;
  formStatus.className = "mt-4 text-sm " + (type === "error" ? "text-red-400" : "text-emerald-400");
}

/* ---------- BACK TO TOP ---------- */
const btt = $("#back-to-top");
function toggleBackToTop() {
  if (!btt) return;
  if (window.scrollY > 400) btt.classList.add("show");
  else btt.classList.remove("show");
}
btt?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- HERO CANVAS (subtle particles) ---------- */
const canvas = $("#hero-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5
    }));
  }
  resize();
  window.addEventListener("resize", resize);
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(167,139,250,0.6)";
      ctx.fill();
    });
    // lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.strokeStyle = `rgba(96,165,250,${0.15 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) draw();
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  updateActiveNav();
});
