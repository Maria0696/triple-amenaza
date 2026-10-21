import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Crosshair,
  Dumbbell,
  Footprints,
  MoveUpRight,
  ScanEye,
  Target,
} from "lucide-react";

import "./elite.css";

export const metadata: Metadata = {
  title: "Anotadores Élite",
  description:
    "Conoce Anotadores Élite de Academia Triple Amenaza: un programa de 12 semanas de tecnificación, objetivos y seguimiento para trasladar los recursos al partido.",
};

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

// Se mantiene el canal de contacto configurado en /contacto/.
// Comprobar el número antes del lanzamiento público.
const whatsappNumber = "34618599976";
const whatsappMessage =
  "Hola, quiero información sobre la valoración inicial de Anotadores Élite. ¿Podéis indicarme cómo funciona y las próximas opciones disponibles?";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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

const areas = [
  {
    number: "01",
    title: "Manejo de balón",
    description: "Proteger, cambiar de ritmo y crear ventajas con bote.",
    icon: Crosshair,
  },
  {
    number: "02",
    title: "Finalización",
    description: "Resolver cerca del aro con distintos apoyos y recursos.",
    icon: Footprints,
  },
  {
    number: "03",
    title: "Tiro en estático",
    description: "Preparación de pies, equilibrio y ejecución tras recepción.",
    icon: Target,
  },
  {
    number: "04",
    title: "Tiro en movimiento",
    description: "Tirar tras bote o desplazamiento, también con oposición.",
    icon: MoveUpRight,
  },
  {
    number: "05",
    title: "Inteligencia anotadora",
    description: "Reconocer cuándo tirar, penetrar, pasar o moverse sin balón.",
    icon: ScanEye,
  },
  {
    number: "06",
    title: "Físico aplicado",
    description: "Acelerar, frenar y cambiar de dirección con control.",
    icon: Dumbbell,
  },
  {
    number: "07",
    title: "Mentalidad",
    description: "Atreverse, aprender del error y sostener el esfuerzo.",
    icon: BrainCircuit,
  },
] as const;

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
      aria-label="Solicitar información sobre la valoración inicial de Anotadores Élite por WhatsApp (se abre en una pestaña nueva)"
    >
      {children}
    </a>
  );
}

