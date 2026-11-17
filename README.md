<div align="center">

# ⚡ QR Generator DN23

<a href="https://github.com/DannyCanario/qr_generator_DN23">
  <img src="https://img.shields.io/badge/Status-Active-06B6D4?style=for-the-badge&logo=rocket&logoColor=white" alt="Status">
</a>
<a href="https://react.dev/">
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
</a>
<a href="https://tailwindcss.com/">
  <img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
</a>
<a href="https://github.com/DannyCanario/qr_generator_DN23/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-F43F5E?style=for-the-badge" alt="License">
</a>

<p align="center">
  <b>Una aplicación web futurista y de ultra-alta velocidad para transformar enlaces largos en códigos QR personalizados, descargables y listos para compartir al instante.</b>
</p>

</div>

---

## 💎 Características Principales

- **Renderizado Óptico Instantáneo:** Generación en tiempo real en el cliente sin latencia de servidores externos ni problemas de CORS.
- **Paleta de Temas Holográficos:** 6 combinaciones de colores futuristas y vibrantes (*Neon Cyber*, *Emerald Matrix*, *Electric Indigo*, *Cyber Sunset*, *Ice Cyan*, *Pure Titanium*).
- **Exportación en Alta Resolución:** Descarga directa en formato PNG con corrección de errores avanzada (`Level H`).
- **Copiar al Portapapeles con 1 Clic:** Copia la imagen QR directamente en la memoria portapapeles del sistema operativo lista para pegar (`Ctrl + V`), acompañada de notificaciones visuales (*toasts*).
- **Entorno Inmersivo:** Fondo animado con malla de ciber-espacio y efectos de cristal líquido (*Glassmorphism*).

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React + Vite** | Motor de interfaz de usuario ultrarrápido |
| **Tailwind CSS (v4)** | Estilizado modular y diseño totalmente responsivo |
| **`qrcode.react`** | Biblioteca de renderizado QR basada en Canvas |
| **Framer Motion** | Animaciones fluidas, micro-interacciones y transiciones |
| **Sonner** | Sistema de notificaciones *toast* modernas |
| **Lucide React** | Iconografía vectorial de precisión |

---

## 📂 Estructura del Proyecto

```text
qr_generator_DN23/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CyberBackground.jsx # Fondo animado futurista con rejilla y partículas
│   │   ├── QrPreview.jsx       # Vista previa holográfica con láser de escaneo
│   │   └── ...                 # Componentes modulares de interfaz
│   ├── hooks/
│   │   └── useQrActions.js     # Lógica optimizada de descarga y portapapeles
│   ├── App.jsx                 # Contenedor principal y gestión de estados
│   ├── main.jsx                # Punto de entrada de React + Toaster
│   └── index.css               # Estilos globales, gradientes y efectos metálicos
├── .gitignore
├── index.html
├── package.json
└── README.md


💻 Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
git clone https://github.com/DannyCanario/qr_generator_DN23.git

2. Accede al directorio del proyecto:
cd qr_generator_DN23

3. Instala las dependencias:
npm install

4. Inicia el servidor de desarrollo:
npm run dev

5. Abre la aplicación: Entra en http://localhost:5173 (o el puerto que indique tu terminal).

🗺️ Próximas Mejoras (Roadmap)
[ ] Añadir acortador de URLs integrado (TinyURL / is.gd).
[ ] Soporte para insertar logotipos personalizados en el centro del QR.
[ ] Historial local de códigos generados con almacenamiento en localStorage.

👨‍💻 Autor
Desarrollado por Danny Canario
