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
  ctaPhone: "+7 938 888 6397",
  ctaEmail: "amk.audit@mail.ru",
  address: "Сочи, Адлерский р-н, ул. Кирова, 30А",
  whatsapp: "https://wa.me/79388886397",
  hero: "Помогаем владельцам бизнеса снижать риски, оптимизировать налоги и навести порядок в учёте.",
  services: [
    { icon: Scale, title: "Налоговый консультант", text: "Переходы УСН/ОСНО/ПСН, разделённый учёт, НДС-риски" },
    { icon: Calculator, title: "Бухгалтерия и зарплата", text: "1С: ведение, отчётность, кадры" },
    { icon: FileText, title: "Правовое сопровождение", text: "Договоры аренды, управление, претензии" },
    { icon: ShieldCheck, title: "Налоговая безопасность", text: "Защита при выездных проверках, налоговые споры" }
  ],
};

export default function Page() {
  return (
    <main>
      <header>
        <h1>{CONFIG.brand}</h1>
        <p>{CONFIG.hero}</p>
        <a href={`tel:${CONFIG.ctaPhone}`}>Позвонить</a>
      </header>
    </main>
  );
}
