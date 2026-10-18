# Hoja de ruta — Triple Amenaza

> **Proyecto:** Plataforma web integral de Academia Triple Amenaza (ATA)  
> **Repositorio:** `triple-amenaza`  
> **Área privada:** `ATA Hub`  
> **Versión del plan:** 2.0 · 18 de octubre de 2026  
> **Estado:** planificación revisada; primera base técnica desarrollada, aún pendiente de pruebas completas.

## 1. Visión y objetivo

Construir **una única web completa para Academia Triple Amenaza**, que sirva tanto para dar a conocer la academia y captar nuevas familias como para organizar su actividad deportiva y administrativa.

La plataforma tendrá **dos grandes espacios** que compartirán marca, diseño y proyecto técnico:

1. **Web pública — Triple Amenaza:** presentación de la academia, programas, metodología, equipo, actividades y vías de contacto e inscripción.
2. **Área privada — ATA Hub:** gestión interna de jugadores, entrenadores, programas, sesiones y evaluaciones. **Los formularios y valoraciones serán un módulo dentro de ATA Hub**, no el objetivo único de la web.

**Primera audiencia del área privada:** administración y entrenadores. **Más adelante:** jugadores y familias, con acceso individual y permisos específicos.

### Objetivos del proyecto

- Presentar profesionalmente la academia, su propuesta de valor y sus programas.
- Facilitar las consultas e inscripciones sin duplicar trabajo administrativo.
- Centralizar datos de jugadores y mantener su historial a lo largo del tiempo.
- Integrar respuestas familiares y valoraciones del entrenador en la ficha correcta.
- Ayudar a planificar sesiones y evaluar la evolución deportiva.
- Preparar una futura experiencia para familias y jugadores, con informes y gamificación.
- Empezar con el menor coste posible, pero sin diseñar una arquitectura que impida crecer.

## 2. Contexto e información establecida

### Marca y posicionamiento

- **Nombre de marca:** Academia Triple Amenaza / ATA; evolución de la antigua Triple Threat.
- **Pilares:** baloncesto, preparación física y desarrollo personal.
- **Identidad:** negro, blanco, naranja oscuro sofisticado, dorado y verde. Los tonos exactos y recursos gráficos oficiales están pendientes de incorporar.
- **Enfoque de la web:** tecnificación y desarrollo del jugador, como complemento al entrenamiento en su club.
- **Público prioritario de la comunicación actual:** jugadores de baloncesto en formación y sus familias, especialmente edades aproximadas de 10–16 años; sin convertirlo en un límite artificial para toda la academia.
- **Enfoque metodológico del briefing previo:** diagnóstico → objetivos → entrenamiento → oposición → transferencia al juego real.

### Programas y servicios conocidos

| Oferta | Papel en la web | Información de partida |
|---|---|---|
| **Anotadores Élite** | Programa principal y página comercial prioritaria | Proceso de unas 12 semanas, valoración, objetivos, tecnificación, seguimiento y progresión. |
| **Anotadores Flex** | Alternativa más flexible | Bonos de cuatro sesiones y sesiones sueltas; valoración individual aparte y sin plaza semanal garantizada, según la definición anterior. |
| **Entrenamiento individual** | Página de servicio propia | Presentación, destinatarios, enfoque y solicitud de información. |
| **Workshops / masterclasses** | Agenda y páginas de actividad | Descripción, fechas disponibles e inscripciones cuando estén confirmadas. |
| **Otras futuras modalidades** | Ampliaciones posteriores | No se publicarán programas, horarios o prestaciones sin confirmación. |

**Nota comercial:** en conversaciones anteriores se manejaron referencias de 90 € por bono de 4 de Flex, 30 € por sesión Flex y 120 € por individual / 400 € por bono de 4. **No publicar automáticamente estos precios:** confirmar que continúan vigentes, sus condiciones y cómo se muestra el IVA antes de lanzar las páginas.

### Valoraciones y gamificación conocidas

- Google Forms de familias con respuestas almacenadas en Google Sheets.
- Valoración del entrenador con escala de 1 a 5 o **NE** (no evaluado) y observaciones cualitativas.
- Siete áreas generales: manejo, finalización, tiro estático, tiro en movimiento, inteligencia anotadora, físico aplicado y mentalidad.
- Futuro pasaporte del jugador, misiones, insignias y seguimiento de la progresión.

