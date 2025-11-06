"use client";

import { motion } from "framer-motion";
import {
  Scale, Phone, Mail, MapPin, CheckCircle2, ChevronRight,
  ShieldCheck, BadgeRussianRuble, Building2, FileText, Calculator
} from "lucide-react";
import "../styles/globals.css";

const CONFIG = {
  brand: "Аудит Финанс",
  tagline: "Аудит, налоги и бухгалтерия под ключ",
  ctaPhone: "+7 938 888 63 97",
  ctaEmail: "amkaudit1@mail.ru",
  address: "Сочи, Адлерский р-н, ул. Кирова, 30А",
  whatsapp: "https://wa.me/79388886397",
  hero:
    "Помогаем владельцам бизнеса снижать риски, оптимизировать налоги и навести порядок в учёте. Пришло требование, вызвали в налоговую — звоните нам и будьте спокойны. Быстро. Законно. Понятно.",
  services: [
    { icon: Scale, title: "Налоговый консалтинг", text: "Переходы УСН/ОСНО/ПСН, раздельный учёт, НДС-риски, сопровождение проверок." },
    { icon: Calculator, title: "Бухгалтерия и зарплата", text: "1С: ведение, отчётность, кадры, интеграции банк/кассы/iiko." },
    { icon: FileText, title: "Правовое сопровождение", text: "Договоры аренды и управления, претензии, досудебка." },
    { icon: ShieldCheck, title: "Налоговая безопасность", text: "Диагностика рисков, письма в ИФНС, защита позиции." },
  ],
  pricing: [
    { name: "Расчёт стоимости", price: "Индивидуально", features: ["Подберём режим налогообложения", "Оценим объём операций", "Сформируем предложение под ваш бизнес"] }
  ],
  faq: [
    { q: "Работаете только в Сочи?", a: "По всей России: ЭДО, ЭЦП, 1С Фреш. Встречи — онлайн/офлайн." },
    { q: "Можно взять учёт с середины года?", a: "Да. Переносим базу, восстанавливаем учёт, сдаём уточнённые декларации." },
    { q: "Поможете при камеральной?", a: "Готовим пояснения, собираем документы, сопровождаем до решения." }
  ]
};

function Section({ id, children, className }) {
  return <section id={id} className={"section " + (className || "")}><div className="container">{children}</div></section>;
}

export default function Page() {
  return (
    <div>
      {/* Header c текстовым логотипом */}
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div style={{height:36,width:36,borderRadius:12,background:"#0f172a",color:"#fff",display:"grid",placeItems:"center",boxShadow:"0 10px 30px rgba(2,6,23,.08)"}}>
              <Scale size={18}/>
            </div>
            <span>{CONFIG.brand}</span>
          </div>
          <a href={CONFIG.whatsapp} className="btn">Связаться в WhatsApp</a>
        </div>
      </header>

      {/* Hero с вашим слоганом и кнопкой */}
      <Section id="hero" className="hero">
        <div className="grid grid-2" style={{alignItems:"center"}}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
            <h1 style={{fontSize:40, lineHeight:1.1, fontWeight:900, margin:0}}>
              {CONFIG.tagline}
            </h1>
            <p className="muted" style={{fontSize:18, marginTop:12}}>{CONFIG.hero}</p>
            <div className="row" style={{marginTop:16, flexWrap:"wrap"}}>
              <a href={CONFIG.whatsapp} className="btn">Написать в WhatsApp</a>
              <a href={`tel:${CONFIG.ctaPhone.replace(/\\s/g,'')}`} className="btn alt" style={{borderColor:"#0f172a"}}>
                Позвонить <ChevronRight size={18} style={{marginLeft:6}}/>
              </a>
            </div>
            <div className="row muted" style={{marginTop:14}}>
              <span className="row"><BadgeRussianRuble size={18}/> Работаем по договору</span>
              <span className="row"><ShieldCheck size={18}/> Конфиденциально</span>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <div className="card">
              <div className="row" style={{marginBottom:8}}><Building2 size={20}/> <b>Наш профиль</b></div>
              <div className="list">
                <div className="row"><CheckCircle2 size={18}/> Гостиницы, аренда, сервис</div>
                <div className="row"><CheckCircle2 size={18}/> Оптимизация УСН/НДС, раздельный учёт</div>
                <div className="row"><CheckCircle2 size={18}/> Юридическое сопровождение сделок</div>
                <div className="row"><CheckCircle2 size={18}/> Настройка 1С Фреш, интеграции, регламенты</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Контакты (внизу страницы оставляем как было) */}
      <Section id="contact">
        <h2 className="title">Связаться</h2>
        <div className="grid grid-2">
          <div className="card">
            <b>Оставьте заявку</b>
            <form action={CONFIG.whatsapp} method="get" style={{display:"grid", gap:10, marginTop:10}}>
              <input placeholder="Ваше имя" required style={{padding:12,borderRadius:12,border:"1px solid #cbd5e1"}}/>
              <input placeholder="Телефон или email" required style={{padding:12,borderRadius:12,border:"1px solid #cbd5e1"}}/>
              <textarea placeholder="Коротко опишите запрос" rows={4} style={{padding:12,borderRadius:12,border:"1px solid #cbd5e1"}}/>
              <button type="submit" className="btn">Отправить</button>
            </form>
          </div>
          <div className="card">
            <b>Контакты</b>
            <div className="list" style={{marginTop:8}}>
              <div className="row"><Phone size={18}/> {CONFIG.ctaPhone}</div>
              <div className="row"><Mail size={18}/> {CONFIG.ctaEmail}</div>
              <div className="row"><MapPin size={18}/> {CONFIG.address}</div>
              <a href={CONFIG.whatsapp} className="muted">Написать в WhatsApp</a>
            </div>
          </div>
        </div>
      </Section>

      <footer>
        <div className="container muted">© {new Date().getFullYear()} {CONFIG.brand}. Все права защищены.</div>
      </footer>
    </div>
  );
}
