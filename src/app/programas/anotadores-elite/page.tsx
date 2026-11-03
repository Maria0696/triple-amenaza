import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { eliteOffer, whatsappMessages } from "@/lib/site";
import { CourtDiagram } from "./court-diagram";
import styles from "./elite.module.css";

export const metadata = pageMetadata({
  title: "Anotadores Élite",
  description:
    "Conoce Anotadores Élite de Academia Triple Amenaza: un programa de 12 semanas de tecnificación, objetivos y seguimiento para trasladar los recursos al partido.",
  path: "/programas/anotadores-elite/",
});

/** Tarifa y formato compartidos con las tarjetas de programas (src/lib/site.ts). */
const offer = eliteOffer;

const deliverables = [
  {
    number: "01",
    title: "Conocemos tu punto de partida",
    description:
      "Observación inicial, conversación sobre necesidades y prioridades para orientar el proceso.",
  },
  {
    number: "02",
    title: "Marcamos objetivos concretos",
    description:
      "Identificamos los aspectos del juego que merece la pena trabajar durante las semanas siguientes.",
  },
  {
    number: "03",
    title: "Entrenamos con continuidad",
    description:
      "Doce sesiones de una hora, con trabajo técnico y situaciones de juego con oposición.",
  },
  {
    number: "04",
    title: "Te llevas trabajo para continuar",
    description:
      "Dos propuestas individuales de unos 30 minutos, centradas en tiro y manejo de balón.",
  },
  {
    number: "05",
    title: "Revisamos la evolución",
    description:
      "Observación y feedback para ajustar las prioridades y reconocer los avances del jugador.",
  },
  {
    number: "06",
    title: "Cerramos con un informe final",
    description:
      "Resume el trabajo realizado y orienta los siguientes pasos.",
  },
] as const;

const foundations = [
  {
    number: "01",
    title: "Entrenar lo que necesitas",
    description:
      "En lugar de una lista idéntica de ejercicios, partimos de las fortalezas y dificultades que encontramos en tu juego.",
  },
  {
    number: "02",
    title: "Aprender a generar ventajas",
    description:
      "Trabajamos recursos de bote, tiro y finalización, pero también cuándo elegirlos y cómo utilizarlos frente a un defensor.",
  },
  {
    number: "03",
    title: "Llevarlo al partido",
    description:
      "Buscamos que las mejoras aparezcan cuando existe oposición, presión y necesidad de tomar decisiones.",
  },
] as const;

/** Las cuatro primeras tienen una zona en la pista (diagrama); las otras tres, en todas. */
const areas = [
  {
    number: "01",
    title: "Manejo de balón",
    description: "Proteger, cambiar de ritmo y crear ventajas con bote.",
    court: true,
  },
  {
    number: "02",
    title: "Finalización",
    description: "Resolver cerca del aro con distintos apoyos y recursos.",
    court: true,
  },
  {
    number: "03",
    title: "Tiro en estático",
    description: "Preparación de pies, equilibrio y ejecución tras recepción.",
    court: true,
  },
  {
    number: "04",
    title: "Tiro en movimiento",
    description: "Tirar tras bote o desplazamiento, también con oposición.",
    court: true,
  },
  {
    number: "05",
    title: "Inteligencia anotadora",
    description: "Reconocer cuándo tirar, penetrar, pasar o moverse sin balón.",
    court: false,
  },
  {
    number: "06",
    title: "Físico aplicado",
    description: "Acelerar, frenar y cambiar de dirección con control.",
    court: false,
  },
  {
    number: "07",
    title: "Mentalidad",
    description: "Atreverse, aprender del error y sostener el esfuerzo.",
    court: false,
  },
] as const;

/** Ficha de la cabecera: lo esencial del programa, sin repetir las siete áreas de la pista. */
const programSheet = [
  { label: "Duración", value: `${offer.durationWeeks} semanas` },
  { label: "Sesiones", value: `${offer.totalSessions} de ${offer.sessionMinutes} minutos, una por semana` },
  { label: "Grupos", value: "Reducidos, con jugadores de nivel similar" },
  { label: "Primer paso", value: "Valoración inicial" },
  { label: "Precio", value: `${offer.singlePayment} € en un pago, IVA incluido` },
] as const;

const courtAreas = areas.filter((area) => area.court);
const everywhereAreas = areas.filter((area) => !area.court);

