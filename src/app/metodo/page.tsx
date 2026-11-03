import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Eye,
  ListChecks,
  MoveUpRight,
} from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { methodDescription, methodSteps, whatsappMessages } from "@/lib/site";
import styles from "./metodo.module.css";

export const metadata = pageMetadata({
  title: "Método ATA",
  description:
    "Así trabajamos en Academia Triple Amenaza: observar, definir, entrenar y transferir. Cuatro etapas conectadas para llevar el aprendizaje al juego real.",
  path: "/metodo/",
});

/**
 * Contenido ampliado de cada etapa. Los nombres, números y descripciones
 * oficiales se mantienen exclusivamente en src/lib/site.ts.
 */
// Iconos de cada etapa: los mismos que methodIcons en Inicio (src/app/page.tsx).
const stageDetails = [
  {
    kicker: "LEER EL PUNTO DE PARTIDA",
    explanation:
      "Antes de elegir tareas, nos interesa conocer los recursos del jugador y las situaciones en las que le cuesta encontrar soluciones. Observar y escuchar orienta el trabajo posterior.",
    question: "¿Qué hace ya bien y qué necesita mejorar?",
    icon: Eye,
  },
  {
    kicker: "ELEGIR EL FOCO",
    explanation:
      "Convertimos lo observado en prioridades concretas. Un objetivo claro ayuda a que las tareas tengan un propósito y el jugador comprenda qué está intentando conseguir.",
    question: "¿Qué merece más atención ahora?",
    icon: ListChecks,
  },
  {
    kicker: "DAR SENTIDO A LA PRÁCTICA",
    explanation:
      "Planteamos retos con intención y dificultad progresiva. No se trata solo de acumular repeticiones, sino de generar oportunidades para percibir, decidir y ejecutar.",
    question: "¿Qué situaciones debe aprender a resolver?",
    icon: Dumbbell,
  },
  {
    kicker: "PONERLO A PRUEBA",
    explanation:
      "Acercamos el trabajo a las exigencias de la competición, incorporando oposición y decisiones en contextos de juego. El objetivo es utilizar los recursos aprendidos cuando hacen falta.",
    question: "¿Puede utilizarlo ante un rival?",
    icon: MoveUpRight,
  },
] as const;

export default function MetodoPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="method-page-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 id="method-page-title" className={styles.heroTitle}>
              CADA SESIÓN.
              <span>CON UN PORQUÉ.</span>
            </h1>
            <p className={styles.heroLead}>
              Un buen entrenamiento empieza por entender qué necesita el jugador.
              A partir de ahí, damos sentido a cada tarea y buscamos que lo
              aprendido sea útil en competición.
            </p>
          </div>

          <nav className={styles.index} aria-label="Ir a una etapa del Método ATA">
            <div className={styles.indexTop}>
              <span>EL RECORRIDO</span>
              <span>01 — 04</span>
            </div>
            <ol>
              {methodSteps.map((step) => (
                <li key={step.number}>
                  <a href={`#etapa-${step.number}`}>
                    <span className={styles.indexNumber}>{step.number}</span>
                    <span className={styles.indexName}>{step.title}</span>
                    <ArrowDown size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
            <p className={styles.indexBottom}>
              CUATRO ETAPAS <span>·</span> UN PROCESO CONECTADO
            </p>
          </nav>
        </div>
      </section>

      <section className={styles.process} id="etapas" aria-labelledby="method-page-process-title">
        <div className="container">
          <div className={styles.processHeading}>
            <div>
              <h2 id="method-page-process-title" className={styles.heading}>
                LA MEJORA <em>SE CONSTRUYE.</em>
              </h2>
            </div>
            <p>{methodDescription}</p>
          </div>

          <div className={styles.stages}>
            {methodSteps.map((step, index) => {
              const detail = stageDetails[index];
              const Icon = detail.icon;

              return (
                <article
                  className={styles.stage}
                  id={`etapa-${step.number}`}
                  key={step.number}
                  aria-labelledby={`method-page-stage-title-${step.number}`}
                >
                  <div className={styles.stageIndex}>
                    {/* Decorativo: el número ya se anuncia en "ETAPA 0X / 04". */}
                    <span className={styles.stageBigNumber} aria-hidden="true">{step.number}</span>
                    <div className={styles.progress} aria-hidden="true">
                      {methodSteps.map((part, partIndex) => (
                        <span
                          key={part.number}
                          className={partIndex <= index ? styles.isFilled : undefined}
                        />
                      ))}
                    </div>
                    <span className={styles.stageCount}>ETAPA {step.number} / 04</span>
                  </div>

                  <div className={styles.stageMain}>
                    <p className={styles.stageKicker}>{detail.kicker}</p>
                    <h3 id={`method-page-stage-title-${step.number}`}>{step.title}</h3>
                    <p className={styles.stageSummary}>{step.detail}</p>
                    <p className={styles.stageText}>{detail.explanation}</p>
                  </div>

                  <div className={styles.stageAside}>
                    <span className={styles.stageIcon} aria-hidden="true">
                      <Icon size={29} strokeWidth={1.6} />
                    </span>
                    <span className={styles.stageQuestionLabel}>PREGUNTA CLAVE</span>
                    <p>{detail.question}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className={styles.processNote}>
            El contenido y la dificultad de las tareas se adaptan al programa y al punto de partida de cada jugador.
          </p>
        </div>
      </section>

      <section className={styles.practice} aria-labelledby="method-page-practice-title">
        <div className={`container ${styles.practiceGrid}`}>
          <div>
            <h2 id="method-page-practice-title" className={styles.heading}>
              NO SE TRATA DE REPETIR MÁS.
              <em> SE TRATA DE RESOLVER MEJOR.</em>
            </h2>
          </div>
          <div className={styles.practiceCopy}>
            <p>
              Una tarea tiene valor cuando ayuda al jugador a reconocer una situación,
              elegir una respuesta y ejecutarla con intención.
            </p>
            <p>
              Por eso conectamos los ejercicios con el juego: el aprendizaje no
              termina al finalizar la sesión, sino cuando puede ponerse en práctica.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre: WhatsApp como botón (relleno = WhatsApp en toda la web); los programas, como texto. */}
      <section className={styles.closing} aria-labelledby="method-page-closing-title">
        <div className={`container ${styles.closingInner}`}>
          <h2 id="method-page-closing-title">
            UN MÉTODO. <em>DOS PROGRAMAS.</em>
          </h2>
          <p>
            El punto de partida de cada jugador es distinto. Descubre los formatos
            de entrenamiento de Triple Amenaza y encuentra el que mejor se adapta
            a lo que buscas.
          </p>
          <div className={styles.closingActions}>
            <WhatsappLink className={styles.closingLink} message={whatsappMessages.programChoice}>
              ¿Dudas? Te ayudamos a elegir
              <ArrowUpRight size={19} aria-hidden="true" />
            </WhatsappLink>
            <Link className="text-link" href="/programas/">
              Explorar programas <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
