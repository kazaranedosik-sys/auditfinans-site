"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  BadgeRussianRuble,
  Building2,
  FileText,
  Calculator,
} from "lucide-react";
import "../styles/globals.css";

// =======================
// ДАННЫЕ СТРАНИЦЫ
// =======================
const CONFIG = {
  brand: "Аудит Финанс",
  tagline: "Аудит, налоги и бухгалтерия — под ключ",
  ctaPhone: "+7 938 888 63 97",
  ctaEmail: "amkaudit1@mail.ru",
  address: "Сочи, Адлерский р-н, ул. Кирова, 30А",
  whatsapp: "https://wa.me/79388886397",

  hero:
    "Помогаем владельцам бизнеса снижать риски, оптимизировать налоги и навести порядок в учёте. Пришло требование, вызвали в налоговую — звоните нам и будьте спокойны. Быстро. Законно. Понятно.",

  services: [
    {
      icon: Scale,
      title: "Налоговый консалтинг",
      text:
        "Переходы УСН/ОСНО/ПСН, раздельный учёт, НДС-риски, сопровождение проверок.",
    },
    {
      icon: Calculator,
      title: "Бухгалтерия и зарплата",
      text:
        "1С: ведение, отчётность, кадры, интеграции банк/кассы/iiko.",
    },
    {
      icon: FileText,
      title: "Правовое сопровождение",
      text:
        "Договоры аренды и управления, претензии, досудебка.",
    },
    {
      icon: ShieldCheck,
      title: "Налоговая безопасность",
      text:
        "Диагностика рисков, письма в ИФНС, защита позиции.",
    },
  ],

  pricing: [
    {
      name: "Расчёт стоимости",
      price: "Индивидуально",
      features: [
        "Подберём режим налогообложения",
        "Оценим объём операций",
        "Сформируем предложение под ваш бизнес",
      ],
    },
  ],

  faq: [
    {
      q: "Работаете только в Сочи?",
      a: "По всей России: ЭДО, ЗУП, 1С Фреш. Встречи — онлайн/офлайн.",
    },
    {
      q: "Можно взять учёт с середины года?",
      a:
        "Да. Переносим базу, восстанавливаем учёт, сдаём уточнённые декларации.",
    },
    {
      q: "Поможете при камеральной?",
      a:
        "Готовим пояснения, собираем документы, сопровождаем до решения.",
    },
  ],
};

// =======================
// МЕЛКИЕ ХЕЛПЕРЫ
// =======================
function Section({ id, children, className }) {
  return (
    <section id={id} className={`section ${className || ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}

function WhatsAppFloat({ href }) {
  return (
    <a
      href={href}
      aria-label="Написать в WhatsApp"
      className="wa-float"
      target="_blank"
      rel="noreferrer"
    >
      <Phone size={22} />
      <span>Написать</span>
    </a>
  );
}

const IconWrap = ({ Icon }) => (
  <div className="icon-wrap">
    <Icon size={24} />
  </div>
);

// =======================
// СТРАНИЦА
// =======================
export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Section id="hero" className="hero">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="hero-card"
        >
          <div className="brand">
            <BadgeRussianRuble size={20} />
            <span>{CONFIG.brand}</span>
          </div>

          <h1 className="hero-title">{CONFIG.tagline}</h1>
          <p className="hero-lead">{CONFIG.hero}</p>

          <div className="hero-contacts">
            <a className="btn btn-primary" href={`tel:${CONFIG.ctaPhone.replace(/\s/g, "")}`}>
              <Phone size={18} />
              Позвонить: {CONFIG.ctaPhone}
            </a>
            <a className="btn btn-ghost" href={`mailto:${CONFIG.ctaEmail}`}>
              <Mail size={18} />
              {CONFIG.ctaEmail}
            </a>
          </div>

          <ul className="hero-info">
            <li>
              <MapPin size={18} />
              {CONFIG.address}
            </li>
            <li>
              <Building2 size={18} />
              ИП/ООО, УСН/ОСНО/ПСН
            </li>
          </ul>
        </motion.header>
      </Section>

      {/* УСЛУГИ */}
      <Section id="services">
        <h2 className="title">Услуги</h2>
        <div className="grid grid-2">
          {CONFIG.services.map((s, i) => (
            <motion.article
              key={s.title + i}
              className="card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <IconWrap Icon={s.icon} />
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* СТОИМОСТЬ */}
      <Section id="pricing">
        <h2 className="title">Стоимость</h2>
        <div className="grid grid-3">
          {CONFIG.pricing.map((p, i) => (
            <article key={i} className="card">
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <p className="price">{p.price}</p>
                <ul className="list">
                  {p.features.map((f, k) => (
                    <li key={k}>
                      <CheckCircle2 size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a className="btn btn-primary" href={`https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                  <ChevronRight size={18} />
                  Рассчитать для моих условий
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <h2 className="title">Частые вопросы</h2>
        <div className="grid">
          {CONFIG.faq.map((q, i) => (
            <details key={i} className="faq">
              <summary>{q.q}</summary>
              <p>{q.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* КОНТАКТЫ */}
      <Section id="contacts">
        <h2 className="title">Контакты</h2>
        <div className="contacts">
          <a className="contact" href={`tel:${CONFIG.ctaPhone.replace(/\s/g, "")}`}>
            <Phone size={18} /> {CONFIG.ctaPhone}
          </a>
          <a className="contact" href={`mailto:${CONFIG.ctaEmail}`}>
            <Mail size={18} /> {CONFIG.ctaEmail}
          </a>
          <span className="contact">
            <MapPin size={18} /> {CONFIG.address}
          </span>
        </div>
      </Section>

      {/* Плавающая кнопка WhatsApp */}
      <WhatsAppFloat href={CONFIG.whatsapp} />
    </main>
  );
}