## 3. Mapa previsto de la web

### A. Web pública — accesible sin iniciar sesión

| Sección | Finalidad | Prioridad |
|---|---|---|
| **Inicio** (`/`) | Presentación de ATA, propuesta de valor, programas y llamadas a la acción. | Alta |
| **La academia** (`/academia`) | Identidad, filosofía y relación con el trabajo de los clubes. | Alta |
| **Método ATA** (`/metodo`) | Explicar cómo se valora, entrena y acompaña al jugador. | Alta |
| **Programas** (`/programas`) | Visión general de la oferta; Élite como opción principal y Flex como alternativa. | Alta |
| **Anotadores Élite** (`/programas/anotadores-elite`) | Página de captación y explicación detallada del proceso. | Alta |
| **Anotadores Flex** (`/programas/anotadores-flex`) | Funcionamiento flexible, condiciones y consulta/inscripción. | Alta |
| **Entrenamiento individual** (`/entrenamiento-individual`) | Presentación del servicio y solicitud de información. | Alta |
| **Workshops** (`/workshops`) | Talleres, masterclasses y futuras fechas. | Media |
| **Equipo** (`/equipo`) | Presentación de entrenadores, perfiles y experiencia, previa validación de datos y fotografías. | Media |
| **Contacto** (`/contacto`) | Formulario de contacto, canales oficiales y consultas. | Alta |
| **Preguntas frecuentes** (`/preguntas-frecuentes`) | Resolver dudas habituales de inscripción, sesiones y programas. | Media |
| **Información legal** (`/legal/...`) | Privacidad, aviso legal y cookies según los servicios realmente utilizados. | Obligatoria antes del lanzamiento público |
| **Noticias y recursos** (`/recursos`) | Artículos, novedades y contenido de valor. | Posterior / opcional |

**Principio de comunicación:** presentar *Anotadores Élite* como la experiencia completa. *Flex* complementa la propuesta, no la sustituye. Mensaje trabajado anteriormente: **«EL PROCESO COMPLETO. CON OPCIONES PARA ADAPTARSE A TI.»**

### B. ATA Hub — acceso privado

| Módulo | Administrador | Entrenador | Familia/jugador (futuro) |
|---|---|---|---|
| **Panel** (`/hub`) | Vista global | Vista de jugadores asignados | Vista personal futura |
| **Jugadores** (`/hub/jugadores`) | Crear, editar, asignar y consultar | Consultar sus jugadores autorizados | Solo ficha propia autorizada |
| **Formularios y valoraciones** (`/hub/valoraciones`) | Configurar/importar, consultar y evaluar | Realizar valoraciones | Consultar resultados publicados, más adelante |
| **Programas y grupos** (`/hub/programas`) | Gestionar programa y grupo | Consultar grupos propios | Consultar participación propia, más adelante |
| **Sesiones y asistencia** (`/hub/sesiones`) | Organización y seguimiento | Registrar sesión/asistencia | Consulta o reserva futura, si se aprueba |
| **Informes y evolución** (`/hub/informes`) | Generar y controlar visibilidad | Consultar y añadir seguimiento | Informes autorizados, más adelante |
| **Configuración** (`/hub/configuracion`) | Usuarios, roles y permisos | Preferencias permitidas | Preferencias limitadas |
| **Pasaporte / retos** (`/hub/pasaporte`) | Gestión general futura | Propuesta de misiones futura | Experiencia gamificada futura |

**Regla esencial:** los permisos deben comprobarse en la base de datos, no solamente ocultando botones o páginas.

## 4. Arquitectura técnica propuesta

- **Lenguaje:** TypeScript.
- **Aplicación:** Next.js + React, en **un solo repositorio** llamado `triple-amenaza`.
- **Diseño:** Tailwind CSS y componentes reutilizables; experiencia responsive y optimizada para móvil.
- **Control de versiones:** Git y GitHub (repositorio privado durante el desarrollo).
- **Autenticación inicial del Hub:** Google mediante Firebase Authentication.
- **Datos del Hub:** Cloud Firestore, con reglas por rol y relaciones jugador–entrenador.
- **Google Forms/Sheets:** sistemas de captura ya existentes; **Firestore será la fuente de verdad de las fichas** cuando quede definida la importación.
- **Hosting:** objetivo de bajo coste. La decisión definitiva se validará antes de publicar, considerando funcionalidades y condiciones de uso del proveedor.

