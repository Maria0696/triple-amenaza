# Guía de instalación · Triple Amenaza

Esta guía reúne los pasos técnicos que hemos sacado del README para que la portada del repositorio sea más sencilla.

> **Punto de partida:** el código disponible todavía es el prototipo **ATA Manager**. Vamos a integrarlo en **Triple Amenaza**, donde el área privada se llamará **ATA Hub**. La web pública y las nuevas rutas `/hub/...` aún están por construir.

## 1. Preparar el ordenador

Instala estas herramientas:

- [Visual Studio Code](https://code.visualstudio.com/): editor.
- [Node.js](https://nodejs.org/): versión 20.9 o superior, compatible con el proyecto.
- [Git](https://git-scm.com/): control de versiones.
- Cuentas de [GitHub](https://github.com/) y [Firebase](https://console.firebase.google.com/).

En VS Code, abre **Terminal → Nuevo terminal** y comprueba:

```bash
node --version
npm --version
git --version
```

## 2. Abrir los archivos

**Si ya has subido el código a GitHub:**

```bash
git clone https://github.com/TU_USUARIO/triple-amenaza.git
cd triple-amenaza
```

Sustituye `TU_USUARIO` por el propietario del repositorio. Si el repositorio todavía está vacío, utiliza el ZIP inicial `ATA_Manager_inicio.zip`, descomprímelo y abre la carpeta resultante en VS Code. Puedes renombrar esa carpeta local a `triple-amenaza`.

En el `package.json` inicial puedes cambiar `"name": "ata-manager"` por `"name": "triple-amenaza"`; esto **no cambia por sí solo** los textos ni las rutas de la aplicación.

Instala las dependencias en la carpeta donde está `package.json`:

```bash
npm install
```

No crees ni subas a GitHub la carpeta `node_modules`.

## 3. Conectar Firebase

En [Firebase Console](https://console.firebase.google.com/):

1. Crea un proyecto (por ejemplo, `triple-amenaza`).
2. Registra una aplicación de tipo **Web** y copia sus valores de configuración.
3. En la raíz del código, copia `.env.example` a un nuevo archivo `.env.local`.
4. Rellena las variables con los valores reales proporcionados por Firebase:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.firebasestorage.app
```

Las variables con prefijo `NEXT_PUBLIC_` se incorporan al código del navegador: **no pongas ahí contraseñas ni claves privadas**. Comprueba que `.env.local` está excluido de Git mediante `.gitignore`.

### Autenticación

1. Firebase → **Authentication → Sign-in method**.
2. Habilita **Google** y elige un correo de soporte.
3. En **Authorized domains**, autoriza `localhost` para probar en tu ordenador si no está ya incluido.

### Base de datos

1. Firebase → **Firestore Database → Crear base de datos**.
2. Valora seleccionar una región europea disponible, apropiada para vuestro caso.
3. Comienza con permisos restrictivos (modo de producción).
4. Abre la pestaña **Rules**, pega el contenido de `firestore.rules` del proyecto y publícalo.

**No** uses reglas como `allow read, write: if true` con datos de jugadores.

## 4. Dar acceso al primer administrador

1. Ejecuta la aplicación (paso 5) e intenta iniciar sesión con Google.
2. En Firebase → **Authentication → Users**, localiza tu usuario y copia su **UID**.
3. En Firestore → **Data**, crea la colección `users` si todavía no existe.
4. Crea un documento con **ID exactamente igual al UID**. Añade estos campos de tipo `string`:

| Campo | Ejemplo |
| :--- | :--- |
| `name` | `Administrador ATA` |
| `email` | `correo@ejemplo.com` |
| `role` | `admin` |

Recarga la web. La cuenta de Google por sí sola **no concede acceso**: el perfil autorizado debe existir en Firestore.

Para autorizar a un entrenador se sigue el mismo proceso, pero con `role: "coach"`. Las asignaciones de jugadores a entrenadores se hacen inicialmente al crear su ficha.

## 5. Ejecutar y comprobar

En VS Code:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Prueba el acceso con Google, la creación de un **jugador ficticio**, una valoración y la consulta de su historial. Comprueba también que un entrenador **no puede acceder** a jugadores que no tenga asignados.

Para revisar el proyecto antes de publicarlo:

```bash
npm run typecheck
npm run lint
npm run build
```

> Esta instalación aún no ha sido validada de extremo a extremo. Si aparece un error, conservaremos el mensaje exacto para corregirlo.

## 6. Guardar cambios en GitHub

Si tu carpeta todavía no tiene repositorio Git:

```bash
git init
git branch -M main
```

Después, desde la raíz del proyecto:

```bash
git add .
git commit -m "Preparar proyecto Triple Amenaza"
```

Si todavía no existe el enlace al repositorio remoto, añádelo una sola vez:

```bash
git remote add origin https://github.com/TU_USUARIO/triple-amenaza.git
git push -u origin main
```

Si has usado `git clone`, normalmente **ya existe** el remoto `origin`: no vuelvas a añadirlo. Verifica que `.env.local` y cualquier fichero con datos personales **no estén incluidos** en los cambios.

## 7. Publicarlo cuando esté preparado

Queremos empezar con gastos mínimos, pero la web pertenece a una academia, así que el alojamiento debe permitir **uso comercial**.

La base actual está preparada para la exportación estática de Next.js. Podemos evaluar **Cloudflare Pages** o **Firebase Hosting**, verificando sus condiciones y límites antes de utilizarlo en producción. En Cloudflare Pages, la salida del build estático se encuentra normalmente en `out/`.

**Vercel Hobby no es la opción adecuada para la actividad comercial de ATA**; si se elige Vercel más adelante, necesitaremos un plan que permita ese uso.

Cuando publiquemos, también habrá que añadir el dominio final a **Firebase Authentication → Authorized domains** y configurar las variables `NEXT_PUBLIC_FIREBASE_...` en el alojamiento.

## 8. Dónde seguimos

La planificación completa está en la [hoja de ruta](HOJA_DE_RUTA.md). Próximo objetivo: **ejecutar la base sin errores y transformarla en una web pública de Triple Amenaza con acceso independiente a ATA Hub**.

Antes de usar datos reales de jugadores, especialmente menores, debemos validar reglas, permisos, textos de privacidad y medidas de protección de datos.
