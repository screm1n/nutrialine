import React from "react";

export type Service = {
  title: string;
  description: string;
};

type Props = Service & {
  logoSrc?: string;
};

const ServiceCard: React.FC<Props> = ({ title, description, logoSrc }) => (
  <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
    <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-semibold overflow-hidden">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="Logo"
          className="h-full w-full object-contain p-1.5"
        />
      ) : (
        title.slice(0, 2).toUpperCase()
      )}
    </div>
    <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
    <p className="text-brand-700 text-sm leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