### Importante sobre el alojamiento

El usuario prefiere Vercel, pero **Vercel Hobby está limitado a uso personal y no comercial**, por lo que no debemos plantearlo como despliegue gratuito definitivo de una academia. Una alternativa a evaluar es **Cloudflare Pages** para un Next.js con *static export*. Esta modalidad tiene limitaciones respecto a funcionalidades que requieren servidor; antes de avanzar se comprobarán rutas, renderización, formularios e integraciones. Si el proyecto precisa lógica de servidor, habrá que elegir una arquitectura compatible (sin introducir gastos inesperados).

### Organización orientativa de carpetas

```text
triple-amenaza/
├── docs/
│   └── HOJA_DE_RUTA.md
├── public/
├── src/
│   ├── app/
│   │   ├── (publico)/
│   │   │   ├── page.tsx
│   │   │   ├── academia/
│   │   │   ├── metodo/
│   │   │   ├── programas/
│   │   │   ├── entrenamiento-individual/
│   │   │   ├── workshops/
│   │   │   ├── equipo/
│   │   │   └── contacto/
│   │   ├── hub/
│   │   │   ├── page.tsx
│   │   │   ├── acceso/
│   │   │   ├── jugadores/
│   │   │   ├── valoraciones/
│   │   │   └── ...
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── publico/
│   │   ├── hub/
│   │   └── ui/
│   ├── contexts/
│   ├── lib/
│   └── types/
├── firestore.rules
├── package.json
└── README.md
```

> Es la **estructura objetivo**, no un reflejo exacto de las carpetas del ZIP inicial. Las carpetas entre paréntesis de Next.js organizan rutas, pero no aparecen en la URL. La migración del código se hará de manera gradual para no romper funcionalidades ya escritas.

## 5. Hoja de ruta por fases

Convención: `[x]` código o documento existente; `[ ]` trabajo pendiente. Un archivo escrito **no equivale a una funcionalidad probada**. Los hitos de prueba se enumeran por separado.

### Fase 0 — Ordenar, renombrar y validar la base técnica

**Objetivo:** disponer de un repositorio y un proyecto reproducibles antes de ampliarlos.

- [x] Existe una base inicial de Next.js, TypeScript, Firebase y pantallas internas en el paquete anterior **ATA Manager**.
- [x] Definida la denominación general **Triple Amenaza** y el nombre del área privada **ATA Hub**.
- [ ] Trasladar el código inicial al repositorio `triple-amenaza`.
- [ ] Cambiar nombre del proyecto, títulos y navegación, manteniendo el trabajo útil existente.
- [ ] Instalar dependencias y ejecutar `npm run dev` con éxito en el equipo de desarrollo.
- [ ] Verificar compilación (`npm run build`), tipos, lint y compatibilidad del hosting elegido.
- [ ] Configurar Firebase de prueba, autenticar al primer administrador y validar las reglas Firestore.
- [ ] Revisar `.gitignore`, variables de entorno, credenciales y flujo de publicación con Git.
- [ ] Definir componentes globales: cabecera, pie, tipografía, botones, colores y navegación.

**Hito de salida:** la base corre localmente sin errores críticos y el repositorio está organizado.

### Fase 1 — Web pública: lanzamiento mínimo viable

**Objetivo:** que una familia pueda entender qué es ATA, conocer su oferta y contactar.

- [ ] Diseñar la portada de Triple Amenaza con llamadas a la acción claras.
- [ ] Crear navegación y pie de página, adaptados a móvil.
- [ ] Publicar **La academia**, **Método ATA** y resumen de **Programas**.
- [ ] Crear páginas específicas de **Anotadores Élite**, **Anotadores Flex** y **Entrenamiento individual**.
- [ ] Crear **Workshops** y **Equipo** con los contenidos que estén confirmados.
- [ ] Crear **Contacto** con un canal de recepción de consultas comprobado.
- [ ] Añadir preguntas frecuentes esenciales.
- [ ] Completar textos, fotografías y logotipo autorizados, sin datos inventados.
- [ ] Revisar responsive, accesibilidad, rendimiento, SEO básico y metadatos.
- [ ] Completar textos y mecanismos legales requeridos antes de publicar.
- [ ] Publicar la primera versión en un servicio compatible con el uso comercial y el presupuesto.

