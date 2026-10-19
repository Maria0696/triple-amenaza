import type { Metadata } from "next";
import { PageIntro } from "@/components/publico/page-intro";

export const metadata: Metadata = { title: "Workshops y masterclasses" };

export default function WorkshopsPage() {
  return (
    <>
      <PageIntro
        eyebrow="ACTIVIDADES"
        title="Aprender en cada encuentro."
        description="Workshops y masterclasses dedicados a aspectos específicos del juego y del desarrollo deportivo."
      />
      <section className="section section-cream">
        <div className="container simple-note">
          <p className="eyebrow">PRÓXIMAS ACTIVIDADES</p>
          <h2>Calendario en preparación.</h2>
          <p>
            Publicaremos las próximas fechas, los contenidos y las condiciones
            de inscripción cuando estén confirmados.
          </p>
        </div>
      </section>
    </>
  );
}
