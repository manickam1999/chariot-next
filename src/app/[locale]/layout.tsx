import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import type {Metadata} from 'next';
import localFont from 'next/font/local';
import '.././globals.css';
import {ThemeProvider} from '.././components/shared/ThemeProvider';
import {Toaster} from '@/components/ui/sonner';
import { ReactQueryProvider } from ".././components/shared/ReactQueryProvider";


const geistSans = localFont({
  src: '.././fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});

const geistMono = localFont({
  src: '.././fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Penang Silver Chariot Tracker',
  description: 'A tracking service for Penang Thaipusam Chariot Tracking.'
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
