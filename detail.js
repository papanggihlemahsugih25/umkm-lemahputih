function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function stars(n){
  const x = Math.max(0, Math.min(5, Number(n || 0)));
  const full = "★".repeat(x);
  const empty = "☆".repeat(5 - x);
  return `<span class="stars">${full}${empty}</span>`;
}

const id = getParam("id");
const u = umkmData.find(x => x.id === id);

if (!u){
  document.body.innerHTML = `
    <div style="padding:24px">
      UMKM tidak ditemukan. <a href="index.html">Kembali</a>
    </div>`;
} else {
  // set title
  document.title = `Detail - ${u.nama_umkm}`;

  // name + addr
  document.getElementById("detailName").textContent = u.nama_umkm;
  document.getElementById("detailAddr").textContent = u.alamat_lengkap;

  // desc
  document.getElementById("detailDesc").textContent = u.deskripsi_lengkap || "";

  // CTA links
  const wa = document.getElementById("ctaWa");
  const ig = document.getElementById("ctaIg");
  const maps = document.getElementById("ctaMaps");

  wa.href = `https://wa.me/${u.kontak_wa}`;
  ig.href = u?.sosial_media?.instagram || "#";
  maps.href = `https://www.google.com/maps?q=${u.koordinat[0]},${u.koordinat[1]}`;

  document.getElementById("ctaTitle").textContent = `Pesan “${u.nama_umkm}”`;

  // Slider
  const slider = document.getElementById("detailSlider");
  const imgs = (u.gambar || []).map((img, i) =>
    `<img src="${img}" class="${i===0?'active':''}" alt="Foto ${u.nama_umkm}">`
  ).join("");

  slider.innerHTML = `
    <div class="slider big">
      ${imgs || `<img class="active" src="" alt="">`}
      <button class="nav prev" aria-label="Sebelumnya">‹</button>
      <button class="nav next" aria-label="Berikutnya">›</button>
    </div>
  `;

// Produk (permanen) - harga masuk ke deskripsi
const produkList = document.getElementById("produkList");

// aman kalau produk kosong
const products = u.produk || [];

if (!products.length) {
  produkList.innerHTML = `<p class="muted" style="margin:0">Produk unggulan belum ditambahkan.</p>`;
} else {
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "produk-card";

    const hargaText = p.harga ? `Harga: <b>${p.harga}</b>` : `Harga: <b>-</b>`;
    const detailText = p.detail ? p.detail : "Detail produk belum ditambahkan.";

    card.innerHTML = `
      <div class="produk-head">
        <h4 class="produk-name">${p.nama || "Produk"}</h4>
        <span class="produk-pill">${p.kategori || "Produk unggulan"}</span>
      </div>
      <p class="produk-desc">${detailText}</p>
      <p class="produk-price">${hargaText}</p>
    `;

    produkList.appendChild(card);
  });
}

  // Reviews
  const reviewList = document.getElementById("reviewList");
  const reviews = u.reviews || [];
  if (!reviews.length){
    reviewList.innerHTML = `<p class="muted" style="margin:0">Belum ada review.</p>`;
  } else {
    reviews.forEach(r => {
      const card = document.createElement("div");
      card.className = "review-card";
      card.innerHTML = `
        ${stars(r.bintang || 5)}
        <p class="review-text">“${r.teks}”</p>
        <p class="review-by">— ${r.nama || "Pengunjung"}</p>
      `;
      reviewList.appendChild(card);
    });
  }
}

// slider nav (for detail)
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

