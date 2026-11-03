import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarRange } from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { programs, whatsappMessages } from "@/lib/site";
import styles from "./programas.module.css";

export const metadata = pageMetadata({
  title: "Programas",
  description:
    "Conoce Anotadores Élite y Anotadores Flex de Academia Triple Amenaza. Dos maneras de entrenar con intención y desarrollar tu juego.",
  path: "/programas/",
});

const [elite, flex] = programs;

const selectionQuestions = [
  {
    number: "01",
    title: "¿Qué quieres mejorar?",
    text: "Piensa qué recursos anotadores quieres mejorar y cómo trasladarlos a situaciones de partido.",
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
          <div className={styles.heroAside} role="group" aria-label="Los dos formatos de entrenamiento">
            <div className={styles.heroAsideTop}>
              <span>UNA ACADEMIA</span>
              <span>DOS FORMATOS</span>
            </div>
            <div className={styles.heroAsideRow}>
              <strong>Continuidad</strong><span>ÉLITE</span>
            </div>
            <div className={styles.heroAsideRow}>
              <strong>Flexibilidad</strong><span>FLEX</span>
            </div>
            <div className={styles.heroAsideBottom}>
              DIFERENTES NECESIDADES. UNA MISMA INTENCIÓN.
            </div>
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
              Dos maneras de entrenar con intención. Elige la continuidad que mejor
              encaja contigo: proceso completo o asistencia flexible.
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
                <span className={styles.duoTag}>{elite.tag}</span>
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
                <span className={styles.duoTag}>{flex.tag}</span>
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
        </div>
      </section>

      <section className={styles.choice} aria-labelledby="programs-page-choice-title">
        <div className={`container ${styles.choiceGrid}`}>
          <div className={styles.choiceIntro}>
            <h2 id="programs-page-choice-title" className={styles.sectionTitle}>
              ELIGE CON <em>INTENCIÓN.</em>
            </h2>
            <p>No se trata de encontrar el programa más exigente, sino el que tenga sentido para tu momento deportivo.</p>
            <WhatsappLink className={styles.choiceAction} message={whatsappMessages.programChoice}>
              ¿Dudas? Te ayudamos a elegir <ArrowUpRight size={19} aria-hidden="true" />
            </WhatsappLink>
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

      {/* Cierre editorial: actividades puntuales, diferenciadas de los programas. */}
      <section className={styles.workshops} aria-labelledby="programs-page-workshops-title">
        <div className={`container ${styles.workshopsGrid}`}>
          <div className={styles.workshopsHeading}>
            <h2 id="programs-page-workshops-title">
              HAY MÁS JUEGO <em>POR DESCUBRIR.</em>
            </h2>
          </div>
          <div className={styles.workshopsContent}>
            <p className={styles.workshopsLabel}>WORKSHOPS / MASTERCLASSES</p>
            <p className={styles.workshopsLead}>
              Además de nuestros programas habituales, organizamos actividades
              dedicadas a aspectos concretos del baloncesto y del desarrollo deportivo.
            </p>
            <p className={styles.workshopsDetail}>
              Encuentros para profundizar, compartir experiencias y llevarse nuevas
              ideas a la pista. Consulta el espacio de actividades para conocer
              las próximas novedades.
            </p>
            <Link href="/programas/workshops/" className={styles.workshopsLink}>
              Descubre los workshops
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
