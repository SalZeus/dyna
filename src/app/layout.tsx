
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Header} from "./components/shared/Header";
import {Footer} from "./components/shared/Footer"

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};