"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, X } from "lucide-react";

type CopyButtonProps = {
  text: string;
  label: string;
  /** Texto que se anuncia a lectores de pantalla al copiar. */
  copiedMessage: string;
  className?: string;
};

/** Copia un texto al portapapeles y confirma el resultado (visible y anunciado). */
export function CopyButton({ text, label, copiedMessage, className }: CopyButtonProps) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("error");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2500);
  }

  return (
    <>
      <button type="button" className={className} onClick={copy}>
        {state === "copied" && <Check size={17} aria-hidden="true" />}
        {state === "error" && <X size={17} aria-hidden="true" />}
        {state === "idle" && <Copy size={17} aria-hidden="true" />}
        {state === "copied" ? "Copiado" : state === "error" ? "No se ha podido copiar" : label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === "copied" && copiedMessage}
        {state === "error" && `No se ha podido copiar. La dirección es ${text}.`}
      </span>
    </>
  );
}
