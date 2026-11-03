import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Dumbbell,
  Target,
} from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { academyAreas, whatsappMessages } from "@/lib/site";
import styles from "./academia.module.css";

export const metadata = pageMetadata({
  title: "Academia",
  description:
    "Conoce Academia Triple Amenaza: tecnificación de baloncesto, preparación física y desarrollo personal, con el objetivo de transferir cada mejora al partido.",
  path: "/academia/",
});

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

/** Los nombres de las áreas vienen de academyAreas (los mismos que en Inicio). */
const pillars = [
  {
    number: "01",
    subtitle: "Entender y resolver",
    text: "Recursos técnicos, lectura del juego y capacidad para generar y aprovechar ventajas.",
    icon: Target,
  },
  {
    number: "02",
    subtitle: "Moverse con propósito",
    text: "El desarrollo de las capacidades físicas como apoyo a las demandas del baloncesto.",
    icon: Dumbbell,
  },
  {
    number: "03",
    subtitle: "Crecer durante el proceso",
    text: "Hábitos, confianza, autonomía y compromiso con el aprendizaje a largo plazo.",
    icon: BrainCircuit,
  },
] as const;

export default function AcademiaPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="academy-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 id="academy-title" className={styles.heroTitle}>
              MÁS ALLÁ <span>DE ENTRENAR.</span>
            </h1>
            <p className={styles.heroLead}>
              Queremos que cada jugador entienda mejor el juego, tome decisiones
              con confianza y utilice en competición lo que aprende en cada sesión.
            </p>
          </div>

          <figure className={styles.heroFigure}>
            <div className={`${styles.photoWrap} ${styles.heroPhoto}`}>
              <Image
                src="/imagenes/grupo-ata.webp"
                alt="Jugadores y entrenadores de la academia reuniéndose en la pista y levantando las manos"
                width={1500}
                height={1000}
                sizes="(max-width: 860px) 100vw, 52vw"
                priority
                className={styles.photo}
              />
            </div>
            <figcaption>Sesión grupal de Triple Amenaza · Fotografía: R1kman_fotografia</figcaption>
          </figure>
        </div>
      </section>

      {/* Filosofía: tres ideas, diferentes de las etapas oficiales del método. */}
      <section className={styles.approach} aria-labelledby="academy-approach-title">
        <div className={`container ${styles.approachGrid}`}>
          <div className={styles.approachIntro}>
            <h2 id="academy-approach-title" className={styles.sectionTitle}>
              EL PROGRESO <em>TIENE UN PORQUÉ.</em>
            </h2>
            <p>
              Academia Triple Amenaza nace como evolución de Triple Threat:
              ampliamos la tecnificación con preparación física y desarrollo
              personal, sin perder de vista lo esencial: jugar mejor.
            </p>
          </div>
          <div className={styles.principles}>
            {principles.map((principle) => (
              <article className={styles.principle} key={principle.number}>
                <span className={styles.itemNumber}>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
                <span className={styles.principleDash} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pillars} aria-labelledby="academy-pillars-title">
        <div className="container">
          <div className={styles.pillarsHeading}>
            <h2 id="academy-pillars-title" className={styles.sectionTitle}>
              TRES ÁREAS. <span>UN JUGADOR.</span>
            </h2>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article className={styles.pillar} key={pillar.number}>
                  <div className={styles.pillarTop}>
                    <Icon size={32} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <span className={styles.pillarSubtitle}>{pillar.subtitle}</span>
                    <h3>{academyAreas[index]}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.club} aria-labelledby="academy-club-title">
        <div className={`container ${styles.clubGrid}`}>
          <figure className={styles.clubFigure}>
            <div className={`${styles.photoWrap} ${styles.clubPhoto}`}>
              <Image
                src="/imagenes/sesion-ata.webp"
                alt="Un entrenador de Triple Amenaza junto a un jugador con balón durante una sesión en pista"
                width={1400}
                height={2100}
                sizes="(max-width: 860px) 100vw, 40vw"
                className={styles.photo}
              />
            </div>
            <figcaption>Trabajo en pista · Fotografía: R1kman_fotografia</figcaption>
          </figure>
          <div className={styles.clubCopy}>
            <h2 id="academy-club-title" className={styles.sectionTitle}>
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
            <Link href="/metodo/" className={styles.outlineLink}>
              Conoce el Método ATA <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cierre: hablar con la academia primero; los programas, como alternativa. */}
      <section className={styles.next} aria-labelledby="academy-next-title">
        <div className={`container ${styles.nextInner}`}>
          <div className={styles.nextCourt} aria-hidden="true"><span /></div>
          <h2 id="academy-next-title">CADA JUGADOR. <em>SU CAMINO.</em></h2>
          <p>Cuéntanos el punto de partida del jugador y te ayudamos a encontrar el formato que mejor se adapta.</p>
          <div className={styles.nextActions}>
            <WhatsappLink className={styles.nextLink} message={whatsappMessages.general} namesChannel>
              Escribir por WhatsApp <ArrowUpRight size={19} aria-hidden="true" />
            </WhatsappLink>
            <Link href="/programas/" className="text-link">
              Ver los programas <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
