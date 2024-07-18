import { Metadata } from "next";
import { Description } from "../../components/home/Description";
import { Hero } from "../../components/home/Hero";
import { MainProducts } from "../../components/home/MainProducts";

export const metadata: Metadata ={
  title:"Dyna Illumination",
  description: "Soluciones de iluminación sostenibles",
  keywords: ["technology", "tecnología", "iluminación", "illumination", "luces", "innovación", "innovation"]
}

export default function Home() {
  return (
    <main>

      <MainProducts />
      
    </main>
  );
}
