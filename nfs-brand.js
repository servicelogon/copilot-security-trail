(function () {
  // The New Frontier Security footer mark: a hairline wireframe that turns
  // slowly, drawn the same way as the icosahedron on newfrontiersecurity.net
  // and the key on Passkey AAGUID Lookup (1px strokes, back edges faint, one
  // slow turn). On this tool the solid is a low-poly shield. A still frame when
  // motion is reduced, and nothing at all where canvas is missing.

  // Builds a heater shield facing +z: a back face, a front face, and a raised
  // inner bevel with a centre ridge. Then fits it inside the unit sphere.
  function buildShield() {
    const verts = [];
    const edges = [];
    const v = function (x, y, z) {
      return verts.push([x, y, z]) - 1;
    };
    const e = function (a, b) {
      edges.push([a, b]);
    };

    // Right half of the outline from the top corner to just above the tip;
    // the left half mirrors it and both meet at the tip.
    const half = [
      [0.62, 0.78],
      [0.66, 0.3],
      [0.58, -0.15],
      [0.4, -0.52],
      [0.18, -0.8],
    ];
    const outline = half
      .map(function (p) {
        return [-p[0], p[1]];
      })
      .concat([[0, -0.97]], half.slice().reverse());
    // outline now runs left top corner → tip → right top corner; the flat top
    // closes it.
    const T = 0.1; // half thickness of the shield
    const B = 0.16; // how far the bevel stands proud of the front face
    const S = 0.68; // bevel size relative to the outline
    const ring = function (scale, z) {
      return outline.map(function (p) {
        return v(p[0] * scale, p[1] * scale + (1 - scale) * 0.06, z);
      });
    };
    const back = ring(1, -T);
    const front = ring(1, T);
    const bevel = ring(S, T + B);
    const n = outline.length;
    for (let k = 0; k < n; k++) {
      const next = (k + 1) % n;
      e(back[k], back[next]);
      e(front[k], front[next]);
      e(bevel[k], bevel[next]);
      e(back[k], front[k]);
      e(front[k], bevel[k]);
    }
    // Centre ridge down the bevel, from the top edge to the tip.
    const topMid = v(0, 0.78 * S + (1 - S) * 0.06, T + B + 0.08);
    const tip = bevel[(n - 1) / 2];
    e(topMid, tip);
    e(topMid, bevel[0]);
    e(topMid, bevel[n - 1]);

    // Centre on the origin and fit inside the unit sphere.
    const ys = verts.map(function (p) {
      return p[1];
    });
    const mid = (Math.max.apply(null, ys) + Math.min.apply(null, ys)) / 2;
    const reach = Math.max.apply(
      null,
      verts.map(function (p) {
        return Math.hypot(p[0], p[1] - mid, p[2]);
      })
    );
    return {
      verts: verts.map(function (p) {
        return [p[0] / reach, (p[1] - mid) / reach, p[2] / reach];
      }),
      edges: edges,
    };
  }

  const SHIELD = buildShield();
  const TILT = 0.28; // lean the top toward the viewer a little
  const SPEED = 0.00018; // radians per millisecond, as on the NFS site
  const STILL = 0.5;

  function initFooterWire(canvas) {
    const ctx = canvas && canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ct = Math.cos(TILT);
    const st = Math.sin(TILT);
    let frame = 0;
    let running = false;

    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || 120;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = canvas.width;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    // Turn about the vertical axis, then lean toward the viewer.
    function project(p, yaw) {
      const x1 = p[0] * Math.cos(yaw) + p[2] * Math.sin(yaw);
      const z1 = -p[0] * Math.sin(yaw) + p[2] * Math.cos(yaw);
      return { x: x1, y: p[1] * ct - z1 * st, z: p[1] * st + z1 * ct };
    }
    function draw(yaw) {
      const w = canvas.clientWidth || 120;
      const r = w * 0.44;
      ctx.clearRect(0, 0, w, w);
      ctx.lineWidth = 1;
      ctx.strokeStyle = getComputedStyle(canvas).color;
      const lines = SHIELD.edges
        .map(function (edge) {
          const s = project(SHIELD.verts[edge[0]], yaw);
          const t = project(SHIELD.verts[edge[1]], yaw);
          return { s: s, t: t, d: (s.z + t.z) / 2 };
        })
        .sort(function (a, b) {
          return a.d - b.d;
        });
      lines.forEach(function (line) {
        ctx.globalAlpha = line.d < 0 ? 0.28 : 0.9;
        ctx.beginPath();
        ctx.moveTo(w / 2 + line.s.x * r, w / 2 - line.s.y * r);
        ctx.lineTo(w / 2 + line.t.x * r, w / 2 - line.t.y * r);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }
    function tick(now) {
      draw(now * SPEED);
      frame = requestAnimationFrame(tick);
    }
    function start() {
      if (running || reduce.matches) return;
      running = true;
      frame = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(frame);
      draw(STILL);
    }

    size();
    draw(STILL);
    // The footer sits in the sheet, which is hidden on the map view: the
    // observers start the turn only while the mark is actually on screen.
    if ("ResizeObserver" in window) {
      new ResizeObserver(function () {
        size();
        if (!running) draw(STILL);
      }).observe(canvas);
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) start();
        else stop();
      }).observe(canvas);
    }
    if (reduce.addEventListener) {
      reduce.addEventListener("change", function () {
        if (reduce.matches) stop();
        else start();
      });
    }
  }

  initFooterWire(document.querySelector(".nfs-footer-wire"));
})();
