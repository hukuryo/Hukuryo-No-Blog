import type { Metadata } from 'next';
import '../../css/globals.css';
import { ReactNode } from 'react';

import { ThemeProvider } from '../../components/ui/ThemeProvider';
import { Header } from '../../components/Header';
import { ScrollUp } from '../../components/ui/ScrollUp';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Hukuryo-no-Blog',
  description: 'Hukuryo-no-Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <ScrollUp />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
