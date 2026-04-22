# MMAC — Marcos Martínez Analista Contable

Sitio web profesional para asesoramiento impositivo y contable, con enfoque en automatización de procesos fiscales. Diseñado para monotributistas, autónomos, freelancers y pymes.

## 🧾 Propuesta de valor

- Liquidación de **IVA, Ingresos Brutos y Ganancias 4° categoría (SIRADIG)**
- **Monotributo** inteligente (categorización, topes, vencimientos)
- **Convenio Multilateral** y facturación a consorcios
- **Automatización de procesos** con Python y SQL (hasta 90% menos tiempo operativo)
- Atención 100% online, directa con Marcos

## 🚀 Demo local

```bash
# Clonar repositorio
git clone https://github.com/tuusuario/mmac-web.git
cd mmac-web

# Crear entorno virtual (recomendado)
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# Instalar dependencias
pip install flask

# Ejecutar
python main.py

Abrir http://127.0.0.1:5000 en el navegador.

📁 Estructura del proyecto

mmac-web/
├── main.py                 # Servidor Flask
├── templates/
│   └── index.html          # Frontend completo (HTML/CSS/JS embebido)
├── static/
│   ├── css/
│   │   └── styles.css      # Estilos principales
│   └── js/
│       └── main.js         # Interacciones (cursor, scroll reveal, formulario)
└── README.md

🎨 Stack técnico del sitio
Capa	Tecnología
Backend	Flask (Python)
Frontend	HTML5, CSS3, JavaScript vanilla
Fuentes	DM Serif Display, Outfit, DM Mono
Animaciones	Intersection Observer, CSS keyframes
Despliegue	Compatible con Render, PythonAnywhere, Vercel (vía Flask)
✨ Características destacadas
Cursor personalizado con efecto hover en elementos interactivos

Reveal on scroll (las secciones aparecen al hacer scroll)

Navbar dinámica (cambia de color al hacer scroll)

Terminal interactiva animada (simula automatizaciones reales)

Formulario de contacto que redirige a WhatsApp

Diseño responsive (mobile first, breakpoint en 900px)

Grid de servicios con hover effects