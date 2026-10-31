import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/web/page-intro";

export const metadata: Metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="ERROR 404"
        title="Esta jugada no existe."
        description="La página que buscas no está disponible o ha cambiado de dirección."
      />
      <section className="section section-cream">
        <div className="container simple-note">
          <h2>Sigue por aquí.</h2>
          <p>
            Descubre los programas de la academia o escríbenos si buscabas algo
            concreto y no lo encuentras.
          </p>
          <div className="simple-note-actions">
            <Link className="button button-orange" href="/programas/">
              Ver los programas <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/contacto/">
              Ir a contacto <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
