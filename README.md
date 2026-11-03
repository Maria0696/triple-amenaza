<div align="center">

# 🏀 TRIPLE AMENAZA

**Academia de baloncesto · Preparación física · Desarrollo del jugador**

*Una web para conocer la academia. Un espacio para hacerla crecer.*

`Next.js 16` · `TypeScript` · `CSS` · `ATA Hub en preparación`

</div>

---

## El proyecto

**Triple Amenaza** reúne la presentación pública de la academia y prepara **ATA Hub**, un futuro espacio de trabajo para administración y entrenadores. Más adelante podrán incorporarse funcionalidades para jugadores y familias.

| 🌍 Web pública | 🔐 ATA Hub |
| :--- | :--- |
| Inicio, academia, método y programas. | Área privada todavía en desarrollo. |
| Anotadores Élite, Anotadores Flex y talleres. | Futuras fichas, sesiones, formularios y valoraciones. |

## Programas

**Anotadores Élite** ofrece un proceso estructurado de tecnificación y seguimiento. **Anotadores Flex** permite participar en sesiones con mayor flexibilidad. Los **workshops y masterclasses** se presentan como actividades puntuales dentro de Programas.

**Anotadores Élite** muestra sus tarifas; el resto de condiciones, fechas y plazas se comunicarán cuando estén confirmadas. **Equipo** presenta a la dirección y a los colaboradores, y **Contacto** funciona por WhatsApp y correo electrónico. No hay sistema de inscripciones ni acceso al Hub habilitado en esta versión.

## Tecnologías

- **Next.js + React + TypeScript:** estructura de la aplicación.
- **CSS:** variables de diseño (colores, contraste) y estilos compartidos en `src/app/globals.css`, más un archivo por página. Cada página usa **CSS Modules** (`*.module.css`), así que sus clases quedan aisladas y no chocan con las de otras páginas.
- **Tipografía:** Noto Sans para el texto y Gelasio en cursiva para los acentos de los titulares, ambas autoalojadas con `next/font` (no se cargan desde servidores de Google).
- **Metadatos:** `src/lib/metadata.ts` genera título, URL canónica y vista previa al compartir (Open Graph) de cada página.
- **Firebase:** las reglas `firestore.rules` están preparadas para ATA Hub; el paquete `firebase` se instalará cuando empiece su desarrollo.
- **GitHub Actions:** comprueba ESLint, tipos de Next.js/TypeScript y compilación.

El proyecto usa actualmente **exportación estática** (`output: "export"`): `npm run build` genera la carpeta `out/`, que podrá alojarse en un servidor de archivos estáticos compatible con el uso comercial.

## Empezar a desarrollar

Necesitas **Node.js 22**, npm y Git. Desde la carpeta del repositorio:

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La terminal seguirá activa mientras el servidor esté encendido; detenlo con `Ctrl + C`.

Antes de abrir una PR:

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run typecheck` genera automáticamente las declaraciones de Next.js mediante `next typegen`. Por eso `next-env.d.ts` no se versiona: **Next.js lo recrea localmente y en CI**.

No usamos `next start` porque el proyecto exporta HTML/CSS/JS estáticos. Para desarrollar utiliza `npm run dev`; para publicar, utiliza el contenido de `out/`.

Para la compilación de producción hay que definir `NEXT_PUBLIC_SITE_URL` (el dominio público, sin barra final). Sin ella, las URLs canónicas y las vistas previas al compartir apuntan a `localhost`. Consulta `.env.example`.

## Documentación

- 📍 [Hoja de ruta](docs/hoja_de_ruta.md) — etapas, prioridades y módulos futuros.
- 🔧 [Guía de instalación](docs/guia_de_instalacion.md) — configuración, comandos, ramas y preparación de Firebase.

---

<div align="center">

**Academia Triple Amenaza**  
*Formación, entrenamiento y evolución del jugador.*

</div>
