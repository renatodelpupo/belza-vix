import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className={inter.className} style={{ fontSize: 16, margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
