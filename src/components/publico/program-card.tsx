import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/lib/site";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link className="program-card" href={program.href}>
      <div className="program-top"><span>{program.number} / {program.label}</span><ArrowUpRight size={23} aria-hidden="true" /></div>
      <div className="program-bottom"><span className="program-tag">{program.tag}</span><h3>{program.title}</h3><p>{program.description}</p></div>
    </Link>
  );
}