const questions = [
  {
    title: "¿En qué se diferencia de Anotadores Flex?",
    answer:
      "Élite está planteado como un proceso de 12 semanas con objetivos, continuidad y seguimiento. Flex permite venir a sesiones de trabajo técnico con más flexibilidad de asistencia.",
  },
  {
    title: "¿La valoración inicial obliga a inscribirse?",
    answer:
      "No. La valoración sirve para conocer al jugador y hablar de su posible incorporación; después decides con calma.",
  },
  {
    title: "¿Cuánto cuesta y cómo se paga?",
    answer: `El programa cuesta ${offer.singlePayment} € en un pago único o ${offer.installmentTotal} € en total si lo fraccionas en tres pagos, IVA incluido. Las fechas de cada plazo te las indicamos al inscribirte.`,
  },
  {
    title: "¿Qué ocurre si no puedo asistir a una sesión?",
    answer:
      "Antes de inscribirte te explicamos cómo funcionan los avisos y las posibles recuperaciones. Si ya sabes que faltarás a alguna sesión, cuéntanoslo.",
  },
  {
    title: "¿Son sesiones individuales?",
    answer:
      "No. Se entrena en grupos reducidos, con jugadores de un nivel de juego similar.",
  },
  {
    title: "¿Sustituye los entrenamientos de mi club?",
    answer:
      "No. El trabajo en ATA complementa el entrenamiento con tu equipo y busca que los recursos desarrollados puedan utilizarse también en competición.",
  },
] as const;