export default function AnotadoresElitePage() {
  return (
    <>
      {/* Cabecera: mismo diseño, ahora con información práctica y CTA específico. */}
      <section className="elite-hero" aria-labelledby="elite-title">
        <div className="container elite-hero-grid">
          <div className="elite-hero-copy">
            <p className="elite-eyebrow elite-eyebrow-light">
              <span className="elite-eyebrow-rule" aria-hidden="true" />
              PROGRAMA 01 / ANOTADORES ÉLITE
            </p>
            <h1 id="elite-title" className="elite-hero-title">
              ANOTAR NO ES SOLO TIRAR.
              <span>ES SABER DECIDIR.</span>
            </h1>
            <p className="elite-hero-lead">
              Un proceso de tecnificación para desarrollar recursos anotadores,
              generar ventajas y tomar mejores decisiones frente a defensores,
              con el objetivo de llevar ese aprendizaje al partido.
            </p>
            <div className="elite-commercial-facts" aria-label="Formato previsto del programa">
              <span><strong>{offer.durationWeeks}</strong> SEMANAS</span>
              <span><strong>{offer.totalSessions}</strong> SESIONES</span>
              <span><strong>{offer.sessionMinutes}′</strong> POR SESIÓN</span>
            </div>
            <div className="elite-commercial-hero-actions">
              <ValuationLink className="elite-button elite-commercial-primary">
                Consultar valoración inicial <ArrowUpRight size={19} aria-hidden="true" />
              </ValuationLink>
            </div>
          </div>

          <aside className="elite-profile" aria-label="Las siete áreas del perfil anotador">
            <div className="elite-profile-top">
              <span>ATA / PERFIL DEL ANOTADOR</span>
              <span>07 ÁREAS</span>
            </div>
            <div className="elite-profile-title">
              <span>UNA VISIÓN</span>
              <strong>COMPLETA DEL JUEGO.</strong>
            </div>
            <ol className="elite-profile-areas">
              {areas.map((area) => (
                <li key={area.number}>
                  <span>{area.number}</span>
                  <span>{area.title}</span>
                </li>
              ))}
            </ol>
            <p className="elite-profile-foot">La selección del trabajo depende del punto de partida de cada jugador.</p>
          </aside>
        </div>
      </section>

      {/* Bloque comercial más importante: qué recibe la familia. */}
      <section className="elite-commercial-includes" id="elite-incluye" aria-labelledby="elite-includes-title">
        <div className="container">
          <div className="elite-commercial-includes-head">
            <div>
              <p className="elite-eyebrow">01 / TODO LO QUE INCLUYE</p>
              <h2 id="elite-includes-title" className="elite-heading">
                {offer.durationWeeks} SEMANAS. <em>UN OBJETIVO CLARO.</em>
              </h2>
            </div>
            <p>
              No es solo venir a entrenar. Es saber de dónde partes, qué quieres mejorar
              y cómo comprobar si tus recursos aparecen también en el juego real.
            </p>
          </div>

          <div className="elite-commercial-includes-grid">
            {deliverables.map((item) => (
              <article key={item.number} className="elite-commercial-deliverable">
                <div className="elite-commercial-deliverable-top">
                  <span>{item.number} / 06</span>
                  <Check size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="elite-commercial-format-note">
            Formato de referencia: una sesión semanal de 60 minutos durante 12 semanas.
            Las fechas, el grupo y las condiciones definitivas se confirmarán con ATA.
          </p>
        </div>
      </section>

      {/* Tarifas históricas solicitadas por ATA; confirmar condiciones adicionales antes de publicar. */}
      <section className="elite-commercial-pricing" id="elite-condiciones" aria-labelledby="elite-pricing-title">
        <div className="container elite-commercial-pricing-layout">
          <div className="elite-commercial-pricing-copy">
            <p className="elite-eyebrow elite-eyebrow-light">02 / CONDICIONES DEL PROGRAMA</p>
            <h2 id="elite-pricing-title" className="elite-heading">
              UNA APUESTA POR <em>TU PROGRESO.</em>
            </h2>
            <p>
              Elige el formato de pago que mejor encaje contigo. Antes de formalizar
              la inscripción te explicaremos la valoración, los grupos y las
              condiciones de asistencia.
            </p>
            <ValuationLink className="elite-button elite-commercial-primary">
              Consultar condiciones <ArrowUpRight size={19} aria-hidden="true" />
            </ValuationLink>
          </div>
          <div className="elite-commercial-price-cards">
            <article className="elite-commercial-price-card elite-commercial-price-card-featured">
              <span className="elite-commercial-price-label">01 / PAGO ÚNICO</span>
              <h3>Una sola cuota.</h3>
              <p className="elite-commercial-price-amount">{offer.singlePayment} €</p>
              <p>Pago completo del programa en una única operación.</p>
            </article>
            <article className="elite-commercial-price-card">
              <span className="elite-commercial-price-label">02 / PAGO FRACCIONADO</span>
              <h3>En tres pagos.</h3>
              <p className="elite-commercial-price-amount">{offer.installmentTotal} €</p>
              <p>Consulta con ATA los plazos y condiciones de este formato de pago.</p>
            </article>
            <p className="elite-commercial-pricing-notice">
              IVA incluido en ambos importes. El posible coste de la valoración inicial,
              las plazas y las condiciones de asistencia se confirmarán antes de la inscripción.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciadores: conserva la rejilla visual original. */}
      <section className="elite-foundations" aria-labelledby="elite-foundations-title">
        <div className="container">
          <div className="elite-foundations-heading">
            <div>
              <p className="elite-eyebrow">03 / POR QUÉ ANOTADORES ÉLITE</p>
              <h2 id="elite-foundations-title" className="elite-heading">
                NO PARTIMOS DEL EJERCICIO.
                <em> PARTIMOS DEL JUGADOR.</em>
              </h2>
            </div>
            <p>
              Dos jugadores pueden querer anotar más y necesitar caminos distintos.
              Lo importante es transformar el entrenamiento en respuestas útiles para competir.
            </p>
          </div>
          <div className="elite-foundations-grid">
            {foundations.map((item) => (
              <article className="elite-foundation" key={item.number}>
                <div className="elite-foundation-top">
                  <span>{item.number} / 03</span>
                  <span className="elite-foundation-dash" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <Link className="elite-commercial-method-link" href="/metodo/">
            Descubre cómo trabajamos: Método ATA
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="elite-areas" id="elite-areas" aria-labelledby="elite-areas-title">
        <div className="container">
          <div className="elite-section-head elite-areas-head">
            <div>
              <p className="elite-eyebrow">04 / DESARROLLO ANOTADOR</p>
              <h2 id="elite-areas-title" className="elite-heading">
                MÁS RECURSOS. <em>MEJORES DECISIONES.</em>
              </h2>
            </div>
            <p>
              Siete áreas para observar el juego del jugador y elegir qué
              necesita trabajar, sin obligar a todos a seguir el mismo ritmo.
            </p>
          </div>
          <div className="elite-areas-grid">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <article className="elite-area" key={area.number}>
                  <div className="elite-area-top">
                    <span>{area.number} / 07</span>
                    <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mantener la comunicación prudente hasta que se confirme el pasaporte. */}
      <section className="elite-passport" aria-labelledby="elite-passport-title">
        <div className="container elite-passport-inner">
          <p className="elite-eyebrow elite-eyebrow-light">05 / SEGUIMIENTO CON SENTIDO</p>
          <h2 id="elite-passport-title" className="elite-heading">
            PROGRESAR TAMBIÉN ES <em>SABER HACIA DÓNDE.</em>
          </h2>
          <div className="elite-passport-lower">
            <p className="elite-passport-description">
              A lo largo del programa revisamos los objetivos y el aprendizaje
              en pista. Al cierre, compartimos una devolución del trabajo y
              orientamos los siguientes pasos.
            </p>
            <div className="elite-passport-development">
              <span className="elite-passport-development-label">HERRAMIENTA EN PREPARACIÓN</span>
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

      <section className="elite-faq" aria-labelledby="elite-faq-title">
        <div className="container elite-faq-grid">
          <div>
            <p className="elite-eyebrow">06 / RESOLVEMOS TUS DUDAS</p>
            <h2 id="elite-faq-title" className="elite-heading">ANTES DE <em>EMPEZAR.</em></h2>
            <p className="elite-faq-intro">Todo lo que conviene tener claro antes de dar el siguiente paso.</p>
          </div>
          <div className="elite-faq-questions">
            {questions.map((question, index) => (
              <details key={question.title} className="elite-faq-item">
                <summary>
                  <span className="elite-faq-number">0{index + 1}</span>
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
      <section className="elite-closing" aria-labelledby="elite-closing-title">
        <div className="container elite-closing-grid">
          <div>
            <p className="elite-eyebrow">TU SIGUIENTE PASO</p>
            <h2 id="elite-closing-title">CADA JUGADOR. <em>SU PROPIO CAMINO.</em></h2>
            <p>
              Cuéntanos en qué quiere mejorar el jugador y te explicaremos cómo
              planteamos la valoración inicial y las opciones de incorporación.
            </p>
            <p className="elite-closing-note">
              El posible coste de la valoración, la composición de los grupos y las
              condiciones de asistencia se confirmarán antes de la inscripción.
            </p>
          </div>
          <ValuationLink className="elite-button elite-button-dark">
            Consultar valoración inicial <ArrowUpRight size={19} aria-hidden="true" />
          </ValuationLink>
        </div>
      </section>
    </>
  );
}
