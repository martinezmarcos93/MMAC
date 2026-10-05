# MMAC — Marcos Martínez Analista Contable

Sitio web profesional para servicios de asesoramiento impositivo y contable, orientado a monotributistas, autónomos, freelancers y pymes. El proyecto combina una presentación comercial responsive con una base técnica en Flask preparada para automatizaciones y futuras integraciones.

## Propuesta de valor

MMAC centraliza la presentación de servicios contables y fiscales y comunica una orientación hacia la automatización de procesos administrativos.

- IVA e Ingresos Brutos.
- Ganancias de cuarta categoría / SIRADIG.
- Monotributo: categorización, topes y vencimientos.
- Convenio Multilateral.
- Facturación y gestión administrativa.
- Automatización de procesos fiscales mediante Python y SQL.
- Atención remota y contacto directo.

## Stack

| Capa | Tecnología |
|---|---|
| Backend | Python + Flask |
| Frontend | HTML5 + CSS3 + JavaScript vanilla |
| Tipografías | DM Serif Display, Outfit, DM Mono |
| Animaciones | CSS keyframes + Intersection Observer |
| Desarrollo local | Flask development server |

## Características

- Diseño responsive con enfoque mobile-first.
- Navbar dinámica al hacer scroll.
- Cursor personalizado e interacciones hover.
- Animaciones mediante Intersection Observer.
- Terminal visual interactiva para representar automatizaciones.
- Formulario de contacto con derivación a WhatsApp.
- Grilla de servicios con estados interactivos.

## Estructura

```text
MMAC/
├── main.py
├── templates/
│   └── index.html
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── env.example
└── README.md
```

## Desarrollo local

Requisitos: Python 3.10+ y pip.

```bash
git clone https://github.com/martinezmarcos93/MMAC.git
cd MMAC
python -m venv venv

# Linux/macOS
source venv/bin/activate

# Windows
venv\\Scripts\\activate

pip install flask
python main.py
```

Abrí `http://127.0.0.1:5000` en el navegador.

## Despliegue y seguridad

Las credenciales y variables de producción deben mantenerse fuera del código fuente. No se deben almacenar secretos, tokens ni credenciales reales en el repositorio. `env.example` sirve como referencia para las variables locales.

## Estado

Este repositorio corresponde al sitio web profesional de MMAC. Las automatizaciones contables y los sistemas de gestión relacionados forman proyectos separados dentro del ecosistema.

## Licencia

No se especifica actualmente una licencia pública para este repositorio.