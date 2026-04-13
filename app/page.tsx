import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import CityList from "@/components/CityList";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";
import { faqHome } from "@/data/faq";

export const metadata: Metadata = {
  title: `Adoucisseur d'eau Haute-Savoie (74) — Installation, entretien, dépannage`,
  description:
    `Adoucisseur d'eau en Haute-Savoie : eau dure 18-40 TH à Annecy, Annemasse, Thonon, Chamonix. Installation, entretien et dépannage par des experts. Devis gratuit sous 24h.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Adoucisseur d'eau Haute-Savoie (74) — Installation, entretien, dépannage`,
    description:
      `Adoucisseur d'eau en Haute-Savoie : eau dure 18-40 TH à Annecy, Annemasse, Thonon, Chamonix. Devis gratuit sous 24h.`,
    url: siteConfig.domain,
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Installation adoucisseur en ${departementConfig.departementName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Adoucisseur d'eau Haute-Savoie (74) — Installation, entretien, dépannage`,
    description: `Adoucisseur d'eau en Haute-Savoie : eau dure 18-40 TH. Installation, entretien, dépannage. Devis gratuit sous 24h.`,
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
  description: siteConfig.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqHome.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <Section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Image de fond optimisée */}
        <div className="absolute inset-0">
          <Image
            src="/Installation d'un adoucisseur d'eau_hero.webp"
            alt={`Installation d'un adoucisseur d'eau en ${departementConfig.departementName}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Overlay sombre avec opacité forte */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/85 to-primary-900/85" />
        {/* Contenu */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Adoucisseur d'eau en {departementConfig.departementName}
                <br />
                <span className="text-primary-200">Protégez votre installation</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Installation, entretien et dépannage d'adoucisseurs d'eau dans tout le département
                de la {departementConfig.departementName}. Devis gratuit et intervention rapide.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Intervention rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Professionnels certifiés</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Devis gratuit sous 24h
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                3 champs, 30 secondes — on vous rappelle rapidement.
              </p>
              <LeadForm compact />
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 border-t border-gray-200" />
                <span className="text-sm text-gray-400">ou</span>
                <div className="flex-1 border-t border-gray-200" />
              </div>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="mt-4 flex items-center justify-center gap-2 w-full border-2 border-primary-600 text-primary-600 font-semibold px-4 py-3 rounded-lg hover:bg-primary-50 transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler le {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Avantages Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Les bénéfices concrets d'un adoucisseur d'eau
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Du bassin annécien aux montagnes du Chablais, la teneur calcaire de l'eau représente un défi pour vos équipements domestiques. Découvrez comment un système d'adoucissement améliore votre quotidien.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Préservez vos équipements
              </h3>
              <p className="text-gray-600">
                Éliminez le tartre qui endommage vos machines à laver, ballons d'eau chaude et autres équipements. Multipliez leur espérance de vie par deux.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Réduisez votre facture énergétique</h3>
              <p className="text-gray-600">
                Un chauffe-eau sans dépôts calcaires consomme jusqu'à 15% d'électricité en moins. L'investissement se rentabilise rapidement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Un bien-être immédiat</h3>
              <p className="text-gray-600">
                Redécouvrez une peau souple après la douche, des cheveux plus doux et une vaisselle étincelante sans traces blanches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Divisez vos achats de produits ménagers</h3>
              <p className="text-gray-600">
                Savons, lessives, produits anti-calcaire : vos besoins diminuent de moitié grâce à l'action naturelle de l'eau adoucie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mise en place express</h3>
              <p className="text-gray-600">
                En quelques heures, nos techniciens qualifiés installent votre système et le paramètrent selon vos besoins spécifiques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi et maintenance garantis</h3>
              <p className="text-gray-600">
                Bénéficiez d'un accompagnement sur la durée avec nos formules de maintenance préventive et notre assistance technique.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Notre expertise à votre service
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            De l'installation initiale au dépannage urgent, nous couvrons l'ensemble du cycle de vie de votre équipement
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Installation
              </h3>
              <p className="text-gray-600 mb-4">
                Pose intégrale de votre système sur mesure, calibré pour votre foyer et votre consommation
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/entretien-adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Entretien
              </h3>
              <p className="text-gray-600 mb-4">
                Visites préventives planifiées pour optimiser les performances et prolonger la durabilité
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/depannage-adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Dépannage
              </h3>
              <p className="text-gray-600 mb-4">
                Diagnostics et réparations express en cas de panne ou dysfonctionnement
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>

            <Link
              href="/prix-adoucisseur"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Devis gratuit
              </h3>
              <p className="text-gray-600 mb-4">
                Estimations détaillées et transparentes, adaptées à votre projet spécifique
              </p>
              <span className="text-primary-600 font-medium group-hover:underline">
                En savoir plus →
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Qualité de l'eau Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            L'eau en Haute-Savoie : ce qu'il faut savoir
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Du lac d'Annecy au Genevois français, l'eau calcaire est un défi quotidien pour vos équipements. Découvrez les ressources pour mieux comprendre et agir.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/qualite-eau-haute-savoie"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Dureté de l'eau en Haute-Savoie
              </h3>
              <p className="text-gray-600 text-sm">
                Carte et valeurs TH par ville — Annecy, Annemasse, Thonon, Chamonix. Découvrez pourquoi votre eau est si calcaire.
              </p>
              <span className="text-primary-600 font-medium text-sm mt-3 block group-hover:underline">Voir la carte →</span>
            </Link>

            <Link
              href="/osmoseur-haute-savoie"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Osmoseur et filtration
              </h3>
              <p className="text-gray-600 text-sm">
                Eau ultra-pure au robinet avec un osmoseur inverse. Idéal en complément d'un adoucisseur pour boire sans calcaire.
              </p>
              <span className="text-primary-600 font-medium text-sm mt-3 block group-hover:underline">En savoir plus →</span>
            </Link>

            <Link
              href="/guides"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                Guides pratiques
              </h3>
              <p className="text-gray-600 text-sm">
                Comment choisir, entretenir, optimiser votre adoucisseur — tous nos conseils d'experts pour la Haute-Savoie.
              </p>
              <span className="text-primary-600 font-medium text-sm mt-3 block group-hover:underline">Lire les guides →</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Villes Section */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Présents partout en {departementConfig.departementName}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Nos techniciens partenaires couvrent l'intégralité du département pour vos projets d'adoucissement
          </p>
          <CityList />
          <div className="text-center mt-8">
            <Link
              href="/villes"
              className="text-primary-600 font-medium hover:underline text-lg"
            >
              Voir toutes les villes desservies →
            </Link>
          </div>
        </div>
      </Section>

      {/* Contexte eau Haute-Savoie */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Pourquoi l'eau de {departementConfig.departementName} nécessite un adoucisseur
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              La {departementConfig.departementName} est l'un des départements français où la dureté de l'eau est la plus élevée. Alimentée par des nappes souterraines qui traversent des formations géologiques calcaires — calcaires urgoniens, molasses miocènes, dolomies alpines — l'eau du robinet est classée <strong>« dure » à « très dure »</strong> dans la grande majorité des communes, avec des valeurs allant de 18 TH à Chamonix jusqu'à 40 TH dans la vallée de l'Arve et l'Albanais.
            </p>
            <p>
              Dans le <strong>bassin annécien</strong>, la dureté varie de 20 à 30 TH selon les quartiers : les secteurs centraux alimentés par le lac d'Annecy (20-23 TH) côtoient des zones périphériques comme Seynod, Meythet ou Annecy-le-Vieux, raccordées au réseau intercommunal du SILA, qui reçoivent une eau sensiblement plus calcaire (25-30 TH). Dans le <strong>Genevois français</strong> — Annemasse, Saint-Julien-en-Genevois, Vétraz-Monthoux — les nappes alluviales de l'Arve et les aquifères karstiques du Salève fournissent une eau parmi les plus dures du département : 28 à 38 TH.
            </p>
            <p>
              La <strong>vallée de l'Arve</strong> (Cluses, Bonneville, Marignier) affiche des valeurs encore supérieures, pouvant dépasser 35 à 40 TH dans certains secteurs. À l'inverse, le <strong>Pays du Mont-Blanc</strong> bénéficie d'une eau légèrement plus douce grâce aux sources alpines d'altitude, sans pour autant être exempt de calcaire : Chamonix reste à 18-28 TH, Sallanches à 22-32 TH. Le <strong>Chablais</strong> (Thonon, Évian) et l'<strong>Albanais</strong> (Rumilly) complètent ce tableau avec des eaux de 25-35 TH.
            </p>
            <p>
              Concrètement, dès 15 TH, le tartre se dépose progressivement sur les résistances de chauffe-eau, les robinetteries, les joints et les parois de douche. En {departementConfig.departementName}, où la moyenne dépasse 25 TH, les effets sont visibles en quelques mois : électroménager qui tombe en panne prématurément, factures d'énergie en hausse, traces blanches tenaces sur la robinetterie. Un adoucisseur à résine échangeuse d'ions, correctement dimensionné pour la dureté locale de votre commune, élimine ces problèmes à la source en produisant une eau adoucie entre 8 et 15 TH.
            </p>
            <p className="text-center">
              <Link href="/guides/durete-eau-haute-savoie" className="text-primary-600 font-medium hover:underline">
                Consultez notre carte détaillée de la dureté de l'eau par secteur en {departementConfig.departementName} →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Tout ce qu'il faut savoir sur l'adoucisseur d'eau en {departementConfig.departementName}
          </p>
          <FAQ items={faqHome} />
        </div>
      </Section>

      {/* CTA Final Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à installer votre adoucisseur d'eau ?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Obtenez un devis gratuit et personnalisé en quelques minutes
          </p>
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}
