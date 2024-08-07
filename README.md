# Posyandu ILP

Posyandu ILP adalah aplikasi untuk pendataan kesehatan dasar yang digunakan oleh pendata sebagai alat untuk mengumpulkan data kelompok masyarakat. Aplikasi ini dikembangkan menggunakan React.js dan Tailwind CSS untuk tampilan antarmuka yang modern dan responsif.

## Deskripsi

Aplikasi ini dirancang untuk memfasilitasi pendataan kesehatan pada berbagai jenjang umur dalam komunitas. Data yang dikumpulkan meliputi informasi dasar kesehatan, yang kemudian dapat digunakan untuk analisis dan pelaporan. Dengan menggunakan Firebase sebagai backend, aplikasi ini memastikan data tersimpan dengan aman dan dapat diakses dengan mudah oleh pengguna yang berwenang.

## Fitur

- **Autentikasi Pengguna**: Login dan pendaftaran menggunakan Firebase Authentication.
- **Pendataan Kesehatan**: Formulir untuk memasukkan data kesehatan dasar.
- **Komponen Lazy Load**: Memuat komponen hanya saat dibutuhkan untuk meningkatkan performa aplikasi.
- **Desain Responsif**: Tampilan yang optimal di berbagai perangkat menggunakan Tailwind CSS.
- **Keamanan Data**: Implementasi OWASP ZAP untuk pengujian keamanan aplikasi.

## Rencana Pengembangan

1. **Integrasi Chatbot**: Menggunakan Dialogflow untuk membantu pengguna memahami alur aplikasi dan memberikan bantuan real-time.
2. **Keamanan Data**:
   - Penggunaan OWASP ZAP untuk mendeteksi kerentanan keamanan.
   - Implementasi AI untuk mendeteksi aktivitas mencurigakan dan mencegah serangan siber.
3. **GitHub Copilot**: Memanfaatkan GitHub Copilot untuk efisiensi pengembangan kode.
4. **Dashboard**: Pengembangan dashboard untuk visualisasi data kesehatan yang mudah dipahami oleh pengguna.

## Struktur Folder

posyandu-ilp/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── assets/ // Static assets (images, fonts, etc.)
│ │ └── styles/ // Global styles (CSS, Tailwind, etc.)
│ │ └── index.css // Global CSS file
│ ├── components/ // Reusable components (buttons, inputs, etc.)
│ ├── pages/ // Page components (Landing, Auth, Admin, etc.)
│ │ ├── Landing/ // Landing page components
│ │ │ └── Landing.js
│ │ ├── Auth/ // Authentication page components
│ │ │ ├── Login.js
│ │ │ └── ResetPassword.js
│ │ ├── Admin/ // Admin page components
│ │ │ ├── Admin.js
│ │ │ └── Sidebar.js
│ ├── context/ // Context providers for global state management
│ ├── hooks/ // Custom hooks
│ ├── services/ // API services (Firebase, etc.)
│ │ └── firebase.js
│ ├── App.js // Main App component
│ ├── index.js // Entry point
│ └── utils/ // Utility functions
├── .env // Environment variables
├── .gitignore // Git ignore file
├── package.json // Project dependencies and scripts
├── postcss.config.js // PostCSS configuration file
└── tailwind.config.js // Tailwind CSS configuration

 ## Disclaimer

This application has been personally developed to assist my village with health data registration. Please note that this project is not affiliated with or supported by any government entity.


