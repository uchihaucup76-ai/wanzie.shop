# Signal — Toko Nomor Virtual (RumahOTP)

Website jual nomor virtual OTP (WhatsApp, Telegram, dll) pakai provider **RumahOTP**,
dibangun dengan Next.js 14 + Supabase, siap deploy ke Vercel.

## Fitur

- Login/register user (Supabase Auth)
- Saldo user tersimpan di database, top up otomatis via QRIS
- Beli nomor virtual: pilih aplikasi → negara → operator → bayar dari saldo
- Kode OTP muncul otomatis di dashboard (polling tiap beberapa detik)
- Riwayat order & markup harga jual otomatis (bisa diatur lewat env var)
- API key RumahOTP disimpan aman di server, tidak pernah terekspos ke browser

## 1. Setup Supabase

1. Buat project baru di [supabase.com](https://supabase.com).
2. Buka **SQL Editor** → New query → copy-paste seluruh isi file `supabase/schema.sql` → Run.
3. Buka **Project Settings > API**, catat:
   - `Project URL` → jadi `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → jadi `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → jadi `SUPABASE_SERVICE_ROLE_KEY` (RAHASIA, jangan disebar)
4. Di **Authentication > Providers**, pastikan Email provider aktif. Kalau mau skip
   verifikasi email saat testing, matikan "Confirm email" di **Authentication > Settings**.

## 2. Setup API Key RumahOTP

1. Login ke akun RumahOTP kamu → menu Developer/API.
2. Copy API key kamu → jadi `RUMAHOTP_API_KEY`.

## 3. Konfigurasi environment variable

Copy `.env.example` jadi `.env.local`, isi semua value sesuai langkah di atas:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_MARKUP_PERCENT` itu persentase keuntungan yang ditambahkan ke harga modal
RumahOTP. Contoh: modal Rp2.000, markup 20% → dijual Rp2.400.

## 4. Jalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 5. Upload ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## 6. Deploy ke Vercel

1. Login ke [vercel.com](https://vercel.com) pakai akun GitHub.
2. **Add New Project** → pilih repo yang baru di-push.
3. Di step **Environment Variables**, masukkan semua variabel dari `.env.local` kamu
   (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`,
   `RUMAHOTP_API_KEY`, `RUMAHOTP_BASE_URL`, `NEXT_PUBLIC_MARKUP_PERCENT`).
4. Klik **Deploy**. Selesai — website kamu live di `nama-project.vercel.app`.

## Struktur folder penting

```
src/app/                 halaman (landing, login, register, dashboard)
src/app/api/              route API (proxy aman ke RumahOTP + logic saldo)
src/lib/rumahotp.ts        semua fungsi panggil API RumahOTP
src/lib/supabase/          koneksi Supabase (client, server, middleware)
supabase/schema.sql        skema database + fungsi saldo
```

## Catatan penting

- Jangan pernah commit file `.env.local` ke GitHub (sudah di-ignore lewat `.gitignore`).
- `SUPABASE_SERVICE_ROLE_KEY` dan `RUMAHOTP_API_KEY` cuma dipakai di server (route API),
  tidak pernah dikirim ke browser.
- Project ini bukan situs resmi RumahOTP, hanya contoh integrasi API mereka.
