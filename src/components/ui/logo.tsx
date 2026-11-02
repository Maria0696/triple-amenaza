import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: number;
};

export function Logo({ size = 64 }: LogoProps) {
  return (
    <Link href="/" className="logo" aria-label="Ir al inicio de Triple Amenaza">
      <Image
        src="/imagenes/logo-ata.webp"
        alt="Escudo de Academia Triple Amenaza"
        width={size}
        height={size}
        priority
        unoptimized
        className="logo-image"
      />
    </Link>
  );
}
