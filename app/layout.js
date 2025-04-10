export const metadata = {
  title: 'SorteAgora',
  description: 'Roleta de nomes aleatória para sorteios',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body>{children}</body>
    </html>
  );
}