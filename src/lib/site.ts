/** Datos de la web pública de Triple Amenaza. */
export const navigation = [
  { label: "Academia", href: "/academia/" },
  { label: "Método", href: "/metodo/" },
  { label: "Programas", href: "/programas/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

/** En el pie, Contacto se muestra al final, después de Workshops y Equipo. */
export const footerNavigation = [
  ...navigation.filter(({ href }) => href !== "/contacto/"),
  { label: "Workshops", href: "/programas/workshops/" },
  { label: "Equipo", href: "/equipo/" },
  ...navigation.filter(({ href }) => href === "/contacto/"),
] as const;

/** Activa también la opción padre mientras se visitan rutas hijas. */
export function isNavigationActive(pathname: string, href: string): boolean {
  const current = pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
  const target = href === "/" ? "/" : `${href.replace(/\/+$/, "")}/`;

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

/** Las cuatro etapas oficiales del Método ATA. */
export const methodSteps = [
  { number: "01", title: "Observar", detail: "Conocer al jugador y su punto de partida." },
  { number: "02", title: "Definir", detail: "Establecer prioridades y objetivos concretos." },
  { number: "03", title: "Entrenar", detail: "Trabajar habilidades con intención y progresión." },
  { number: "04", title: "Transferir", detail: "Llevar lo aprendido a situaciones reales de juego." },
] as const;

/** Explicación breve compartida por la portada y la página del método. */
export const methodDescription =
  "Observamos a cada jugador, definimos prioridades, entrenamos con intención y transferimos lo aprendido a situaciones reales de juego.";
