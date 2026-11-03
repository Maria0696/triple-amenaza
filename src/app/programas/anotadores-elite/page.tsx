import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";

import { pageMetadata } from "@/lib/metadata";
import { whatsappLink } from "@/lib/site";
import { CourtDiagram } from "./court-diagram";
import styles from "./elite.module.css";

export const metadata = pageMetadata({
  title: "Anotadores Élite",
  description:
    "Conoce Anotadores Élite de Academia Triple Amenaza: un programa de 12 semanas de tecnificación, objetivos y seguimiento para trasladar los recursos al partido.",
  path: "/programas/anotadores-elite/",
});

/**
 * Tarifas de Anotadores Élite utilizadas anteriormente por ATA.
 * El usuario ha solicitado mostrarlas en la página; revisar antes del lanzamiento.
 * El coste de la valoración, la política de faltas y los cupos no están confirmados.
 */
const offer = {
  durationWeeks: 12,
  totalSessions: 12,
  sessionMinutes: 60,
  singlePayment: 240,
  installmentTotal: 255,
} as const;

const whatsappHref = whatsappLink(
  "Hola, quiero información sobre la valoración inicial de Anotadores Élite. ¿Podéis indicarme cómo funciona y las próximas opciones disponibles?",
);

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
      "Doce sesiones de una hora, con propuestas de tecnificación y situaciones de juego con oposición.",
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
    title: "Cerramos con una devolución",
    description:
      "Un informe final que resume el trabajo realizado y orienta los siguientes pasos.",
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

const courtAreas = areas.filter((area) => area.court);
const everywhereAreas = areas.filter((area) => !area.court);

const questions = [
  {
    title: "¿En qué se diferencia de Anotadores Flex?",
    answer:
      "Élite está planteado como un proceso de 12 semanas con objetivos, continuidad y seguimiento. Flex permite participar en sesiones de tecnificación con mayor flexibilidad de asistencia.",
  },
  {
    title: "¿La valoración inicial obliga a inscribirse?",
    answer:
      "No. La valoración es un paso para conocer al jugador y conversar sobre su posible incorporación. Las condiciones y, en su caso, el coste de esa valoración deben consultarse previamente con ATA.",
  },
  {
    title: "¿Cuánto cuesta y cómo se paga?",
    answer: `El precio del programa es de ${offer.singlePayment} € con pago único o ${offer.installmentTotal} € con pago fraccionado, IVA incluido. Para conocer los importes y las fechas de cada plazo, la valoración inicial y las condiciones de inscripción, consúltanos directamente.`,
  },
  {
    title: "¿Qué ocurre si no puedo asistir a una sesión?",
    answer:
      "La política de avisos, ausencias y posibles recuperaciones se comunica antes de la inscripción. Consulta tu caso concreto con la academia.",
  },
  {
    title: "¿Son sesiones individuales?",
    answer:
      "El programa se plantea en grupos reducidos y buscando niveles de juego similares. Consulta con ATA la composición del grupo y los cupos disponibles.",
  },
  {
    title: "¿Sustituye los entrenamientos de mi club?",
    answer:
      "No. El trabajo en ATA complementa el entrenamiento con tu equipo y busca que los recursos desarrollados puedan utilizarse también en competición.",
  },
] as const;

