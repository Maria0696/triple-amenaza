import type { Metadata } from "next";
import { PageIntro } from "@/components/web/page-intro";

export const metadata: Metadata = { title: "Equipo" };

export default function EquipoPage() {
  return <>
    <PageIntro eyebrow="PERSONAS" title="Detrás de cada sesión." description="Los profesionales y entrenadores son una parte esencial de la experiencia de la academia." />
    <section className="section section-cream"><div className="container simple-note"><p className="eyebrow">EQUIPO ATA</p><h2>Pronto conocerás al equipo.</h2><p>Estamos preparando los perfiles y las fotografías autorizadas. No publicaremos biografías hasta que estén verificadas.</p></div></section>
  </>;
}
