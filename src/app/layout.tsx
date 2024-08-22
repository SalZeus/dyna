
import type { Metadata } from "next";
import {Header} from "../components/shared/Header";
import {Footer} from "../components/shared/Footer"
import "app/scss/globals.scss";
import {Ubuntu, Major_Mono_Display} from "next/font/google";


const ubuntu = Ubuntu({
  weight: ["300", "500", "700"],
  subsets: ["latin-ext"]

})
const majorMonoDisplay = Major_Mono_Display({
  weight: ["400"],
  subsets: ["latin-ext"],
  preload: true,
  style: "normal"
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

        {children}

        <Footer />

      </body>
    </html>
  );
};