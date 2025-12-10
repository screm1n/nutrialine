import React, { useState } from "react";
import Button from "./Button";
import clsx from "clsx";

const links = [
  { label: "Quem sou", href: "#quem-sou" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" }
];

type HeaderProps = {
  professionalName: string;
  professionalInitials: string;
  whatsappNumber: string;
  whatsappHref?: string;
  logoSrc?: string;
};

const Header: React.FC<HeaderProps> = ({
  professionalName,
  professionalInitials,
  whatsappNumber,
  whatsappHref,
  logoSrc
}) => {
  const [open, setOpen] = useState(false);

  const fallbackWhatsapp = `https://wa.me/${whatsappNumber}?text=Olá,%20${encodeURIComponent(
    professionalName
  )}!%20Gostaria%20de%20agendar%20uma%20consulta.`;
  const whatsappLink = whatsappHref || fallbackWhatsapp;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-brand-100">
      <div className="container-bleed flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`Logo de ${professionalName}`}
              className="h-12 w-auto object-contain"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-800 font-semibold">
              {professionalInitials}
            </div>
          )}
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-600">
              Saúde e bem-estar
            </p>
            <p className="font-semibold text-brand-900 text-base">
              {professionalName}
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            label="Agendar"
            href={whatsappLink}
            variant="solid"
            size="sm"
            targetBlank
          />
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-brand-200 text-brand-800"
          aria-label="Abrir menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={clsx("block w-5 h-0.5 bg-brand-800 transition-all", {
                "rotate-45 translate-y-2": open
              })}
            />
            <span
              className={clsx("block w-5 h-0.5 bg-brand-800 transition-all", {
                "opacity-0": open
              })}
            />
            <span
              className={clsx("block w-5 h-0.5 bg-brand-800 transition-all", {
                "-rotate-45 -translate-y-2": open
              })}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-100 bg-white">
          <div className="container-bleed py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-brand-800 py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              label="Agendar"
              href={whatsappLink}
              variant="solid"
              size="md"
              targetBlank
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
