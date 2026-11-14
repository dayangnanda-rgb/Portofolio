# Portofolio Dayang Nanda

Website portofolio statis yang dibuat dengan HTML dan CSS.

## Struktur proyek

```text
portofolio/
├── index.html
├── style.css
├── app/
│   ├── Classes/
│   │   └── NavigationMenu.js
│   └── main.js
├── public/
│   └── favicon.svg
└── README.md
```

`index.html` berisi struktur dan konten halaman. `style.css` mengatur tampilan
dan responsivitas. Kode interaksi berada di `app/`: kelas `NavigationMenu`
mengelola menu pada layar kecil, sedangkan `main.js` menghubungkan kelas itu
dengan elemen halaman. Folder `public/` berisi aset publik seperti favicon.

Struktur ini tetap menggunakan HTML, CSS, dan JavaScript statis; folder
`Controllers` atau `Models` PHP tidak ditambahkan karena website ini tidak
menggunakan backend atau data dinamis.

## Menjalankan

Buka `index.html` di browser. Tidak diperlukan instalasi atau proses build.

## Penyesuaian

Ubah konten, detail profil, dan alamat email di `index.html`. Gaya visual dan
aturan responsif berada di `style.css`; interaksi menu berada di
`app/Classes/NavigationMenu.js`.
