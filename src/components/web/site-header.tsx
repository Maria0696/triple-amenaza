"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { isNavigationActive, navigation } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Node &&
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 821px)");

    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [open]);

  function isCurrentPage(href: string) {
    const normalize = (value: string) =>
      value === "/" ? "/" : `${value.replace(/\/+$/, "")}/`;

    return normalize(pathname) === normalize(href);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header ref={headerRef} className="site-header">
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
                  aria-current={isCurrentPage(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link href="/hub/" className="hub-link" onClick={closeMenu}>
              ATA Hub
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Menú móvil"
          hidden={!open}
        >
          {navigation.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isCurrentPage(href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}

          <Link className="mobile-hub" href="/hub/" onClick={closeMenu}>
            Acceder a ATA Hub
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </header>
    </>
  );
}
