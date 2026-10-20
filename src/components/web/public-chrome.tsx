"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { SiteHeader } from "@/components/web/site-header";
import { SiteFooter } from "@/components/web/site-footer";

/** Cabecera y pie exclusivos de la web pública. ATA Hub mantiene su layout. */
export function PublicChrome({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const isHub = pathname === "/hub" || pathname.startsWith("/hub/");

  if (isHub) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
