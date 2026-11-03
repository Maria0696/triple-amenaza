export const navigation = [
  { label: "Academia", href: "/academia/" },
  { label: "Método", href: "/metodo/" },
  { label: "Programas", href: "/programas/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

/**
 * Muestra el acceso a ATA Hub en la cabecera (escritorio y menú móvil).
 * Desactivado hasta que el Hub tenga acceso real; la ruta /hub/ sigue existiendo.
 */
export const hubEnabled = false;

/** Canales de contacto públicos. */
export const contact = {
  whatsappNumber: "34618599976",
  phoneDisplay: "618 599 976",
  email: "tripleamenaza.info@gmail.com",
  /** Persona que atiende las consultas y plazo máximo de respuesta. */
  responder: "Jose García Fernández",
  responseTime: "24 horas",
} as const;

/** Lugar de entrenamiento actual. */
export const location = {
  place: "Colegio Humanitas",
  city: "Torrejón de Ardoz",
  region: "Madrid",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensajes precargados: cada enlace abre la conversación con el contexto de su página. */
export const whatsappMessages = {
  general: "Hola, me gustaría recibir información sobre Academia Triple Amenaza.",
  programChoice:
    "Hola, tengo dudas entre Anotadores Élite y Anotadores Flex. ¿Podéis ayudarme a elegir el formato que mejor encaja?",
  eliteValuation:
    "Hola, quiero información sobre la valoración inicial de Anotadores Élite. ¿Podéis indicarme cómo funciona y las próximas opciones disponibles?",
  eliteConditions:
    "Hola, quiero información sobre el precio y las condiciones de Anotadores Élite. ¿Podéis indicarme los plazos del pago fraccionado y las próximas fechas?",
  flex: "Hola, quiero información sobre Anotadores Flex. ¿Qué sesiones y bonos hay disponibles?",
  workshops:
    "Hola, me gustaría que me avisarais cuando publiquéis las próximas fechas de workshops y masterclasses.",
} as const;

/** El pie amplía la navegación pública y mantiene Contacto como último enlace. */
export const footerNavigation = [
  ...navigation.filter(({ href }) => href !== "/contacto/"),
  { label: "Workshops", href: "/programas/workshops/" },
  { label: "Equipo", href: "/equipo/" },
  ...navigation.filter(({ href }) => href === "/contacto/"),
] as const;

/** Unifica la barra final para comparar rutas ("/metodo" y "/metodo/" son la misma). */
export function normalizePath(path: string): string {
  return path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
}

/** Activa la ruta y sus hijas. La barra final impide falsos positivos por prefijos. */
export function isNavigationActive(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  return current === target || (target !== "/" && current.startsWith(target));
}

export type Program = {
  number: string;
  label: string;
  title: string;
  description: string;
  href: string;
  tag: string;
};

export const programs: Program[] = [
  {
    number: "01",
    label: "Programa de desarrollo",
    title: "Anotadores Élite",
    description:
      "Un proceso estructurado de tecnificación, objetivos y seguimiento para trabajar la capacidad anotadora.",
    href: "/programas/anotadores-elite/",
    tag: "Proceso completo",
  },
  {
    number: "02",
    label: "Entrena con flexibilidad",
    title: "Anotadores Flex",
    description:
      "Sesiones de tecnificación con un formato flexible, como alternativa al programa completo.",
    href: "/programas/anotadores-flex/",
    tag: "Formato flexible",
  },
];

/** Fuente única de los nombres y el orden de las cuatro etapas del Método ATA. */
export const methodSteps = [
  { number: "01", title: "Observar", detail: "Conocer al jugador y su punto de partida." },
  { number: "02", title: "Definir", detail: "Establecer prioridades y objetivos concretos." },
  { number: "03", title: "Entrenar", detail: "Trabajar habilidades con intención y progresión." },
  { number: "04", title: "Transferir", detail: "Llevar lo aprendido a situaciones reales de juego." },
] as const;

/** Texto compartido entre Inicio y Método para evitar versiones divergentes. */
export const methodDescription =
  "Observamos a cada jugador, definimos prioridades, entrenamos con intención y transferimos lo aprendido a situaciones reales de juego.";
