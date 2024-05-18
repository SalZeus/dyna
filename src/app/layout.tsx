
import type { Metadata } from "next";
import {Header} from "../components/shared/Header";
import {Footer} from "../components/shared/Footer"
import "app/sass/globals.sass";
import {Ubuntu} from "next/font/google";
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";

const ubuntu = Ubuntu({
  weight: ["300", "500", "700"],
  subsets: ["latin-ext"]

})

export const metadata: Metadata = {
  title: "Dyna",
  description: "Tu app para encontrar cosas para tu hogar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        
        <Header />

        <Hero />

        <Description />

        {children}

        <Footer />

      </body>
    </html>
  );
};