import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstallProcess } from "@/components/InstallProcess";
import { InstallationTypes } from "@/components/InstallationTypes";
import { IntroBanner } from "@/components/IntroBanner";
import { Stats } from "@/components/Stats";
import { InstallShowcase } from "@/components/InstallShowcase";
import { BrandStrip } from "@/components/BrandStrip";
import { Husqvarna } from "@/components/Husqvarna";
import { Realizations } from "@/components/Realizations";
import { Cooperation } from "@/components/Cooperation";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { ServicesTeaser } from "@/components/ServicesTeaser";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title:
    "Systemy nawadniania ogrodów — Trójmiasto, Pomorze | bezpłatna wycena",
  description:
    "Projektowanie i montaż automatycznych systemów nawadniania ogrodów na Pomorzu. Bolszewo, Wejherowo, Trójmiasto. Hunter, Rain Bird, Husqvarna Automower. Bezpłatna wycena u Ciebie.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FaqJsonLd />
      <Header />
      <main>
        <Hero />
        <InstallProcess />
        <InstallationTypes />
        <IntroBanner />
        <Stats />
        <InstallShowcase />
        <BrandStrip />
        <Husqvarna />
        <Realizations />
        <Cooperation />
        <Testimonials />
        <ServiceArea />
        <ServicesTeaser />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
