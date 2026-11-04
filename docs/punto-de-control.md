# Punto de control
<!-- PUNTO-DE-CONTROL -->
- Tarea actual: web de MMAC rediseñada para mostrar los dos servicios (asesoría impositiva + tecnología para tu negocio), según `_proyectos/oferta-comercial.md` del vault. Commit `b5875e1` en `main`, publicado en Render (verificado 03/11/2026 23:50).
- Próximo paso: recorrerla en un celular real; sumar casos o servicios cuando cambie `oferta-comercial.md`.
- Bloqueado por: nada.
- Archivos en curso: ninguno (`templates/index.html` y `static/css/styles.css` ya commiteados).
- Preguntas abiertas:
  - El portal del cliente del Abono Plus no existe todavía en mmac-gestion: no anunciarlo en la web hasta que esté.
  - Casos de estudio publicados anónimos por rubro; con nombre solo si el cliente lo autoriza.
  - `gitignore` está sin punto (no lo usa git); renombrarlo a `.gitignore` en un cambio aparte.
  - Para correr en local: Flask no está instalado en el sistema; usar un venv (`pip install -r requirements.txt`). El formulario no envía mails sin `.env`.
<!-- /PUNTO-DE-CONTROL -->
