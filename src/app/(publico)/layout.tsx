import { SiteHeader } from "@/components/publico/site-header";
import { SiteFooter } from "@/components/publico/site-footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="contenido">{children}</main>
      <SiteFooter />
    </>
  );
}
