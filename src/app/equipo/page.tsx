import Image from "next/image";
import { ArrowUpRight, Target } from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import styles from "./equipo.module.css";
import { pageMetadata } from "@/lib/metadata";
import { whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Equipo",
  description:
    "Conoce a las personas que impulsan Academia Triple Amenaza y a los colaboradores que aportan su experiencia al desarrollo de jugadores de baloncesto.",
  path: "/equipo/",
});

/**
 * Huecos preparados para cuando la academia los facilite:
 * - photo: retrato autorizado en public/imagenes/ (vertical, ~1200×1500). Sustituye
 *   al monograma. Ejemplo: { src: "/imagenes/equipo-jose.webp", alt: "Jose en la pista" }
 * - experience: líneas cortas y verificadas (titulación, años, categorías entrenadas).
 *   Ejemplo: ["Entrenador superior de baloncesto", "10 años en categorías de formación"]
 * Mientras estén vacíos se muestra el monograma y no aparece ningún hueco en blanco.
 * No publicar apellidos, formación o cargos adicionales sin verificarlos.
 */
type Persona = {
  number: string;
  slug: string;
  name: string;
  initials: string;
  statement: string;
  description: string;
  photo?: { src: string; alt: string };
  experience?: readonly string[];
};

const direccion: readonly Persona[] = [
  {
    number: "01",
    slug: "jose",
    name: "Jose",
    initials: "J",
    statement: "Primero el jugador. Después, el entrenamiento.",
    description:
      "Jose es entrenador y, junto a Edu, impulsa Academia Triple Amenaza. Ambos organizan sesiones y actividades para ofrecer a cada jugador un espacio donde aprender, mejorar y conectar el trabajo de pista con la competición.",
  },
  {
    number: "02",
    slug: "edu",
    name: "Edu",
    initials: "E",
    statement: "Cada sesión necesita una intención.",
    description:
      "Edu es socio de la academia y comparte con Jose la dirección del proyecto y la organización de sus actividades. Los dos apuestan por un proceso de aprendizaje en el que los objetivos estén claros y las mejoras tengan sentido dentro del juego.",
  },
];

/** Colaborador: mismo hueco opcional de foto (sustituye al monograma JH). */
const collaborator: { photo?: { src: string; alt: string } } = {};

