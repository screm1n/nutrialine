import React from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import ServiceCard, { Service } from "./components/ServiceCard";
import SectionWithImage from "./components/SectionWithImage";
import ContactSection from "./components/ContactSection";

import heroPortrait from "../nutrialineehlers_1700772691_3242638818729197157_3665042988.jpg";
import sessionImage from "../nutrialineehlers_1700772691_3242638818745919775_3665042988.jpg";
import cozyNutrition from "../nutrialineehlers_1700772691_3242638818964069987_3665042988.jpg";
import brandLogo from "../logoaline.png";
import agendaImage from "../agenda.jpg";
import serviceLogo from "../logo.png";

// Identidade e textos finais
const professionalName = "Aline Ehlers";
const brandTitle = "Nutricionista Aline Ehlers";
const professionalInitials = "AE";
const specialty = "Nutrição Feminina";
const headline =
  "Planos nutricionais personalizados para uma rotina mais leve, sustentável e alinhada à sua realidade.";
const aboutText =
  "Sou apaixonada por ajudar pessoas a construírem uma relação mais gentil com a alimentação. Trabalho com escuta ativa, respeito à sua história e foco em mudanças possíveis e consistentes, sem terrorismo alimentar.";
const approach =
  "Integro nutrição comportamental, educação alimentar e ajustes práticos no seu dia a dia. Juntos, vamos entender seus gatilhos, organizar refeições e criar estratégias que funcionem mesmo na rotina corrida, com acompanhamento próximo e metas reais.";
const education = [
  "CRN ativo",
  "Pós-graduação em Nutrição Clínica",
  "Especialização em Comportamento Alimentar"
];
const ctaText = "Vamos criar um plano nutricional feito para você?";
const phoneNumber = "(55) 99979-9998";
const location = "Atendimento online e presencial em Santa Maria - RS";
const whatsappNumber = "5555999799998";
const instagramLink = "https://www.instagram.com/nutrialineehlers/";
const footerQuote =
  "Cuidar de você é um gesto de gentileza diária. Estou aqui para caminhar ao seu lado.";

// Link do WhatsApp fornecido
const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5555999799998&text&type=phone_number&app_absent=0";

const services: Service[] = [
  {
    title: "Consulta presencial ou on-line",
    description:
      "Atendimento focado nas suas dificuldades, encaixando uma rotina saudável na sua vida real. Questionários pré-consulta enviados por WhatsApp ou e-mail."
  },
  {
    title: "Primeira consulta completa",
    description:
      "Duração de 1h a 1h15 para entender histórico, objetivos e hábitos. Avaliação antropométrica e bioimpedância (levar roupas leves)."
  },
  {
    title: "Plano alimentar ao vivo",
    description:
      "Plano construído junto com você, personalizado à sua rotina, com orientações, diário alimentar e suplementação (se necessário) via app NUMAX."
  },
  {
    title: "Suporte contínuo",
    description:
      "Tira-dúvidas pelo chat do app em horário comercial e acompanhamento para manter consistência sem pressão."
  }
];

