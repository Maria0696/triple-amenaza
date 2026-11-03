import Link from "next/link";
import {
  ArrowRight,
  CalendarRange,
  ChevronDown,
  Crosshair,
  Layers3,
  MoveUpRight,
} from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { whatsappMessages } from "@/lib/site";
import styles from "./flex.module.css";

export const metadata = pageMetadata({
  title: "Anotadores Flex",
  description:
    "Anotadores Flex de Academia Triple Amenaza: sesiones de tecnificación de baloncesto con mayor libertad de asistencia, sin perder la intención del entrenamiento.",
  path: "/programas/anotadores-flex/",
});

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
    title: "Técnica en situaciones de juego",
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
      "Puedes venir a sesiones sueltas o con un bono de cuatro sesiones. Consulta con ATA qué opciones están abiertas ahora.",
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
      "Sí, esa es la idea del formato flexible: puedes venir a sesiones sueltas o con un bono de cuatro. Las fechas y las plazas se confirman con la academia.",
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
      <section className={styles.hero} aria-labelledby="flex-page-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              ANOTADORES FLEX
            </p>
            <h1 id="flex-page-title" className={styles.heroTitle}>
              TU JUEGO.
              <span>A TU RITMO.</span>
            </h1>
            <p className={styles.heroLead}>
              Sigue desarrollando tu capacidad anotadora con sesiones de trabajo técnico
              que puedes encajar en tu temporada. Más libertad de asistencia,
              la misma intención de aprender y decidir mejor.
            </p>
            <WhatsappLink className={styles.heroAction} message={whatsappMessages.flex} namesChannel>
              Consultar por WhatsApp
            </WhatsappLink>
          </div>

          <div className={styles.heroBoard} role="group" aria-label="Tres claves de Anotadores Flex">
            <div className={styles.heroBoardHead}>
              <span>MODALIDAD FLEX</span>
            </div>
            {/* Lema decorativo, oculto a lectores de pantalla; los tres conceptos de abajo sí se leen. */}
            <div className={styles.heroBoardCore} aria-hidden="true">
              <span className={styles.boardLabel}>LA CLAVE NO ES CUÁNDO.</span>
              <strong>FLEX</strong>
              <span className={styles.boardUnderline}>ES PARA QUÉ ENTRENAS.</span>
            </div>
            <div className={styles.boardBottom}>
              <span>RECURSOS TÉCNICOS</span>
              <span>DECISIONES</span>
              <span>JUEGO REAL</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.value} id="flex-que-es" aria-labelledby="flex-page-value-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <h2 id="flex-page-value-title" className={styles.heading}>
                FLEXIBILIDAD. <em>SIN PERDER EL FOCO.</em>
              </h2>
            </div>
            <p>
              No siempre es posible entrenar todas las semanas en el mismo horario.
              Flex permite seguir sumando sesiones sin convertir la asistencia
              fija en una condición del formato.
            </p>
          </div>

          <div className={styles.strengths}>
            {strengths.map(({ number, label, title, description, icon: Icon }) => (
              <article className={styles.strength} key={number}>
                <div className={styles.strengthTop}>
                  <Icon size={31} strokeWidth={1.45} aria-hidden="true" />
                </div>
                <div className={styles.strengthBottom}>
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.steps} aria-labelledby="flex-page-steps-title">
        <div className={`container ${styles.stepsGrid}`}>
          <div className={styles.stepsIntro}>
            <h2 id="flex-page-steps-title" className={styles.heading}>
              SIN HORARIO FIJO. <em className={styles.plainEm}>CON UN PROPÓSITO CLARO.</em>
            </h2>
            <p>
              La planificación de las sesiones sigue teniendo sentido.
              Lo que cambia es cómo puedes organizar tu asistencia.
            </p>
            <WhatsappLink className={`${styles.heroAction} ${styles.stepsAction}`} message={whatsappMessages.flex} namesChannel>
              Consultar por WhatsApp
            </WhatsappLink>
          </div>
          <div className={styles.stepsList}>
            {howItWorks.map((step) => (
              <article className={styles.step} key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
            <p className={styles.stepsNote}>
              La disponibilidad de sesiones, bonos, grupos y condiciones se confirma directamente con ATA.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.compare} aria-labelledby="flex-page-compare-title">
        <div className="container">
          <div className={styles.compareHeading}>
            <h2 id="flex-page-compare-title" className={styles.heading}>
              DOS FORMATOS. <em>UNA MISMA FILOSOFÍA.</em>
            </h2>
            <p>
              La atención al jugador importa en ambos programas.
              La diferencia está en la continuidad y el alcance del proceso.
            </p>
          </div>
          <div className={styles.compareGrid}>
            <div className={`${styles.compareCard} ${styles.compareFlex}`}>
              <div className={styles.compareCardHead}>
                <Layers3 size={25} aria-hidden="true" />
              </div>
              <h3>Anotadores Flex</h3>
              <p>
                Sesiones de trabajo técnico con libertad de asistencia, sujetas
                a las fechas y plazas disponibles.
              </p>
              <WhatsappLink className={`${styles.heroAction} ${styles.compareAction}`} message={whatsappMessages.flex} namesChannel>
                Consultar por WhatsApp
              </WhatsappLink>
            </div>
            <div className={`${styles.compareCard} ${styles.compareElite}`}>
              <div className={styles.compareCardHead}>
                <Crosshair size={25} aria-hidden="true" />
              </div>
              <h3>Anotadores Élite</h3>
              <p>
                Un recorrido estructurado que incorpora valoración inicial,
                prioridades individuales, continuidad y seguimiento.
              </p>
              <Link href="/programas/anotadores-elite/" className={styles.compareLink}>
                Conoce Anotadores Élite <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="flex-page-faq-title">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <h2 id="flex-page-faq-title" className={styles.heading}>
              PREGUNTAS <em className={styles.plainEm}>FRECUENTES.</em>
            </h2>
            <p className={styles.faqIntro}>
              Lo importante es encontrar el entrenamiento adecuado
              para tu situación, no elegir un formato por su nombre.
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details className={styles.faqItem} key={item.title}>
                <summary>
                  <span>{item.title}</span>
                  <ChevronDown size={22} strokeWidth={1.8} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="flex-page-closing-title">
        <div className={`container ${styles.closingGrid}`}>
          <div>
            <h2 id="flex-page-closing-title">
              ENCUENTRA TU MOMENTO. <em>SIGUE JUGANDO.</em>
            </h2>
          </div>
          <div className={styles.closingAction}>
            <p>
              ¿Quieres saber qué sesiones y bonos están disponibles?
              Escríbenos y te contamos las próximas fechas.
            </p>
            <WhatsappLink className={styles.closingLink} message={whatsappMessages.flex} namesChannel>
              Escribir por WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </>
  );
}
