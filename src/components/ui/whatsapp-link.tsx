import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site";

type WhatsappLinkProps = {
  /** Mensaje precargado (ver whatsappMessages en src/lib/site.ts). */
  message: string;
  className?: string;
  children: ReactNode;
  /** true si el texto visible ya dice "WhatsApp"; si no, se añade al nombre accesible. */
  namesChannel?: boolean;
  /**
   * Icono de mensaje al final: avisa a la vista de que se abre WhatsApp (sustituye
   * a la flecha ↗). false cuando el enlace ya lleva su propio icono, como en el pie.
   */
  icon?: boolean;
  iconSize?: number;
};

/** Enlace a WhatsApp con mensaje precargado. Se abre en otra pestaña y lo anuncia. */
export function WhatsappLink({
  message,
  className,
  children,
  namesChannel = false,
  icon = true,
  iconSize = 19,
}: WhatsappLinkProps) {
  return (
    <a href={whatsappLink(message)} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      {icon && <MessageCircle size={iconSize} aria-hidden="true" />}
      {/* El texto visible forma parte del nombre accesible (WCAG 2.5.3). */}
      <span className="sr-only">
        {namesChannel ? " (se abre en una pestaña nueva)" : " por WhatsApp (se abre en una pestaña nueva)"}
      </span>
    </a>
  );
}
