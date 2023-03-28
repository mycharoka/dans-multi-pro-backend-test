# DANS MULTI PRO BACKEND TEST
## Tahapan Instalasi
1. Aplikasi ini menggunakan NodeJS `v16.16.0` dan PostgreSQL `v13`
2. Lakukan instalasi package dengan `npm i`
3. Kemudian copy file `.env.example`  menjadi `.env`  dan isi file sesuai dengan environment development
4. Lakukan proses migrasi table database dengan perintah `npm run migration`, jika migrasi berhasil akan muncul di terminal pemberitahuan bahwa migrasi berhasil
5. Untuk memeriksa aplikasi berjalan jalankan `npm run dev`
6. Dan untuk memeriksa apakah API di aplikasi ini dapat berjalan bisa dengan menggunakan `http://localhost:${PORT_SESUAI_ENV}/api/safe`, jika pada chrome atau via terminal muncul response `{msg: 'safe'}` maka endpoint pada aplikasi ini bisa digunakan

## Contributing

- [MUHAMMAD VIDI M](https://github.com/mycharoka)
