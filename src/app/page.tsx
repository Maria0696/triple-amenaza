import type { Metadata } from "next";
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
  Zap,
} from "lucide-react";

import { baseOpenGraph } from "@/lib/metadata";
import { methodSteps, programs } from "@/lib/site";
import styles from "./home.module.css";

// Título y descripción generales del layout; aquí solo la URL canónica.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...baseOpenGraph, url: "/" },
};

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
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              <span className={styles.eyebrowBar} aria-hidden="true" />
              Academia Triple Amenaza · Baloncesto
            </p>

            <h1 id="home-title" className={styles.heroTitle}>
              ENTRENA
              <span className={styles.heroTitleOutline}> PARA</span>
              <span className={styles.heroTitleAccent}> DECIDIR.</span>
            </h1>

            <p className={styles.heroLead}>
              Cada situación de juego exige una respuesta. Te ayudamos a
              desarrollar los recursos técnicos, físicos y mentales para
              encontrar la tuya.
            </p>

            <div className={styles.heroActions}>
              <Link href="/programas/" className={styles.actionPrimary}>
                Descubre nuestros programas
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <Link href="/metodo/" className={styles.actionText}>
                Conoce nuestro método
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.heroKeywords} role="group" aria-label="Áreas de desarrollo">
              <span>Técnica</span>
              <span>Preparación física</span>
              <span>Desarrollo personal</span>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <div
              className={styles.heroPhoto}
              role="img"
              aria-label="Entrenador de Academia Triple Amenaza trabajando con un jugador durante una sesión de baloncesto"
            />
            <div className={styles.heroPhotoCaption}>
              <strong>PREPÁRATE PARA EL SIGUIENTE MOVIMIENTO.</strong>
            </div>
            <span className={styles.heroImageCredit}>
              Academia Triple Amenaza · Fotografía: R1kman_fotografia
            </span>
          </div>
        </div>
      </section>

      {/* 2 · Filosofía ATA: misma secuencia que el método oficial */}
      <section className={styles.intro} aria-labelledby="home-intro-title">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introAside}>
            <div className={styles.introDiagram} aria-hidden="true">
              <span className={`${styles.introDiagramRing} ${styles.introDiagramRingLarge}`} />
              <span className={`${styles.introDiagramRing} ${styles.introDiagramRingSmall}`} />
              <span className={styles.introDiagramCenter} />
              <span className={styles.introDiagramAxis} />
            </div>
          </div>
          <div>
            <h2 id="home-intro-title" className={styles.introTitle}>
              El talento abre puertas.
              <br />
              <em>El trabajo marca el camino.</em>
            </h2>
            <p className={styles.introCopy}>
              No entrenamos movimientos aislados sin un porqué. Partimos de cada
              jugador, proponemos retos y buscamos que lo aprendido aparezca
              cuando el partido lo exige.
            </p>
            <Link href="/academia/" className={styles.inlineLink}>
              Descubre la academia <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 · Programas: Anotadores Élite ocupa el primer plano */}
      <section className={styles.programs} id="programas" aria-labelledby="home-programs-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <h2 id="home-programs-title" className={styles.sectionTitle}>
                ENCUENTRA
                <span> TU FORMATO.</span>
              </h2>
            </div>
          </div>

          <div className={styles.programCards}>
            {programs.map((program) => {
              const featured = program.number === "01";

              return (
                <Link
                  key={program.number}
                  href={program.href}
                  className={featured ? `${styles.programCard} ${styles.programCardFeatured}` : styles.programCard}
                >
                  <div className={styles.programCardTop}>
                    <span>{program.label}</span>
                    <ArrowUpRight size={23} aria-hidden="true" />
                  </div>

                  {featured && (
                    <div className={styles.programFeatureArt} aria-hidden="true">
                      <span className={styles.programRing} />
                      <span className={`${styles.programRing} ${styles.programRingMiddle}`} />
                      <span className={`${styles.programRing} ${styles.programRingCenter}`} />
                      <span className={`${styles.programCross} ${styles.programCrossHorizontal}`} />
                      <span className={`${styles.programCross} ${styles.programCrossVertical}`} />
                    </div>
                  )}

                  {!featured && (
                    <span className={styles.programCardSymbol} aria-hidden="true">
                      <Zap size={76} strokeWidth={1.15} />
                    </span>
                  )}

                  <div className={styles.programCardBody}>
                    <span className={styles.programTag}>{program.tag}</span>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <span className={styles.programMore}>
                      Descubre el programa
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className={styles.programsNote}>
            Las condiciones, fechas y plazas se confirmarán directamente con la academia.
          </p>
        </div>
      </section>

      {/* 4 · Proceso de trabajo */}
      <section className={styles.method} aria-labelledby="home-method-title">
        <div className="container">
          <div className={styles.methodHeading}>
            <div>
              <h2 id="home-method-title" className={styles.sectionTitle}>
                NO ES SOLO REPETIR.
                <span> ES APRENDER A JUGAR.</span>
              </h2>
            </div>
          </div>

          <div className={styles.methodSteps}>
            {methodSteps.map((step, stepIndex) => {
              const StepIcon = methodIcons[step.number];
              return (
                <article className={styles.methodStep} key={step.number}>
                  <div className={styles.methodStepTop}>
                    <span>{step.number}</span>
                    {/* Cuatro tramos: visualizan la etapa del recorrido.
                        No son un enlace ni una barra de tareas completadas. */}
                    <span className={styles.methodProgress} aria-hidden="true">
                      {methodSteps.map((progressStep, progressIndex) => (
                        <span
                          key={progressStep.number}
                          className={
                            progressIndex <= stepIndex
                              ? `${styles.methodProgressSegment} ${styles.isActive}`
                              : styles.methodProgressSegment
                          }
                        />
                      ))}
                    </span>
                  </div>
                  <span className={styles.methodSymbol} aria-hidden="true">
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

          <Link href="/metodo/" className={styles.actionOutline}>
            Conoce el método completo <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 5 · Tres áreas de trabajo */}
      <section className={styles.pillars} aria-labelledby="home-pillars-title">
        <div className={`container ${styles.pillarsLayout}`}>
          <div>
            <h2 id="home-pillars-title" className={styles.sectionTitle}>
              MÁS ALLÁ
              <span> DEL BOTE.</span>
            </h2>
            <p className={styles.pillarsLead}>
              La mejora no depende de una sola habilidad. Trabajamos
              los recursos que el jugador necesita dentro y fuera de la pista.
            </p>
          </div>
          <div className={styles.pillarList}>
            <div className={styles.pillar}>
              <Target size={25} aria-hidden="true" />
              <div><h3>Técnica con intención</h3><p>Recursos y lecturas para responder a las situaciones del juego.</p></div>
            </div>
            <div className={styles.pillar}>
              <Dumbbell size={25} aria-hidden="true" />
              <div><h3>Preparación física</h3><p>Desarrollo físico al servicio de las demandas del baloncesto.</p></div>
            </div>
            <div className={styles.pillar}>
              <Crosshair size={25} aria-hidden="true" />
              <div><h3>Desarrollo personal</h3><p>Hábitos, confianza y compromiso con el proceso de mejora.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · CTA final: solo enlaza a páginas existentes */}
      <section className={styles.closing} aria-labelledby="home-closing-title">
        <div className={styles.closingCourt} aria-hidden="true">
          <span className={styles.closingCourtOuter} />
          <span className={styles.closingCourtInner} />
          <span className={styles.closingCourtLine} />
        </div>
        <div className={`container ${styles.closingInner}`}>
          <h2 id="home-closing-title">EL SIGUIENTE PASO <em>SE ENTRENA.</em></h2>
          <p>Conoce los programas y encuentra el punto de partida que mejor encaja con tus objetivos.</p>
          <Link href="/programas/" className={styles.actionDark}>
            Explorar programas <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
