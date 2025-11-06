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
        {/* Услуги */}
      <Section id="services">
        <h2 className="title">Услуги</h2>
        <div className="grid grid-2">
          {CONFIG.services.map((s, i) => (
            <div key={i} className="card">
              <div className="row" style={{marginBottom:8}}>
                <s.icon size={20} />
                <b>{s.title}</b>
              </div>
              <p className="muted">{s.text}</p>
              <div className="row" style={{marginTop:12}}>
                <a href={CONFIG.whatsapp} className="btn">Уточнить в WhatsApp</a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* О компании */}
      <Section id="about">
        <h2 className="title">О компании</h2>
        <div className="grid grid-2">
          <div className="card">
            <b>Кто мы</b>
            <p className="muted" style={{marginTop:8}}>
              «Аудит Финанс» — практики по налогам, бухгалтерии и правовому сопровождению.
              Работаем с малым и средним бизнесом Сочи/Адлера и удалённо по РФ.
              Делаем просто и по-делу: фиксируем договором, отвечаем в срок, берём ответственность.
            </p>
            <ul style={{marginTop:10, paddingLeft:18, color:"#334155"}}>
              <li>1С Фреш, ЭДО (Диадок/Контур), банки/кассы, интеграции</li>
              <li>Переходы УСН/ОСНО/ПСН, раздельный учёт, НДС</li>
              <li>Подготовка пояснений в ИФНС, сопровождение камеральных</li>
            </ul>
          </div>

          <div className="card">
            <b>Почему выбирают нас</b>
            <div className="list" style={{marginTop:8}}>
              <div className="row"><CheckCircle2 size={18}/> Понятные условия и стоимость</div>
              <div className="row"><CheckCircle2 size={18}/> Быстрые ответы в WhatsApp</div>
              <div className="row"><CheckCircle2 size={18}/> Конфиденциальность и ответственность</div>
              <div className="row"><CheckCircle2 size={18}/> Практический опыт в гостеприимстве и аренде</div>
            </div>
          </div>
        </div>
      </Section>
      {/* Кейсы / результаты */}
      <Section id="cases">
        <h2 className="title">Кейсы и результаты</h2>
        <div className="grid grid-2">
          <div className="card">
            <b>Гостевой дом (УСН)</b>
            <p className="muted" style={{marginTop:8}}>
              Настроили 1С Фреш, разнесли движений на 12 месяцев, привели кассу и банк,
              оформили договоры аренды. Снизили налоговую нагрузку на 18%.
            </p>
          </div>
          <div className="card">
            <b>Аренда помещений</b>
            <p className="muted" style={{marginTop:8}}>
              Ввели раздельный учёт по НДС, подготовили пояснения в ИФНС,
              отстояли вычеты. Камеральная завершена без доначислений.
            </p>
          </div>
          <div className="card">
            <b>Кафе при отеле</b>
            <p className="muted" style={{marginTop:8}}>
              Внедрили iiko → 1С, закрыли кассовые разрывы, наладили зарплатный учёт,
              составили регламент документооборота. Срок закрытия месяца — 3 дня.
            </p>
          </div>
          <div className="card">
            <b>Восстановление учёта</b>
            <p className="muted" style={{marginTop:8}}>
              Перенесли базу с Excel в 1С, восстановили первичку за 8 месяцев,
              сдали уточнённые декларации. Штрафов нет.
            </p>
          </div>
        </div>
      </Section>
      {/* Стоимость / расчёт */}
      <Section id="pricing">
        <h2 className="title">Стоимость</h2>
        <div className="card">
          <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
            <b>Расчёт стоимости — индивидуально</b>
            <span className="muted">Подберём режим, оценим объём, дадим фикс-цену</span>
          </div>
          <div className="row" style={{marginTop:12, flexWrap:"wrap"}}>
            <a className="btn" href={CONFIG.whatsapp}>Получить предложение в WhatsApp</a>
            <a className="btn alt" href="#contact">Оставить заявку</a>
          </div>
        </div>
      </Section>
      {/* FAQ */}
      <Section id="faq">
        <h2 className="title">FAQ</h2>
        <div className="grid grid-2">
          <div className="card">
            <b>Работаете только в Сочи?</b>
            <p className="muted" style={{marginTop:8}}>
              Работаем по всей России: ЭДО, ЭЦП, 1С Фреш. Встречи — онлайн/офлайн.
            </p>
          </div>
          <div className="card">
            <b>Можно взять учёт с середины года?</b>
            <p className="muted" style={{marginTop:8}}>
              Да. Переносим базу, восстанавливаем учёт, при необходимости сдаём уточнённые декларации.
            </p>
          </div>
          <div className="card">
            <b>Поможете при камеральной проверке?</b>
            <p className="muted" style={{marginTop:8}}>
              Готовим пояснения, собираем документы, сопровождаем до решения. При споре — обжалуем.
            </p>
          </div>
          <div className="card">
            <b>Как связаться быстро?</b>
            <p className="muted" style={{marginTop:8}}>
              Нажмите «Написать в WhatsApp» — отвечаем обычно в течение дня.
            </p>
          </div>
        </div>
      </Section>

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

      {/* Контакты / Реквизиты / Карта */}
      <Section id="contact">
        <h2 className="title">Связаться</h2>
        <div className="grid grid-2">
          {/* Форма + быстрые контакты */}
          <div className="card">
            <b>Оставьте заявку</b>
            <form action={CONFIG.whatsapp} method="get" style={{display:"grid", gap:10, marginTop:10}}>
              <input placeholder="Ваше имя" required style={{padding:12,borderRadius:12,border:"1px solid #cbd5e1"}}/>
              <input placeholder="Телефон или email" required style={{padding:12,borderRadius:12,border:"1px solid #cbd5e1"}}/>
              <textarea placeholder="Коротко опишите запрос" rows={4} style={{padding:12,borderRadius:12,border:"1px solid #cbd5e1"}}/>
              <button type="submit" className="btn">Написать в WhatsApp</button>
            </form>

            <div className="list" style={{marginTop:12}}>
              <div className="row"><Phone size={18}/> {CONFIG.ctaPhone}</div>
              <div className="row"><Mail size={18}/> {CONFIG.ctaEmail}</div>
              <div className="row"><MapPin size={18}/> {CONFIG.address}</div>
              <a href={CONFIG.whatsapp} className="muted">Связаться в WhatsApp</a>
            </div>
          </div>

          {/* Реквизиты + карта */}
          <div className="card">
            <b>Реквизиты</b>
            <div className="list" style={{marginTop:8}}>
              <div className="row"><b style={{width:80}}>ИНН</b><span>— укажем позже</span></div>
              <div className="row"><b style={{width:80}}>ОГРН</b><span>— укажем позже</span></div>
              <div className="row"><b style={{width:80}}>Банк</b><span>— укажем позже</span></div>
              <div className="row"><b style={{width:80}}>р/с</b><span>— укажем позже</span></div>
              <div className="row"><b style={{width:80}}>БИК</b><span>— укажем позже</span></div>
            </div>

            <div style={{marginTop:12}}>
              <div className="mapWrap">
                <iframe
                  title="Карта"
                  width="100%"
                  height="240"
                  style={{border:0, borderRadius:12}}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.address)}&output=embed`}
                />
              </div>
              <div className="row" style={{marginTop:10, flexWrap:"wrap"}}>
                <a className="btn alt" href={`https://yandex.ru/maps/?text=${encodeURIComponent(CONFIG.address)}`} target="_blank">Открыть в Яндекс.Картах</a>
                <a className="btn alt" href={`https://maps.google.com/?q=${encodeURIComponent(CONFIG.address)}`} target="_blank">Открыть в Google Maps</a>
              </div>
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
/* ---- базовые блоки для макета ---- */
.header { position: sticky; top: 0; background:#fff; border-bottom:1px solid #e5e7eb; z-index:10; }
.nav { display:flex; align-items:center; justify-content:space-between; padding:14px 0; gap:12px; }
.brand { display:flex; align-items:center; gap:10px; font-weight:800; font-size:18px; color:#0f172a; }

.section { padding:40px 0; }
.title { font-size:28px; font-weight:800; margin-bottom:14px; }
.muted { color:#64748b; }

.grid { display:grid; gap:16px; }
.grid-2 { grid-template-columns: 1fr; }
@media (min-width: 900px) { .grid-2 { grid-template-columns: 1.1fr .9fr; } }

.row { display:flex; align-items:center; gap:8px; }

.card { border:1px solid #e5e7eb; border-radius:14px; padding:16px; background:#fff; box-shadow:0 6px 18px rgba(2,6,23,.04); }

.btn.alt { background:#fff; color:#0f172a; border:1px solid #0f172a; }
.btn.alt:hover { background:#0f172a; color:#fff; }
