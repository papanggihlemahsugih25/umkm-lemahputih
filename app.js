// ============================
// Intro Overlay Fade
// ============================
window.addEventListener("load", () => {
  const overlay = document.getElementById("introOverlay");
  setTimeout(() => overlay.classList.add("hide"), 200);
});

// ============================
// Leaflet Map Init
// ============================
const map = L.map("map").setView(umkmData[0]?.koordinat || [-7.62, 111.52], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

const markerById = new Map();

function popupHTML(u) {
  const waLink = `https://wa.me/${u.kontak_wa}`;
  const detailLink = `detail.html?id=${encodeURIComponent(u.id)}`;
  return `
    <div style="min-width:220px">
      <b style="font-size:14px">${u.nama_umkm}</b><br/>
      <span style="color:#666">${u.jenis_usaha} • ${u.jam_operasional}</span>
      <div style="margin-top:6px;color:#444">${u.cerita_singkat || ""}</div>
      <hr style="border:none;border-top:1px solid #eee;margin:8px 0"/>
      <a href="${waLink}" target="_blank" rel="noopener">Chat WA</a>
      &nbsp;•&nbsp;
      <a href="${detailLink}">Detail</a>
    </div>
  `;
}

// markers
const iconKopi = L.icon({
  iconUrl: "img/icons/kopi.png",
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44],
});

const iconJeruk = L.icon({
  iconUrl: "img/icons/jeruk.png",
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44],
});

const iconPisang = L.icon({
  iconUrl: "img/icons/pisang.png",
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44],
});

// mapping icon berdasarkan ID UMKM (ID kamu: umkm-1, umkm-2, umkm-3)
const ICON_BY_ID = {
  "umkm-1": iconKopi,
  "umkm-2": iconPisang,
  "umkm-3": iconJeruk,
};

function getIconForUmkm(u){
  return ICON_BY_ID[u.id] || iconPisang;
}

umkmData.forEach((u) => {
  const marker = L.marker(u.koordinat, { icon: getIconForUmkm(u) }).addTo(map);
  marker.bindPopup(popupHTML(u));
  markerById.set(u.id, marker);
});


// ============================
// Legend
// ============================
const legendEl = document.getElementById("legend");

const ICON_URL_BY_ID = {
  "umkm-1": "img/icons/kopi.png",
  "umkm-2": "img/icons/pisang.png",
  "umkm-3": "img/icons/jeruk.png",
};

function getIconUrl(u){
  return ICON_URL_BY_ID[u.id] || "img/icons/pisang.png";
}

function legendItemHTML(u){
  return `
    <div class="legend-item" data-id="${u.id}">
      <img class="legend-ico" src="${getIconUrl(u)}" alt="">
      <div>
        <p class="legend-title">${u.nama_umkm}</p>
        <p class="legend-sub">${u.jenis_usaha} • ${u.jam_operasional}</p>
      </div>
    </div>
  `;
}

if (legendEl) {
  legendEl.innerHTML = umkmData.map(legendItemHTML).join("");
}

// ============================
// Render Daftar UMKM + Slider
// ============================
const listEl = document.getElementById("umkmList");

function renderList() {
  listEl.innerHTML = "";
  umkmData.forEach((u, idx) => {
    const card = document.createElement("article");
    card.className = "umkm-card" + (idx % 2 === 1 ? " reverse" : "");
    card.id = u.id;

    const sliderImgs = (u.gambar || []).map((img, i) =>
      `<img src="${img}" class="${i === 0 ? "active" : ""}" alt="Foto ${u.nama_umkm}">`
    ).join("");

    card.innerHTML = `
      <div class="umkm-text">
        <h3>${u.nama_umkm}</h3>
        <p style="margin:0;color:#444">${u.cerita_singkat || ""}</p>

        <div class="kv">
          <span class="pill"><b>Jenis:</b> ${u.jenis_usaha}</span>
          <span class="pill"><b>Jam:</b> ${u.jam_operasional}</span>
          <span class="pill"><b>Pemilik:</b> ${u.nama_pemilik || "-"}</span>
        </div>

        <div class="umkm-actions">
          <a class="btn-small primary link-btn" href="detail.html?id=${encodeURIComponent(u.id)}">
            Informasi lebih lanjut
          </a>
          <button class="btn-small outline" data-focus="${u.id}">Lihat di peta</button>
        </div>
      </div>

      <div class="umkm-media">
        <div class="slider" data-slider="${u.id}">
          ${sliderImgs}
          <button class="nav prev" aria-label="Sebelumnya">‹</button>
          <button class="nav next" aria-label="Berikutnya">›</button>
        </div>
      </div>
    `;

    listEl.appendChild(card);
  });
}
renderList();

