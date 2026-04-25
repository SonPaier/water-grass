import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Realizations } from "@/components/Realizations";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Realizacje — kilkaset systemów nawadniania na Pomorzu",
  description:
    "Wybrane realizacje WaterGrass: Park Majkowskiego, Sierra Golf Club, Hotel Radisson Blu, Polpharma Biologics, Port Lotniczy Gdańsk, osiedla deweloperskie i ogrody przydomowe.",
  alternates: { canonical: "/realizacje" },
};

export default function RealizacjePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title="Realizacje — kilkaset systemów nawadniania"
          lead="Od ogrodów przydomowych po pola golfowe i hotele. Wybór najciekawszych projektów z całego Pomorza."
        />
        <Realizations initialLimit={9} showGallery />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
