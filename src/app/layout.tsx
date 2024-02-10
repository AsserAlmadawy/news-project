import type { Metadata } from "next";
import { Acme } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";

const acme: NextFont = Acme({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "News",
  description: "A news website"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props: RootLayoutProps) => (
  <html lang="en" dir="ltr">
    <body className={acme.className}>
      {props.children}
    </body>
  </html>
);

export default RootLayout;