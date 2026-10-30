import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarRange,
  ChevronDown,
  Crosshair,
  Layers3,
  MoveUpRight,
} from "lucide-react";

import "./flex.css";

export const metadata: Metadata = {
  title: "Anotadores Flex",
  description:
    "Anotadores Flex de Academia Triple Amenaza: sesiones de tecnificación de baloncesto con mayor libertad de asistencia, sin perder la intención del entrenamiento.",
};

const strengths = [
  {
    number: "01",
    label: "ADAPTA TU AGENDA",
    title: "Flexibilidad para asistir",
    description:
      "Una alternativa para quienes no pueden comprometerse con una plaza semanal. Consulta las sesiones disponibles y elige las que encajen en tu calendario.",
    icon: CalendarRange,
  },
  {
    number: "02",
    label: "TRABAJO CON SENTIDO",
    title: "Tecnificación con intención",
    description:
      "Las sesiones se centran en recursos técnicos y situaciones de juego, con correcciones y propuestas adaptadas a lo que se trabaja en pista.",
    icon: Crosshair,
  },
  {
    number: "03",
    label: "LLEVARLO AL PARTIDO",
    title: "Aprender a decidir",
    description:
      "El objetivo no es acumular ejercicios: buscamos que el jugador reconozca ventajas y use sus recursos ante situaciones cada vez más reales.",
    icon: MoveUpRight,
  },
] as const;

const howItWorks = [
  {
    number: "01",
    title: "Consulta las sesiones",
    description:
      "Pregunta por las fechas y los grupos disponibles. La participación depende de las plazas y de la organización de cada sesión.",
  },
  {
    number: "02",
    title: "Elige cómo asistir",
    description:
      "La propuesta Flex contempla sesiones sueltas y bonos de cuatro. Consulta con ATA qué opciones y condiciones están vigentes.",
  },
  {
    number: "03",
    title: "Entrena y sigue mejorando",
    description:
      "Trabaja habilidades de baloncesto con un objetivo en cada sesión, respetando también los entrenamientos y partidos de tu club.",
  },
] as const;

const faqs = [
  {
    title: "¿Flex es menos personalizado que Élite?",
    answer:
      "No. Flex también busca que el trabajo tenga sentido para los jugadores presentes. La diferencia principal es la continuidad del programa y el seguimiento estructurado, no que el entrenador deje de atender las necesidades de cada jugador.",
  },
  {
    title: "¿Puedo asistir solo a algunas sesiones?",
    answer:
      "Sí, esa es la idea del formato flexible. La definición de Flex contempla sesiones sueltas y bonos de cuatro. Las fechas, las plazas y las condiciones concretas deben confirmarse con la academia.",
  },
  {
    title: "¿Tengo una plaza semanal reservada?",
    answer:
      "No existe una plaza fija garantizada por pertenecer a Flex. La asistencia se organiza según las sesiones y plazas disponibles, que se consultan con ATA.",
  },
  {
    title: "¿Incluye una valoración inicial y el seguimiento de Élite?",
    answer:
      "No de forma automática. Anotadores Élite está planteado como un proceso completo con valoración, objetivos y seguimiento. En Flex, una valoración individual se consulta por separado.",
  },
  {
    title: "¿Sustituye los entrenamientos de mi club?",
    answer:
      "No. En Academia Triple Amenaza buscamos complementar el trabajo del club, ayudando al jugador a trasladar los recursos entrenados a la competición.",
  },
] as const;

