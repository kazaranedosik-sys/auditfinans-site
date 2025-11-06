"use client";
import { motion } from "framer-motion";
import {
  Scale, Phone, Mail, MapPin, CheckCircle2, ChevronRight,
  ShieldCheck, BadgeRussianRuble, Building2, FileText, Calculator
} from "lucide-react";
import "../styles/globals.css";

const CONFIG = {
  brand: "Аудит Финанс",
  tagline: "Налоги, бухгалтерия — под ключ",
  ctaPhone: "+793888863974",
  ctaEmail: "amkaudit1@mail.ru",
  address: "Сочи, Адлерский р-н, ул. Кирова, 30А",
  whatsapp: "https://wa.me/79388886397",
  hero:
    "Помогаем владельцам бизнеса снижать риски, оптимизировать налоги и навести порядок в учёте. Пришло требование, вызвали в налоговую — звоните нам и будьте спокойны. Быстро. Законно. Понятно.",
  services: [
    { icon: Scale, title: "Налоговый консалтинг", text: "Переходы УСН/ОСНО/ПСН, раздельный учёт, НДС-риски, сопровождение проверок."},
    { icon: Calculator, title: "Бухгалтерия и зарплата", text: "1С: ведение, отчётность, кадры, интеграции банк/кассы/iiko."},
    { icon: FileText, title: "Правовое сопровождение", text: "Договоры аренды и управления, претензии, досудебка."},
    { icon: ShieldCheck, title: "Налоговая безопасность", text: "Диагностика рисков, письма в ИФНС, защита позиции."}
  ],
  cases: [
    { title: "Гостевой дом в Адлере: снижение налогов", text: "Перевели объект на ПСН и раздельный учёт, оптимизировали нагрузку. Налоги снизились примерно на 28%." },
    { title: "Арендный бизнес (5 объектов): порядок в договорах", text: "Провели аудит договоров, настроили распределение коммуналки и ответственность сторон." },
    { title: "ИП услуги + аренда: требование ИФНС закрыто", text: "Подготовили пояснения и документы. Вопрос закрыт без штрафов." }
  ],
  pricing: [
    { name: "Расчёт стоимости", price: "Индивидуально", features: ["Подберём режим налогообложения", "Оценим объём операций", "Сформируем предложение под ваш бизнес"] }
  ],
  faq: [
    { q: "Вы работаете удалённо или только в Сочи?", a: "По всей России: ЭДО, ЭЦП, 1С Фреш. Встречи — онлайн/офлайн." },
    { q: "Можете взять бухучёт с середины года?", a: "Да. Переносим базу, восстанавливаем учёт, сдаём уточнённые декларации." },
    { q: "Поможете пройти камеральную проверку?", a: "Готовим пояснения, собираем документы, сопровождаем до решения." }
  ]
};

function Section({ id, children, className }) {
  return <section id={id} className={"section " + (className || "")}><div className="container">{children}</div></section>;
}

export default function Page() {
  return (
    <div>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div style={{height:36,width:36,borderRadius:12,background:"#0f172a",color:"#fff",display:"grid",placeItems:"center",boxShadow:"0 10px 30px rgba(2,6,23,.08)"}}>
              <Scale size={18}/>
            </div>
            <span>{CONFIG.brand}</span>
          </div>
          <a href="#contact" className="btn">Связаться</a>
        </div>
      </header>

      <Section id="hero" className="hero">
        <div className="grid grid-2" style={{alignItems:"center"}}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
            <h1 style={{fontSize:40, lineHeight:1.1, fontWeight:900, margin:0}}>{CONFIG.brand}: {CONFIG.tagline}</h1>
            <p className="muted" style={{fontSize:18, marginTop:12}}>{CONFIG.hero}</p>
            <div className="row" style={{marginTop:16, flexWrap:"wrap"}}>
              <a href="#contact" className="btn">Получить консультацию</a>
              <a href="#pricing" className="btn alt" style={{borderColor:"#0f172a"}}>Тарифы <ChevronRight size={18} style={{marginLeft:6}}/></a>
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

      <Section id="services">
        <h2 className="title">Чем поможем</h2>
        <div className="grid grid-4">
          {CONFIG.services.map((s) => (
            <div key={s.title} className="card">
              <div className="row"><s.icon size={18}/> <b>{s.title}</b></div>
              <div className="muted" style={{marginTop:8}}>{s.text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cases">
        <h2 className="title">Кейсы</h2>
        <div className="grid grid-3">
          {CONFIG.cases.map((c) => (
            <div key={c.title} className="card">
              <b>{c.title}</b>
              <div className="muted" style={{marginTop:8}}>{c.text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="pricing">
        <h2 className="title">Тарифы</h2>
        <div className="grid" style={{gridTemplateColumns:"1fr"}}>
          {CONFIG.pricing.map((p) => (
            <div key={p.name} className="card" style={{borderColor:"#0f172a"}}>
              <div className="row" style={{justifyContent:"space-between"}}>
                <b>{p.name}</b>
                <b style={{fontSize:18}}>{p.price}</b>
              </div>
              <div className="list" style={{marginTop:8}}>
                {p.features.map((f) => <div key={f} className="row muted"><CheckCircle2 size={18}/>{f}</div>)}
              </div>
              <div style={{marginTop:12}}>
                <a href="#contact" className="btn" style={{width:"100%"}}>Получить предложение</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq">
        <h2 className="title">FAQ</h2>
        <div className="grid grid-2">
          {CONFIG.faq.map((item, idx) => (
            <div key={idx} className="card">
              <b>{item.q}</b>
              <div className="muted" style={{marginTop:8}}>{item.a}</div>
            </div>
          ))}
        </div>
      </Section>

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
