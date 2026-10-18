import type { Metadata } from "next";
import { DetailPage } from "@/components/publico/detail-page";

export const metadata: Metadata = { title: "Anotadores Flex" };

export default function FlexPage() {
  return <DetailPage eyebrow="PROGRAMA / 02" title="Anotadores Flex" description="Una forma flexible de acceder a sesiones de tecnificación para quienes necesitan organizar su entrenamiento con mayor libertad." sections={[
    { title: "Sesiones de tecnificación", text: "Trabajo enfocado en situaciones y habilidades relacionadas con el desarrollo anotador." },
    { title: "Formato flexible", text: "Una alternativa al programa completo, pensada para adaptarse a diferentes necesidades de asistencia." },
    { title: "Condiciones por confirmar", text: "Los bonos, las plazas y la disponibilidad se detallarán aquí cuando estén actualizados y confirmados." },
  ]} />;
}
