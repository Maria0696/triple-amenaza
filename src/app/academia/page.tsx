import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Dumbbell,
  Target,
} from "lucide-react";

import "./academia.css";

export const metadata: Metadata = {
  title: "Academia",
  description:
    "Conoce Academia Triple Amenaza: tecnificación de baloncesto, preparación física y desarrollo personal, con el objetivo de transferir cada mejora al partido.",
};

const principles = [
  {
    number: "01",
    title: "Conocer antes de entrenar",
    description:
      "Partimos del punto de partida de cada jugador para identificar necesidades, fortalezas y prioridades.",
  },
  {
    number: "02",
    title: "Dar intención a cada reto",
    description:
      "Buscamos que la práctica tenga un propósito: reconocer situaciones, decidir y encontrar respuestas.",
  },
  {
    number: "03",
    title: "Llevarlo al partido",
    description:
      "Introducimos oposición y dificultades progresivas para conectar el entrenamiento con el juego real.",
  },
] as const;

const pillars = [
  {
    number: "01",
    title: "Baloncesto",
    subtitle: "Entender y resolver",
    text: "Recursos técnicos, lectura del juego y capacidad para generar y aprovechar ventajas.",
    icon: Target,
  },
  {
    number: "02",
    title: "Preparación física",
    subtitle: "Moverse con propósito",
    text: "El desarrollo de las capacidades físicas como apoyo a las demandas del baloncesto.",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "Desarrollo personal",
    subtitle: "Crecer durante el proceso",
    text: "Hábitos, confianza, autonomía y compromiso con el aprendizaje a largo plazo.",
    icon: BrainCircuit,
  },
] as const;

export default function AcademiaPage() {
  return (
    <>
      {/* Cabecera de la academia. Se mantiene el header compartido. */}
      <section className="academy-hero" aria-labelledby="academy-title">
        <div className="container academy-hero-grid">
          <div className="academy-hero-copy">
            <p className="academy-eyebrow academy-eyebrow-light">
              <span className="academy-eyebrow-line" aria-hidden="true" />
              ACADEMIA / TRIPLE AMENAZA
            </p>
            <h1 id="academy-title" className="academy-hero-title">
              MÁS ALLÁ <span>DE ENTRENAR.</span>
            </h1>
            <p className="academy-hero-lead">
              Queremos que cada jugador entienda mejor el juego, tome decisiones
              con confianza y utilice en competición lo que aprende en cada sesión.
            </p>
          </div>

          <figure className="academy-hero-figure">
            <div className="academy-photo-wrap academy-hero-photo">
              <Image
                src="/imagenes/grupo-ata.webp"
                alt="Jugadores y entrenadores de la academia reuniéndose en la pista y levantando las manos"
                width={1500}
                height={1000}
                sizes="(max-width: 860px) 100vw, 52vw"
                priority
                className="academy-photo"
              />
              <span className="academy-photo-stamp" aria-hidden="true">
                ATA / EN EQUIPO
              </span>
            </div>
            <figcaption>Sesión grupal de Triple Amenaza · Fotografía: R1kman_fotografia</figcaption>
          </figure>
        </div>
      </section>

      {/* Filosofía: tres ideas, diferentes de las etapas oficiales del método. */}
      <section className="academy-approach" aria-labelledby="academy-approach-title">
        <div className="container academy-approach-grid">
          <div className="academy-approach-intro">
            <p className="academy-eyebrow">01 / NUESTRA FILOSOFÍA</p>
            <h2 id="academy-approach-title" className="academy-section-title">
              EL PROGRESO <em>TIENE UN PORQUÉ.</em>
            </h2>
            <p>
              Academia Triple Amenaza nace como evolución de Triple Threat:
              ampliamos la tecnificación con preparación física y desarrollo
              personal, sin perder de vista lo esencial: jugar mejor.
            </p>
          </div>
          <div className="academy-principles">
            {principles.map((principle) => (
              <article className="academy-principle" key={principle.number}>
                <span className="academy-item-number">{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
                <span className="academy-principle-dash" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tres pilares de la academia; no equivalen a las cuatro etapas de ATA. */}
      <section className="academy-pillars" aria-labelledby="academy-pillars-title">
        <div className="container">
          <div className="academy-pillars-heading">
            <p className="academy-eyebrow">02 / UNA VISIÓN COMPLETA</p>
            <h2 id="academy-pillars-title" className="academy-section-title">
              TRES ÁREAS. <span>UN MISMO PROPÓSITO.</span>
            </h2>
          </div>
          <div className="academy-pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="academy-pillar" key={pillar.number}>
                  <div className="academy-pillar-top">
                    <span>{pillar.number} / 03</span>
                    <Icon size={32} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="academy-pillar-subtitle">{pillar.subtitle}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Relación de ATA con la competición y los entrenamientos del club. */}
      <section className="academy-club" aria-labelledby="academy-club-title">
        <div className="container academy-club-grid">
          <figure className="academy-club-figure">
            <div className="academy-photo-wrap academy-club-photo">
              <Image
                src="/imagenes/sesion-ata.webp"
                alt="Un entrenador de Triple Amenaza junto a un jugador con balón durante una sesión en pista"
                width={1365}
                height={2048}
                sizes="(max-width: 860px) 100vw, 40vw"
                className="academy-photo"
              />
              <span className="academy-club-photo-mark" aria-hidden="true">ATA / EN PISTA</span>
            </div>
            <figcaption>Trabajo en pista · Fotografía: R1kman_fotografia</figcaption>
          </figure>
          <div className="academy-club-copy">
            <p className="academy-eyebrow academy-eyebrow-light">03 / SUMAMOS AL EQUIPO</p>
            <h2 id="academy-club-title" className="academy-section-title">
              EL CLUB ES PARTE <span>DEL CAMINO.</span>
            </h2>
            <p>
              Triple Amenaza complementa el trabajo que los jugadores realizan
              con sus equipos. No buscamos sustituirlo, sino dedicar tiempo a
              necesidades individuales que después puedan trasladarse a los
              entrenamientos y partidos.
            </p>
            <p>
              El objetivo es que el jugador crezca con recursos propios,
              comprenda mejor sus decisiones y se sienta preparado para los retos de la competición.
            </p>
            <Link href="/metodo/" className="academy-outline-link">
              Conoce el Método ATA <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA única de cierre, sin inscripciones ni plazas no confirmadas. */}
      <section className="academy-next" aria-labelledby="academy-next-title">
        <div className="container academy-next-inner">
          <div className="academy-next-court" aria-hidden="true"><span /></div>
          <p className="academy-eyebrow">TU SIGUIENTE PASO</p>
          <h2 id="academy-next-title">CADA JUGADOR. <em>SU CAMINO.</em></h2>
          <p>Descubre nuestros programas y encuentra el formato que mejor se adapta a tu punto de partida.</p>
          <Link href="/programas/" className="academy-next-link">
            Conoce los programas <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
