import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Target } from "lucide-react";

import "./equipo.css";

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
      <section className="team-hero" aria-labelledby="team-title">
        <div className="team-hero-art" aria-hidden="true">
          <span className="team-hero-ring team-hero-ring-outer" />
          <span className="team-hero-ring team-hero-ring-inner" />
          <span className="team-hero-line" />
        </div>

        <div className="container team-hero-inner">
          <p className="team-eyebrow team-eyebrow-light">
            <span className="team-eyebrow-dash" aria-hidden="true" />
            EQUIPO / ACADEMIA TRIPLE AMENAZA
          </p>

          <div className="team-hero-grid">
            <h1 id="team-title" className="team-hero-title">
              LAS PERSONAS
              <span>HACEN EL</span>
              <em>EQUIPO.</em>
            </h1>

            <div className="team-hero-aside">
              <span className="team-aside-index">ATA / PERSONAS</span>
              <p>
                Detrás de cada entrenamiento hay una forma de entender el
                baloncesto, acompañar al jugador y dar sentido a su progreso.
              </p>
              <span className="team-aside-claim">
                EL JUGADOR, EN EL CENTRO.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Dirección: perfiles protagonistas, sin atribuir trayectorias no verificadas. */}
      <section
        id="direccion"
        className="team-leadership"
        aria-labelledby="team-leadership-title"
      >
        <div className="container">
          <div className="team-section-heading team-leadership-heading">
            <p className="team-eyebrow">01 / LAS PERSONAS DETRÁS DE ATA</p>
            <h2 id="team-leadership-title" className="team-section-title">
              EL PROYECTO <em>TIENE NOMBRES.</em>
            </h2>
          </div>

          <div className="team-features">
            {direccion.map((persona) => (
              <article
                className={`team-feature team-feature--${persona.slug}`}
                key={persona.number}
                aria-labelledby={`team-person-${persona.slug}`}
              >
                {/* Panel gráfico preparado para sustituirse por un retrato autorizado. */}
                <div className="team-feature-art" aria-hidden="true">
                  <div className="team-feature-art-top">
                    <span>ATA / PERSONAS</span>
                    <span>{persona.number} — 02</span>
                  </div>
                  <div className="team-feature-art-center">
                    <span className="team-feature-orbit team-feature-orbit-one" />
                    <span className="team-feature-orbit team-feature-orbit-two" />
                    <span className="team-feature-axis" />
                    <span className="team-feature-initial">
                      {persona.initials}
                    </span>
                  </div>
                  <div className="team-feature-art-bottom">
                    <span>TRIPLE AMENAZA</span>
                    <span className="team-feature-art-spark">✳</span>
                  </div>
                </div>

                <div className="team-feature-content">
                  <div className="team-feature-topline">
                    <span>{persona.number} / SOCIO · DIRECCIÓN ATA</span>
                    <ArrowUpRight size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  <div className="team-feature-main">
                    <h3 id={`team-person-${persona.slug}`}>
                      {persona.name}<span aria-hidden="true">.</span>
                    </h3>
                    <p className="team-feature-role">SOCIO Y DIRECCIÓN DEL PROYECTO</p>
                    <p className="team-feature-statement">
                      {persona.statement}
                    </p>
                    <p className="team-feature-description">
                      {persona.description}
                    </p>
                  </div>

                  <div className="team-feature-footer">
                    <span className="team-feature-footer-rule" />
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
        className="team-collaborations"
        aria-labelledby="team-collaborations-title"
      >
        <div className="container">
          <div className="team-collab-heading">
            <p className="team-eyebrow team-eyebrow-light">
              02 / EXPERIENCIAS QUE SUMAN
            </p>
            <h2 id="team-collaborations-title" className="team-section-title">
              EL TALENTO <em>SE COMPARTE.</em>
            </h2>
            <p>
              Las colaboraciones en actividades y entrenamientos aportan otras
              miradas y experiencias a la academia.
            </p>
          </div>

          <article className="team-collab-card">
            <div className="team-collab-mark" aria-hidden="true">
              <span className="team-collab-mark-rim" />
              <span>JH</span>
              <small>3×3 / 5×5</small>
            </div>

            <div className="team-collab-content">
              <p className="team-collab-label">COLABORADOR EN ACTIVIDADES ATA</p>
              <h3>Javi Huertas</h3>
              <p>
                Ha colaborado en actividades y entrenamientos de Triple Amenaza.
                Su trayectoria combina baloncesto profesional 5x5 y 3x3 con un
                enfoque centrado en la técnica, la táctica individual y la toma
                de decisiones.
              </p>
              <div className="team-collab-tags" role="group" aria-label="Ámbitos de experiencia">
                <span>Baloncesto 5x5</span>
                <span>Baloncesto 3x3</span>
                <span>Toma de decisiones</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Una única acción final, dirigida al contacto existente. */}
      <section className="team-closing" aria-labelledby="team-closing-title">
        <div className="container team-closing-inner">
          <div className="team-closing-copy">
            <p className="team-eyebrow">TU SIGUIENTE PASO</p>
            <h2 id="team-closing-title">
              ¿HABLAMOS DE <em>TU PRÓXIMO RETO?</em>
            </h2>
            <p>
              Cuéntanos qué buscas y te ayudaremos a conocer las opciones de
              entrenamiento de la academia.
            </p>
          </div>
          <Link href="/contacto/" className="team-closing-link">
            Contactar con ATA
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <Target className="team-closing-decoration" size={330} strokeWidth={.5} aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
