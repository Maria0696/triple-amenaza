import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarRange } from "lucide-react";

import { programs } from "@/lib/site";
import "./programas.css";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Conoce Anotadores Élite y Anotadores Flex de Academia Triple Amenaza. Dos maneras de entrenar con intención y desarrollar tu juego.",
};

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
      <section className="programs-page-hero" aria-labelledby="programs-page-title">
        <div className="container programs-page-hero-grid">
          <div className="programs-page-hero-copy">
            <p className="programs-page-eyebrow programs-page-eyebrow-light">
              <span className="programs-page-eyebrow-rule" aria-hidden="true" />
              PROGRAMAS / TRIPLE AMENAZA
            </p>
            <h1 id="programs-page-title" className="programs-page-hero-title">
              TU FORMA <span>DE ENTRENAR.</span>
            </h1>
            <p className="programs-page-hero-lead">
              No todos los jugadores necesitan lo mismo. Encuentra el formato
              que mejor se adapta a tu objetivo y a tu manera de organizar el entrenamiento.
            </p>
          </div>
          <div className="programs-page-hero-aside" aria-label="Los dos formatos de entrenamiento">
            <div className="programs-page-hero-aside-top">
              <span>UNA ACADEMIA</span>
              <span>02 FORMATOS</span>
            </div>
            <div className="programs-page-hero-aside-row">
              <span>01</span><strong>Continuidad</strong><span>ÉLITE</span>
            </div>
            <div className="programs-page-hero-aside-row">
              <span>02</span><strong>Flexibilidad</strong><span>FLEX</span>
            </div>
            <div className="programs-page-hero-aside-bottom">
              DIFERENTES NECESIDADES. UNA MISMA INTENCIÓN.
            </div>
          </div>
        </div>
      </section>

      <section className="programs-page-offer" id="formatos" aria-labelledby="programs-page-offer-title">
        <div className="container">
          <div className="programs-page-offer-heading">
            <div>
              <p className="programs-page-eyebrow">01 / ENCUENTRA TU FORMATO</p>
              <h2 id="programs-page-offer-title" className="programs-page-section-title programs-page-duo-title" >
                <span>DIFERENTES CAMINOS.</span>
                <span>MISMO PROPÓSITO.</span>
              </h2>
            </div>
            <p>
              Dos maneras de entrenar con intención. Elige la continuidad que mejor
              encaja contigo: proceso completo o asistencia flexible.
            </p>
          </div>

          <div className="programs-page-duo-grid">
            <Link className="programs-page-duo-card programs-page-duo-elite" href={elite.href}>
              <div className="programs-page-duo-top">
                <span>01 / 02 — {elite.label}</span>
                <ArrowUpRight size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="programs-page-duo-target" aria-hidden="true">
                <span /><span /><span />
              </div>
              <div className="programs-page-duo-content">
                <span className="programs-page-duo-tag">{elite.tag}</span>
                <h3>{elite.title}</h3>
                <p>{elite.description}</p>
                <span className="programs-page-duo-link">
                  Descubrir el programa <ArrowRight size={19} aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link className="programs-page-duo-card programs-page-duo-flex" href={flex.href}>
              <div className="programs-page-duo-top">
                <span>02 / 02 — {flex.label}</span>
                <ArrowUpRight size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <CalendarRange className="programs-page-duo-symbol" size={108} strokeWidth={1.1} aria-hidden="true" />
              <div className="programs-page-duo-content">
                <span className="programs-page-duo-tag">{flex.tag}</span>
                <h3>{flex.title}</h3>
                <p>{flex.description}</p>
                <span className="programs-page-duo-link">
                  Descubrir el programa <ArrowRight size={19} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
          <p className="programs-page-duo-note">
            Las condiciones, fechas y plazas se confirmarán directamente con la academia.
          </p>
        </div>
      </section>

      <section className="programs-page-choice" aria-labelledby="programs-page-choice-title">
        <div className="container programs-page-choice-grid">
          <div className="programs-page-choice-intro">
            <p className="programs-page-eyebrow programs-page-eyebrow-light">02 / ANTES DE ELEGIR</p>
            <h2 id="programs-page-choice-title" className="programs-page-section-title">
              ELIGE CON <em>INTENCIÓN.</em>
            </h2>
            <p>No se trata de encontrar el programa más exigente, sino el que tenga sentido para tu momento deportivo.</p>
          </div>
          <div className="programs-page-questions">
            {selectionQuestions.map((question) => (
              <article className="programs-page-question" key={question.number}>
                <span className="programs-page-question-number">{question.number}</span>
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
      <section className="programs-page-workshops" aria-labelledby="programs-page-workshops-title">
        <div className="container programs-page-workshops-grid">
          <div className="programs-page-workshops-heading">
            <p className="programs-page-eyebrow">03 / MÁS ALLÁ DE LOS PROGRAMAS</p>
            <h2 id="programs-page-workshops-title">
              HAY MÁS JUEGO <em>POR DESCUBRIR.</em>
            </h2>
          </div>
          <div className="programs-page-workshops-content">
            <p className="programs-page-workshops-label">WORKSHOPS / MASTERCLASSES</p>
            <p className="programs-page-workshops-lead">
              Además de nuestros programas habituales, organizamos actividades
              dedicadas a aspectos concretos del baloncesto y del desarrollo deportivo.
            </p>
            <p className="programs-page-workshops-detail">
              Encuentros para profundizar, compartir experiencias y llevarse nuevas
              ideas a la pista. Consulta el espacio de actividades para conocer
              las próximas novedades.
            </p>
            <Link href="workshops/" className="programs-page-workshops-link">
              Descubre los workshops
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
