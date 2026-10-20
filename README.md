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

Las condiciones comerciales, fechas y plazas se comunicarán cuando estén confirmadas. Las páginas de **Equipo** y **Contacto** siguen en preparación; no hay un sistema de inscripciones o acceso al Hub habilitado en esta versión.

## Tecnologías

- **Next.js + React + TypeScript:** estructura de la aplicación.
- **CSS tradicional:** estilos globales en `src/app/globals.css` y estilos propios de cada página.
- **Firebase:** dependencia y reglas de seguridad preparadas para futuras funciones de ATA Hub; la autenticación todavía no está conectada a la web publicada.
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

## Documentación

- 📍 [Hoja de ruta](docs/hoja_de_ruta.md) — etapas, prioridades y módulos futuros.
- 🔧 [Guía de instalación](docs/guia_de_instalacion.md) — configuración, comandos, ramas y preparación de Firebase.

---

<div align="center">

**Academia Triple Amenaza**  
*Formación, entrenamiento y evolución del jugador.*

</div>