export default function EquipoPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="team-title">
        <div className={styles.heroArt} aria-hidden="true">
          <span className={`${styles.heroRing} ${styles.heroRingOuter}`} />
          <span className={`${styles.heroRing} ${styles.heroRingInner}`} />
          <span className={styles.heroLine} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroGrid}>
            <h1 id="team-title" className={styles.heroTitle}>
              LAS PERSONAS
              <span>HACEN EL</span>
              <em>EQUIPO.</em>
            </h1>

            <div className={styles.heroAside}>
              <p>
                Detrás de cada entrenamiento hay una forma de entender el
                baloncesto, acompañar al jugador y dar sentido a su progreso.
              </p>
              <span className={styles.asideClaim}>
                EL JUGADOR, EN EL CENTRO.
              </span>
            </div>
          </div>

        </div>
      </section>

      <section
        id="direccion"
        className={styles.leadership}
        aria-labelledby="team-leadership-title"
      >
        <div className="container">
          <div className={`${styles.sectionHeading} ${styles.leadershipHeading}`}>
            <h2 id="team-leadership-title" className={styles.sectionTitle}>
              EL PROYECTO <em>TIENE NOMBRES.</em>
            </h2>
          </div>

          <div className={styles.features}>
            {direccion.map((persona) => (
              <article
                className={
                  persona.slug === "edu"
                    ? `${styles.feature} ${styles.featureEdu}`
                    : styles.feature
                }
                key={persona.number}
                aria-labelledby={`team-person-${persona.slug}`}
              >
                {persona.photo ? (
                  <div className={`${styles.featureArt} ${styles.featureArtPhoto}`}>
                    <Image
                      src={persona.photo.src}
                      alt={persona.photo.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 45vw"
                      className={styles.featurePhoto}
                    />
                  </div>
                ) : (
                  // Monograma decorativo mientras no haya retrato autorizado.
                  <div className={styles.featureArt} aria-hidden="true">
                    <div className={styles.featureArtTop} />
                    <div className={styles.featureArtCenter}>
                      <span className={`${styles.featureOrbit} ${styles.featureOrbitOne}`} />
                      <span className={`${styles.featureOrbit} ${styles.featureOrbitTwo}`} />
                      <span className={styles.featureAxis} />
                      <span className={styles.featureInitial}>
                        {persona.initials}
                      </span>
                    </div>
                    <div className={styles.featureArtBottom}>
                      <span>TRIPLE AMENAZA</span>
                      <span className={styles.featureArtSpark}>✳</span>
                    </div>
                  </div>
                )}

                <div className={styles.featureContent}>
                  <div className={styles.featureMain}>
                    <h3 id={`team-person-${persona.slug}`}>
                      {persona.name}<span aria-hidden="true">.</span>
                    </h3>
                    <p className={styles.featureRole}>SOCIO Y DIRECCIÓN DEL PROYECTO</p>
                    <p className={styles.featureStatement}>
                      {persona.statement}
                    </p>
                    <p className={styles.featureDescription}>
                      {persona.description}
                    </p>
                    {persona.experience && persona.experience.length > 0 && (
                      <ul className={styles.featureExperience} aria-label={`Experiencia de ${persona.name}`}>
                        {persona.experience.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className={styles.featureFooter}>
                    <span className={styles.featureFooterRule} />
                    <span>PERSONAS QUE MUEVEN ATA</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section
        className={styles.collaborations}
        aria-labelledby="team-collaborations-title"
      >
        <div className="container">
          <div className={styles.collabHeading}>
            <h2 id="team-collaborations-title" className={styles.sectionTitle}>
              EL TALENTO <em className={styles.plainEm}>SE COMPARTE.</em>
            </h2>
            <p>
              Las colaboraciones en actividades y entrenamientos aportan otras
              miradas y experiencias a la academia.
            </p>
          </div>

          <article className={styles.collabCard}>
            {collaborator.photo ? (
              <div className={`${styles.collabMark} ${styles.collabMarkPhoto}`}>
                <Image
                  src={collaborator.photo.src}
                  alt={collaborator.photo.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 30vw"
                  className={styles.featurePhoto}
                />
              </div>
            ) : (
              <div className={styles.collabMark} aria-hidden="true">
                <span className={styles.collabMarkRim} />
                <span>JH</span>
                <small>5×5 / 3×3</small>
              </div>
            )}

            <div className={styles.collabContent}>
              <p className={styles.collabLabel}>COLABORADOR EN ACTIVIDADES ATA</p>
              <h3>Javi Huertas</h3>
              <p>
                Ha colaborado en actividades y entrenamientos de Triple Amenaza.
                Su trayectoria combina baloncesto profesional 5×5 y 3×3 con un
                enfoque centrado en la técnica, la táctica individual y la toma
                de decisiones.
              </p>
              <div className={styles.collabTags} role="group" aria-label="Ámbitos de experiencia">
                <span>Baloncesto 5×5</span>
                <span>Baloncesto 3×3</span>
                <span>Toma de decisiones</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="team-closing-title">
        <div className={`container ${styles.closingInner}`}>
          <div className={styles.closingCopy}>
            <h2 id="team-closing-title">
              ¿HABLAMOS DE <em>TU PRÓXIMO RETO?</em>
            </h2>
            <p>
              Cuéntanos qué buscas y te ayudaremos a conocer las opciones de
              entrenamiento de la academia.
            </p>
          </div>
          <WhatsappLink className={styles.closingLink} message={whatsappMessages.general} namesChannel>
            Escribir por WhatsApp
            <ArrowUpRight size={20} aria-hidden="true" />
          </WhatsappLink>
          <Target className={styles.closingDecoration} size={330} strokeWidth={.5} aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
