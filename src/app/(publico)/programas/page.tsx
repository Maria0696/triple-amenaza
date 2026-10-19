import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarRange, UserRound } from "lucide-react";

import { programs } from "@/lib/site";
import "./programas.css";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Descubre los programas de Academia Triple Amenaza: Anotadores Élite, Anotadores Flex y entrenamiento individual. Tres formas de desarrollar tu juego.",
};

const [elite, flex, individual] = programs;

const otherPrograms = [
  {
    program: flex,
    icon: CalendarRange,
    cue: "ELIGE CUÁNDO ENTRENAR",
  },
  {
    program: individual,
    icon: UserRound,
    cue: "TRABAJA TU PROPIO OBJETIVO",
  },
] as const;

const selectionQuestions = [
  {
    number: "01",
    title: "¿Qué quieres mejorar?",
    text: "Define si buscas desarrollar tu capacidad anotadora o abordar un objetivo individual concreto.",
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
          <div className="programs-page-hero-aside" aria-label="Los tres enfoques de entrenamiento">
            <div className="programs-page-hero-aside-top">
              <span>UNA ACADEMIA</span>
              <span>03 FORMATOS</span>
            </div>
            <div className="programs-page-hero-aside-row">
              <span>01</span><strong>Continuidad</strong><span>ÉLITE</span>
            </div>
            <div className="programs-page-hero-aside-row">
              <span>02</span><strong>Flexibilidad</strong><span>FLEX</span>
            </div>
            <div className="programs-page-hero-aside-row">
              <span>03</span><strong>Uno a uno</strong><span>INDIVIDUAL</span>
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
              <h2 id="programs-page-offer-title" className="programs-page-section-title">
                TRES PROGRAMAS. <em>DISTINTOS PUNTOS DE PARTIDA.</em>
              </h2>
            </div>
            <p>
              Puedes recorrerlos y conocer qué ofrece cada uno. La elección depende
              de tus objetivos, el tipo de acompañamiento y la continuidad que buscas.
            </p>
          </div>

          <Link className="programs-page-feature" href={elite.href}>
            <div className="programs-page-feature-main">
              <div className="programs-page-card-top">
                <span>01 / 03 — {elite.label}</span>
                <ArrowUpRight size={26} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="programs-page-feature-content">
                <span className="programs-page-tag">{elite.tag}</span>
                <h3>{elite.title}</h3>
                <p>{elite.description}</p>
                <span className="programs-page-card-link">
                  Descubrir el programa <ArrowRight size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="programs-page-feature-side" aria-hidden="true">
              <span className="programs-page-feature-side-top">ATA / DESARROLLO ANOTADOR</span>
              <span className="programs-page-feature-number">01</span>
              <span className="programs-page-feature-side-bottom">
                <span>VALORACIÓN</span>
                <span>OBJETIVOS</span>
                <span>SEGUIMIENTO</span>
              </span>
            </div>
          </Link>

          <div className="programs-page-other-grid">
            {otherPrograms.map(({ program, icon: Icon, cue }) => (
              <Link className="programs-page-card" href={program.href} key={program.number}>
                <div className="programs-page-card-top">
                  <span>{program.number} / 03 — {program.label}</span>
                  <ArrowUpRight size={25} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="programs-page-card-symbol" aria-hidden="true">
                  <Icon size={38} strokeWidth={1.4} />
                </div>
                <div className="programs-page-card-body">
                  <span className="programs-page-card-cue">{cue}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <span className="programs-page-card-link">
                    Descubrir el programa <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
            <Link href="/workshops/" className="programs-page-workshops-link">
              Descubre los workshops
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
