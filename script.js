(function () {
  "use strict";

  var translations = {
    fr: {
      "tagline": "développeur full-stack",
      "status": "disponible pour une mission",
      "menu.open": "Ouvrir le menu",
      "menu.close": "Fermer le menu",
      "theme.switchToDark": "Passer au thème sombre",
      "theme.switchToLight": "Passer au thème clair",
      "footer.text": "Béthuel Akouta. Site construit à la main.",

      "meta.title.home": "Béthuel Akouta — Développeur",
      "home.heading": "Je construis des produits web fiables, du backend à l'interface.",
      "home.lede": "Développeur full-stack basé à Parakou, je conçois des applications robustes et je m'occupe aussi bien de l'architecture serveur que de l'expérience côté client.",
      "home.cta.projects": "Voir mes projets",
      "home.cta.contact": "Me contacter",

      "meta.title.about": "À propos — Nom Prénom",
      "about.heading": "À propos",
      "about.p1": "Je m'appelle Béthuel Akouta et je développe des applications web depuis des années. J'aime particulièrement transformer un besoin flou en un produit simple à utiliser, et je porte une attention particulière à la qualité du code et aux performances.",
      "about.p2": "En dehors du code, je suis étudiant en médecine . ",

      "meta.title.skills": "Compétences — Béthuel Akouta",
      "skills.heading": "Compétences",
      "skills.group1.title": "langages",
      "skills.group2.title": "frameworks",
      "skills.group3.title": "infra & outils",
      "skills.group4.title": "autres",
      "skills.other.tests": "Tests automatisés",
      "skills.other.api": "API REST / GraphQL",
      "skills.other.todo": "[à compléter]",

      "meta.title.projects": "Projets — Béthuel Akouta",
      "projects.heading": "Projets",
      "projects.viewCode": "voir le code",
      "projects.p1.title": "Portfolio personnel",
      "projects.p1.desc": "Création d'un portfolio personnel pour présenter mon parcours, mes compétences et mes projets. Conception d'une interface claire, responsive et adaptée à différents appareils.",
      "projects.p2.title": " Application web",
      "projects.p2.desc": "Conception d'une application web destinée à répondre à un besoin concret, avec une attention particulière portée à l'expérience utilisateur, à la structure du code et à la fiabilité.",
      "projects.p3.title": "Outil personnel",
      "projects.p3.desc": "Développement d'un outil personnel pour résoudre un problème spécifique et mettre en pratique mes compétences en programmation et en résolution de problèmes.",

      "meta.title.experience": "Expérience — Béthuel Akouta",
      "experience.heading": "Expérience",
      "experience.role1.title": "Développeur web junior — Projets personnels",
      "experience.role1.period": "2024 — aujourd'hui",
      "experience.role1.desc": "Conception et développement de projets web dans le cadre de mon apprentissage, avec un intérêt pour les interfaces utilisateur, les technologies web modernes et les outils de développement.",
      "experience.role2.title": "Apprentissage du développement web — Autodidacte",
      "experience.role2.period": "2024 — 2026",
      "experience.role2.desc": "Approfondissement des bases du développement, découverte de Git et GitHub pour la gestion de versions, et exploration d'outils comme Cursor pour améliorer mon flux de travail.",
      "experience.role3.title": "Formation et autoformation — Informatique",
      "experience.role3.period": "En cours",
      "experience.role3.desc": "Apprentissage continu des technologies de développement web, de la programmation et des bonnes pratiques pour concevoir des applications fonctionnelles et maintenables.",

      "meta.title.contact": "Contact — Béthuel Akouta",
      "contact.heading": "Contact",
      "contact.p1": "Une mission, une question, ou juste envie d'échanger : n'hésite pas à m'écrire."
    },
    en: {
      "tagline": "full-stack developer",
      "status": "available for hire",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "theme.switchToDark": "Switch to dark theme",
      "theme.switchToLight": "Switch to light theme",
      "footer.text": "Béthuel Akouta. Hand-built site.",

      "meta.title.home": "Béthuel Akouta — Developer",
      "home.heading": "I build reliable web products, from backend to interface.",
      "home.lede": "A full-stack developer based somewhere, I design robust applications and handle everything from server architecture to client-side experience.",
      "home.cta.projects": "View my projects",
      "home.cta.contact": "Contact me",

      "meta.title.about": "About — Béthuel Akouta",
      "about.heading": "About",
      "about.p1": "My name is Béthuel Akouta and I've been building web applications for many years. I especially enjoy turning a vague need into a simple, usable product, and I care a lot about code quality and performance.",
      "about.p2": "Outside of code, I'm a medical student.",

      "meta.title.skills": "Skills — Béthuel Akouta",
      "skills.heading": "Skills",
      "skills.group1.title": "languages",
      "skills.group2.title": "frameworks",
      "skills.group3.title": "infra & tools",
      "skills.group4.title": "other",
      "skills.other.tests": "Automated testing",
      "skills.other.api": "REST / GraphQL APIs",
      "skills.other.todo": "[fill this in]",

      "meta.title.projects": "Projects — Béthuel Akouta",
      "projects.heading": "Projects",
      "projects.viewCode": "view code",
      "projects.p1.title": "Personal Portfolio",
      "projects.p1.desc": "Building a personal portfolio to showcase my background, skills, and projects. Designing a clean, responsive interface that adapts to different devices.",
      "projects.p2.title": " Web Application",
      "projects.p2.desc": "Developing a web application designed to address a practical need, with a focus on user experience, code structure, and reliability.",
      "projects.p3.title": "Personal Tool",
      "projects.p3.desc": "Developing a personal tool to solve a specific problem and apply my programming and problem-solving skills.",

      "meta.title.experience": "Experience — First Last",
      "experience.heading": "Experience",
      "experience.role1.title": "Junior Web Developer — Personal Projects",
      "experience.role1.period": "2026 — present",
      "experience.role1.desc": "Designing and developing personal web projects to apply my programming knowledge, strengthen my technical skills, and build functional user interfaces.",
      "experience.role2.title": "Web Development Learning — Self-Taught",
      "experience.role2.period": "2024 — 2026",
      "experience.role2.desc": "Continuously learning web development, exploring development tools, and using Git, GitHub, and Cursor to improve my workflow.",
      "experience.role3.title": "Computer Science — Independent Learning",
      "experience.role3.period": "Ongoing",
      "experience.role3.desc": "Building a solid foundation in programming, web technologies, and software development best practices.",

      "meta.title.contact": "Contact — First Last",
      "contact.heading": "Contact",
      "contact.p1": "A project, a question, or just want to say hi — feel free to reach out."
    }
  };

  var VALID_THEMES = ["light", "dark"];
  var VALID_LANGS = ["fr", "en"];

  function readParam(name, valid, fallback) {
    var params = new URLSearchParams(window.location.search);
    var value = params.get(name);
    return valid.indexOf(value) !== -1 ? value : fallback;
  }

  var state = {
    theme: readParam("theme", VALID_THEMES, "light"),
    lang: readParam("lang", VALID_LANGS, "fr")
  };

  function t(key) {
    var dict = translations[state.lang] || translations.fr;
    return dict[key] !== undefined ? dict[key] : key;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      var nextLabel = state.theme === "light" ? t("theme.switchToDark") : t("theme.switchToLight");
      themeBtn.setAttribute("aria-label", nextLabel);
      themeBtn.setAttribute("aria-pressed", state.theme === "dark" ? "true" : "false");
    }
  }

  function applyLang() {
    document.documentElement.setAttribute("lang", state.lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var text = t(key);
      if (text !== undefined) el.textContent = text;
    });

    var page = document.body.getAttribute("data-page");
    if (page) {
      var titleText = t("meta.title." + page);
      if (titleText) document.title = titleText;
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === state.lang ? "true" : "false");
    });

    var menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
      var isOpen = document.getElementById("sidebar").classList.contains("open");
      menuBtn.setAttribute("aria-label", isOpen ? t("menu.close") : t("menu.open"));
    }

    // refresh theme-dependent aria-label text since language changed too
    applyTheme();
  }

  function updateStateURL() {
    var url = new URL(window.location.href);
    url.searchParams.set("theme", state.theme);
    url.searchParams.set("lang", state.lang);
    history.replaceState(null, "", url);
  }

  function syncSiteLinks() {
    document.querySelectorAll("a.site-link").forEach(function (a) {
      var base = a.getAttribute("data-base") || a.getAttribute("href").split("?")[0];
      a.setAttribute("href", base + "?theme=" + state.theme + "&lang=" + state.lang);
    });
  }

  function highlightActiveLink() {
    var page = document.body.getAttribute("data-page");
    document.querySelectorAll(".file-link").forEach(function (link) {
      if (link.getAttribute("data-page") === page) {
        link.classList.add("active");
      }
    });
  }

  function initMenu() {
    var menuBtn = document.getElementById("menuBtn");
    var sidebar = document.getElementById("sidebar");
    if (!menuBtn || !sidebar) return;

    menuBtn.addEventListener("click", function () {
      var open = sidebar.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "✕" : "☰";
      menuBtn.setAttribute("aria-label", open ? t("menu.close") : t("menu.open"));
    });

    document.querySelectorAll(".file-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 780) {
          sidebar.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.textContent = "☰";
        }
      });
    });
  }

  function initToggles() {
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        state.theme = state.theme === "light" ? "dark" : "light";
        applyTheme();
        updateStateURL();
        syncSiteLinks();
      });
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.lang = btn.getAttribute("data-lang");
        applyLang();
        updateStateURL();
        syncSiteLinks();
      });
    });
  }

  function initPageTransitions() {
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    document.querySelectorAll("a.site-link").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        var href = a.getAttribute("href");
        if (!href) return;
        e.preventDefault();
        document.body.classList.add("page-fade-out");
        setTimeout(function () {
          window.location.href = href;
        }, 90);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme();
    applyLang();
    syncSiteLinks();
    highlightActiveLink();
    initMenu();
    initToggles();
    initPageTransitions();

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
