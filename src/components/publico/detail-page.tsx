import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/publico/page-intro";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  sections: { title: string; text: string }[];
};

export function DetailPage({ eyebrow, title, description, sections }: Props) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      <section className="section section-cream">
        <div className="container detail-layout">
          <div><p className="eyebrow">EN DETALLE</p><h2 className="section-title">Una propuesta<br /><em>con intención.</em></h2></div>
          <div className="detail-list">
            {sections.map((s, i) => <article className="detail-item" key={s.title}><span className="detail-index">0{i+1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="section contact-strip"><div className="container strip-inner"><div><p className="eyebrow">SIGUIENTE PASO</p><h2>¿Quieres saber más?</h2><p>Los canales de consulta e inscripción estarán disponibles próximamente.</p></div><Link href="/contacto/" className="button button-light">Estado del contacto <ArrowRight size={18}/></Link></div></section>
    </>
  );
}
