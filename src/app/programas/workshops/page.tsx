import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { pageMetadata } from "@/lib/metadata";
import { whatsappMessages } from "@/lib/site";
import { PageIntro } from "@/components/web/page-intro";

export const metadata = pageMetadata({
  title: "Workshops y masterclasses",
  description:
    "Workshops y masterclasses de Academia Triple Amenaza sobre aspectos específicos del baloncesto y del desarrollo deportivo.",
  path: "/programas/workshops/",
});

export default function WorkshopsPage() {
  return (
    <>
      <PageIntro
        eyebrow="ACTIVIDADES"
        title="Aprender en cada encuentro."
        description="Workshops y masterclasses dedicados a aspectos específicos del juego y del desarrollo deportivo."
        back={{ href: "/programas/", label: "Volver a Programas" }}
      />
      <section className="section section-cream">
        <div className="container simple-note">
          <h2>Calendario en preparación.</h2>
          <p>
            Publicaremos las próximas fechas, los contenidos y las condiciones
            de inscripción cuando estén confirmados. Si quieres enterarte antes,
            escríbenos y te avisamos.
          </p>
          {/* Sin calendario todavía: la página no termina sin una salida. */}
          <div className="simple-note-actions">
            <WhatsappLink className="button button-orange" message={whatsappMessages.workshops}>
              Avísame de las próximas fechas <ArrowUpRight size={18} aria-hidden="true" />
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
