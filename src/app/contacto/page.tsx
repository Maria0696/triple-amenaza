import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import "./contacto.css";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Academia Triple Amenaza por WhatsApp o correo electrónico para consultar información sobre nuestros programas y entrenamientos de baloncesto.",
};

const whatsappNumber = "34618599976";
const whatsappMessage =
  "Hola, me gustaría recibir información sobre Academia Triple Amenaza.";

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const emailAddress = "tripleamenaza.info@gmail.com";
const emailSubject = "Consulta - Academia Triple Amenaza";
const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;

export default function ContactoPage() {
  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-title">
        {/* Elementos puramente decorativos, no interactivos. */}
        <div className="contact-hero-art" aria-hidden="true">
          <span className="contact-hero-orbit contact-hero-orbit-outer" />
          <span className="contact-hero-orbit contact-hero-orbit-inner" />
          <span className="contact-hero-orbit-point" />
        </div>

        <div className="container contact-hero-container">
          <div className="contact-hero-grid">
            <div className="contact-hero-main">
              <p className="contact-eyebrow contact-eyebrow-light">
                <span className="contact-eyebrow-line" aria-hidden="true" />
                CONTACTO / TRIPLE AMENAZA
              </p>

              <h1 id="contact-title" className="contact-hero-title">
                <span className="contact-hero-title-line">HABLEMOS.</span>
                <span className="contact-hero-title-line">
                  <em>EMPEZAMOS</em>
                </span>
                <span className="contact-hero-title-line">CONTIGO.</span>
              </h1>
            </div>

            <div className="contact-hero-aside">
              <span className="contact-aside-number">ATA / 01</span>
              <p>
                ¿Tienes dudas sobre la academia, Anotadores Élite o Anotadores
                Flex? Cuéntanos qué necesitas y te ayudaremos a orientarte.
              </p>
              <span className="contact-aside-label">
                <span className="contact-aside-dot" aria-hidden="true" />
                EL PRIMER PASO ES HABLAR.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-section-title">
        <div className="container">
          <div className="contact-section-heading">
            <div>
              <p className="contact-eyebrow">01 / ELIGE CÓMO CONTACTAR</p>
              <h2 id="contact-section-title">
                ESTAMOS <em>AL OTRO LADO.</em>
              </h2>
            </div>
            <p>
              Dos formas sencillas de ponerte en contacto con el equipo de
              Triple Amenaza. Elige la que te resulte más cómoda.
            </p>
          </div>

          <div className="contact-cards">
            <a
              className="contact-card contact-card-whatsapp"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir a Triple Amenaza por WhatsApp (se abre en una pestaña nueva)"
              aria-describedby="contact-whatsapp-description"
            >
              <div className="contact-card-top">
                <span>01 / MENSAJERÍA</span>
                <ArrowUpRight size={23} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <div className="contact-card-content">
                <span className="contact-card-icon" aria-hidden="true">
                  <MessageCircle size={34} strokeWidth={1.7} />
                </span>
                <h3 id="contact-whatsapp-title">WHATSAPP.</h3>
                <p id="contact-whatsapp-description">
                  Para consultas rápidas sobre nuestros programas o cualquier
                  duda antes de empezar a entrenar con nosotros.
                </p>
              </div>

              <div className="contact-card-bottom">
                <span className="contact-card-detail">618 599 976</span>
                <span className="contact-card-action contact-card-action-dark" aria-hidden="true">
                  Escribir por WhatsApp
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </a>

            <a
              className="contact-card contact-card-email"
              href={emailHref}
              aria-label="Enviar un correo electrónico a Triple Amenaza"
              aria-describedby="contact-email-description"
            >
              <div className="contact-card-top">
                <span>02 / CORREO ELECTRÓNICO</span>
                <ArrowUpRight size={23} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <div className="contact-card-content">
                <span className="contact-card-icon" aria-hidden="true">
                  <Mail size={34} strokeWidth={1.7} />
                </span>
                <h3 id="contact-email-title">EMAIL.</h3>
                <p id="contact-email-description">
                  Si prefieres escribirnos con más detalle, envíanos un correo
                  y cuéntanos qué información necesitas.
                </p>
              </div>

              <div className="contact-card-bottom">
                <span className="contact-card-detail contact-card-email-address">
                  {emailAddress}
                </span>
                <span className="contact-card-action contact-card-action-light" aria-hidden="true">
                  Enviar un correo
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </a>
          </div>

          <div className="contact-section-footer">
            <p className="contact-help-line">
              <span className="contact-help-dot" aria-hidden="true" />
              ¿Tienes dudas sobre los entrenamientos, las valoraciones o qué programa
              elegir? Cuéntanoslo y te orientamos.
            </p>
            <p className="contact-section-note">
              Al elegir una tarjeta se abrirá WhatsApp o tu aplicación de correo.
              Evita incluir información médica u otros datos sensibles en el primer mensaje.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-closing" aria-labelledby="contact-closing-title">
        <div className="container contact-closing-inner">
          <div>
            <p className="contact-eyebrow contact-eyebrow-light">02 / DESCUBRE TU CAMINO</p>
            <h2 id="contact-closing-title">
              ¿AÚN NO SABES <em>QUÉ PROGRAMA ELEGIR?</em>
            </h2>
            <p>
              Descubre Anotadores Élite y Anotadores Flex para conocer las
              diferentes formas de entrenar con la academia.
            </p>
          </div>

          <Link className="contact-closing-link" href="/programas/">
            Explorar programas
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
