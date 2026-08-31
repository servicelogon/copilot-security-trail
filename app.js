(function () {
  const T = window.TRAIL;
  const KEY = "copilot-security-trail.v1";
  const srcById = Object.fromEntries(T.sources.map((s) => [s.id, s]));
  const stById = Object.fromEntries(T.stations.map((s) => [s.id, s]));

  const state = load();
  let view = "map";
  let openStation = null;
  let applyingHash = false;

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "{}");
      return {
        stamps: raw.stamps || {},
        checklist: raw.checklist || [],
        role: null,
      };
    } catch (e) {
      return { stamps: {}, checklist: [], role: null };
    }
  }
  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
  function today() {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
  }
  function consecutiveDone() {
    let n = 0;
    for (let i = 1; i <= 5; i++) {
      if (state.stamps[i]) n = i;
      else break;
    }
    return n;
  }

  const pts = T.routePoints;
  const path = pts
    .map(function (p, i) {
      return (i === 0 ? "M " : "L ") + p[0] + " " + p[1];
    })
    .join(" ");

  function dist(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
  }
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + dist(pts[i - 1], pts[i]));
  const totalLen = cum[cum.length - 1];
  const pinLen = T.routePinIndex.map(function (idx) {
    return cum[idx];
  });

  const doneEl = document.getElementById("route-done");
  doneEl.setAttribute("d", path);
  doneEl.setAttribute("pathLength", String(totalLen));

  function renderRoute() {
    const n = consecutiveDone();
    if (n <= 0) {
      doneEl.setAttribute("stroke-dasharray", "0 " + totalLen);
      doneEl.style.opacity = "0";
      return;
    }
    doneEl.style.opacity = "1";
    const painted = pinLen[n - 1];
    doneEl.setAttribute("stroke-dasharray", painted + " " + totalLen);
  }


  function pinFace(s, earned, size) {
    const cls =
      "pin-face" +
      (earned ? " earned" : "") +
      (size === "header" ? " pin-lg" : size === "list" ? " pin-sm" : "");
    const base = "assets/fluent/" + s.icon;
    return (
      '<span class="' +
      cls +
      '" style="--pin-color:' +
      s.color +
      ";--glyph-reg:url(" +
      base +
      "_24_regular.svg);--glyph-fill:url(" +
      base +
      "_24_filled.svg);--glyph-reg-24:url(" +
      base +
      "_24_regular.svg);--glyph-fill-24:url(" +
      base +
      "_24_filled.svg);--glyph-reg-20:url(" +
      base +
      "_20_regular.svg);--glyph-fill-20:url(" +
      base +
      '_20_filled.svg)" aria-hidden="true"></span>'
    );
  }

  function renderPins() {
    const wrap = document.getElementById("pins");
    wrap.innerHTML = T.hotspots
      .map(function (h) {
        const s = stById[h.id];
        const date = state.stamps[h.id];
        const active = openStation === h.id;
        const callout = date
          ? '<span class="callout">' + date + "</span>"
          : "";
        return (
          '<button type="button" class="pin' +
          (active ? " active" : "") +
          '" data-id="' +
          h.id +
          '" style="left:' +
          (h.x / 960) * 100 +
          "%;top:" +
          (h.y / 640) * 100 +
          '%" aria-label="Station ' +
          h.id +
          ": " +
          s.title +
          (date ? ". Completed " + date : "") +
          '">' +
          '<span class="pin-slot">' +
          pinFace(s, Boolean(date), "map") +
          "</span>" +
          callout +
          "</button>"
        );
      })
      .join("");
  }

  function learnChip(card) {
    const sid = card.sourceIds[0];
    const src = srcById[sid];
    const href = card.learnUrl || (src && src.url);
    if (!href) return "";
    return (
      '<a class="learn" href="' +
      href +
      '" target="_blank" rel="noreferrer">Open on Microsoft Learn</a>'
    );
  }

  function cardHtml(card) {
    const st = stById[card.stationId];
    const forYou =
      state.role &&
      card.highlightFor &&
      card.highlightFor.indexOf(state.role) >= 0;
    return (
      '<article class="card' +
      (forYou ? " for-you" : "") +
      '" style="--accent:' +
      st.color +
      '">' +
      (forYou ? '<span class="badge">For you</span>' : "") +
      "<header>" +
      "<h3>" +
      card.title +
      (card.preview ? ' <span class="preview">Preview on Learn</span>' : "") +
      "</h3>" +
      learnChip(card) +
      "</header>" +
      (card.previewNote ? '<p class="preview">' + card.previewNote + "</p>" : "") +
      '<dl class="rhythm">' +
      "<dt>What it is</dt><dd>" +
      card.what +
      "</dd>" +
      "<dt>Why it matters</dt><dd>" +
      card.why +
      "</dd>" +
      "<dt>What to put in place</dt><dd>" +
      card.putInPlace +
      "</dd>" +
      "</dl></article>"
    );
  }

  function openSheet(html) {
    const sheet = document.getElementById("sheet");
    document.getElementById("sheet-body").innerHTML = html;
    sheet.hidden = false;
    sheet.scrollTop = 0;
  }

  function setHash(h) {
    if (location.hash === h) return;
    applyingHash = true;
    location.hash = h;
    applyingHash = false;
  }

  function showStation(id, fromHash) {
    openStation = id;
    view = "stations";
    syncNav();
    if (!fromHash) setHash("#/station/" + id);
    const s = stById[id];
    const date = state.stamps[id];
    const cards = T.cards.filter(function (c) {
      return c.stationId === id;
    });
    const srcs = s.sourceIds
      .map(function (sid) {
        return srcById[sid];
      })
      .filter(Boolean)
      .map(function (src) {
        return (
          '<div class="source-row"><a href="' +
          src.url +
          '" target="_blank" rel="noreferrer">' +
          src.title +
          '</a><div class="muted">Last reviewed ' +
          src.lastReviewed +
          "</div></div>"
        );
      })
      .join("");
    const btn = date
      ? '<button class="mark-btn" disabled>Completed ' + date + "</button>"
      : '<button class="mark-btn" id="mark-stop">Mark this Waypoint</button>';
    openSheet(
      '<div class="sheet-hero">' +
        pinFace(s, Boolean(date), "header") +
        '<div><h1>Station ' +
        s.id +
        ": " +
        s.title +
        "</h1><p>" +
        s.promise +
        "</p></div></div>" +
        btn +
        cards.map(cardHtml).join("") +
        "<h2>Official Learn sources</h2>" +
        srcs
    );
    renderPins();
    const mark = document.getElementById("mark-stop");
    if (mark) {
      mark.addEventListener("click", function () {
        state.stamps[id] = today();
        save();
        renderRoute();
        showStation(id);
      });
    }
  }

  function showStationsIndex(fromHash) {
    openStation = null;
    view = "stations";
    syncNav();
    if (!fromHash) setHash("#/stations");
    renderPins();
    openSheet(
      "<h1>Stations</h1>" +
        '<div class="station-list">' +
        T.stations
          .map(function (s) {
            const date = state.stamps[s.id];
            return (
              '<button type="button" data-open="' +
              s.id +
              '">' +
              pinFace(s, Boolean(date), "list") +
              '<div><strong>' +
              s.id +
              ". " +
              s.title +
              "</strong><span>" +
              (date ? "Completed " + date : "Not yet completed") +
              "</span></div></button>"
            );
          })
          .join("") +
        "</div>"
    );
  }

  function showChecklist(fromHash) {
    openStation = null;
    view = "checklist";
    syncNav();
    if (!fromHash) setHash("#/checklist");
    renderPins();
    const groups = [];
    T.checklist.forEach(function (item) {
      let g = groups.find(function (x) {
        return x.name === item.group;
      });
      if (!g) {
        g = { name: item.group, blurb: item.groupBlurb, items: [] };
        groups.push(g);
      }
      g.items.push(item);
    });
    openSheet(
      '<h1>Checklist</h1><p class="muted">Items copied from Microsoft’s own checklists and Learn pages. Saved only in this browser.</p>' +
        groups
          .map(function (g) {
            return (
              "<h2>" +
              g.name +
              '</h2><p class="muted">' +
              g.blurb +
              "</p>" +
              g.items
                .map(function (item) {
                  const on = state.checklist.indexOf(item.id) >= 0;
                  return (
                    '<label class="check-item"><input type="checkbox" data-check="' +
                    item.id +
                    '"' +
                    (on ? " checked" : "") +
                    " /><span>" +
                    item.text +
                    "</span></label>"
                  );
                })
                .join("")
            );
          })
          .join("")
    );
  }

  function showSources(fromHash) {
    openStation = null;
    view = "sources";
    syncNav();
    if (!fromHash) setHash("#/sources");
    renderPins();
    openSheet(
      '<h1>Sources</h1><p class="muted">Every Microsoft Learn URL cited in the trail.</p>' +
        T.sources
          .map(function (src) {
            const note = src.fetchNote
              ? '<div class="muted">' + src.fetchNote + "</div>"
              : "";
            return (
              '<div class="source-row"><a href="' +
              src.url +
              '" target="_blank" rel="noreferrer">' +
              src.title +
              '</a><div class="muted">Last reviewed ' +
              src.lastReviewed +
              " · stations " +
              src.stations.join(", ") +
              "</div>" +
              note +
              "</div>"
            );
          })
          .join("")
    );
  }

  function showMap(fromHash) {
    openStation = null;
    view = "map";
    syncNav();
    if (!fromHash) setHash("#/");
    document.getElementById("sheet").hidden = true;
    renderPins();
  }

  function syncNav() {
    document.querySelectorAll(".chrome-bar button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-view") === view);
    });
  }

  function applyHash() {
    const h = (location.hash || "#/").replace(/^#/, "") || "/";
    const station = h.match(/^\/station\/([1-5])$/);
    if (station) {
      showStation(Number(station[1]), true);
      return;
    }
    if (h === "/stations") {
      showStationsIndex(true);
      return;
    }
    if (h === "/checklist") {
      showChecklist(true);
      return;
    }
    if (h === "/sources") {
      showSources(true);
      return;
    }
    showMap(true);
  }

  function setMapLayer(name) {
    document.querySelectorAll(".map-art").forEach(function (img) {
      img.hidden = img.getAttribute("data-layer") !== name;
    });
    document.querySelectorAll(".hud-mode [data-layer]").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-layer") === name);
    });
  }

  document.querySelector(".hud-mode").addEventListener("click", function (e) {
    const b = e.target.closest("button[data-layer]");
    if (!b) return;
    setMapLayer(b.getAttribute("data-layer"));
  });

  document.querySelector(".chrome-bar").addEventListener("click", function (e) {
    const b = e.target.closest("button[data-view]");
    if (!b) return;
    const v = b.getAttribute("data-view");
    if (v === "map") showMap();
    if (v === "stations") showStationsIndex();
    if (v === "checklist") showChecklist();
    if (v === "sources") showSources();
  });

  document.getElementById("pins").addEventListener("click", function (e) {
    const b = e.target.closest(".pin");
    if (!b) return;
    showStation(Number(b.getAttribute("data-id")));
  });

  document.getElementById("sheet-close").addEventListener("click", function () {
    showMap();
  });

  document.getElementById("sheet-body").addEventListener("click", function (e) {
    const open = e.target.closest("button[data-open]");
    if (open) showStation(Number(open.getAttribute("data-open")));
  });
  document.getElementById("sheet-body").addEventListener("change", function (e) {
    const box = e.target.closest("input[data-check]");
    if (!box) return;
    const id = box.getAttribute("data-check");
    const i = state.checklist.indexOf(id);
    if (box.checked && i < 0) state.checklist.push(id);
    if (!box.checked && i >= 0) state.checklist.splice(i, 1);
    save();
  });

  window.addEventListener("hashchange", function () {
    if (applyingHash) return;
    applyHash();
  });

  const bleed = document.getElementById("map-bleed");
  const stage = document.getElementById("map-stage");
  const ZMIN = 1;
  const ZMAX = 2.5;
  let zoom = 1;

  function setZoom(next, cx, cy) {
    next = Math.min(ZMAX, Math.max(ZMIN, next));
    const rect = bleed.getBoundingClientRect();
    const px = cx == null ? rect.left + bleed.clientWidth / 2 : cx;
    const py = cy == null ? rect.top + bleed.clientHeight / 2 : cy;
    const relX = (bleed.scrollLeft + (px - rect.left)) / stage.offsetWidth;
    const relY = (bleed.scrollTop + (py - rect.top)) / stage.offsetHeight;
    zoom = next;
    stage.style.setProperty("--zoom", String(zoom));
    const nx = relX * stage.offsetWidth;
    const ny = relY * stage.offsetHeight;
    bleed.scrollLeft = nx - (px - rect.left);
    bleed.scrollTop = ny - (py - rect.top);
  }

  function centerRoute() {
    const h2 = T.hotspots[1];
    const h3 = T.hotspots[2];
    const x = (h2.x + h3.x) / 2 / 960;
    const y = (h2.y + h3.y) / 2 / 640;
    bleed.scrollLeft = x * stage.offsetWidth - bleed.clientWidth / 2;
    bleed.scrollTop = y * stage.offsetHeight - bleed.clientHeight / 2;
  }

  let pan = null;
  bleed.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "touch") return;
    if (e.target.closest(".pin, button, a")) return;
    pan = { x: e.clientX, y: e.clientY, sl: bleed.scrollLeft, st: bleed.scrollTop };
    bleed.classList.add("is-panning");
    bleed.setPointerCapture(e.pointerId);
  });
  bleed.addEventListener("pointermove", function (e) {
    if (!pan) return;
    bleed.scrollLeft = pan.sl - (e.clientX - pan.x);
    bleed.scrollTop = pan.st - (e.clientY - pan.y);
  });
  function endPan() {
    pan = null;
    bleed.classList.remove("is-panning");
  }
  bleed.addEventListener("pointerup", endPan);
  bleed.addEventListener("pointercancel", endPan);

  bleed.addEventListener(
    "wheel",
    function (e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.08 : 1 / 1.08;
      setZoom(zoom * factor, e.clientX, e.clientY);
    },
    { passive: false }
  );

  let pinch = null;
  bleed.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches.length !== 2) {
        pinch = null;
        return;
      }
      const a = e.touches[0];
      const b = e.touches[1];
      pinch = {
        dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
        zoom: zoom,
        cx: (a.clientX + b.clientX) / 2,
        cy: (a.clientY + b.clientY) / 2,
      };
    },
    { passive: true }
  );
  bleed.addEventListener(
    "touchmove",
    function (e) {
      if (!pinch || e.touches.length !== 2) return;
      e.preventDefault();
      const a = e.touches[0];
      const b = e.touches[1];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      setZoom(
        pinch.zoom * (dist / pinch.dist),
        (a.clientX + b.clientX) / 2,
        (a.clientY + b.clientY) / 2
      );
    },
    { passive: false }
  );
  bleed.addEventListener("touchend", function () {
    pinch = null;
  });

  renderRoute();
  applyHash();
  centerRoute();
  window.addEventListener("load", centerRoute);
})();