export default function AnotadoresFlexPage() {
  return (
    <>
      <section className="flex-page-hero" aria-labelledby="flex-page-title">
        <div className="container flex-page-hero-grid">
          <div className="flex-page-hero-copy">
            <p className="flex-page-eyebrow flex-page-eyebrow-light">
              <span className="flex-page-eyebrow-line" aria-hidden="true" />
              PROGRAMA 02 / ANOTADORES FLEX
            </p>
            <h1 id="flex-page-title" className="flex-page-hero-title">
              TU JUEGO.
              <span>A TU RITMO.</span>
            </h1>
            <p className="flex-page-hero-lead">
              Sigue desarrollando tu capacidad anotadora con sesiones de tecnificación
              que puedes encajar en tu temporada. Más libertad de asistencia,
              la misma intención de aprender y decidir mejor.
            </p>
          </div>

          <div className="flex-page-hero-board" role="group" aria-label="Tres claves de Anotadores Flex">
            <div className="flex-page-hero-board-head">
              <span>ATA / MODALIDAD FLEX</span>
              <span>02 / 03</span>
            </div>
            <div className="flex-page-hero-board-core" aria-hidden="true">
              <span className="flex-page-board-label">LA CLAVE NO ES CUÁNDO.</span>
              <strong>FLEX</strong>
              <span className="flex-page-board-underline">ES PARA QUÉ ENTRENAS.</span>
            </div>
            <div className="flex-page-board-bottom">
              <span>RECURSOS TÉCNICOS</span>
              <span>DECISIONES</span>
              <span>JUEGO REAL</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-page-value" id="flex-que-es" aria-labelledby="flex-page-value-title">
        <div className="container">
          <div className="flex-page-section-head">
            <div>
              <p className="flex-page-eyebrow">01 / QUÉ ES FLEX</p>
              <h2 id="flex-page-value-title" className="flex-page-heading">
                FLEXIBILIDAD. <em>CON INTENCIÓN.</em>
              </h2>
            </div>
            <p>
              No siempre es posible entrenar todas las semanas en el mismo horario.
              Flex permite seguir sumando sesiones sin convertir la asistencia
              fija en una condición del formato.
            </p>
          </div>

          <div className="flex-page-strengths">
            {strengths.map(({ number, label, title, description, icon: Icon }) => (
              <article className="flex-page-strength" key={number}>
                <div className="flex-page-strength-top">
                  <span>{number} / 03</span>
                  <Icon size={31} strokeWidth={1.45} aria-hidden="true" />
                </div>
                <div className="flex-page-strength-bottom">
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flex-page-steps" aria-labelledby="flex-page-steps-title">
        <div className="container flex-page-steps-grid">
          <div className="flex-page-steps-intro">
            <p className="flex-page-eyebrow flex-page-eyebrow-light">02 / ASÍ FUNCIONA</p>
            <h2 id="flex-page-steps-title" className="flex-page-heading">
              SIN HORARIO FIJO. <em>CON UN PROPÓSITO CLARO.</em>
            </h2>
            <p>
              La planificación de las sesiones sigue teniendo sentido.
              Lo que cambia es cómo puedes organizar tu asistencia.
            </p>
          </div>
          <div className="flex-page-steps-list">
            {howItWorks.map((step) => (
              <article className="flex-page-step" key={step.number}>
                <span className="flex-page-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
            <p className="flex-page-steps-note">
              La disponibilidad de sesiones, bonos, grupos y condiciones se confirma directamente con ATA.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-page-compare" aria-labelledby="flex-page-compare-title">
        <div className="container">
          <div className="flex-page-compare-heading">
            <p className="flex-page-eyebrow">03 / ENCUENTRA TU FORMATO</p>
            <h2 id="flex-page-compare-title" className="flex-page-heading">
              DOS FORMATOS. <em>UNA MISMA FILOSOFÍA.</em>
            </h2>
            <p>
              La atención al jugador importa en ambos programas.
              La diferencia está en la continuidad y el alcance del proceso.
            </p>
          </div>
          <div className="flex-page-compare-grid">
            <div className="flex-page-compare-card flex-page-compare-flex">
              <div className="flex-page-compare-card-head">
                <span>02 / FLEX</span>
                <Layers3 size={25} aria-hidden="true" />
              </div>
              <h3>Anotadores Flex</h3>
              <p>
                Sesiones de tecnificación con libertad de asistencia, sujetas
                a las fechas y plazas disponibles.
              </p>
              <div className="flex-page-compare-foot">ELIGE CÓMO ENCAJAR EL ENTRENAMIENTO</div>
            </div>
            <div className="flex-page-compare-card flex-page-compare-elite">
              <div className="flex-page-compare-card-head">
                <span>01 / ÉLITE</span>
                <Crosshair size={25} aria-hidden="true" />
              </div>
              <h3>Anotadores Élite</h3>
              <p>
                Un recorrido estructurado que incorpora valoración inicial,
                prioridades individuales, continuidad y seguimiento.
              </p>
              <Link href="/programas/anotadores-elite/" className="flex-page-compare-link">
                Conoce Anotadores Élite <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-page-faq" aria-labelledby="flex-page-faq-title">
        <div className="container flex-page-faq-grid">
          <div>
            <p className="flex-page-eyebrow">04 / RESOLVEMOS TUS DUDAS</p>
            <h2 id="flex-page-faq-title" className="flex-page-heading">
              PREGUNTAS <em>FRECUENTES.</em>
            </h2>
            <p className="flex-page-faq-intro">
              Lo importante es encontrar el entrenamiento adecuado
              para tu situación, no elegir un formato por su nombre.
            </p>
          </div>
          <div className="flex-page-faq-list">
            {faqs.map((item, index) => (
              <details className="flex-page-faq-item" key={item.title}>
                <summary>
                  <span className="flex-page-faq-number">0{index + 1}</span>
                  <span>{item.title}</span>
                  <ChevronDown size={22} strokeWidth={1.8} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="flex-page-closing" aria-labelledby="flex-page-closing-title">
        <div className="container flex-page-closing-grid">
          <div>
            <p className="flex-page-eyebrow">TU SIGUIENTE ENTRENAMIENTO</p>
            <h2 id="flex-page-closing-title">
              ENCUENTRA TU MOMENTO. <em>SIGUE JUGANDO.</em>
            </h2>
          </div>
          <div className="flex-page-closing-action">
            <p>
              ¿Quieres saber qué sesiones y modalidades están disponibles?
              Consulta las opciones con la academia.
            </p>
            <Link href="/contacto/" className="flex-page-closing-link">
              Ir a contacto <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
