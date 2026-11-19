# Portfolio images

Simpan gambar lokal untuk halaman portofolio di folder ini.

- Foto utama: tambahkan `foto-profil.jpg`, lalu ubah `src` pada elemen `.hero-image` di `index.html` menjadi `public/images/foto-profil.jpg`.
- Screenshot proyek: tambahkan gambar seperti `capture-studio.jpg`, `capture-dashboard.jpg`, dan `capture-mobile.jpg`, lalu ubah `src` pada tiap elemen `.capture-image` di `index.html` ke nama file yang sesuai.
- Sertifikat: tambahkan gambar seperti `sertifikat-web.jpg`, lalu ubah `src` pada `.achievement-image` di section sertifikat.
- Dokumentasi kegiatan: tambahkan foto seperti `kegiatan-workshop.jpg`, lalu ubah `src` pada `.achievement-image` di section kegiatan.
- Placeholder SVG yang dipakai sekarang akan tetap tampil sampai `src` diperbarui.

Ganti judul, tahun, dan keterangan placeholder di kartu sertifikat/kegiatan dengan informasi asli. Duplikasikan elemen `<article class="achievement-card">` untuk menambahkan kartu lain. Gunakan gambar yang memang boleh dipublikasikan. Untuk situs statis ini, gambar disimpan sebagai file di folder `public/images` dan dirujuk langsung dari HTML; tidak ada unggah ke server otomatis.
