import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/publico/page-intro";

export const metadata: Metadata = { title: "La academia" };

export default function AcademiaPage() {
  return <>
    <PageIntro eyebrow="QUIÉNES SOMOS" title="Más allá de la pista." description="Triple Amenaza es una academia centrada en la tecnificación del baloncesto, la preparación física y el desarrollo personal del jugador." />
    <section className="section section-cream"><div className="container content-split"><div><p className="eyebrow">NUESTRA FILOSOFÍA</p><h2 className="section-title">Formar mejores<br /><em>jugadores y personas.</em></h2></div><div className="prose"><p>Trabajamos como complemento al entrenamiento en el club. Nuestro enfoque busca dar intención al proceso individual, observar las necesidades de cada jugador y construir herramientas que puedan utilizarse en competición.</p><p>El desarrollo técnico es importante, pero también lo son la preparación física, la comprensión del juego y los hábitos que acompañan al aprendizaje.</p><Link href="/metodo/" className="text-link">Conoce nuestro método <ArrowUpRight size={18}/></Link></div></div></section>
  </>;
}