// focus map from list
document.addEventListener("click", (e) => {
  const btnFocus = e.target.closest("[data-focus]");
  if (!btnFocus) return;

  const id = btnFocus.dataset.focus;
  const u = umkmData.find(x => x.id === id);
  if (!u) return;

  document.querySelector("#peta").scrollIntoView({behavior:"smooth", block:"start"});
  setTimeout(() => {
    map.setView(u.koordinat, 16, { animate: true });
    const m = markerById.get(u.id);
    if (m) m.openPopup();
  }, 450);
});

// slider nav (for index)
document.addEventListener("click", e => {
  const btn = e.target.closest(".slider .nav");
  if (!btn) return;

  const slider = btn.closest(".slider");
  const images = slider.querySelectorAll("img");
  if (!images.length) return;

  let index = [...images].findIndex(img => img.classList.contains("active"));
  if (index < 0) index = 0;

  images[index].classList.remove("active");

  if (btn.classList.contains("next")) index = (index + 1) % images.length;
  else index = (index - 1 + images.length) % images.length;

  images[index].classList.add("active");
});

function refreshMap(){
  setTimeout(() => map.invalidateSize(true), 200);
}

window.addEventListener("load", refreshMap);
window.addEventListener("resize", refreshMap);

// saat scroll ke peta (karena anchor / navbar)
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href="#peta"]');
  if (!a) return;
  // setelah animasi scroll selesai, refresh
  setTimeout(() => map.invalidateSize(true), 600);
});

setTimeout(() => {
  map.invalidateSize(true);   // ⬅️ TAMBAH INI
  map.setView(u.koordinat, 16, { animate: true });
  const m = markerById.get(u.id);
  if (m) m.openPopup();
}, 450);

// ============================
// STORY AUTO SLIDER
// ============================
(function initStorySlider(){
  const slider = document.getElementById("storySlider");
  if (!slider) return;

  const imgs = Array.from(slider.querySelectorAll("img"));
  const dotsWrap = document.getElementById("storyDots");
  const btnPrev = slider.querySelector(".story-nav.prev");
  const btnNext = slider.querySelector(".story-nav.next");

  let idx = 0;
  let timer = null;
  const intervalMs = 4000;

  // build dots
  if (dotsWrap){
    dotsWrap.innerHTML = imgs.map((_, i) =>
      `<button class="story-dot ${i===0?"active":""}" data-i="${i}" aria-label="Slide ${i+1}"></button>`
    ).join("");
  }

  function show(i){
    imgs[idx].classList.remove("active");
    if (dotsWrap) dotsWrap.querySelectorAll(".story-dot")[idx]?.classList.remove("active");

    idx = (i + imgs.length) % imgs.length;

    imgs[idx].classList.add("active");
    if (dotsWrap) dotsWrap.querySelectorAll(".story-dot")[idx]?.classList.add("active");
  }

  function next(){ show(idx + 1); }
  function prev(){ show(idx - 1); }

  function start(){
    stop();
    timer = setInterval(next, intervalMs);
  }
  function stop(){
    if (timer) clearInterval(timer);
    timer = null;
  }
  function restart(){
    start();
  }

  btnNext?.addEventListener("click", () => { next(); restart(); });
  btnPrev?.addEventListener("click", () => { prev(); restart(); });

  dotsWrap?.addEventListener("click", (e) => {
    const b = e.target.closest(".story-dot");
    if (!b) return;
    show(parseInt(b.dataset.i, 10));
    restart();
  });

  // pause saat hover (desktop)
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  start();
})();

// ============================
// Legend Render + Click Focus
// ============================

// mapping icon berdasarkan ID UMKM (karena id kamu umkm-1, umkm-2, umkm-3)

function getIconUrlByUmkm(u){
  return ICON_URL_BY_ID[u.id] || "img/icons/pisang.png";
}

function legendItemHTML(u){
  return `
    <div class="legend-item" data-id="${u.id}">
      <img class="legend-ico" src="${getIconUrlByUmkm(u)}" alt="">
      <div>
        <p class="legend-title">${u.nama_umkm}</p>
        <p class="legend-sub">${u.jenis_usaha} • ${u.jam_operasional}</p>
      </div>
    </div>
  `;
}

// render semua item legend
function renderLegend(){
  if (!legendEl) return;
  legendEl.innerHTML = umkmData.map(legendItemHTML).join("");
}
renderLegend();

// klik legend -> fokus map + buka popup
legendEl.addEventListener("click", (e) => {
  const item = e.target.closest(".legend-item");
  if (!item) return;

  const id = item.dataset.id;
  const u = umkmData.find(x => x.id === id);
  if (!u) return;

  map.setView(u.koordinat, 16, { animate: true });
  const marker = markerById.get(id);
  if (marker) marker.openPopup();
});

umkmData.forEach((u) => {
  const marker = L.marker(u.koordinat, { icon: getIconForUmkm(u) }).addTo(map);
  marker.bindPopup(popupHTML(u));
  markerById.set(u.id, marker);
});
