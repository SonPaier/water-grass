import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności WaterGrass — Łukasz Kowalewski. Zasady przetwarzania danych osobowych zgodnie z RODO.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: false, follow: true },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Polityka prywatności" />
        <Prose>
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest{" "}
            <strong>{siteConfig.legalName}</strong>, {siteConfig.address.street},{" "}
            {siteConfig.address.postalCode} {siteConfig.address.city}.
          </p>
          <p>
            Kontakt:{" "}
            <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>,
            tel. <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
          </p>
          <h2>2. Jakie dane zbieramy</h2>
          <ul>
            <li>Dane podawane w formularzu kontaktowym (imię, nazwisko, e-mail, telefon, treść wiadomości)</li>
            <li>Dane logów serwera (adres IP, user-agent) — w celach bezpieczeństwa</li>
            <li>Dane analityczne (po wyrażeniu zgody na pliki cookie analityczne)</li>
          </ul>
          <h2>3. W jakim celu przetwarzamy dane</h2>
          <ul>
            <li>Odpowiedź na zapytanie ofertowe i przygotowanie wyceny (art. 6 ust. 1 lit. b RODO)</li>
            <li>Realizacja umowy i dokumentacja serwisowa (art. 6 ust. 1 lit. b RODO)</li>
            <li>Obowiązki księgowe i podatkowe (art. 6 ust. 1 lit. c RODO)</li>
            <li>Marketing własny (art. 6 ust. 1 lit. f RODO — uzasadniony interes)</li>
          </ul>
          <h2>4. Twoje prawa</h2>
          <p>
            Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przenoszenia, sprzeciwu i wniesienia
            skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
          <h2>5. Okres przechowywania</h2>
          <p>
            Dane przechowujemy przez okres niezbędny do realizacji umowy oraz
            obowiązków księgowych (5 lat). Dane z formularzy kontaktowych bez
            zawartej umowy usuwamy po 12 miesiącach.
          </p>
          <h2>6. Odbiorcy danych</h2>
          <p>
            Twoje dane mogą być powierzone podmiotom świadczącym dla nas usługi
            (księgowość, hosting, e-mail). Nie przekazujemy danych poza EOG.
          </p>
        </Prose>
      </main>
      <Footer />
    </>
  );
}
