import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  /** Titular en dos tonos, como el resto de páginas: la segunda parte va en <span>. */
  title: ReactNode;
  description: string;
  /** Sección a la que vuelve el enlace superior; por defecto, el inicio. */
  back?: { href: string; label: string };
};

export function PageIntro({ title, description, back = { href: "/", label: "Volver al inicio" } }: Props) {
  return (
    <section className="inner-hero">
      <div className="container">
        <Link className="back-link" href={back.href}><ArrowLeft size={16} aria-hidden="true" /> {back.label}</Link>
        <h1 className="inner-title">{title}</h1>
        <p className="inner-lead">{description}</p>
      </div>
    </section>
  );
}
