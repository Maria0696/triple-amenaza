import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Crosshair,
  Dumbbell,
  Footprints,
  MoveUpRight,
  ScanEye,
  Target,
} from "lucide-react";

import { methodSteps } from "@/lib/site";
import "./elite.css";

export const metadata: Metadata = {
  title: "Anotadores Élite",
  description:
    "Descubre Anotadores Élite de Academia Triple Amenaza: valoración individual, desarrollo anotador, objetivos y seguimiento para llevar las mejoras al partido.",
};

/**
 * Copy del programa. No introducir aquí plazas, precios, edad o ratio
 * de entrenamiento hasta que los datos comerciales estén confirmados.
 */
const foundations = [
  {
    number: "01",
    title: "Conocer al jugador",
    description:
      "Escuchamos sus objetivos y la visión de la familia, y contrastamos esa información con lo que observamos en pista.",
  },
  {
    number: "02",
    title: "Entrenar con un foco",
    description:
      "Identificamos fortalezas y prioridades para que cada reto tenga sentido dentro de su proceso de mejora.",
  },
  {
    number: "03",
    title: "Revisar la evolución",
    description:
      "Utilizamos la observación y el feedback para comprobar qué recursos se consolidan y qué necesita más trabajo.",
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

const stepApplication = [
  "Conversamos con el jugador y la familia y observamos cómo responde ante situaciones reales en pista.",
  "Elegimos qué habilidades y decisiones necesitan atención, sin perder de vista lo que ya hace bien.",
  "Proponemos tareas progresivas: desde dominar recursos hasta aplicarlos con oposición y elecciones reales.",
  "Revisamos qué aparece en el juego, recogemos feedback y ajustamos los próximos retos.",
] as const;

const questions = [
  {
    title: "¿En qué se diferencia de Anotadores Flex?",
    answer:
      "Élite se plantea como un proceso con valoración, objetivos y seguimiento. Flex ofrece acceso a sesiones de tecnificación en un formato más flexible, sin el mismo planteamiento de continuidad.",
  },
  {
    title: "¿Sustituye a los entrenamientos del club?",
    answer:
      "No. El trabajo en ATA complementa el entrenamiento con su equipo y busca que los recursos desarrollados puedan aparecer también en competición.",
  },
  {
    title: "¿La valoración inicial obliga a inscribirse?",
    answer:
      "No. La valoración sirve para conocer el punto de partida y conversar sobre los siguientes pasos. Realizarla no supone un compromiso de inscripción.",
  },
  {
    title: "¿Cuánto dura el proceso?",
    answer:
      "El horizonte de trabajo de referencia es de aproximadamente 12 semanas. El número de sesiones, el calendario y las condiciones concretas se confirman con la academia.",
  },
] as const;

export default function AnotadoresElitePage() {
  return (
    <>
      {/* Apertura: contenido real en vez de estadísticas de rendimiento inventadas. */}
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
              Un proceso de desarrollo anotador que comienza por conocer al
              jugador y conecta la técnica, la toma de decisiones y la confianza
              con situaciones reales de partido.
            </p>
            <p className="elite-hero-caption">
              VALORACIÓN <span>·</span> OBJETIVOS <span>·</span> OPOSICIÓN <span>·</span> SEGUIMIENTO
            </p>
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
            <p className="elite-profile-foot">Sin notas globales ni comparaciones entre jugadores.</p>
          </aside>
        </div>
      </section>

      {/* Diferenciadores: la página presenta el proceso, no solo una colección de ejercicios. */}
      <section className="elite-foundations" aria-labelledby="elite-foundations-title">
        <div className="container">
          <div className="elite-foundations-heading">
            <div>
              <p className="elite-eyebrow">01 / QUÉ HACE DIFERENTE A ÉLITE</p>
              <h2 id="elite-foundations-title" className="elite-heading">
                NO PARTIMOS DEL EJERCICIO.
                <em> PARTIMOS DEL JUGADOR.</em>
              </h2>
            </div>
            <p>
              Dos jugadores pueden querer anotar más y necesitar caminos distintos.
              El punto de partida importa tanto como el objetivo.
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
        </div>
      </section>

      {/* Método ATA oficial, aplicado al programa; una sola fuente para los nombres. */}
      <section className="elite-process" id="elite-proceso" aria-labelledby="elite-process-title">
        <div className="container">
          <div className="elite-section-head">
            <div>
              <p className="elite-eyebrow">02 / EL RECORRIDO</p>
              <h2 id="elite-process-title" className="elite-heading">
                UN PROCESO. <em>CUATRO ETAPAS.</em>
              </h2>
            </div>
            <p>
              La continuidad permite entrenar, observar y ajustar. El horizonte
              de referencia es de unas 12 semanas, sujeto al formato acordado.
            </p>
          </div>

          <div className="elite-steps">
            {methodSteps.map((step, index) => (
              <article className="elite-step" key={step.number}>
                <span className="elite-step-number">{step.number}</span>
                <div className="elite-step-content">
                  <span className="elite-step-count">ETAPA {step.number} / 04</span>
                  <h3>{step.title}</h3>
                  <p>{stepApplication[index]}</p>
                </div>
                <span className="elite-step-progress" aria-hidden="true">
                  {methodSteps.map((part, i) => (
                    <span key={part.number} className={i <= index ? "is-active" : ""} />
                  ))}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Las siete áreas proceden de la ficha de evaluación de ATA. */}
      <section className="elite-areas" id="elite-areas" aria-labelledby="elite-areas-title">
        <div className="container">
          <div className="elite-section-head elite-areas-head">
            <div>
              <p className="elite-eyebrow">03 / DESARROLLO ANOTADOR</p>
              <h2 id="elite-areas-title" className="elite-heading">
                MÁS RECURSOS. <em>MEJORES DECISIONES.</em>
              </h2>
            </div>
            <p>
              Siete áreas que nos ayudan a observar al jugador y elegir qué
              trabajar. No todos necesitan avanzar al mismo ritmo en cada una.
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

      {/* Seguimiento: sin presentar una maqueta de un producto todavía en desarrollo. */}
      <section className="elite-passport" aria-labelledby="elite-passport-title">
        <div className="container elite-passport-inner">
          <p className="elite-eyebrow elite-eyebrow-light">04 / SEGUIMIENTO CON SENTIDO</p>
          <h2 id="elite-passport-title" className="elite-heading">
            PROGRESAR TAMBIÉN ES <em>SABER HACIA DÓNDE.</em>
          </h2>

          <div className="elite-passport-lower">
            <p className="elite-passport-description">
              Reconocemos lo que cada jugador ya hace bien, observamos cómo
              utiliza sus recursos en pista y ajustamos el siguiente reto.
              La evolución tiene más sentido cuando sabemos qué estamos
              trabajando y por qué.
            </p>
            <div className="elite-passport-development">
              <span className="elite-passport-development-label">EN DESARROLLO</span>
              <h3>Pasaporte del Anotador</h3>
              <p>
                Estamos diseñando una herramienta visual para acompañar ese
                recorrido. Compartiremos sus detalles cuando esté preparada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas útiles, sin prometer disponibilidad ni fechas sin confirmar. */}
      <section className="elite-faq" aria-labelledby="elite-faq-title">
        <div className="container elite-faq-grid">
          <div>
            <p className="elite-eyebrow">05 / PREGUNTAS HABITUALES</p>
            <h2 id="elite-faq-title" className="elite-heading">ANTES DE <em>EMPEZAR.</em></h2>
            <p className="elite-faq-intro">Un programa que encaje con el jugador y su momento deportivo.</p>
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

      {/* Un solo CTA de cierre: /contacto/ existe, pero los canales aún se están preparando. */}
      <section className="elite-closing" aria-labelledby="elite-closing-title">
        <div className="container elite-closing-grid">
          <div>
            <p className="elite-eyebrow">TU SIGUIENTE PASO</p>
            <h2 id="elite-closing-title">CADA JUGADOR. <em>SU PROPIO CAMINO.</em></h2>
            <p>
              El primer paso es conocerte. Descubre cómo planteamos la valoración
              inicial y las opciones de continuidad para Anotadores Élite.
            </p>
            <p className="elite-closing-note">
              Horarios, precios, plazas y canales de inscripción pendientes de confirmación en la web.
            </p>
          </div>
          <Link href="/contacto/" className="elite-button elite-button-dark">
            Información y contacto <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
