# Guía de instalación · Triple Amenaza

Esta guía corresponde al repositorio actual `Maria0696/triple-amenaza`. No hace falta descargar ni importar el antiguo proyecto ATA Manager: la web pública ya está desarrollada sobre Next.js y el área privada permanece en preparación.

## 1. Requisitos

- **Node.js 22** recomendado (el proyecto declara compatibilidad a partir de Node 20.9).
- npm, incluido con Node.js.
- Git y un editor como [Visual Studio Code](https://code.visualstudio.com/).
- Acceso al [repositorio de GitHub](https://github.com/Maria0696/triple-amenaza).

En la terminal comprueba:

```powershell
node --version
npm --version
git --version
```

## 2. Descargar e instalar

Si todavía no has descargado el proyecto:

```powershell
git clone https://github.com/Maria0696/triple-amenaza.git
cd triple-amenaza
```

Si ya lo tienes, abre **la carpeta que contiene `package.json`** en VS Code. Para trabajar sobre el desarrollo actualizado:

```powershell
git switch develop
git pull --ff-only origin develop
```

Instala las dependencias reproducibles definidas en `package-lock.json`:

```powershell
npm ci
```

No subas a GitHub `node_modules/`, `.next/`, `out/` ni archivos de entorno locales. `.gitignore` los excluye.

## 3. Desarrollar y comprobar

Arranca el servidor de desarrollo:

```powershell
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La terminal **permanece ocupada** porque el servidor sigue activo. Detenlo con `Ctrl + C`.

Antes de subir cambios:

```powershell
npm run lint
npm run typecheck
npm run build
```

| Comando | Qué comprueba |
|---|---|
| `npm run lint` | Reglas ESLint del proyecto. |
| `npm run typecheck` | Genera tipos con `next typegen` y ejecuta `tsc --noEmit`. |
| `npm run build` | Construye la web y exporta los archivos a `out/`. |

**`next-env.d.ts` es un archivo generado**: Next.js lo crea al ejecutar `next dev`, `next build` o `next typegen`. No lo edites ni lo subas a Git. Debe seguir figurando en el `include` de `tsconfig.json`.

GitHub Actions ejecuta estas comprobaciones tras instalar las dependencias con `npm ci`. Por tanto, el CI también genera las declaraciones de Next.js antes de comprobar TypeScript.

## 4. Estructura actual

```text
triple-amenaza/
├── .github/workflows/          # Comprobaciones automáticas
├── docs/                       # Guías y planificación
├── public/imagenes/            # Imágenes y marca de ATA
├── src/
│   ├── app/                    # Inicio, Academia, Método, Programas, Equipo, Contacto y Hub
│   │   ├── programas/          # Élite, Flex y workshops
│   │   ├── globals.css         # Normalización, variables y estilos compartidos
│   │   └── layout.tsx
│   ├── components/             # Componentes de la web
│   └── lib/                    # Datos y navegación compartidos
├── .env.example
├── firestore.rules
├── next.config.ts
├── package.json
└── README.md
```

La **web pública** tiene páginas de Inicio, Academia, Método, Programas, Anotadores Élite y Anotadores Flex. Workshops está en `/programas/workshops/`; Equipo y Contacto tienen páginas provisionales. `/hub/` es una página de presentación **sin autenticación todavía**.

Los estilos se escriben en CSS tradicional; **Tailwind ya no forma parte del proyecto**.

## 5. Preparar Firebase (fase futura de ATA Hub)

La aplicación incluye el paquete `firebase`, la plantilla `.env.example` y `firestore.rules`, pero **la web actual no implementa inicio de sesión, fichas ni valoraciones funcionales**. Los siguientes datos solo harán falta cuando integremos realmente el Hub.

En [Firebase Console](https://console.firebase.google.com/), registra una aplicación web y copia los valores públicos de configuración. Después, en la raíz del proyecto, crea `.env.local` a partir de `.env.example`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.firebasestorage.app
```

Las variables `NEXT_PUBLIC_` se incluyen en el código del navegador: **nunca guardes ahí secretos de servidor**. No subas `.env.local` a Git.

Cuando implementemos el acceso habrá que activar y probar Firebase Authentication y Firestore, revisar cuidadosamente `firestore.rules` y verificar los permisos de administrador, entrenador y, más adelante, familia. **No uses datos reales de menores en las pruebas iniciales.** La existencia del archivo de reglas no significa que estas estén desplegadas ni verificadas.

## 6. Ramas y pull requests

Trabaja en una rama dedicada a cada cambio:

```powershell
git switch develop
git pull --ff-only origin develop
git switch -c chore/mi-cambio
```

Cuando termines, revisa los cambios y sube la rama:

```powershell
git diff --check
npm run lint
npm run typecheck
npm run build
git add .
git commit -m "chore(project): describir el cambio"
git push -u origin chore/mi-cambio
```

Abre una pull request contra `develop`. Comprueba GitHub Actions y revisa el diseño en móvil y escritorio. La rama `main` queda reservada para versiones integradas según el flujo del repositorio.

## 7. Compilación y publicación estática

En `next.config.ts` tenemos `output: "export"` y `trailingSlash: true`. Al ejecutar:

```powershell
npm run build
```

Next.js genera `out/` con HTML, CSS, JavaScript y recursos públicos. Esa carpeta es la salida que se sirve en un **hosting estático**; hay que comprobar que el proveedor respete las rutas con barra final.

**No utilices `npm start` ni `next start`**: son para un servidor Next.js, y esta aplicación se está exportando como sitio estático. Si en el futuro necesitamos funcionalidades de servidor, revisaremos la estrategia de despliegue antes de activarlas.

El proveedor definitivo está pendiente de elegir; debe admitir uso comercial y ajustarse al presupuesto. No publiques sin revisar privacidad, condiciones comerciales, contenido y seguridad.

## 8. Próximos pasos

La [hoja de ruta](hoja_de_ruta.md) recoge la evolución prevista de ATA Hub, formularios, evaluaciones y seguimiento. No se deben presentar como funcionalidades activas hasta que estén implementadas y probadas.
