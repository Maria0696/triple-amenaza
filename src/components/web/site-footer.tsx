import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-eyebrow">ACADEMIA TRIPLE AMENAZA</p>
          <p className="footer-statement">El siguiente paso<br />se entrena.</p>
          <p className="footer-copy">Baloncesto, preparación física y desarrollo personal.</p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">Explora</p>
          {navigation.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/programas/workshops/">Workshops</Link>
          <Link href="/equipo/">Equipo</Link>
        </div>
        <div className="footer-links">
          <p className="footer-heading">Plataforma</p>
          <Link href="/hub/">ATA Hub <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <span className="footer-note">Acceso privado en preparación</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Academia Triple Amenaza</span>
        <span>Sitio en desarrollo · Información comercial pendiente de confirmar</span>
      </div>
    </footer>
  );
}
