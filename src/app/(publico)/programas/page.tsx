import type { Metadata } from "next";
import { PageIntro } from "@/components/publico/page-intro";
import { ProgramCard } from "@/components/publico/program-card";
import { programs } from "@/lib/site";

export const metadata: Metadata = { title: "Programas" };

export default function ProgramasPage() {
  return <>
    <PageIntro eyebrow="PROGRAMAS" title="Tu juego. Tu proceso." description="Conoce las distintas formas de entrenar en Triple Amenaza: un programa completo de evolución, sesiones flexibles o trabajo individual." />
    <section className="section section-cream"><div className="container"><div className="program-grid">{programs.map(program => <ProgramCard key={program.number} program={program}/>)}</div><p className="section-footnote">La información comercial detallada, los precios y la disponibilidad se confirmarán antes de abrir inscripciones desde la web.</p></div></section>
  </>;
}
