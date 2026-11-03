import Link from "next/link";
import { ArrowRight, CalendarRange } from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { programFactLabels, programs, whatsappMessages } from "@/lib/site";
import styles from "./programas.module.css";

export const metadata = pageMetadata({
  title: "Programas",
  description:
    "Conoce Anotadores Élite y Anotadores Flex de Academia Triple Amenaza: un proceso completo de 12 semanas o sesiones sueltas para desarrollar tu juego.",
  path: "/programas/",
});

const [elite, flex] = programs;

const selectionQuestions = [
  {
    number: "01",
    title: "¿Qué quieres mejorar?",
    text: "Piensa qué recursos de anotación quieres mejorar y cómo trasladarlos a situaciones de partido.",
  },
  {
    number: "02",
    title: "¿Qué continuidad necesitas?",
    text: "Valora si prefieres un proceso estructurado o sesiones que puedas encajar con más flexibilidad.",
  },
  {
    number: "03",
    title: "¿Cómo encaja en tu temporada?",
    text: "Ten en cuenta tus entrenamientos de club, partidos y disponibilidad antes de elegir.",
  },
] as const;

export default function ProgramasPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="programs-page-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 id="programs-page-title" className={styles.heroTitle}>
              TU FORMA <span>DE ENTRENAR.</span>
            </h1>
            <p className={styles.heroLead}>
              No todos los jugadores necesitan lo mismo. Encuentra el formato
              que mejor se adapta a tu objetivo y a tu manera de organizar el entrenamiento.
            </p>
          </div>
          {/* Comparativa en el punto de decisión: los mismos datos que las tarjetas de Inicio. */}
          <div className={styles.heroAside}>
            <table className={styles.compare}>
              <caption>Élite y Flex, de un vistazo</caption>
              <thead>
                <tr>
                  <td />
                  <th scope="col">Élite</th>
                  <th scope="col">Flex</th>
                </tr>
              </thead>
              <tbody>
                {programFactLabels.map((label, index) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{elite.facts[index]}</td>
                    <td>{flex.facts[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.heroAsideBottom}>Precios con IVA incluido.</p>
          </div>
        </div>
      </section>

      <section className={styles.offer} id="formatos" aria-labelledby="programs-page-offer-title">
        <div className="container">
          <div className={styles.offerHeading}>
            <div>
              <h2 id="programs-page-offer-title" className={`${styles.sectionTitle} ${styles.duoTitle}`} >
                <span>DIFERENTES CAMINOS.</span>
                <span>MISMO PROPÓSITO.</span>
              </h2>
            </div>
            <p>
              Elige la continuidad que mejor encaja contigo: un proceso completo de
              12 semanas o sesiones cuando te vengan bien.
            </p>
          </div>

          <div className={styles.duoGrid}>
            <Link className={`${styles.duoCard} ${styles.duoElite}`} href={elite.href}>
              <div className={styles.duoTop}>
                <span>{elite.label}</span>
                <ArrowRight size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className={styles.duoTarget} aria-hidden="true">
                <span /><span /><span />
              </div>
              <div className={styles.duoContent}>
                <h3>{elite.title}</h3>
                <p>{elite.description}</p>
                <span className={styles.duoLink}>
                  Descubrir el programa <ArrowRight size={19} aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link className={`${styles.duoCard} ${styles.duoFlex}`} href={flex.href}>
              <div className={styles.duoTop}>
                <span>{flex.label}</span>
                <ArrowRight size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <CalendarRange className={styles.duoSymbol} size={108} strokeWidth={1.1} aria-hidden="true" />
              <div className={styles.duoContent}>
                <h3>{flex.title}</h3>
                <p>{flex.description}</p>
                <span className={styles.duoLink}>
                  Descubrir el programa <ArrowRight size={19} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
          <p className={styles.duoNote}>
            Las condiciones, fechas y plazas se confirmarán directamente con la academia.
          </p>
          {/* Workshops: actividades puntuales, no un tercer programa; sin calendario aún. */}
          <p className={styles.workshopsRow}>
            <span>Además organizamos <strong>workshops y masterclasses</strong> sobre aspectos concretos del juego.</span>
            <Link href="/programas/workshops/" className="text-link">
              Ver próximas actividades <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.choice} aria-labelledby="programs-page-choice-title">
        <div className={`container ${styles.choiceGrid}`}>
          <div className={styles.choiceIntro}>
            <h2 id="programs-page-choice-title" className={styles.sectionTitle}>
              ELIGE CON <em>CRITERIO.</em>
            </h2>
            <p>El mejor programa no es el más exigente, sino el que tiene sentido para tu momento deportivo.</p>
          </div>
          <div className={styles.questions}>
            {selectionQuestions.map((question) => (
              <article className={styles.question} key={question.number}>
                <div>
                  <h3>{question.title}</h3>
                  <p>{question.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre en el punto de decisión: quien duda entre Élite y Flex pregunta aquí. */}
      <section className={styles.closing} aria-labelledby="programs-page-closing-title">
        <div className={`container ${styles.closingGrid}`}>
          <div className={styles.closingHeading}>
            <h2 id="programs-page-closing-title">
              ¿DUDAS ENTRE ÉLITE <em>Y FLEX?</em>
            </h2>
          </div>
          <div className={styles.closingContent}>
            <p className={styles.closingLead}>
              Cuéntanos qué quiere mejorar el jugador y cómo encaja en su temporada:
              te ayudamos a elegir el formato.
            </p>
            <WhatsappLink className={styles.closingLink} message={whatsappMessages.programChoice} namesChannel>
              Consultar por WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </>
  );
}
