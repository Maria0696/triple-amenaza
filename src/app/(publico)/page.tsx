import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Eye,
  ListChecks,
  Dumbbell,
  MoveUpRight,
  Target,
  UserRound,
  Zap,
} from "lucide-react";

import { methodSteps, programs } from "@/lib/site";
import "./home.css";

/**
 * Portada pública de Triple Amenaza.
 *
 * Esta página es un Server Component: no necesita "use client".
 * Los contenidos de los programas se reutilizan desde src/lib/site.ts.
 * La fotografía del hero es provisional y se sustituirá por una foto propia
 * y autorizada de la academia antes de publicar el sitio.
 */
const methodIcons = {
  "01": Eye,
  "02": ListChecks,
  "03": Dumbbell,
  "04": MoveUpRight,
} as const;

export default function HomePage() {
  return (
    <>
      {/* 1 · Primera impresión */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <p className="home-eyebrow home-eyebrow-light">
              <span className="home-eyebrow-bar" aria-hidden="true" />
              Academia Triple Amenaza · Baloncesto
            </p>

            <h1 id="home-title" className="home-hero-title">
              ENTRENA
              <span className="home-hero-title-outline"> PARA</span>
              <span className="home-hero-title-accent"> DECIDIR.</span>
            </h1>

            <p className="home-hero-lead">
              Cada situación de juego exige una respuesta. Te ayudamos a
              desarrollar los recursos técnicos, físicos y mentales para
              encontrar la tuya.
            </p>

            <div className="home-hero-actions">
              <Link href="/programas/anotadores-elite/" className="home-action-primary">
                Descubre Anotadores Élite
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <Link href="/metodo/" className="home-action-text">
                Conoce nuestro método
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="home-hero-keywords" aria-label="Áreas de desarrollo">
              <span>Técnica</span>
              <span>Preparación física</span>
              <span>Desarrollo personal</span>
            </div>
          </div>

          <div className="home-hero-media">
            <div
              className="home-hero-photo"
              role="img"
              aria-label="Entrenador de Academia Triple Amenaza trabajando con un jugador durante una sesión de baloncesto"
            />
            <div className="home-hero-media-top" aria-hidden="true">
              <span>ATA / DESARROLLO DEL JUGADOR</span>
              <Crosshair size={24} />
            </div>
            <div className="home-hero-photo-caption">
              <span>EL JUEGO NO SE DETIENE.</span>
              <strong>PREPÁRATE PARA EL SIGUIENTE MOVIMIENTO.</strong>
            </div>
            <span className="home-hero-image-credit">
              Academia Triple Amenaza · Fotografía: R1kman_fotografia
            </span>
          </div>
        </div>
      </section>

      {/* 2 · Filosofía ATA: misma secuencia que el método oficial */}
      <section className="home-intro" aria-labelledby="home-intro-title">
        <div className="container home-intro-grid">
          <div className="home-intro-aside">
            <p className="home-eyebrow">01 / NUESTRA FORMA DE ENTRENAR</p>
            <div className="home-intro-diagram" aria-hidden="true">
              <span className="home-intro-diagram-ring home-intro-diagram-ring-large" />
              <span className="home-intro-diagram-ring home-intro-diagram-ring-small" />
              <span className="home-intro-diagram-center" />
              <span className="home-intro-diagram-axis" />
            </div>
          </div>
          <div>
            <h2 id="home-intro-title" className="home-intro-title">
              El talento abre puertas.
              <br />
              <em>El trabajo marca el camino.</em>
            </h2>
            <p className="home-intro-copy">
              No entrenamos movimientos aislados sin un porqué. Partimos de cada
              jugador, proponemos retos y buscamos que lo aprendido aparezca
              cuando el partido lo exige.
            </p>
            <Link href="/academia/" className="home-inline-link">
              Descubre la academia <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 · Programas: Anotadores Élite ocupa el primer plano */}
      <section className="home-programs" id="programas" aria-labelledby="home-programs-title">
        <div className="container">
          <div className="home-section-head">
            <div>
              <p className="home-eyebrow">02 / ENCUENTRA TU ENTRENAMIENTO</p>
              <h2 id="home-programs-title" className="home-section-title">
                DIFERENTES CAMINOS.
                <span> MISMO PROPÓSITO.</span>
              </h2>
            </div>
          </div>

          <div className="home-program-cards">
            {programs.map((program) => {
              const featured = program.number === "01";

              return (
                <Link
                  key={program.number}
                  href={program.href}
                  className={`home-program-card${featured ? " home-program-card-featured" : ""}`}
                >
                  <div className="home-program-card-top">
                    <span>{program.number} / {program.label}</span>
                    <ArrowUpRight size={23} aria-hidden="true" />
                  </div>

                  {featured && (
                    <div className="home-program-feature-art" aria-hidden="true">
                      <span className="home-program-ring home-program-ring-outer" />
                      <span className="home-program-ring home-program-ring-middle" />
                      <span className="home-program-ring home-program-ring-center" />
                      <span className="home-program-cross home-program-cross-horizontal" />
                      <span className="home-program-cross home-program-cross-vertical" />
                      <span className="home-program-feature-label">ATA / ÉLITE</span>
                    </div>
                  )}

                  {!featured && (
                    <span className="home-program-card-symbol" aria-hidden="true">
                      {program.number === "02" ? <Zap size={76} strokeWidth={1.15} /> : <UserRound size={76} strokeWidth={1.15} />}
                    </span>
                  )}

                  <div className="home-program-card-body">
                    <span className="home-program-tag">{program.tag}</span>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <span className="home-program-more">
                      {featured ? "Descubre el programa" : "Ver programa"}
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="home-programs-note">
            Las condiciones, fechas y plazas se confirmarán directamente con la academia.
          </p>
        </div>
      </section>

      {/* 4 · Proceso de trabajo */}
      <section className="home-method" aria-labelledby="home-method-title">
        <div className="container">
          <div className="home-method-heading">
            <div>
              <p className="home-eyebrow home-eyebrow-light">03 / MÉTODO ATA</p>
              <h2 id="home-method-title" className="home-section-title">
                NO ES SOLO REPETIR.
                <span> ES APRENDER A JUGAR.</span>
              </h2>
            </div>
          </div>

          <div className="home-method-steps">
            {methodSteps.map((step, stepIndex) => {
              const StepIcon = methodIcons[step.number];
              return (
                <article className="home-method-step" key={step.number}>
                  <div className="home-method-step-top">
                    <span>{step.number}</span>
                    {/* Cuatro tramos: visualizan la etapa del recorrido.
                        No son un enlace ni una barra de tareas completadas. */}
                    <span className="home-method-progress" aria-hidden="true">
                      {methodSteps.map((progressStep, progressIndex) => (
                        <span
                          key={progressStep.number}
                          className={`home-method-progress-segment${
                            progressIndex <= stepIndex ? " is-active" : ""
                          }`}
                        />
                      ))}
                    </span>
                  </div>
                  <span className="home-method-symbol" aria-hidden="true">
                    <StepIcon size={25} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <Link href="/metodo/" className="home-action-outline">
            Conoce el método completo <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 5 · Tres áreas de trabajo */}
      <section className="home-pillars" aria-labelledby="home-pillars-title">
        <div className="container home-pillars-layout">
          <div>
            <p className="home-eyebrow">04 / UNA VISIÓN COMPLETA</p>
            <h2 id="home-pillars-title" className="home-section-title">
              MÁS ALLÁ
              <span> DEL BOTE.</span>
            </h2>
            <p className="home-pillars-lead">
              La mejora no depende de una sola habilidad. Trabajamos
              los recursos que el jugador necesita dentro y fuera de la pista.
            </p>
          </div>
          <div className="home-pillar-list">
            <div className="home-pillar">
              <Target size={25} aria-hidden="true" />
              <div><span className="home-pillar-number">01 / TÉCNICA</span><h3>Técnica con intención</h3><p>Recursos y lecturas para responder a las situaciones del juego.</p></div>
            </div>
            <div className="home-pillar">
              <Dumbbell size={25} aria-hidden="true" />
              <div><span className="home-pillar-number">02 / FÍSICO</span><h3>Preparación física</h3><p>Desarrollo físico al servicio de las demandas del baloncesto.</p></div>
            </div>
            <div className="home-pillar">
              <Crosshair size={25} aria-hidden="true" />
              <div><span className="home-pillar-number">03 / PERSONA</span><h3>Desarrollo personal</h3><p>Hábitos, confianza y compromiso con el proceso de mejora.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · CTA final: solo enlaza a páginas existentes */}
      <section className="home-closing" aria-labelledby="home-closing-title">
        <div className="home-closing-court" aria-hidden="true">
          <span className="home-closing-court-outer" />
          <span className="home-closing-court-inner" />
          <span className="home-closing-court-line" />
        </div>
        <div className="container home-closing-inner">
          <p className="home-eyebrow">TU SIGUIENTE JUGADA</p>
          <h2 id="home-closing-title">EL SIGUIENTE PASO <em>SE ENTRENA.</em></h2>
          <p>Conoce los programas y encuentra el punto de partida que mejor encaja con tus objetivos.</p>
          <Link href="/programas/" className="home-action-dark">
            Explorar programas <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
