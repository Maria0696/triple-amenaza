import type { Metadata } from "next";
import { DetailPage } from "@/components/publico/detail-page";

export const metadata: Metadata = { title: "Anotadores Élite" };

export default function ElitePage() {
  return <DetailPage eyebrow="PROGRAMA / 01" title="Anotadores Élite" description="Un proceso de tecnificación para desarrollar la capacidad anotadora, con valoración, objetivos y seguimiento del jugador." sections={[
    { title: "Conocer el punto de partida", text: "El proceso comienza con una valoración que ayuda a identificar fortalezas y aspectos prioritarios de mejora." },
    { title: "Entrenar con objetivos", text: "Las sesiones se orientan al desarrollo técnico y a la toma de decisiones en situaciones relacionadas con el juego." },
    { title: "Revisar la evolución", text: "El seguimiento forma parte de la propuesta para observar avances y reajustar las prioridades de trabajo." },
  ]} />;
}
