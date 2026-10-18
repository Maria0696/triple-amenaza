/** Datos editoriales confirmados para la primera versión pública. */
export const navigation = [
  { label: "La academia", href: "/academia/" },
  { label: "Nuestro método", href: "/metodo/" },
  { label: "Programas", href: "/programas/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

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
  {
    number: "03",
    label: "Trabajo personalizado",
    title: "Entrenamiento individual",
    description:
      "Entrenamiento adaptado a los objetivos y necesidades de desarrollo de cada jugador.",
    href: "/entrenamiento-individual/",
    tag: "Atención individual",
  },
];

/** Las cuatro etapas oficiales del Método ATA.
 * Se utilizan tanto en la portada como en /metodo/.
 */
export const methodSteps = [
  { number: "01", title: "Observar", detail: "Conocer al jugador y su punto de partida." },
  { number: "02", title: "Definir", detail: "Establecer prioridades y objetivos concretos." },
  { number: "03", title: "Entrenar", detail: "Trabajar habilidades con intención y progresión." },
  { number: "04", title: "Transferir", detail: "Llevar lo aprendido a situaciones reales de juego." },
] as const;

/** Secuencia corta para utilizar en rótulos y bandas. */
export const methodPath = methodSteps.map((step) => step.title.toUpperCase()).join(" / ");

/** Explicación breve compartida por la portada y la página del método. */
export const methodDescription =
  "Observamos a cada jugador, definimos prioridades, entrenamos con intención y transferimos lo aprendido a situaciones reales de juego.";
