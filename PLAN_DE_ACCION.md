# PLAN DE ACCIÓN — Web Lic. en Psicología Ludmila Alfie

---

## Prompt de contexto para Copilot

Eres un desarrollador front-end experto. Debes construir una **landing page profesional, minimalista y 100% responsive** para la **Licenciada en Psicología Ludmila Alfie**, ubicada en Punta del Este, Uruguay.

**Stack:** HTML5, CSS3 y JavaScript vanilla (sin frameworks).

**Modelo de referencia:** `Ejemplo/psicMarcosMartinez-main` — proyecto ya terminado con la misma estructura de secciones, lógica JS y sistema responsive. Se debe replicar su arquitectura (estructura HTML, clases CSS, lógica de scroll reveal, modales y hamburger) adaptando colores, contenidos e imágenes al nuevo cliente. **No tocar nada dentro de `/Ejemplo/`.**

**Paleta de colores:**
- Principal: `#8064B6` (violeta)
- Secundario: `#F8DDEE` (rosa palo)
- Negro: `#111111`
- Fondo alterno de secciones: versión muy suave del secundario

**Assets disponibles en `/img/`:**
- `logg.png` → logo del navbar y footer
- `cons.jpg` → imagen del hero (lado derecho)
- `nosotros.png` → foto profesional de Ludmila (sección Nosotros, con borde redondeado)

**Secciones:**
1. Navbar — logo + links + hamburger mobile
2. Hero (Inicio) — título, slogan, imagen, botón CTA
3. Servicios — 5 cards con popup (modal) y CTA a WhatsApp
4. Nosotros — foto + bio
5. Contacto — cards de contacto + horarios + mapa Google Maps embed
6. Footer — logo + nombre + slogan / links de sección
7. WhatsApp FAB — botón flotante fijo inferior derecho

---

## Fases de desarrollo

### FASE 1 — Estructura del proyecto
- Crear `index.html` con el esqueleto HTML base (doctype, meta viewport, links a fuentes Google Fonts, Font Awesome, `styles.css` y `script.js`)
- Crear `styles.css` vacío con variables CSS (colores, tipografías)
- Crear `script.js` vacío

### FASE 2 — HTML completo (todas las secciones)
Construir el HTML de cada sección en orden:
1. **Navbar:** logo `img/logg.png`, links: Inicio / Servicios / Nosotros / Contacto, botón hamburger (3 líneas)
2. **Hero:** título `Licenciada en Psicología Ludmila Alfie`, slogan, botón "Reservá tu consulta" → `#contacto`, imagen `img/cons.jpg`
3. **Servicios:** 5 cards (Psicotango, Psicología Transpersonal, Ludopatía, Ansiedad, Estrés) con icono Font Awesome, título, descripción corta, enlace "Ver más →"
4. **Modal de servicios:** overlay con título, icono, descripción larga (generada por Copilot), botón "Consultar" → WhatsApp
5. **Nosotros:** imagen `img/nosotros.png` (redondeada), nombre, especialidad, bio completa
6. **Contacto:** cards (llamadas, WhatsApp, Instagram, dirección), barra de horarios semanal, iframe Google Maps
7. **Footer:** columna izquierda (logo + nombre + slogan), columna derecha (links a secciones)
8. **WhatsApp FAB:** `<a>` flotante fijo con icono Font Awesome

### FASE 3 — CSS completo y responsive
- Variables CSS y reset base
- Estilos del Navbar (fijo, sombra al scroll, hamburger animado)
- Estilos del Hero (layout dos columnas en desktop, stack en mobile)
- Estilos de Servicios (grid de cards, hover, "Ver más")
- Estilos del Modal (overlay, scroll interno, responsive en mobile)
- Estilos de Nosotros (layout dos columnas, imagen redondeada)
- Estilos de Contacto (grid de cards, schedule-bar, map-wrap)
- Estilos del Footer (dos columnas, centrado, colores)
- Estilos WhatsApp FAB
- **Media queries** para tablet (`max-width: 900px`) y mobile (`max-width: 600px`)
- Clases `.reveal` para animaciones de entrada al hacer scroll

### FASE 4 — JavaScript
- **Navbar:** toggle clase `scrolled` al hacer scroll → sombra y fondo opaco
- **Hamburger:** toggle menú mobile, cierre al hacer clic en un link
- **Scroll Reveal:** `IntersectionObserver` para animar elementos con clase `.reveal`
- **Modales de servicios:** objeto con datos de cada servicio (descripción larga), apertura al click de card, cierre con botón ✕ o click en overlay, trap de foco accesible
- **Smooth scroll:** scroll suave a secciones al hacer clic en links del nav

### FASE 5 — Revisión final y ajustes
- Verificar responsive en breakpoints: 320px, 375px, 768px, 1024px, 1440px
- Confirmar que modales se leen completos en mobile (scroll interno)
- Confirmar que el texto del hero no se superpone en mobile
- Confirmar que el mapa se ve correctamente en todos los tamaños
- Revisar contraste de colores y accesibilidad básica (aria-labels, alt en imágenes)
- Ajustes finos de spacing, tipografía y consistencia visual

---

## Datos de contacto a usar en el código

| Campo | Valor |
|---|---|
| Teléfono | 093 929 292 |
| `tel:` link | `tel:+59893929292` |
| WhatsApp | `https://wa.me/59893929292` |
| Instagram | `https://www.instagram.com/lic.ludmila.alfie/` |
| Dirección | Jardines de la Sierra, Ed, 20100 Punta del Este, Maldonado |
| Maps embed coords | `-34.937454, -54.9356414` |

## Horarios

| Día | Horario |
|---|---|
| Lunes | 9:00 — 18:00 |
| Martes | 9:00 — 18:00 |
| Miércoles | 9:00 — 17:00 |
| Jueves | 9:00 — 16:00 |
| Viernes | 9:00 — 18:00 |
| Sábado | Cerrado |
| Domingo | Cerrado |
