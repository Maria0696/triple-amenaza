import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { pageMetadata } from "@/lib/metadata";
import { contact, whatsappLink } from "@/lib/site";
import styles from "./contacto.module.css";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacta con Academia Triple Amenaza por WhatsApp o correo electrónico para consultar información sobre nuestros programas y entrenamientos de baloncesto.",
  path: "/contacto/",
});

const whatsappHref = whatsappLink(
  "Hola, me gustaría recibir información sobre Academia Triple Amenaza.",
);
const emailSubject = "Consulta - Academia Triple Amenaza";
const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent(emailSubject)}`;

export default function ContactoPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="contact-title">
        {/* Elementos puramente decorativos, no interactivos. */}
        <div className={styles.heroArt} aria-hidden="true">
          <span className={`${styles.heroOrbit} ${styles.heroOrbitOuter}`} />
          <span className={`${styles.heroOrbit} ${styles.heroOrbitInner}`} />
          <span className={styles.heroOrbitPoint} />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                CONTACTO / TRIPLE AMENAZA
              </p>

              <h1 id="contact-title" className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>HABLEMOS.</span>
                <span className={styles.heroTitleLine}>
                  <em>EMPEZAMOS</em>
                </span>
                <span className={styles.heroTitleLine}>CONTIGO.</span>
              </h1>
            </div>

            <div className={styles.heroAside}>
              <span className={styles.asideNumber}>ATA / 01</span>
              <p>
                ¿Tienes dudas sobre la academia, Anotadores Élite o Anotadores
                Flex? Cuéntanos qué necesitas y te ayudaremos a orientarte.
              </p>
              <span className={styles.asideLabel}>
                <span className={styles.asideDot} aria-hidden="true" />
                EL PRIMER PASO ES HABLAR.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="contact-section-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>01 / ELIGE CÓMO CONTACTAR</p>
              <h2 id="contact-section-title">
                ESTAMOS <em>AL OTRO LADO.</em>
              </h2>
            </div>
            <p>
              Dos formas sencillas de ponerte en contacto con el equipo de
              Triple Amenaza. Elige la que te resulte más cómoda.
            </p>
          </div>

          <div className={styles.cards}>
            <a
              className={`${styles.card} ${styles.cardWhatsapp}`}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              // Nombre accesible = textos visibles de la tarjeta (WCAG 2.5.3).
              aria-labelledby="contact-whatsapp-title contact-whatsapp-detail contact-whatsapp-action"
              aria-describedby="contact-whatsapp-description"
            >
              <div className={styles.cardTop}>
                <span>01 / MENSAJERÍA</span>
                <ArrowUpRight size={23} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardIcon} aria-hidden="true">
                  <MessageCircle size={34} strokeWidth={1.7} />
                </span>
                <h3 id="contact-whatsapp-title">WHATSAPP.</h3>
                <p id="contact-whatsapp-description">
                  Para consultas rápidas sobre nuestros programas o cualquier
                  duda antes de empezar a entrenar con nosotros.
                </p>
              </div>

              <div className={styles.cardBottom}>
                <span id="contact-whatsapp-detail" className={styles.cardDetail}>
                  {contact.phoneDisplay}
                </span>
                <span
                  id="contact-whatsapp-action"
                  className={`${styles.cardAction} ${styles.cardActionDark}`}
                  aria-hidden="true"
                >
                  Escribir por WhatsApp
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </a>

            <a
              className={`${styles.card} ${styles.cardEmail}`}
              href={emailHref}
              aria-labelledby="contact-email-title contact-email-address contact-email-action"
              aria-describedby="contact-email-description"
            >
              <div className={styles.cardTop}>
                <span>02 / CORREO ELECTRÓNICO</span>
                <ArrowUpRight size={23} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardIcon} aria-hidden="true">
                  <Mail size={34} strokeWidth={1.7} />
                </span>
                <h3 id="contact-email-title">EMAIL.</h3>
                <p id="contact-email-description">
                  Si prefieres escribirnos con más detalle, envíanos un correo
                  y cuéntanos qué información necesitas.
                </p>
              </div>

              <div className={styles.cardBottom}>
                <span
                  id="contact-email-address"
                  className={`${styles.cardDetail} ${styles.cardEmailAddress}`}
                >
                  {contact.email}
                </span>
                <span
                  id="contact-email-action"
                  className={`${styles.cardAction} ${styles.cardActionLight}`}
                  aria-hidden="true"
                >
                  Enviar un correo
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </a>
          </div>

          <div className={styles.sectionFooter}>
            <p className={styles.helpLine}>
              <span className={styles.helpDot} aria-hidden="true" />
              ¿Tienes dudas sobre los entrenamientos, las valoraciones o qué programa
              elegir? Cuéntanoslo y te orientamos.
            </p>
            <p className={styles.sectionNote}>
              Al elegir una tarjeta se abrirá WhatsApp o tu aplicación de correo.
              Evita incluir información médica u otros datos sensibles en el primer mensaje.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="contact-closing-title">
        <div className={`container ${styles.closingInner}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>02 / DESCUBRE TU CAMINO</p>
            <h2 id="contact-closing-title">
              ¿AÚN NO SABES <em>QUÉ PROGRAMA ELEGIR?</em>
            </h2>
            <p>
              Descubre Anotadores Élite y Anotadores Flex para conocer las
              diferentes formas de entrenar con la academia.
            </p>
          </div>

          <Link className={styles.closingLink} href="/programas/">
            Explorar programas
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
