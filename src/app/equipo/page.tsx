import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Target } from "lucide-react";

import styles from "./equipo.module.css";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conoce a las personas que impulsan Academia Triple Amenaza y a los colaboradores que aportan su experiencia al desarrollo de jugadores de baloncesto.",
};

/**
 * Perfiles sin fotografías individuales hasta disponer de imágenes autorizadas.
 * No publicar apellidos, formación o cargos adicionales sin verificarlos.
 */
const direccion = [
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
] as const;

export default function EquipoPage() {
  return (
    <>
      {/* Cabecera editorial con elementos decorativos no interactivos. */}
      <section className={styles.hero} aria-labelledby="team-title">
        <div className={styles.heroArt} aria-hidden="true">
          <span className={`${styles.heroRing} ${styles.heroRingOuter}`} />
          <span className={`${styles.heroRing} ${styles.heroRingInner}`} />
          <span className={styles.heroLine} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            EQUIPO / ACADEMIA TRIPLE AMENAZA
          </p>

          <div className={styles.heroGrid}>
            <h1 id="team-title" className={styles.heroTitle}>
              LAS PERSONAS
              <span>HACEN EL</span>
              <em>EQUIPO.</em>
            </h1>

            <div className={styles.heroAside}>
              <span className={styles.asideIndex}>ATA / PERSONAS</span>
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

      {/* Dirección: perfiles protagonistas, sin atribuir trayectorias no verificadas. */}
      <section
        id="direccion"
        className={styles.leadership}
        aria-labelledby="team-leadership-title"
      >
        <div className="container">
          <div className={`${styles.sectionHeading} ${styles.leadershipHeading}`}>
            <p className={styles.eyebrow}>01 / LAS PERSONAS DETRÁS DE ATA</p>
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
                {/* Panel gráfico preparado para sustituirse por un retrato autorizado. */}
                <div className={styles.featureArt} aria-hidden="true">
                  <div className={styles.featureArtTop}>
                    <span>ATA / PERSONAS</span>
                    <span>{persona.number} — 02</span>
                  </div>
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

                <div className={styles.featureContent}>
                  <div className={styles.featureTopline}>
                    <span>{persona.number} / SOCIO · DIRECCIÓN ATA</span>
                    <ArrowUpRight size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>

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
                  </div>

                  <div className={styles.featureFooter}>
                    <span className={styles.featureFooterRule} />
                    <span>PERSONAS QUE MUEVEN ATA</span>
                    <span>{persona.number} / 02</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Colaboradores: se diferencian del equipo de dirección. */}
      <section
        className={styles.collaborations}
        aria-labelledby="team-collaborations-title"
      >
        <div className="container">
          <div className={styles.collabHeading}>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              02 / EXPERIENCIAS QUE SUMAN
            </p>
            <h2 id="team-collaborations-title" className={styles.sectionTitle}>
              EL TALENTO <em>SE COMPARTE.</em>
            </h2>
            <p>
              Las colaboraciones en actividades y entrenamientos aportan otras
              miradas y experiencias a la academia.
            </p>
          </div>

          <article className={styles.collabCard}>
            <div className={styles.collabMark} aria-hidden="true">
              <span className={styles.collabMarkRim} />
              <span>JH</span>
              <small>3×3 / 5×5</small>
            </div>

            <div className={styles.collabContent}>
              <p className={styles.collabLabel}>COLABORADOR EN ACTIVIDADES ATA</p>
              <h3>Javi Huertas</h3>
              <p>
                Ha colaborado en actividades y entrenamientos de Triple Amenaza.
                Su trayectoria combina baloncesto profesional 5x5 y 3x3 con un
                enfoque centrado en la técnica, la táctica individual y la toma
                de decisiones.
              </p>
              <div className={styles.collabTags} role="group" aria-label="Ámbitos de experiencia">
                <span>Baloncesto 5x5</span>
                <span>Baloncesto 3x3</span>
                <span>Toma de decisiones</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Una única acción final, dirigida al contacto existente. */}
      <section className={styles.closing} aria-labelledby="team-closing-title">
        <div className={`container ${styles.closingInner}`}>
          <div className={styles.closingCopy}>
            <p className={styles.eyebrow}>TU SIGUIENTE PASO</p>
            <h2 id="team-closing-title">
              ¿HABLAMOS DE <em>TU PRÓXIMO RETO?</em>
            </h2>
            <p>
              Cuéntanos qué buscas y te ayudaremos a conocer las opciones de
              entrenamiento de la academia.
            </p>
          </div>
          <Link href="/contacto/" className={styles.closingLink}>
            Contactar con ATA
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <Target className={styles.closingDecoration} size={330} strokeWidth={.5} aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
