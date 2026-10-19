import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: Props) {
  return (
    <section className="inner-hero">
      <div className="container">
        <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Volver al inicio</Link>
        <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
        <h1 className="inner-title">{title}</h1>
        <p className="inner-lead">{description}</p>
      </div>
    </section>
  );
}
