export const metadata = {
  title: "Аудит Финанс — налоги и бухгалтерия под ключ",
  description:
    "Помогаем со снижением рисков, оптимизацией налогов и порядком в учёте. Пришло требование или вызвали в налоговую — звоните нам и будьте спокойны.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{margin:0,fontFamily:"Inter, system-ui, Arial, sans-serif",color:"#0f172a",background:"#fff"}}>
        {children}
      </body>
    </html>
  );
}
