
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showText?: boolean;
  size?: number;
};

export function Logo({
  showText = false,
  size = 64,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Ir al inicio de Triple Amenaza"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        flexShrink: 0,
        width: "fit-content",
      }}
    >
      <Image
        src="/resources/imagenes/icon.png"
        alt="Escudo de Academia Triple Amenaza"
        width={size}
        height={size}
        priority
        unoptimized
        style={{
          display: "block",
          maxWidth: "none",
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      {showText && (
        <span
          style={{
            fontWeight: 800,
            color: "white",
            fontSize: "16px",
          }}
        >
          TRIPLE AMENAZA
        </span>
      )}
    </Link>
  );
}