export default function AnotadoresElitePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="elite-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              ANOTADORES ÉLITE
            </p>
            <h1 id="elite-title" className={styles.heroTitle}>
              ANOTAR NO ES SOLO TIRAR.
              <span>ES SABER DECIDIR.</span>
            </h1>
            <p className={styles.heroLead}>
              Un proceso de trabajo técnico para desarrollar recursos de anotación,
              generar ventajas y tomar mejores decisiones frente a defensores,
              con el objetivo de llevar ese aprendizaje al partido.
            </p>
            <div className={styles.commercialHeroActions}>
              <WhatsappLink message={whatsappMessages.eliteValuation} className={`${styles.button} ${styles.commercialPrimary}`} namesChannel>
                Consultar valoración por WhatsApp
              </WhatsappLink>
            </div>
          </div>

          <aside className={styles.profile} aria-label="Anotadores Élite de un vistazo">
            <div className={styles.profileTitle}>
              <span>EL PROGRAMA</span>
              <strong>DE UN VISTAZO.</strong>
            </div>
            <dl className={styles.profileAreas}>
              {programSheet.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className={styles.commercialIncludes} id="elite-incluye" aria-labelledby="elite-includes-title">
        <div className="container">
          <div className={styles.commercialIncludesHead}>
            <div>
              <h2 id="elite-includes-title" className={styles.heading}>
                {offer.durationWeeks} SEMANAS. <em className={styles.plainEm}>UN OBJETIVO CLARO.</em>
              </h2>
            </div>
            <p>
              Sabrás de dónde partes, qué quieres mejorar y cómo comprobar si tus
              recursos aparecen también en el juego real.
            </p>
          </div>

          <div className={styles.commercialIncludesGrid}>
            {deliverables.map((item) => (
              <article key={item.number} className={styles.commercialDeliverable}>
                {/* Numerados: es el orden del proceso, de la valoración al informe final. */}
                <span className={styles.commercialDeliverableTop}>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.commercialPricing} id="elite-condiciones" aria-labelledby="elite-pricing-title">
        <div className={`container ${styles.commercialPricingLayout}`}>
          <div className={styles.commercialPricingCopy}>
            <h2 id="elite-pricing-title" className={styles.heading}>
              UNA APUESTA POR <em>TU PROGRESO.</em>
            </h2>
            <p>
              Elige el formato de pago que mejor encaje contigo. Antes de
              inscribirte, te explicamos cómo es la valoración inicial y cómo se
              forman los grupos.
            </p>
            <WhatsappLink message={whatsappMessages.eliteConditions} className={`${styles.button} ${styles.commercialPrimary}`} namesChannel>
              Consultar por WhatsApp
            </WhatsappLink>
          </div>
          <div className={styles.commercialPriceCards}>
            <article className={`${styles.commercialPriceCard} ${styles.commercialPriceCardFeatured}`}>
              <span className={styles.commercialPriceLabel}>PAGO ÚNICO</span>
              <h3>Una sola cuota.</h3>
              <p className={styles.commercialPriceAmount}>{offer.singlePayment} €</p>
              <p>Pago completo del programa en una única operación.</p>
            </article>
            <article className={styles.commercialPriceCard}>
              <span className={styles.commercialPriceLabel}>PAGO FRACCIONADO</span>
              <h3>En tres pagos.</h3>
              <p className={styles.commercialPriceAmount}>{offer.installmentTotal} €</p>
              <p>Es el importe total, repartido en tres pagos. Consulta con ATA las fechas de cada plazo.</p>
            </article>
            <p className={styles.commercialPricingNotice}>
              IVA incluido en ambos importes. El posible coste de la valoración inicial,
              las plazas y las condiciones de asistencia se confirmarán antes de la inscripción.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.foundations} aria-labelledby="elite-foundations-title">
        <div className="container">
          <div className={styles.foundationsHeading}>
            <div>
              <h2 id="elite-foundations-title" className={styles.heading}>
                NO PARTIMOS DEL EJERCICIO.
                <em> PARTIMOS DEL JUGADOR.</em>
              </h2>
            </div>
            <p>
              Dos jugadores pueden querer anotar más y necesitar caminos distintos:
              convertimos el entrenamiento en respuestas útiles para competir.
            </p>
          </div>
          <div className={styles.foundationsGrid}>
            {foundations.map((item) => (
              <article className={styles.foundation} key={item.number}>
                <div className={styles.foundationTop}>
                  <span className={styles.foundationDash} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <Link className={styles.commercialMethodLink} href="/metodo/">
            Descubre cómo trabajamos: Método ATA
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.areas} id="elite-areas" aria-labelledby="elite-areas-title">
        <div className="container">
          <div className={`${styles.sectionHead} ${styles.areasHead}`}>
            <div>
              <h2 id="elite-areas-title" className={styles.heading}>
                MÁS RECURSOS. <em className={styles.plainEm}>MEJORES DECISIONES.</em>
              </h2>
            </div>
            <p>Lo que trabajamos y dónde: cuatro áreas con su zona en la pista y tres que acompañan al jugador en todas.</p>
          </div>
          <div className={styles.court}>
            {/* Apoyo visual: toda la información está en la leyenda. */}
            <div className={styles.courtFigure}>
              <CourtDiagram />
            </div>
            <ol className={styles.zoneList}>
                {courtAreas.map((area, index) => (
                  <li key={area.number} data-zone={index + 1}>
                    <span className={styles.zoneNumber} aria-hidden="true">{index + 1}</span>
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </div>
                  </li>
                ))}
            </ol>
            <div className={styles.everywhere}>
                <p className={styles.everywhereLabel}>En todas las zonas</p>
                <ol start={courtAreas.length + 1}>
                  {everywhereAreas.map((area, index) => (
                    <li key={area.number}>
                      {/* Continúan la numeración de la pista (5–7), sin zona propia. */}
                      <span className={styles.everywhereNumber} aria-hidden="true">
                        {courtAreas.length + index + 1}
                      </span>
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </li>
                  ))}
                </ol>
            </div>
          </div>
          <WhatsappLink message={whatsappMessages.eliteValuation} className={`${styles.button} ${styles.commercialPrimary} ${styles.areasAction}`} namesChannel>
            Consultar valoración por WhatsApp
          </WhatsappLink>
        </div>
      </section>

      {/* El Pasaporte del Anotador no está confirmado: se presenta como herramienta en
          preparación, no como parte del programa. */}
      <section className={styles.passport} aria-labelledby="elite-passport-title">
        <div className={`container ${styles.passportInner}`}>
          <h2 id="elite-passport-title" className={styles.heading}>
            PROGRESAR TAMBIÉN ES <em className={styles.plainEm}>SABER HACIA DÓNDE.</em>
          </h2>
          <div className={styles.passportLower}>
            <p className={styles.passportDescription}>
              A lo largo del programa revisamos los objetivos y el aprendizaje
              en pista. Al cierre, te entregamos un informe del trabajo realizado y
              orientamos los siguientes pasos.
            </p>
            <div className={styles.passportDevelopment}>
              <h3>Pasaporte del Anotador</h3>
              <p>
                Estamos terminando una herramienta visual para acompañar el
                recorrido del jugador. Confirmaremos su utilización en las
                condiciones definitivas del programa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="elite-faq-title">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <h2 id="elite-faq-title" className={styles.heading}>ANTES DE <em className={styles.plainEm}>EMPEZAR.</em></h2>
            <p className={styles.faqIntro}>Todo lo que conviene tener claro antes de dar el siguiente paso.</p>
          </div>
          <div className={styles.faqQuestions}>
            {questions.map((question) => (
              <details key={question.title} className={styles.faqItem}>
                <summary>
                  <span>{question.title}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <p>{question.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* No hay inscripción online: el cierre abre WhatsApp con el mensaje de la valoración. */}
      <section className={styles.closing} aria-labelledby="elite-closing-title">
        <div className={`container ${styles.closingGrid}`}>
          <div>
            <h2 id="elite-closing-title">EMPIEZA POR <em>LA VALORACIÓN.</em></h2>
            <p>
              Cuéntanos en qué quiere mejorar el jugador y te explicaremos cómo
              planteamos la valoración inicial y las opciones de incorporación.
            </p>
          </div>
          <WhatsappLink message={whatsappMessages.eliteValuation} className={`${styles.button} ${styles.buttonDark}`} namesChannel>
            Consultar valoración por WhatsApp
          </WhatsappLink>
        </div>
      </section>
    </>
  );
}
