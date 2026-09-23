/* Renderizado del sitio a partir de js/projects.js y js/images.js.
   Rutas por ancla: #indice, #perfil, #<slug-del-proyecto>. */
(function () {
  "use strict";

  var SITE = window.SITE, PROFILE = window.PROFILE, PROJECTS = window.PROJECTS, IMAGES = window.IMAGES;
  var IMG_BASE = window.IMG_BASE || "img/";
  var main = document.getElementById("main");

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function val(v) {
    if (v && typeof v === "object" && v.pending) {
      return '<em class="pending" title="' + esc(v.pending) + '">A confirmar</em><span class="note" style="display:block;margin-top:4px">' + esc(v.pending) + "</span>";
    }
    if (v === null || v === undefined || v === "") return '<em class="pending">A confirmar</em>';
    return esc(v);
  }
  function plain(v) { return v && typeof v === "object" ? "" : String(v || ""); }
  function url(key, w) { return IMG_BASE + key + "-" + w + ".webp"; }
  function info(key) {
    var m = IMAGES[key];
    if (!m) { console.warn("Imagen no encontrada:", key); return { w: 4, h: 3, sizes: [] }; }
    return m;
  }
  function srcset(key) {
    return info(key).sizes.map(function (w) { return url(key, w) + " " + w + "w"; }).join(", ");
  }
  function largest(key) { var s = info(key).sizes; return url(key, s[s.length - 1]); }
  function mid(key) { var s = info(key).sizes; return url(key, s[Math.min(1, s.length - 1)] || s[0]); }

  function imgTag(key, alt, sizes, eager) {
    var m = info(key);
    return '<img src="' + mid(key) + '" srcset="' + srcset(key) + '" sizes="' + sizes + '" width="' + m.w + '" height="' + m.h +
      '" alt="' + esc(alt || "") + '"' + (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">';
  }

  function figure(img, opts) {
    opts = opts || {};
    var mat = img.mat || opts.mat;
    var sizes = opts.sizes || "(min-width: 1680px) 1600px, 100vw";
    var cap = img.cap ? '<span class="label">' + esc(img.cap) + "</span>" : "<span></span>";
    return '<figure class="fig' + (mat ? " mat" : "") + (opts.cls ? " " + opts.cls : "") + '"' +
      (opts.style ? ' style="' + opts.style + '"' : "") + ">" +
      '<button class="open" type="button" data-src="' + esc(img.src) + '" data-cap="' + esc(img.cap || "") + '" data-alt="' + esc(img.alt || "") + '" aria-label="Ver en grande: ' + esc(img.cap || img.alt || "") + '">' +
      '<div class="frame">' + imgTag(img.src, img.alt, sizes, opts.eager) + "</div></button>" +
      "<figcaption>" + cap + (opts.noZoom ? "" : '<button class="zoom" type="button" data-src="' + esc(img.src) + '" data-cap="' + esc(img.cap || "") + '" data-alt="' + esc(img.alt || "") + '">Ampliar</button>') + "</figcaption>" +
      "</figure>";
  }

  function paras(arr) { return arr.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }

  /* ---------- bloques ---------- */
  var render = {
    hero: function (b) {
      return '<div class="b-hero">' + figure(b.img, { eager: true, noZoom: true, sizes: "(min-width: 1680px) 1600px, 100vw" }) + "</div>";
    },
    text: function (b, i) {
      return '<div class="grid12 b-text' + (i === 1 ? " lead" : "") + '"><h2 class="label lab">' + esc(b.label || "") + '</h2><div class="body">' + paras(b.body) + "</div></div>";
    },
    figure: function (b) {
      var size = b.size || "full";
      var s = size === "full" ? "(min-width: 1680px) 1600px, 100vw" : size === "wide" ? "(min-width: 1000px) 80vw, 100vw" : "(min-width: 1000px) 50vw, 100vw";
      return '<div class="grid12"><div class="b-' + size + '">' + figure(b.img, { sizes: s }) + "</div></div>";
    },
    row: function (b) {
      var n = b.imgs.length;
      return '<div class="b-row' + (b.size ? " " + b.size : "") + '">' + b.imgs.map(function (img) {
        var m = info(img.src);
        return figure(img, { mat: b.mat, style: "--ar:" + (m.w / m.h).toFixed(4), sizes: "(min-width: 680px) " + Math.round(100 / n) + "vw, 100vw" });
      }).join("") + "</div>";
    },
    split: function (b) {
      return '<div class="grid12 b-split' + (b.flip ? " flip" : "") + (b.small ? " small" : "") + '"><h2 class="label lab">' + esc(b.label || "") + '</h2><div class="body">' + paras(b.body) + "</div>" +
        figure(b.img, { sizes: "(min-width: 1000px) 50vw, 100vw" }) + "</div>";
    },
    figures: function (b) {
      return '<div class="b-figures"><ul>' + b.items.map(function (it) {
        return '<li><span class="v">' + esc(it[0]) + '</span><span class="l label">' + esc(it[1]) + "</span></li>";
      }).join("") + "</ul></div>";
    },
    legend: function (b) {
      return '<div class="grid12 b-legend"><h2 class="label lab">' + esc(b.title || "Componentes") + "</h2><ol>" + b.items.map(function (it) {
        return '<li><span class="n">' + esc(it[0]) + '</span><span class="k">' + esc(it[1]) + '</span><span class="c">' + it[2].map(esc).join("<br>") + "</span></li>";
      }).join("") + "</ol></div>";
    }
  };

  /* ---------- vistas ---------- */
  function viewHome() {
    var first = PROJECTS[0];
    var rows = PROJECTS.map(function (p, i) {
      return '<li class="index-row' + (i === 0 ? " active" : "") + '" data-i="' + i + '"><a href="#' + p.slug + '">' +
        '<span class="thumb">' + imgTag(p.cover, "", "100vw", false) + "</span>" +
        '<span class="label num sc">' + esc(p.scale) + "</span>" +
        '<span class="tt"><span class="t">' + esc(p.title) + '</span><span class="s">' + esc(p.subtitle) + "</span></span>" +
        '<span class="p p-place">' + (plain(p.place) ? esc(p.place) : "—") + "</span>" +
        '<span class="label num yr">' + esc(p.year) + " · " + esc(p.frame) + "</span>" +
        "</a></li>";
    }).join("");
    var previews = PROJECTS.map(function (p, i) {
      return imgTag(p.cover, "", "(min-width: 1000px) 40vw, 1px", i === 0).replace("<img ", '<img data-i="' + i + '" class="' + (i === 0 ? "on" : "") + '" style="object-position:' + (p.coverPos || "50% 50%") + '" ');
    }).join("");
    var years = PROJECTS.map(function (p) { return +p.year; });
    var y0 = Math.min.apply(null, years), y1 = Math.max.apply(null, years);

    return '<section class="wrap home-intro">' +
      "<div><h1>" + esc(SITE.name) + "</h1>" +
      '<p class="role"><span>' + esc(SITE.role) + "</span><span>" + esc(SITE.city) + "</span></p></div>" +
      '<p class="thesis">' + (["Un","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"][PROJECTS.length-1] || PROJECTS.length) + " proyectos de facultad y concurso, " + y0 + "–" + y1 +
      ", ordenados por escala: de una vivienda de madera dibujada a 1:75 a una infraestructura logística pensada a escala territorial.</p>" +
      "</section>" +
      '<section class="wrap index" aria-label="Índice de proyectos">' +
      "<div>" +
      '<div class="index-head label" aria-hidden="true"><span>Escala</span><span>Proyecto</span><span class="col-place">Lugar</span><span>Año</span></div>' +
      '<ol class="index-list">' + rows + "</ol></div>" +
      '<div class="preview" aria-hidden="true"><div class="preview-inner"><figure><div class="frame">' + previews + "</div>" +
      '<figcaption><span class="label" id="pv-cap">' + esc(first.title) + '</span><span class="label num" id="pv-meta">' + esc(first.year) + "</span></figcaption></figure></div></div>" +
      "</section>";
  }

  function bindHome() {
    var rows = main.querySelectorAll(".index-row");
    var imgs = main.querySelectorAll(".preview img");
    var cap = document.getElementById("pv-cap"), meta = document.getElementById("pv-meta");
    function show(i) {
      rows.forEach(function (r) { r.classList.toggle("active", +r.dataset.i === i); });
      imgs.forEach(function (im) {
        if (+im.dataset.i === i) { im.loading = "eager"; im.classList.add("on"); } else im.classList.remove("on");
      });
      cap.textContent = PROJECTS[i].title;
      meta.textContent = PROJECTS[i].year + " · " + (plain(PROJECTS[i].place) || PROJECTS[i].frame);
    }
    rows.forEach(function (r) {
      var i = +r.dataset.i;
      r.addEventListener("mouseenter", function () { show(i); });
      r.querySelector("a").addEventListener("focus", function () { show(i); });
    });
    // precarga discreta de las demás portadas
    setTimeout(function () { imgs.forEach(function (im) { im.loading = "eager"; }); }, 1200);
  }

  function viewProject(p, idx) {
    var next = PROJECTS[(idx + 1) % PROJECTS.length];
    var meta = p.meta.map(function (m) {
      return '<div><dt class="label">' + esc(m[0]) + "</dt><dd>" + val(m[1]) + "</dd></div>";
    }).join("");
    var blocks = p.blocks.map(function (b, i) { return render[b.t] ? render[b.t](b, i) : ""; }).join("");
    return '<article>' +
      '<header class="wrap p-head">' +
      '<div class="p-crumbs label"><a href="#indice">← Índice</a><span class="num">' + String(idx + 1).padStart(2, "0") + " / " + String(PROJECTS.length).padStart(2, "0") + " · Escala " + esc(p.scale) + "</span></div>" +
      '<div class="p-title"><div><h1>' + esc(p.title) + '</h1><p class="sub">' + esc(p.subtitle) + '</p></div><dl class="meta">' + meta + "</dl></div>" +
      "</header>" +
      '<div class="wrap blocks">' + blocks + "</div>" +
      '<nav class="wrap next" aria-label="Proyecto siguiente"><a href="#' + next.slug + '">' +
      '<div><span class="label">Siguiente · Escala ' + esc(next.scale) + '</span><span class="t">' + esc(next.title) + "</span></div>" +
      '<div class="frame">' + imgTag(next.cover, "", "(min-width: 680px) 40vw, 100vw", false) + "</div></a></nav>" +
      "</article>";
  }

  function viewProfile() {
    function link(title) {
      var p = PROJECTS.filter(function (x) { return x.title === title; })[0];
      return p ? '<a href="#' + p.slug + '">' + esc(title) + "</a>" : esc(title);
    }
    function rows(list, fn) { return '<table class="tbl"><tbody>' + list.map(fn).join("") + "</tbody></table>"; }
    function pairs(list) {
      return '<ul class="pairs">' + list.map(function (x) {
        return "<li><span>" + esc(x[0]) + '</span><span class="label">' + esc(x[1] || "") + "</span></li>";
      }).join("") + "</ul>";
    }
    function section(label, html, id) {
      return "<section" + (id ? ' id="' + id + '"' : "") + '><h2 class="label lab">' + label + '</h2><div class="body">' + html + "</div></section>";
    }
    function contactItem(label, v, href) {
      var shown = !v ? '<em class="pending">A confirmar</em>' : href ? '<a href="' + esc(href) + '"' + (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(v) + "</a>" : esc(v);
      return '<li><span class="label">' + label + '</span><span class="v">' + shown + "</span></li>";
    }
    var P = PROFILE;
    var html = '<div class="wrap prof"><h1>Perfil</h1>';
    html += section(esc(SITE.name), paras(P.intro)).replace('class="body"', 'class="body lead"');
    html += section("Formación", rows(P.education, function (e) {
      return "<tr><td>" + esc(e[0]) + "</td><td>" + esc(e[1]) + '<br><span class="muted">' + esc(e[2]) + "</span></td></tr>";
    }));
    html += section("Cursos de proyecto", rows(P.courses, function (c) {
      return "<tr><td>" + esc(c[0]) + "</td><td>" + esc(c[1]) + '<br><span class="muted">' + esc(c[2]) + "</span></td><td>" + link(c[3]) + "</td></tr>";
    }));
    html += section("Concursos", rows(P.competitions, function (c) {
      return "<tr><td>" + esc(c[0]) + "</td><td>" + esc(c[1]) + "</td><td>" + link(c[2]) + "</td></tr>";
    }));
    html += section("Software", pairs(P.software));
    html += section("Idiomas", pairs(P.languages));
    if (P.experience) html += section("Experiencia complementaria", rows(P.experience, function (e) {
      return "<tr><td>" + esc(e[0]) + "</td><td>" + esc(e[1]) + '<br><span class="muted">' + esc(e[2]) + "</span></td></tr>";
    }));
    if (P.references) html += section("Referencias", pairs(P.references) + '<p class="note">Datos de contacto en el CV.</p>');
    html += section("Contacto", '<ul class="contact">' +
      contactItem("Correo", SITE.email, SITE.email && "mailto:" + SITE.email) +
      contactItem("Teléfono", SITE.phone, SITE.phone && "tel:" + SITE.phone.replace(/\s/g, "")) +
      contactItem("LinkedIn", SITE.linkedin && SITE.linkedin.replace(/^https?:\/\/(www\.)?/, ""), SITE.linkedin) +
      contactItem("Ciudad", SITE.city) + "</ul>", "contacto");
    html += section("CV", SITE.cvFile
      ? '<p><a class="cv" href="' + esc(SITE.cvFile) + '" target="_blank" rel="noopener">Currículum en PDF ↗</a></p>'
      : '<p class="note">' + esc(window.CV_NOTE || "CV en PDF pendiente.") + "</p>");
    return html + "</div>";
  }

  /* ---------- visor ---------- */
  var viewer = document.getElementById("viewer");
  var stage = viewer.querySelector(".stage");
  var vImg = viewer.querySelector("img");
  var vCap = viewer.querySelector(".v-cap");
  var vScale = viewer.querySelector(".v-scale");
  var lastFocus = null;

  function setActual(on) {
    stage.classList.toggle("actual", on);
    vScale.textContent = on ? "Ajustar a pantalla" : "Tamaño real";
  }
  function openViewer(key, cap, alt) {
    lastFocus = document.activeElement;
    vImg.src = largest(key);
    vImg.alt = alt || "";
    vCap.textContent = cap || "";
    setActual(false);
    if (viewer.showModal) viewer.showModal(); else viewer.setAttribute("open", "");
    document.documentElement.style.overflow = "hidden";
  }
  function closeViewer() {
    if (viewer.close) viewer.close(); else viewer.removeAttribute("open");
  }
  viewer.addEventListener("close", function () {
    document.documentElement.style.overflow = "";
    vImg.removeAttribute("src");
    if (lastFocus) lastFocus.focus();
  });
  viewer.querySelector(".v-close").addEventListener("click", closeViewer);
  vScale.addEventListener("click", function () { setActual(!stage.classList.contains("actual")); });
  vImg.addEventListener("click", function (e) {
    var actual = stage.classList.contains("actual");
    var r = vImg.getBoundingClientRect();
    var fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
    setActual(!actual);
    if (!actual) {
      stage.scrollLeft = fx * vImg.naturalWidth - stage.clientWidth / 2;
      stage.scrollTop = fy * vImg.naturalHeight - stage.clientHeight / 2;
    }
  });

  main.addEventListener("click", function (e) {
    var t = e.target.closest("button.open, button.zoom");
    if (!t) return;
    openViewer(t.dataset.src, t.dataset.cap, t.dataset.alt);
  });

  /* ---------- carga de imágenes ---------- */
  function watchImages() {
    main.querySelectorAll(".fig img").forEach(function (im) {
      if (im.complete && im.naturalWidth) im.classList.add("is-loaded");
      else {
        im.addEventListener("load", function () { im.classList.add("is-loaded"); }, { once: true });
        im.addEventListener("error", function () { im.classList.add("is-loaded"); }, { once: true });
      }
    });
  }

  /* ---------- rutas ---------- */
  function route() {
    var h = (location.hash || "").replace(/^#\/?/, "");
    var idx = -1;
    PROJECTS.forEach(function (p, i) { if (p.slug === h) idx = i; });
    var html, title, current;
    if (idx >= 0) {
      html = viewProject(PROJECTS[idx], idx);
      title = PROJECTS[idx].title + " — " + SITE.name;
      current = "indice";
    } else if (h === "perfil" || h === "contacto") {
      html = viewProfile();
      title = "Perfil — " + SITE.name;
      current = "perfil";
    } else {
      html = viewHome();
      title = SITE.name + " — Arquitectura";
      current = "indice";
    }
    main.innerHTML = html;
    main.classList.remove("enter"); void main.offsetWidth; main.classList.add("enter");
    document.title = title;
    document.querySelectorAll(".nav a").forEach(function (a) {
      if (a.getAttribute("href") === "#" + current) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (current === "indice" && idx < 0) bindHome();
    watchImages();
    if (h === "contacto") {
      var c = document.getElementById("contacto"); if (c) c.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    var h1 = main.querySelector("h1");
    if (h1 && route.ran) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
    route.ran = true;
  }

  document.getElementById("foot-name").textContent = SITE.name + " — " + SITE.city;
  window.addEventListener("hashchange", route);
  route();
})();
