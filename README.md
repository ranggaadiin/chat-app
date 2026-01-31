# React Chat App (Real-Time)

## Deskripsi
Chat App ini adalah aplikasi web **real-time chat** yang dibangun menggunakan **React** dan **Socket.IO**.  
Aplikasi ini memungkinkan pengguna untuk mengirim dan menerima pesan secara langsung tanpa perlu reload halaman.  
Project ini dibuat sebagai bagian dari **portfolio Software Engineer Intern** untuk menunjukkan pemahaman React dan komunikasi real-time.

---

## Teknologi
- React (Functional Components)
- Socket.IO Client
- JavaScript (ES6)
- CSS
- Node.js (untuk server Socket.IO)

---

## Fitur
- Pengiriman pesan secara real-time
- Pesan langsung muncul setelah dikirim
- Input pesan interaktif
- UI sederhana dan fokus pada fungsionalitas
- Koneksi client–server menggunakan Socket.IO

---

## Alur Kerja Aplikasi
1. User membuka aplikasi React
2. Frontend melakukan koneksi ke server menggunakan Socket.IO
3. User mengirim pesan melalui input
4. Pesan dikirim sebagai event ke server
5. Server meneruskan pesan ke client lain
6. Pesan diterima dan dirender ulang menggunakan state di React

---

## Implementasi Teknis
- State pesan dikelola menggunakan `useState`
- Listener Socket ditangani menggunakan `useEffect`
- Event Socket digunakan untuk mengirim dan menerima pesan
- Rendering pesan dilakukan secara dinamis berdasarkan state

---

## Struktur Folder
chat-app/
├── public/
├── src/
│ ├── App.js
│ ├── index.js
│ ├── components/
│ └── styles/
├── package.json
└── README.md

---

## Cara Menjalankan
1. Clone repository:
   ```bash
   git clone https://github.com/ranggaadiin/chat-app.git
Masuk ke folder project:

cd chat-app
Install dependencies:
npm install

Jalankan aplikasi:
npm start

Pastikan server Socket.IO sudah berjalan agar fitur chat berfungsi dengan baik.

Link
GitHub: https://github.com/ranggaadiin/chat-app

