import type { Metadata } from "next";
import { Acme } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const acme: NextFont = Acme({ subsets: ["latin"], display: "swap", weight: "400" });

export const metadata: Metadata = {
  title: "News",
  description: "A news website",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  authors: [
    { name: "Asser Almadawy" },
    { name: "Islam Almadawy" }
  ]
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props: RootLayoutProps) => (
  <html lang="en" dir="ltr">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </head>
    <body className={acme.className}>
      <Header />
      {props.children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;