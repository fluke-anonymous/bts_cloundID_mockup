'use client';  
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Provider } from "react-redux";
import {store} from "@/redux/store";
import "./globals.css";
const inter = IBM_Plex_Sans_Thai({ subsets: ["thai","latin"] ,weight:['400'] });
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useCurrentLocale(i18nConfig);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout
