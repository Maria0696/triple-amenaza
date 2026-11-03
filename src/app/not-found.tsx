import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { PageIntro } from "@/components/web/page-intro";
import { whatsappMessages } from "@/lib/site";

export const metadata: Metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <>
      <PageIntro
        title={<>ESTA JUGADA <span>NO EXISTE.</span></>}
        description="Error 404: la página que buscas no está disponible o ha cambiado de dirección."
      />
      <section className="section section-cream">
        <div className="container simple-note">
          <h2>Sigue por aquí.</h2>
          <p>
            Descubre los programas de la academia o escríbenos si buscabas algo
            concreto y no lo encuentras.
          </p>
          <div className="simple-note-actions">
            <WhatsappLink className="button button-orange" message={whatsappMessages.general} namesChannel iconSize={18}>
              Escribir por WhatsApp
            </WhatsappLink>
            <Link className="text-link" href="/programas/">
              Ver los programas <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
