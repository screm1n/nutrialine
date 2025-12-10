import React from "react";
import Button from "./Button";

type SectionWithImageProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  text: string;
  bullet?: string | string[];
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
  showImage?: boolean;
};

const SectionWithImage: React.FC<SectionWithImageProps> = ({
  id,
  title,
  eyebrow,
  text,
  bullet,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref = "#contato",
  reverse = false,
  showImage = true
}) => {
  const hasImage = showImage && imageSrc;
  const bulletItems = bullet
    ? Array.isArray(bullet)
      ? bullet
      : [bullet]
    : [];

  return (
    <section id={id} className="py-16 bg-brand-50">
      {hasImage ? (
        <div className="container-bleed grid gap-10 lg:grid-cols-2 items-center">
          <div className={reverse ? "lg:order-2" : ""}>
            {eyebrow && (
              <p className="text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-display text-brand-900 mb-4">
              {title}
            </h2>
            <p className="text-brand-700 leading-relaxed mb-4">{text}</p>
            {bulletItems.length > 0 && (
              <div className="text-brand-800 font-medium bg-white/70 border border-brand-100 rounded-xl p-4 inline-flex flex-col gap-2">
                {bulletItems.map((item, idx) => (
                  <span key={idx} className="inline-flex items-start gap-2">
                    <span className="h-2.5 w-2.5 mt-1 rounded-full bg-accent-500 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            )}
            {ctaLabel && (
              <div className="mt-6">
                <Button label={ctaLabel} href={ctaHref} variant="solid" />
              </div>
            )}
          </div>
          <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 via-white to-accent-500/20 rounded-[32px] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] shadow-floating border border-white/80">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container-bleed max-w-4xl">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-display text-brand-900 mb-4">
            {title}
          </h2>
          <p className="text-brand-700 leading-relaxed mb-4">{text}</p>
          {bulletItems.length > 0 && (
            <div className="text-brand-800 font-medium bg-white/70 border border-brand-100 rounded-xl p-4 inline-flex flex-col gap-2">
              {bulletItems.map((item, idx) => (
                <span key={idx} className="inline-flex items-start gap-2">
                  <span className="h-2.5 w-2.5 mt-1 rounded-full bg-accent-500 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          )}
          {ctaLabel && (
            <div className="mt-6">
              <Button label={ctaLabel} href={ctaHref} variant="solid" />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SectionWithImage;
