"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { isNavigationActive, navigation } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <Logo showText={false} size={90} />
          </div>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map(({ label, href }) => {
              const active = isNavigationActive(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? "nav-link active" : "nav-link"}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link href="/hub/" className="hub-link">ATA Hub</Link>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Menú móvil">
            {navigation.map(({ label, href }) => {
              const active = isNavigationActive(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}

            <Link className="mobile-hub" href="/hub/" onClick={() => setOpen(false)}>
              Acceder a ATA Hub <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
