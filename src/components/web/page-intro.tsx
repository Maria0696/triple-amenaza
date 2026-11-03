import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  /** Sección a la que vuelve el enlace superior; por defecto, el inicio. */
  back?: { href: string; label: string };
};

export function PageIntro({ eyebrow, title, description, back = { href: "/", label: "Volver al inicio" } }: Props) {
  return (
    <section className="inner-hero">
      <div className="container">
        <Link className="back-link" href={back.href}><ArrowLeft size={16} aria-hidden="true" /> {back.label}</Link>
        <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
        <h1 className="inner-title">{title}</h1>
        <p className="inner-lead">{description}</p>
      </div>
    </section>
  );
}
