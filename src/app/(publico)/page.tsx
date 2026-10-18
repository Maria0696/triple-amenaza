import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { methodSteps, programs } from "@/lib/site";
import { ProgramCard } from "@/components/publico/program-card";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-on-dark"><span className="eyebrow-line" /> ACADEMIA DE BALONCESTO</p>
            <h1>NO SE TRATA<br />SOLO DE <span className="hero-emphasis">JUGAR<span className="hero-dot">.</span></span></h1>
            <p className="hero-description">Se trata de entender, decidir y evolucionar. Tecnificación, preparación física y desarrollo del jugador con un propósito.</p>
            <div className="hero-actions">
              <Link className="button button-orange" href="/programas/">Descubre los programas <ArrowUpRight size={19} aria-hidden="true" /></Link>
              <Link className="text-link text-link-light" href="/metodo/">Así trabajamos <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustración geométrica de una pista de baloncesto" role="img">
            <div className="hero-visual-caption"><span>TRIPLE AMENAZA</span><span>01 / MOVIMIENTO</span></div>
            <div className="court-art" aria-hidden="true">
              <div className="court-outer"><div className="court-middle" /><div className="court-center" /><div className="court-key" /><div className="court-hoop" /></div>
              <div className="court-ball"><span /><span /></div>
            </div>
            <span className="hero-vertical-label">TRAIN DIFFERENT · PLAY WITH PURPOSE</span>
            <div className="hero-art-footer"><span>OBSERVAR · ENTRENAR · TRANSFERIR</span><MoveUpRight size={20} /></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>01 / ACADEMIA TRIPLE AMENAZA</span><a href="#programas" aria-label="Ir a programas">DESLIZA PARA EXPLORAR <ArrowDownRight size={18}/></a></div>
      </section>

      <section className="section manifesto-section">
        <div className="container manifesto-grid">
          <div><p className="eyebrow">NUESTRA IDEA DE ENTRENAR</p><p className="index-mark">01 — 04</p></div>
          <div><h2 className="manifesto-title">El talento importa.<br /><em>El proceso transforma.</em></h2><p className="manifesto-copy">La pista es el punto de partida. En Triple Amenaza trabajamos el desarrollo técnico, físico y personal para que cada aprendizaje tenga sentido en el juego.</p><Link className="text-link" href="/academia/">Conoce la academia <ArrowUpRight size={18}/></Link></div>
        </div>
      </section>

      <section className="section section-cream" id="programas">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">ENCUENTRA TU CAMINO</p><h2 className="section-title">Una academia.<br /><em>Diferentes maneras de crecer.</em></h2></div><Link className="text-link desktop-only" href="/programas/">Ver todos los programas <ArrowUpRight size={18} /></Link></div>
          <div className="program-grid">{programs.map(program => <ProgramCard key={program.number} program={program}/>)}</div>
          <p className="section-footnote">Formatos, horarios, precios y disponibilidad sujetos a confirmación con la academia.</p>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="section-heading method-heading"><div><p className="eyebrow eyebrow-on-dark">MÉTODO ATA</p><h2 className="section-title">Entrenar tiene<br /><em>que tener sentido.</em></h2></div><p>Más que acumular ejercicios: entender el punto de partida, dar intención al trabajo y trasladarlo al juego.</p></div>
          <div className="steps-grid">{methodSteps.map(step => <article key={step.number} className="step-card"><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.detail}</p><ArrowUpRight size={19} aria-hidden="true" /></article>)}</div>
          <Link className="button button-outline" href="/metodo/">Descubre el método <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <section className="section closing-section">
        <div className="container closing-inner"><p className="eyebrow">LA SIGUIENTE JUGADA</p><h2>EL SIGUIENTE<br />PASO <em>EMPIEZA AQUÍ.</em></h2><p>Explora nuestros programas y encuentra la forma de entrenar que mejor encaja con tus objetivos.</p><Link className="button button-dark" href="/programas/">Explorar programas <ArrowUpRight size={19}/></Link></div>
      </section>
    </>
  );
}
