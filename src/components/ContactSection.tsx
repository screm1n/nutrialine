import React from "react";
import Button from "./Button";

type ContactSectionProps = {
  phoneNumber: string;
  location: string;
  whatsappLink: string;
  supportImageSrc?: string;
  supportImageAlt?: string;
  professionalName?: string;
  instagramLink?: string;
  showSupportImage?: boolean;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  phoneNumber,
  location,
  whatsappLink,
  supportImageSrc,
  supportImageAlt,
  professionalName,
  instagramLink,
  showSupportImage = true
}) => (
  <section id="contato" className="py-16 bg-white">
    <div className="container-bleed grid gap-10 lg:grid-cols-2 items-center">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold">
          Contato
        </p>
        <h2 className="text-3xl sm:text-4xl font-display text-brand-900">
          Vamos conversar sobre seu bem-estar?
        </h2>
        <p className="text-brand-700 leading-relaxed">
          Estou pronta para acolher você e criar um plano alinhado às suas
          necessidades. Escolha o canal que preferir e respondo o quanto antes.
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-brand-100 bg-brand-50/80">
              <p className="text-sm text-brand-600">Telefone</p>
              <p className="text-lg font-semibold">{phoneNumber}</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-100 bg-brand-50/80">
              <p className="text-sm text-brand-600">Localidade</p>
              <p className="text-lg font-semibold">{location}</p>
            </div>
          </div>
        <div className="flex flex-wrap gap-3">
          <Button
            label="Chamar no WhatsApp"
            href={whatsappLink}
            variant="solid"
            size="md"
            targetBlank
          />
          {instagramLink && (
            <Button
              label="Instagram"
              href={instagramLink}
                variant="ghost"
                size="md"
                targetBlank
              />
            )}
          </div>
      </div>
      {showSupportImage && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-brand-200/60 rounded-3xl blur-3xl" />
          <div className="relative glass-card rounded-3xl p-8 border border-white/80 space-y-6">
            <ul className="space-y-4 text-brand-800">
              <li className="flex gap-3 items-start">
                <span className="h-3 w-3 mt-1 rounded-full bg-accent-500" />
                <span>
                  Mensagem automática pronta para {professionalName || "o seu atendimento"}
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="h-3 w-3 mt-1 rounded-full bg-accent-500" />
                <span>Atendimento híbrido: online e presencial</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="h-3 w-3 mt-1 rounded-full bg-accent-500" />
                <span>Retorno rápido em horário comercial</span>
              </li>
            </ul>
            {supportImageSrc && (
              <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-md">
                <img
                  src={supportImageSrc}
                  alt={supportImageAlt || "Ambiente de atendimento"}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </section>
);

export default ContactSection;
