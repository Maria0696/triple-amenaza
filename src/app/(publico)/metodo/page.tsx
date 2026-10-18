import type { Metadata } from "next";
import { PageIntro } from "@/components/publico/page-intro";
import { methodSteps } from "@/lib/site";

export const metadata: Metadata = { title: "Método ATA" };

export default function MetodoPage() {
  return <>
    <PageIntro eyebrow="METODOLOGÍA" title="Intención en cada sesión." description="Observar el punto de partida, definir prioridades, entrenar con criterio y transferir lo aprendido a situaciones de juego." />
    <section className="section section-cream"><div className="container"><p className="eyebrow">NUESTRO PROCESO</p><div className="method-list">{methodSteps.map(step => <article key={step.number}><span>{step.number}</span><div><h2>{step.title}</h2><p>{step.detail}</p></div></article>)}</div><p className="section-footnote">Los contenidos y las cargas se adaptan a cada programa y a las necesidades del jugador.</p></div></section>
  </>;
}