const faqs = [
  { question: "Você faz atendimento online?", answer: "Sim." },
  { question: "Você atende plano de saúde?", answer: "Não atendo plano de saúde." },
  { question: "Você aceita cartão ou pix?", answer: "Sim, aceito cartão, pix e transferência bancária." },
  { question: "Posso parcelar?", answer: "Apenas os planos nutricionais podem ser parcelados." },
  {
    question: "Como faço para agendar a consulta?",
    answer: "Agendamento de consulta apenas pelo WhatsApp (55) 99979-9998."
  },
  {
    question: "Posso entrar em contato com a nutri durante o tratamento?",
    answer: "Sim! Todas as suas dúvidas serão respondidas pelo WhatsApp."
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50">
      <Header
        professionalName={brandTitle}
        professionalInitials={professionalInitials}
        whatsappNumber={whatsappNumber}
        whatsappHref={whatsappLink}
        logoSrc={brandLogo}
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-500/20" />
          <div className="container-bleed relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center py-16">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-500 font-semibold">
                {specialty}
              </p>
              <h1 className="text-4xl sm:text-5xl font-display text-brand-900 leading-tight">
                {brandTitle}
              </h1>
              {/* Imagem destacada no mobile, logo abaixo do título */}
              <div className="relative w-full max-w-[420px] sm:max-w-[360px] mx-auto block md:hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-brand-200 via-white to-accent-500/40 rounded-full blur-3xl" />
                <div className="relative rounded-full border-4 border-white shadow-floating overflow-hidden aspect-square">
                  <img
                    src={heroPortrait}
                    alt={`Retrato de ${professionalName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -left-4 -bottom-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/70">
                  <p className="text-sm text-brand-600">Consultas semanais</p>
                  <p className="text-base font-semibold text-brand-900">
                    Agenda aberta
                  </p>
                </div>
              </div>
              <p className="text-xl text-brand-800 max-w-2xl leading-relaxed">
                {headline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  label="Agendar consulta"
                  href={whatsappLink}
                  size="lg"
                  variant="solid"
                  targetBlank
                />
                <Button
                  label="Saiba mais"
                  href="#quem-sou"
                  size="lg"
                  variant="ghost"
                />
                <Button
                  label="Instagram"
                  href={instagramLink}
                  size="lg"
                  variant="ghost"
                  targetBlank
                />
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-brand-700">
                <span className="px-3 py-2 bg-white/80 border border-brand-100 rounded-full">
                  Atendimentos online e presenciais
                </span>
                <span className="px-3 py-2 bg-white/80 border border-brand-100 rounded-full">
                  Planos personalizados e acompanhamento
                </span>
              </div>
            </div>

            <div className="relative w-full max-w-[420px] justify-self-center hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-200 via-white to-accent-500/40 rounded-full blur-3xl" />
              <div className="relative rounded-full border-4 border-white shadow-floating overflow-hidden aspect-square">
                <img
                  src={heroPortrait}
                  alt={`Retrato de ${professionalName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -left-6 -bottom-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg border border-white/70">
                <p className="text-sm text-brand-600">Consultas semanais</p>
                <p className="text-base font-semibold text-brand-900">
                  Agenda aberta
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quem sou eu */}
        <SectionWithImage
          id="quem-sou"
          eyebrow="Quem sou eu"
          title={`Sobre ${professionalName}`}
          text={aboutText}
          bullet={education}
          imageSrc={sessionImage}
          imageAlt={`Consultório de ${professionalName}`}
          ctaLabel="Conhecer abordagem"
          ctaHref="#abordagem"
        />

        {/* Abordagem */}
        <SectionWithImage
          id="abordagem"
          eyebrow="Abordagem"
          title="Como será nosso caminho"
          text={approach}
          bullet="Escuta ativa, plano personalizado e acompanhamento contínuo."
          showImage={false}
        />

        {/* Serviços */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container-bleed space-y-10">
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold">
                Serviços
              </p>
              <h2 className="text-3xl sm:text-4xl font-display text-brand-900">
                Especialidades para apoiar sua jornada
              </h2>
              <p className="text-brand-700">
                Escolha a modalidade que faz sentido para você agora e avance no
                seu ritmo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard
                  key={`${service.title}-${index}`}
                  title={service.title}
                  description={service.description}
                  logoSrc={serviceLogo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-bleed grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4 bg-white shadow-floating border border-brand-100 rounded-3xl p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-600 font-semibold">
                Próximo passo
              </p>
              <h3 className="text-3xl sm:text-4xl font-display text-brand-900">
                {ctaText}
              </h3>
              <div className="space-y-4 text-brand-800 leading-relaxed">
                <p>
                  👉🏻 Nunca será sobre mais um horário na agenda. Eu quero te ver chegando
                  onde até você mesma duvidava chegar. ✅
                </p>
                <p>
                  📌 Quero que você saiba: as suas metas são as minhas! Por isso, sempre
                  busco oferecer o melhor atendimento possível, com informações precisas e
                  individualizadas para o seu perfil e necessidades.
                </p>
                <p>
                  Acredito que a alimentação saudável é a chave para uma vida plena e
                  feliz, e estou aqui para ajudá-la nesse caminho. ✔️ A sua mudança pode
                  começar hoje.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  label="Agendar agora"
                  href={whatsappLink}
                  variant="solid"
                  size="md"
                  targetBlank
                />
                <Button
                  label="Falar comigo"
                  href="#contato"
                  variant="ghost"
                  size="md"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-500/20 blur-2xl rounded-[32px]" />
              <div className="relative overflow-hidden rounded-[32px] shadow-floating border border-white/70 bg-white">
                <img
                  src={agendaImage}
                  alt="Agenda e planejamento de consultas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <ContactSection
          phoneNumber={phoneNumber}
          location={location}
          whatsappLink={whatsappLink}
          supportImageSrc={cozyNutrition}
          supportImageAlt="Mesa com alimentos saudáveis e caderno"
          professionalName={professionalName}
          instagramLink={instagramLink}
          showSupportImage={false}
        />

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container-bleed space-y-8">
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-display text-brand-900">
                Perguntas e respostas
              </h2>
              <p className="text-brand-700">
                Dúvidas rápidas sobre atendimentos, formas de pagamento e agendamento.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-brand-100 text-left space-y-2"
                >
                  <h3 className="font-semibold text-brand-900">{faq.question}</h3>
                  <p className="text-brand-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-brand-100 bg-white py-8">
        <div className="container-bleed flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={brandLogo}
              alt={`Logo de ${professionalName}`}
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-brand-900">{brandTitle}</p>
              <p className="text-sm text-brand-600">{specialty}</p>
            </div>
          </div>
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-brand-800 hover:text-brand-900"
          >
            Instagram: @nutrialineehlers
          </a>
          <p className="text-brand-700">{footerQuote}</p>
          <p className="text-sm text-brand-500">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