**Hito de salida:** web pública navegable, usable en móvil y con contacto funcional.

### Fase 2 — ATA Hub: gestión interna básica

**Objetivo:** administrar jugadores y entrenadores desde una zona privada.

- [x] Hay código inicial de login, roles, listado de jugadores, alta y ficha individual.
- [x] Hay una primera valoración por siete áreas con registro histórico, pendiente de probar.
- [ ] Adaptar rutas existentes a `/hub/...` y conectar el acceso desde la web pública.
- [ ] Validar el alta/baja de permisos de administrador y entrenador.
- [ ] Definir `playerId` único, relación entre jugador, programa, grupo y entrenadores.
- [ ] Consultar, crear y editar fichas, con campos mínimos indispensables.
- [ ] Separar datos visibles por entrenador y datos reservados a administración.
- [ ] Añadir estados de carga, validación, errores y confirmaciones de guardado.
- [ ] Hacer pruebas con datos ficticios, sin datos reales de menores.

**Hito de salida:** administración y entrenadores autorizados pueden utilizar las fichas sin acceder a información ajena.

### Fase 3 — ATA Hub: formularios, valoraciones e importación

**Objetivo:** dejar de copiar manualmente las respuestas de Google Sheets a fichas de jugadores.

- [ ] Revisar el formulario real de familias y los encabezados de su Google Sheets.
- [ ] Confirmar los indicadores y la estructura definitiva del formulario de entrenador.
- [ ] Construir una tabla de correspondencia **pregunta → campo de jugador / valoración**.
- [ ] Importar respuestas históricas, con vista previa y detección de duplicados.
- [ ] Automatizar nuevas respuestas mediante una integración **segura**, sin exponer credenciales administrativas en el navegador.
- [ ] Identificar al jugador inequívocamente; revisar coincidencias ambiguas manualmente.
- [ ] Crear formulario de valoración adaptado al móvil, con escala 1–5 o NE y comentarios.
- [ ] Guardar cada valoración con fecha, entrenador y versión; conservar el historial.
- [ ] Permitir correcciones auditables y gestionar errores de sincronización.
- [ ] Verificar que una importación nunca borra valoraciones previas ni crea jugadores duplicados.

**Flujo objetivo:** `Google Forms → Google Sheets → importación/sincronización segura → Firestore → ficha ATA Hub`.

**Hito de salida:** una respuesta real de prueba se vincula a la ficha correcta y un entrenador puede completar su evaluación desde el móvil.

### Fase 4 — Gestión de programas, sesiones e inscripciones

**Objetivo:** utilizar la web también para organizar la actividad cotidiana de la academia.

- [ ] Gestionar programas, grupos, horarios, plazas y entrenadores responsables.
- [ ] Organizar calendario de sesiones y asistencia.
- [ ] Registrar solicitudes de información e inscripciones, con estados claros.
- [ ] Evaluar automatización de recordatorios, cancelaciones y listas de espera.
- [ ] Estudiar pagos y facturación como módulo independiente, solo cuando se definan requisitos y proveedor.

**Hito de salida:** las tareas esenciales de organización se realizan desde un único panel.

### Fase 5 — Informes, seguimiento y gamificación

**Objetivo:** transformar los datos recogidos en información útil para mejorar al jugador.

- [ ] Generar informes PDF individuales con identidad ATA.
- [ ] Mostrar comparativas entre distintas fechas y evolución por áreas.
- [ ] Registrar objetivos individualizados y prioridades de mejora.
- [ ] Incorporar misiones, insignias y pasaporte de Anotadores Élite.
- [ ] Relacionar la evolución con el programa y las sesiones completadas, sin asumir causalidad automática.
- [ ] Permitir revisar y aprobar un informe antes de compartirlo externamente.

