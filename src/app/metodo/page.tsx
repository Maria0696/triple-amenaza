import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Eye,
  MoveUpRight,
  Target,
} from "lucide-react";

import { methodDescription, methodSteps } from "@/lib/site";
import "./metodo.css";

export const metadata: Metadata = {
  title: "Método ATA",
  description:
    "Así trabajamos en Academia Triple Amenaza: observar, definir, entrenar y transferir. Cuatro etapas conectadas para llevar el aprendizaje al juego real.",
};

/**
 * Contenido ampliado de cada etapa. Los nombres, números y descripciones
 * oficiales se mantienen exclusivamente en src/lib/site.ts.
 */
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
    icon: Target,
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
      {/* Introducción: resumen navegable de las etapas. */}
      <section className="method-page-hero" aria-labelledby="method-page-title">
        <div className="container method-page-hero-grid">
          <div className="method-page-hero-copy">
            <p className="method-page-eyebrow method-page-eyebrow-light">
              <span className="method-page-eyebrow-rule" aria-hidden="true" />
              MÉTODO ATA / CÓMO TRABAJAMOS
            </p>
            <h1 id="method-page-title" className="method-page-hero-title">
              CADA SESIÓN.
              <span>CON UN PORQUÉ.</span>
            </h1>
            <p className="method-page-hero-lead">
              Un buen entrenamiento empieza por entender qué necesita el jugador.
              A partir de ahí, damos sentido a cada tarea y buscamos que lo
              aprendido sea útil en competición.
            </p>
          </div>

          <nav className="method-page-index" aria-label="Ir a una etapa del Método ATA">
            <div className="method-page-index-top">
              <span>EL RECORRIDO</span>
              <span>01 — 04</span>
            </div>
            <ol>
              {methodSteps.map((step) => (
                <li key={step.number}>
                  <a href={`#etapa-${step.number}`}>
                    <span className="method-page-index-number">{step.number}</span>
                    <span className="method-page-index-name">{step.title}</span>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
            <p className="method-page-index-bottom">
              CUATRO ETAPAS <span>·</span> UN PROCESO CONECTADO
            </p>
          </nav>
        </div>
      </section>

      {/* Las cuatro etapas oficiales, con información adicional para cada una. */}
      <section className="method-page-process" id="etapas" aria-labelledby="method-page-process-title">
        <div className="container">
          <div className="method-page-process-heading">
            <div>
              <p className="method-page-eyebrow">EL PROCESO / 04 ETAPAS</p>
              <h2 id="method-page-process-title" className="method-page-heading">
                LA MEJORA <em>SE CONSTRUYE.</em>
              </h2>
            </div>
            <p>{methodDescription}</p>
          </div>

          <div className="method-page-stages">
            {methodSteps.map((step, index) => {
              const detail = stageDetails[index];
              const Icon = detail.icon;

              return (
                <article
                  className="method-page-stage"
                  id={`etapa-${step.number}`}
                  key={step.number}
                  aria-labelledby={`method-page-stage-title-${step.number}`}
                >
                  <div className="method-page-stage-index">
                    <span className="method-page-stage-big-number">{step.number}</span>
                    <div className="method-page-progress" aria-hidden="true">
                      {methodSteps.map((part, partIndex) => (
                        <span
                          key={part.number}
                          className={partIndex <= index ? "is-filled" : ""}
                        />
                      ))}
                    </div>
                    <span className="method-page-stage-count">ETAPA {step.number} / 04</span>
                  </div>

                  <div className="method-page-stage-main">
                    <p className="method-page-stage-kicker">{detail.kicker}</p>
                    <h3 id={`method-page-stage-title-${step.number}`}>{step.title}</h3>
                    <p className="method-page-stage-summary">{step.detail}</p>
                    <p className="method-page-stage-text">{detail.explanation}</p>
                  </div>

                  <div className="method-page-stage-aside">
                    <span className="method-page-stage-icon" aria-hidden="true">
                      <Icon size={29} strokeWidth={1.6} />
                    </span>
                    <span className="method-page-stage-question-label">PREGUNTA CLAVE</span>
                    <p>{detail.question}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="method-page-process-note">
            El contenido y la dificultad de las tareas se adaptan al programa y al punto de partida de cada jugador.
          </p>
        </div>
      </section>

      {/* Idea central del método, sin repetir los cuatro pasos. */}
      <section className="method-page-practice" aria-labelledby="method-page-practice-title">
        <div className="container method-page-practice-grid">
          <div>
            <p className="method-page-eyebrow method-page-eyebrow-light">EL SENTIDO DE LA PRÁCTICA</p>
            <h2 id="method-page-practice-title" className="method-page-heading">
              NO SE TRATA DE REPETIR MÁS.
              <em> SE TRATA DE RESOLVER MEJOR.</em>
            </h2>
          </div>
          <div className="method-page-practice-copy">
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

      {/* Próximo paso: un único enlace a programas. */}
      <section className="method-page-closing" aria-labelledby="method-page-closing-title">
        <div className="container method-page-closing-inner">
          <p className="method-page-eyebrow">EL SIGUIENTE PASO</p>
          <h2 id="method-page-closing-title">
            UN MÉTODO. <em>DIFERENTES CAMINOS.</em>
          </h2>
          <p>
            El punto de partida de cada jugador es distinto. Descubre los formatos
            de entrenamiento de Triple Amenaza y encuentra el que mejor se adapta
            a lo que buscas.
          </p>
          <Link className="method-page-closing-link" href="/programas/">
            Explorar programas
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
