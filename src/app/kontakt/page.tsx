import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Kontakt — bezpłatna wycena u Ciebie",
  description:
    "Skontaktuj się z WaterGrass. Bezpłatna wycena systemu nawadniania u Ciebie w ogrodzie. Bolszewo, Trójmiasto, Pomorze. Telefon, e-mail, adres pracowni.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Kontakt"
          title="Bezpłatna wycena u Ciebie w ogrodzie"
          lead="Najszybciej odpowiemy na telefon. Możesz też napisać maila — wracamy zwykle tego samego dnia."
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={siteConfig.contact.phoneHref}
                className="bg-brand text-white p-10 group hover:bg-brand-dark transition-colors"
              >
                <p className="text-white/80 text-sm uppercase font-headline tracking-widest mb-3">
                  Zadzwoń
                </p>
                <p className="font-headline text-3xl md:text-4xl font-extrabold mb-2">
                  {siteConfig.contact.phone}
                </p>
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="bg-secondary text-white p-10 group hover:opacity-90 transition-opacity"
              >
                <p className="text-white/70 text-sm uppercase font-headline tracking-widest mb-3">
                  Napisz
                </p>
                <p className="font-headline text-lg sm:text-xl md:text-2xl font-extrabold mb-2 whitespace-nowrap">
                  {siteConfig.contact.email}
                </p>
                <p className="text-white/70 text-sm">
                  Odpowiadamy zwykle tego samego dnia
                </p>
              </a>
            </div>
            <div className="mt-12 bg-white border-l-4 border-brand p-8">
              <p className="text-zinc-400 text-sm uppercase font-headline tracking-wide mb-2">
                Adres pracowni
              </p>
              <p className="text-secondary font-headline text-xl font-bold leading-relaxed">
                {siteConfig.legalName}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>
            <div className="mt-8 text-zinc-600 text-[15px] leading-relaxed space-y-3">
              <p>
                <strong className="text-secondary">Dlaczego najlepiej zadzwonić?</strong>{" "}
                Najszybciej zorientujemy się, czego potrzebujesz, kiedy możemy
                przyjechać i z grubsza, jakiego rzędu rozwiązanie wchodzi w
                grę. W kilka minut zaplanujemy wizytę.
              </p>
              <p>
                <strong className="text-secondary">Wyceny robimy u Ciebie, na ogrodzie</strong>{" "}
                — bezpłatnie i bez zobowiązań. Po pomiarze dostaniesz konkretną
                ofertę z listą materiałów i terminem realizacji.
              </p>
              <p>
                <strong className="text-secondary">Sezon wiosenny i jesienny</strong>{" "}
                — w marcu/kwietniu i wrześniu/październiku kalendarz wypełnia
                się szybko. Warto zarezerwować termin z wyprzedzeniem.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
