import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CalendarRange,
  Eye,
  ListChecks,
  MapPin,
  Dumbbell,
  MoveUpRight,
  Target,
} from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { baseOpenGraph } from "@/lib/metadata";
import { academyAreas, location, methodSteps, programFactLabels, programs, whatsappMessages } from "@/lib/site";
import styles from "./home.module.css";

// Título y descripción generales del layout; aquí solo la URL canónica.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...baseOpenGraph, url: "/" },
};

/** Iconos de las etapas del método: los mismos que en Método (stageDetails). */
const methodIcons = {
  "01": Eye,
  "02": ListChecks,
  "03": Dumbbell,
  "04": MoveUpRight,
} as const;

/** Descripciones de las tres áreas; los nombres vienen de academyAreas (iguales en Academia). */
const pillars = [
  { text: "Recursos y lecturas para responder a las situaciones del juego.", icon: Target },
  { text: "Desarrollo físico al servicio de las demandas del baloncesto.", icon: Dumbbell },
  { text: "Hábitos, confianza y compromiso con el proceso de mejora.", icon: BrainCircuit },
] as const;

export default function HomePage() {
  return (
    <>
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
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
              <Link href="/metodo/" className={styles.actionText}>
                Conoce nuestro método
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Dónde y cómo: lo primero que pregunta una familia. */}
            <ul className={styles.heroFacts}>
              <li>
                <MapPin size={17} aria-hidden="true" />
                {location.place} · {location.city}
              </li>
              <li>
                <CalendarRange size={17} aria-hidden="true" />
                12 semanas con Élite o sesiones sueltas con Flex
              </li>
            </ul>
          </div>

          {/* Foto provisional (fondo CSS de .heroPhoto): sustituir por una propia y
              autorizada de la academia antes de publicar. */}
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
              Descubre la academia <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

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
                    <ArrowRight size={23} aria-hidden="true" />
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
                      <CalendarRange size={76} strokeWidth={1.15} />
                    </span>
                  )}

                  <div className={styles.programCardBody}>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    {/* Los mismos tres datos en las dos tarjetas: se comparan de un vistazo. */}
                    <dl className={styles.programFacts}>
                      {programFactLabels.map((label, index) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{program.facts[index]}</dd>
                        </div>
                      ))}
                    </dl>
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

      <section className={styles.method} aria-labelledby="home-method-title">
        <div className="container">
          <div className={styles.methodHeading}>
            <div>
              <h2 id="home-method-title" className={styles.sectionTitle}>
                DEL ENTRENAMIENTO
                <span> AL PARTIDO.</span>
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
            Conoce el método completo <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>

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
            {pillars.map(({ text, icon: Icon }, index) => (
              <div className={styles.pillar} key={academyAreas[index]}>
                <Icon size={25} aria-hidden="true" />
                <div><h3>{academyAreas[index]}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="home-closing-title">
        <div className={styles.closingCourt} aria-hidden="true">
          <span className={styles.closingCourtOuter} />
          <span className={styles.closingCourtInner} />
          <span className={styles.closingCourtLine} />
        </div>
        <div className={`container ${styles.closingInner}`}>
          <h2 id="home-closing-title">EL SIGUIENTE PASO <em>SE ENTRENA.</em></h2>
          <p>Cuéntanos qué quiere mejorar el jugador y te orientamos hacia el programa que mejor encaja con sus objetivos.</p>
          <div className={styles.closingActions}>
            <WhatsappLink className={styles.actionDark} message={whatsappMessages.general} namesChannel>
              Escribir por WhatsApp <ArrowUpRight size={19} aria-hidden="true" />
            </WhatsappLink>
            <Link href="/programas/" className="text-link">
              Ver los programas <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