function ValuationLink({ className, children }: { className: string; children: ReactNode }) {
  return (
    <a
      href={whatsappHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {/* El texto visible forma parte del nombre accesible (WCAG 2.5.3). */}
      <span className="sr-only"> por WhatsApp (se abre en una pestaña nueva)</span>
    </a>
  );
}

export default function AnotadoresElitePage() {
  return (
    <>
      {/* Cabecera: mismo diseño, ahora con información práctica y CTA específico. */}
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
              Un proceso de tecnificación para desarrollar recursos anotadores,
              generar ventajas y tomar mejores decisiones frente a defensores,
              con el objetivo de llevar ese aprendizaje al partido.
            </p>
            <div className={styles.commercialFacts} role="group" aria-label="Formato previsto del programa">
              <span><strong>{offer.durationWeeks}</strong> SEMANAS</span>
              <span><strong>{offer.totalSessions}</strong> SESIONES</span>
              <span><strong>{offer.sessionMinutes}′</strong> POR SESIÓN</span>
            </div>
            <div className={styles.commercialHeroActions}>
              <ValuationLink className={`${styles.button} ${styles.commercialPrimary}`}>
                Consultar valoración inicial <ArrowUpRight size={19} aria-hidden="true" />
              </ValuationLink>
            </div>
          </div>

          <aside className={styles.profile} aria-label="Las siete áreas del perfil anotador">
            <div className={styles.profileTop}>
              <span>ATA / PERFIL DEL ANOTADOR</span>
              <span>07 ÁREAS</span>
            </div>
            <div className={styles.profileTitle}>
              <span>UNA VISIÓN</span>
              <strong>COMPLETA DEL JUEGO.</strong>
            </div>
            <ol className={styles.profileAreas}>
              {areas.map((area) => (
                <li key={area.number}>
                  <span>{area.number}</span>
                  <span>{area.title}</span>
                </li>
              ))}
            </ol>
            <p className={styles.profileFoot}>La selección del trabajo depende del punto de partida de cada jugador.</p>
          </aside>
        </div>
      </section>

      {/* Bloque comercial más importante: qué recibe la familia. */}
      <section className={styles.commercialIncludes} id="elite-incluye" aria-labelledby="elite-includes-title">
        <div className="container">
          <div className={styles.commercialIncludesHead}>
            <div>
              <h2 id="elite-includes-title" className={styles.heading}>
                {offer.durationWeeks} SEMANAS. <em className={styles.plainEm}>UN OBJETIVO CLARO.</em>
              </h2>
            </div>
            <p>
              No es solo venir a entrenar. Es saber de dónde partes, qué quieres mejorar
              y cómo comprobar si tus recursos aparecen también en el juego real.
            </p>
          </div>

          <div className={styles.commercialIncludesGrid}>
            {deliverables.map((item) => (
              <article key={item.number} className={styles.commercialDeliverable}>
                <div className={styles.commercialDeliverableTop}>
                  <Check size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.commercialFormatNote}>
            Formato de referencia: una sesión semanal de 60 minutos durante 12 semanas.
            Las fechas, el grupo y las condiciones definitivas se confirmarán con ATA.
          </p>
        </div>
      </section>

      {/* Tarifas históricas solicitadas por ATA; confirmar condiciones adicionales antes de publicar. */}
      <section className={styles.commercialPricing} id="elite-condiciones" aria-labelledby="elite-pricing-title">
        <div className={`container ${styles.commercialPricingLayout}`}>
          <div className={styles.commercialPricingCopy}>
            <h2 id="elite-pricing-title" className={styles.heading}>
              UNA APUESTA POR <em>TU PROGRESO.</em>
            </h2>
            <p>
              Elige el formato de pago que mejor encaje contigo. Antes de formalizar
              la inscripción te explicaremos la valoración, los grupos y las
              condiciones de asistencia.
            </p>
            <ValuationLink className={`${styles.button} ${styles.commercialPrimary}`}>
              Consultar condiciones <ArrowUpRight size={19} aria-hidden="true" />
            </ValuationLink>
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
              <p>Consulta con ATA los plazos y condiciones de este formato de pago.</p>
            </article>
            <p className={styles.commercialPricingNotice}>
              IVA incluido en ambos importes. El posible coste de la valoración inicial,
              las plazas y las condiciones de asistencia se confirmarán antes de la inscripción.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciadores: conserva la rejilla visual original. */}
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
              Dos jugadores pueden querer anotar más y necesitar caminos distintos.
              Lo importante es transformar el entrenamiento en respuestas útiles para competir.
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
            <ArrowUpRight size={18} aria-hidden="true" />
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
            <p>Siete áreas: cuatro con su zona en la pista y tres que acompañan en todas.</p>
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
                <ul>
                  {everywhereAreas.map((area) => (
                    <li key={area.number}>
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mantener la comunicación prudente hasta que se confirme el pasaporte. */}
      <section className={styles.passport} aria-labelledby="elite-passport-title">
        <div className={`container ${styles.passportInner}`}>
          <h2 id="elite-passport-title" className={styles.heading}>
            PROGRESAR TAMBIÉN ES <em className={styles.plainEm}>SABER HACIA DÓNDE.</em>
          </h2>
          <div className={styles.passportLower}>
            <p className={styles.passportDescription}>
              A lo largo del programa revisamos los objetivos y el aprendizaje
              en pista. Al cierre, compartimos una devolución del trabajo y
              orientamos los siguientes pasos.
            </p>
            <div className={styles.passportDevelopment}>
              <span className={styles.passportDevelopmentLabel}>HERRAMIENTA EN PREPARACIÓN</span>
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

      {/* CTA de contacto directo, sin simular un sistema de inscripciones. */}
      <section className={styles.closing} aria-labelledby="elite-closing-title">
        <div className={`container ${styles.closingGrid}`}>
          <div>
            <h2 id="elite-closing-title">EMPIEZA POR <em>LA VALORACIÓN.</em></h2>
            <p>
              Cuéntanos en qué quiere mejorar el jugador y te explicaremos cómo
              planteamos la valoración inicial y las opciones de incorporación.
            </p>
            <p className={styles.closingNote}>
              El posible coste de la valoración, la composición de los grupos y las
              condiciones de asistencia se confirmarán antes de la inscripción.
            </p>
          </div>
          <ValuationLink className={`${styles.button} ${styles.buttonDark}`}>
            Consultar valoración inicial <ArrowUpRight size={19} aria-hidden="true" />
          </ValuationLink>
        </div>
      </section>
    </>
  );
}