**Hito de salida:** seguimiento longitudinal e informes utilizables en la comunicación deportiva.

### Fase 6 — Portal de jugadores y familias

**Objetivo:** abrir acceso externo sin exponer información del resto de jugadores.

- [ ] Definir roles y proceso de vinculación verificada tutor–jugador.
- [ ] Desarrollar el panel familiar y del jugador según su edad y permisos.
- [ ] Mostrar solo objetivos, valoraciones, informes y retos autorizados.
- [ ] Gestionar consentimientos, publicaciones, comunicaciones y acceso a datos.
- [ ] Probar exhaustivamente el aislamiento de datos entre familias.

**Hito de salida:** cada familia accede únicamente a la información que le corresponde.

### Fase 7 — Crecimiento y mantenimiento continuado

**Objetivo:** ampliar la plataforma sin comprometer estabilidad ni seguridad.

- [ ] Añadir recursos, noticias, contenidos formativos o nuevas páginas cuando sean necesarios.
- [ ] Medir consultas e interés de las páginas de programas respetando privacidad y consentimiento.
- [ ] Mantener copias de seguridad/exportaciones, control de errores y documentación.
- [ ] Revisar accesibilidad, pruebas automáticas, rendimiento y costes periódicamente.
- [ ] Evaluar nuevas funciones con criterios de utilidad antes de programarlas.

## 6. Datos por confirmar antes de implementar

- [ ] Logotipo, tipografías, códigos de color y fotografías oficiales autorizadas.
- [ ] Biografías definitivas del equipo, colaboradores y datos que se puedan publicar.
- [ ] Datos de contacto y redes sociales oficiales; ubicación, disponibilidad y sedes variables.
- [ ] Condiciones comerciales, precios vigentes, horarios y plazas reales por programa.
- [ ] Encabezados exactos de los formularios y archivos de respuestas.
- [ ] Estructura real de la rúbrica: se hablaron de **23 campos**, pero **19 indicadores + 2 fortalezas + 1 prioridad + 2 misiones suman 24**; hay que resolverlo con la fuente original.
- [ ] Modelo de autorización, privacidad, conservación y acceso a información de menores.
- [ ] Proveedor y método final de publicación, revisando los límites del plan gratuito.

**Regla:** los datos no confirmados se marcan como pendientes; no se rellenan inventando información.

## 7. Principios para desarrollar bien desde el principio

1. **Una web, múltiples módulos:** todo pertenece a Triple Amenaza; ATA Hub es su área privada.
2. **No duplicar datos:** la ficha del jugador es única y las nuevas evaluaciones se añaden al historial.
3. **Diseñar para móvil:** las evaluaciones se harán habitualmente durante sesiones.
4. **Permisos desde el inicio:** distinguir administración y entrenadores; preparar futuras familias sin activar sus accesos ahora.
5. **Privacidad y menores:** recopilar lo mínimo necesario, proteger accesos, definir políticas, garantizar corrección y eliminación cuando proceda.
6. **Evolución incremental:** desarrollar, ejecutar, probar y documentar cada funcionalidad antes de marcarla como terminada.
7. **Sin costes imprevistos:** revisar planes gratuitos, límites y condiciones comerciales antes de conectar servicios o desplegar.
8. **Comercial y técnico equilibrados:** no dejar la presentación pública para el final, ni descuidar el núcleo de gestión interna.

## 8. Próximo paso inmediato

1. Crear o terminar de configurar el repositorio privado **`triple-amenaza`** en GitHub.
2. Subir el proyecto inicial y colocar **este archivo en `docs/HOJA_DE_RUTA.md`**.
3. Renombrar de manera controlada la antigua interfaz **ATA Manager** a **Triple Amenaza / ATA Hub**.
4. Ejecutarlo localmente, revisar los errores de instalación o compilación y validar Firebase.
5. Con la base funcionando, construir primero la **cabecera, navegación y portada pública**, mientras conservamos los módulos internos existentes para desarrollarlos después.

---

*Documento de planificación vivo: actualizar el estado de cada tarea después de comprobarla realmente. Las nuevas secciones y fases propuestas son objetivos de producto, no funcionalidades ya existentes.*
