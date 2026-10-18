
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigation } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Enlace de accesibilidad */}
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="container header-inner">

          {/* LOGO OFICIAL DE TRIPLE AMENAZA */}
          <div className="brand">
            <Logo showText={false} size={90} />
          </div>

          {/* NAVEGACIÓN DE ESCRITORIO */}
          <nav
            className="desktop-nav"
            aria-label="Navegación principal"
          >
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href.slice(0, -1) ||
                  pathname === href
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ACCIONES DEL HEADER */}
          <div className="header-actions">

            {/* Acceso al área privada */}
            <Link href="/hub/" className="hub-link">
              ATA Hub
              <ArrowUpRight
                size={15}
                aria-hidden="true"
              />
            </Link>

            {/* Botón del menú móvil */}
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={
                open ? "Cerrar menú" : "Abrir menú"
              }
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Menú móvil"
          >
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              className="mobile-hub"
              href="/hub/"
              onClick={() => setOpen(false)}
            >
              Acceder a ATA Hub
              <ArrowUpRight size={18} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
