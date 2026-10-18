import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/publico/page-intro";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return <>
    <PageIntro eyebrow="HABLEMOS" title="Empezamos por una conversación." description="Si quieres saber más sobre la academia o los programas, aquí encontrarás próximamente nuestros canales de consulta." />
    <section className="section section-cream"><div className="container content-split"><div><p className="eyebrow">CONTACTO</p><h2 className="section-title">Estamos preparando<br /><em>este espacio.</em></h2></div><div className="prose"><p>La dirección de correo, las redes sociales y el formulario de contacto estarán disponibles cuando hayamos confirmado los canales oficiales y su tratamiento de datos.</p><p className="notice">Esta página todavía no recibe mensajes ni solicitudes de inscripción.</p><Link className="text-link" href="/programas/">Mientras tanto, descubre los programas <ArrowUpRight size={18}/></Link></div></div></section>
  </>;
}
