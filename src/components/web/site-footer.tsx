import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { contact, footerNavigation, hubEnabled, location, whatsappMessages } from "@/lib/site";

// En columnas estrechas (móvil) el correo puede partirse justo antes de la @.
const [emailUser, emailDomain] = contact.email.split("@");

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-eyebrow">ACADEMIA TRIPLE AMENAZA</p>
          <p className="footer-statement">Tecnificación<br />de baloncesto.</p>
          <p className="footer-copy">Técnica, preparación física y desarrollo personal para jugadores en formación.</p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">Explora</p>
          {footerNavigation.map(({ label, href }) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </div>
        <div className="footer-links">
          <p className="footer-heading">Contacto</p>
          <WhatsappLink message={whatsappMessages.general} namesChannel icon={false}>
            {/* Espacios no separables: el número no se parte. La flecha va dentro del
                mismo texto para seguir al número cuando la línea se parte (móvil). */}
            <span className="footer-inline">WhatsApp · <span className="footer-nowrap">{contact.phoneDisplay.replace(/ /g, " ")}
              <ArrowUpRight size={14} aria-hidden="true" />
            </span></span>
          </WhatsappLink>
          <a href={`mailto:${contact.email}`}>
            {emailUser}<wbr />@{emailDomain}
          </a>
          <span className="footer-place">
            {location.place} · {location.city}
          </span>
          {hubEnabled && (
            <Link href="/hub/">ATA Hub <ArrowUpRight size={14} aria-hidden="true" /></Link>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Academia Triple Amenaza</span>
      </div>
    </footer>
  );
}
