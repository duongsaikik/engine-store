import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import React from "react";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "../../utils/constants";
import "../globals.css";
import "@ant-design/v5-patch-for-react-19";
import { ClientOnlyModalProvider } from "./ClientOnlyModalProvider";

const Header = React.lazy(() => import("../../components/header/page"));
const Footer = React.lazy(() => import("../../components/Footer"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Engine Shop",
  description: "Buy high-quality tables and wardrobes online",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const validLocale = SUPPORTED_LANGUAGES.includes(locale)
    ? locale
    : DEFAULT_LANGUAGE;
  const messages = (await import(`../../../messages/${validLocale}.json`))
    .default;

  return (
    <html lang={validLocale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={validLocale} messages={messages}>
          <ClientOnlyModalProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ClientOnlyModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
