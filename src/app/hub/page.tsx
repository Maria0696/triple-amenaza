import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";

export const metadata: Metadata = { title: "ATA Hub — En preparación", robots: { index: false, follow: false } };

export default function HubPage() {
  return <main className="hub-placeholder"><div className="hub-placeholder-card"><div className="hub-icon"><LockKeyhole size={28} aria-hidden="true" /></div><p className="eyebrow">ÁREA PRIVADA</p><h1>ATA Hub</h1><p>El espacio de gestión de administradores y entrenadores está en desarrollo. El acceso aún no está habilitado.</p><Link className="button button-orange" href="/"><ArrowLeft size={18} aria-hidden="true" /> Volver a Triple Amenaza</Link></div></main>;
}
