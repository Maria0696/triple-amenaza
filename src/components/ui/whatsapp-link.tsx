import type { ReactNode } from "react";

import { whatsappLink } from "@/lib/site";

type WhatsappLinkProps = {
  /** Mensaje precargado (ver whatsappMessages en src/lib/site.ts). */
  message: string;
  className?: string;
  children: ReactNode;
  /** true si el texto visible ya dice "WhatsApp"; si no, se añade al nombre accesible. */
  namesChannel?: boolean;
};

/** Enlace a WhatsApp con mensaje precargado. Se abre en otra pestaña y lo anuncia. */
export function WhatsappLink({ message, className, children, namesChannel = false }: WhatsappLinkProps) {
  return (
    <a href={whatsappLink(message)} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      {/* El texto visible forma parte del nombre accesible (WCAG 2.5.3). */}
      <span className="sr-only">
        {namesChannel ? " (se abre en una pestaña nueva)" : " por WhatsApp (se abre en una pestaña nueva)"}
      </span>
    </a>
  );
}
