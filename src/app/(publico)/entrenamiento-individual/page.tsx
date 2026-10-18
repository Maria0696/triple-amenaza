import type { Metadata } from "next";
import { DetailPage } from "@/components/publico/detail-page";

export const metadata: Metadata = { title: "Entrenamiento individual" };

export default function IndividualPage() {
  return <DetailPage eyebrow="PROGRAMA / 03" title="Entrenamiento individual" description="Entrenamiento personalizado para trabajar objetivos concretos y acompañar el desarrollo del jugador." sections={[
    { title: "Objetivos propios", text: "El trabajo se orienta a las prioridades que presenta el jugador en su momento deportivo." },
    { title: "Atención individualizada", text: "La sesión permite dedicar el tiempo de práctica a necesidades específicas." },
    { title: "Información actualizada", text: "La disponibilidad, las condiciones y los formatos se publicarán tras su confirmación." },
  ]} />;
}
