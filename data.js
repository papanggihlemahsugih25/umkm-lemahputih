// Isi data UMKM kamu di sini.
// Pastikan: id unik, koordinat [LAT, LON], gambar berupa array foto 3-4 gambar.

const umkmData = [
  {
    id: "umkm-1",
    nama_umkm: "Kopi Cakra Panimunan",
    nama_pemilik: "Pak Hadi Komara",
    alamat_lengkap: "X5G7+H9J, Jl. Cakrawati, Lemah Putih, Kec. Lemahsugih, Kabupaten Majalengka, Jawa Barat 45465",
    koordinat: [-7.024016183229183, 108.16277858972558],
    kontak_wa: "6285862813001",
    sosial_media: {
      instagram: "https://instagram.com/"
    },
    jam_operasional: "Jam fleksibel, melayani jika sudah janjian (via WhatsApp).",
    jenis_usaha: "Kuliner",
    wilayah_pemasaran: "Menjangkau Jakarta, Bandung, Tegal, wilayah Jawa Barat dan sekitarnya, hingga pasar internasional (Korea Selatan).",

    // SLIDER FOTO (taruh foto kamu di folder img/umkm-1/)
    gambar: [
      "img/umkm-1/1.jpg",
      "img/umkm-1/2.jpg"
    ],

    // Ringkasan untuk card & popup
    cerita_singkat:
      "Dirintis sejak 2016, UMKM kopi ini berkembang dari kebun sendiri dengan dukungan pembinaan pengolahan kopi dan peralatan produksi. Fokus pada kopi asli Desa Lemahputih dengan cita rasa khas Cakrabuana dan produksi sesuai musim serta permintaan.",

    deskripsi_lengkap: `UMKM kopi ini mulai dirintis pada tahun 2016, berawal dari pertemuan dengan seorang pembeli asal Korea Selatan yang mencari kopi lokal. Dari pertemuan tersebut, Pak Hadi mendapat dukungan modal awal untuk membeli kebun kopi dan mulai mengelola usahanya secara mandiri.

                        Dalam proses pengembangannya, Pak Hadi mendapat pembinaan pengolahan kopi dari mitra asal Tiongkok, khususnya pada metode full wash dan natural, serta bantuan peralatan roasting. Seiring meningkatnya permintaan, pada tahun 2019 UMKM ini juga menerima dukungan dari Dinas Pertanian berupa tempat penjemuran dan mesin pengolahan kopi.

                        Hingga kini, usaha ini tetap berfokus pada pengembangan kopi asli Desa Lemahputih dengan cita rasa khas Cakrabuana, tanpa mencampurkannya dengan kopi dari daerah lain. Produksi dilakukan sesuai musim dan permintaan, dengan melibatkan tenaga kerja lokal dari kebun hingga proses pengolahan.`,

    // PRODUK + HARGA (2 kolom)
    // detail (opsional) akan muncul saat bubble dibuka
    produk: [
      { nama: "Gabah basah", detail: "Cocok untuk pengolahan lanjutan sesuai kebutuhan pembeli.", harga: "Mulai Rp 45.000 / kg" },
      { nama: "Green bean – Full wash", detail: "Profil rasa bersih (clean), cocok untuk seduh manual brew.", harga: "Mulai Rp 120.000 / kg" },
      { nama: "Green bean – Natural", detail: "Cenderung fruity dan body lebih tebal.", harga: "Mulai Rp XX.XXX / kg" },
      { nama: "Kaskara", detail: "Teh dari kulit kopi, wangi dan unik.", harga: "Mulai Rp 300.000 / kg" }
    ],

    // REVIEW
    reviews: [
      { nama: "Pengunjung", bintang: 5, teks: "Aromanya kuat dan rasanya clean, mantap!" },
      { nama: "Pembeli", bintang: 5, teks: "Fast response, pengemasan rapi." },
      { nama: "Wisatawan", bintang: 5, teks: "Kaskara-nya unik, recommended buat oleh-oleh." }
    ]
  },

  // Contoh UMKM kedua (hapus kalau belum ada)
  {
    id: "umkm-2",
    nama_umkm: "Sale Pisang Ambon HLD",
    nama_pemilik: "",
    alamat_lengkap: "Des, Kp. Ciloa, RT.03/RW.02, Lemah Putih, Kec. Lemahsugih, Kabupaten Majalengka, Jawa Barat 45465",
    koordinat: [-7.006891152950324, 108.16851998505358],
    kontak_wa: "",
    sosial_media: {
      instagram: "https://instagram.com/"
    },
    jam_operasional: "11.00–17.00 WIB",
    jenis_usaha: "Kuliner",
    wilayah_pemasaran: "Seluruh Indonesia (via ekspedisi)",
    gambar: [
      "img/umkm-2/1.jpg",
      "img/umkm-2/2.jpg"
    ],
    cerita_singkat:
      "UMKM sale pisang rumahan yang dirintis bersama istri setelah merantau ke Sumedang. Mengolah pisang ambon pilihan melalui proses panjang hingga menghasilkan keripik pisang yang selalu diproduksi segar.",
    deskripsi_lengkap:
      `UMKM sale pisang ini dirintis setelah pemilik kembali ke kampung halaman usai bekerja di Sumedang. Bersama istri, usaha ini dibangun dari nol dengan produksi awal sekitar satu kuintal sale pisang. Seiring waktu, usaha terus berkembang dan kini melibatkan 4–6 tenaga kerja lokal.

Proses produksi dilakukan secara bertahap dan teliti. Pisang ambon mentah terlebih dahulu diperam selama kurang lebih satu minggu, kemudian dikupas, diiris, dan dijemur atau dioven. Proses pengovenan dilakukan selama satu hari satu malam sebelum pisang digoreng dan dikemas menjadi keripik pisang siap jual.

UMKM ini secara konsisten menggunakan pisang ambon sebagai bahan baku utama untuk menjaga cita rasa. Produksi keripik pisang dilakukan secara rutin untuk memenuhi permintaan, meskipun saat ini pemasaran masih dilakukan secara langsung tanpa melalui media sosial.`,
    produk: [
      { nama: "Sale Pisang", detail: "Renyah dan gurih.", harga: "Rp 40.000 / kg" },
    ],
    reviews: [
      { nama: "Pelanggan", bintang: 5, teks: "Bumbunya nempel dan keripiknya tipis renyah!" },
      { nama: "Pembeli", bintang: 5, teks: "Enak buat oleh-oleh, pengiriman aman." }
    ]
  },

{
  id: "umkm-3",
  nama_umkm: "Kalua Jeruk Barokah",
  nama_pemilik: "Ibu Nah Jumanah",
  alamat_lengkap: "Cilengkrang, RT.02/RW.06, Lemah Putih, Kec. Lemahsugih, Kabupaten Majalengka, Jawa Barat 45465",
  koordinat: [-6.993907274932034, 108.1800932400703],
  kontak_wa: "6285353218567",
  sosial_media: {
    instagram: "https://instagram.com/"
  },
  jam_operasional: "08.00 - 17.00 WIB",
  jenis_usaha: "Kuliner",
  wilayah_pemasaran: "Seluruh Indonesia",

  gambar: [
    "img/umkm-3/1.jpg",
    "img/umkm-3/2.jpg"
  ],

  cerita_singkat:
    "UMKM manisan kulit jeruk yang dirintis sejak 1983 oleh Ibu Nah Jumanah. Berawal dari pengalaman merantau ke Bandung, usaha ini menghadirkan manisan jeruk dengan proses tradisional dan cita rasa khas.",

  deskripsi_lengkap: `Jeruk Barokah merupakan UMKM yang telah berdiri sejak tahun 1983 dan dirintis oleh Ibu Nah Jumanah. Usaha ini berawal dari pengalaman merantau ke Bandung untuk mencari ilmu dan pengalaman kerja. Saat hendak kembali ke kampung halaman, majikan berpesan agar membawa oleh-oleh. Dari situlah muncul ide untuk mencoba membuat manisan kulit jeruk, yang kemudian dicicipi dan mendapat respons positif.

Proses produksi dilakukan secara bertahap dan membutuhkan ketelatenan. Kulit jeruk dibagi menjadi empat bagian, diambil bagian dalamnya, kemudian dikupas dan diiris sesuai ukuran kemasan. Kulit jeruk selanjutnya dicuci menggunakan air kapur sirih, dijemur agar dapat disimpan hingga musim berikutnya, lalu direbus hingga merekah. Setelah itu, kulit jeruk dikucuri air mengalir selama satu malam hingga bersih sebelum akhirnya dimasak bersama gula putih dan gula merah selama kurang lebih lima jam.

Dalam kegiatan produksinya, UMKM ini melibatkan sekitar delapan tenaga kerja lokal, terdiri dari tenaga pengupasan dan pengambilan bahan baku dari kebun. Hingga kini, Jeruk Barokah tetap mempertahankan cara pengolahan tradisional untuk menjaga cita rasa manisan kulit jeruk yang khas dan konsisten.`,

  produk: [
    { nama: "Kalua Jeruk Kecil", detail: "Kemasan mika kecil.", harga: "Rp 5.000/pack" },
    { nama: "Kalua Jeruk Sedang", detail: "Kemasan mika sedang.", harga: "Rp 10.000/pack" },
    { nama: "Kalua Jeruk Besar", detail: "Kemasan mika besar.", harga: "Rp 30.000/pack" }
  ],

  reviews: [
    { nama: "Pelanggan", bintang: 5, teks: "Renyah dan manisnya pas." },
    { nama: "Pembeli", bintang: 5, teks: "Selalu fresh dan enak." }
  ]
},

];
