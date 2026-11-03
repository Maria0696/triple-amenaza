import styles from "./elite.module.css";

/*
 * Media pista FIBA a escala (1 m = 33,33 unidades): 15 m de ancho × 14 m de fondo,
 * con la línea de fondo arriba. Aro a 1,575 m del fondo, zona de 4,9 × 5,8 m,
 * línea de tres a 6,75 m y esquinas a 0,9 m de la banda.
 * Las marcas numeradas coinciden con la leyenda de la sección.
 */
const RIM = { x: 250, y: 52.5 };

const zones = [
  { n: 1, x: 250, y: 352 }, // Manejo de balón: perímetro, por encima de la línea de tres
  { n: 2, x: 250, y: 98 }, // Finalización: junto al aro
  { n: 3, x: 425, y: 228 }, // Tiro en estático: ala, fuera de la línea de tres, tras recepción
  { n: 4, x: 158, y: 214 }, // Tiro en movimiento: llegada al codo tras desplazamiento
] as const;

export function CourtDiagram() {
  return (
    <svg className={styles.courtSvg} viewBox="-1.5 -1.5 503 470" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="elite-court-floor">
          <rect x="0" y="0" width="500" height="467" />
        </clipPath>
      </defs>
      <rect className={styles.courtFloor} x="0" y="0" width="500" height="467" />

      {/* Zonas de trabajo, bajo las líneas y recortadas a la pista */}
      <g clipPath="url(#elite-court-floor)">
        <circle className={styles.courtZone} cx={RIM.x} cy={RIM.y} r="62" />
        <ellipse className={styles.courtZone} cx="250" cy="352" rx="78" ry="44" />
        <circle className={styles.courtZone} cx="425" cy="228" r="42" />
      </g>

      <g className={styles.courtLines}>
        <rect x="0" y="0" width="500" height="467" />
        <rect x="168.3" y="0" width="163.4" height="193.3" />
        <path d="M190 193.3 A60 60 0 0 0 310 193.3" />
        <path className={styles.courtLineDashed} d="M190 193.3 A60 60 0 0 1 310 193.3" />
        <line x1="220" y1="40" x2="280" y2="40" />
        <circle cx={RIM.x} cy={RIM.y} r="7.5" />
        <path d="M208.3 52.5 A41.7 41.7 0 0 0 291.7 52.5" />
        <path d="M30 0 V99.7 A225 225 0 0 0 470 99.7 V0" />
        <path d="M190 467 A60 60 0 0 1 310 467" />
      </g>

      {/* Trayectoria del tiro en movimiento: desde el bote hasta el codo */}
      <path className={styles.courtPath} d="M92 330 C 95 280, 120 240, 150 222" />

      {zones.map((zone) => (
        <g key={zone.n} className={styles.courtMarker} transform={`translate(${zone.x} ${zone.y})`}>
          <circle r="17" />
          <text y="1" textAnchor="middle" dominantBaseline="middle">
            {zone.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
