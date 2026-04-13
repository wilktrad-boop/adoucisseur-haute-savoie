import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Adoucisseur d'eau en Haute-Savoie (74) — Installation, devis gratuit`,
  description:
    `Installez un adoucisseur d'eau en Haute-Savoie (74) : eau dure jusqu'à 40 TH à Annecy, Annemasse, Cluses, Chamonix. Protégez plomberie et électroménager, économisez jusqu'à 30 % d'énergie. Devis gratuit sous 24h.`,
  alternates: {
    canonical: "/adoucisseur",
  },
  openGraph: {
    title: `Adoucisseur d'eau en Haute-Savoie (74) — Installation, devis gratuit`,
    description:
      `Installation d'adoucisseur d'eau en Haute-Savoie : eau dure 18-40 TH selon les zones. Devis gratuit sous 24h pour Annecy, Annemasse, Thonon et tout le 74.`,
    url: `${siteConfig.domain}/adoucisseur`,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
        width: 1200,
        height: 630,
        alt: `Installation d'adoucisseur d'eau en ${departementConfig.departementName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Adoucisseur d'eau en Haute-Savoie (74) — Installation, devis gratuit`,
    description: `Installation d'adoucisseur d'eau en Haute-Savoie : eau dure 18-40 TH. Devis gratuit sous 24h.`,
  },
};

const faqItems = [
  {
    question: "Pourquoi l'eau est-elle calcaire en Haute-Savoie ?",
    answer:
      "La Haute-Savoie est un département à eau très dure en raison de sa géologie calcaire alpine. Les nappes souterraines traversent des formations de calcaire et de dolomie qui enrichissent naturellement l'eau en calcium et magnésium. La dureté varie de 18 TH à Chamonix jusqu'à 40 TH dans la vallée de l'Arve et l'Albanais.",
  },
  {
    question: "Combien coûte l'installation d'un adoucisseur en Haute-Savoie ?",
    answer:
      "Le prix d'un adoucisseur d'eau installé en Haute-Savoie varie entre 1 000 € et 2 500 € fourni et posé, selon la taille de votre logement, le nombre d'occupants et la dureté de votre eau. Nous établissons un devis gratuit et personnalisé sous 24h après évaluation de vos besoins.",
  },
  {
    question: "Quelle est la dureté de l'eau recommandée après adoucisseur ?",
    answer:
      "Un adoucisseur bien réglé produit une eau entre 8 et 15 TH, ce qui est idéal pour protéger vos équipements sans excès de sodium. En dessous de 8 TH, l'eau peut être agressive pour les canalisations en cuivre. Nos techniciens règlent l'appareil précisément selon la dureté initiale de votre eau et vos besoins.",
  },
  {
    question: "Combien de sel consomme un adoucisseur en Haute-Savoie ?",
    answer:
      "Avec une eau à 25-35 TH comme dans la plupart des zones de Haute-Savoie, un adoucisseur consomme environ 3 à 6 kg de sel par semaine pour un foyer de 4 personnes. Les modèles modernes à régénération volumétrique optimisent cette consommation en se régénérant uniquement en fonction du volume d'eau utilisé.",
  },
  {
    question: "Peut-on installer un adoucisseur dans un appartement ?",
    answer:
      "Oui, l'installation est possible en appartement dès lors qu'on accède à l'arrivée d'eau froide du logement. Dans les immeubles collectifs (nombreux à Annecy, Annemasse, Cluses), une installation individuelle sous évier ou dans un placard technique est souvent réalisable. Dans certaines copropriétés, une solution centralisée peut être envisagée avec l'accord du syndic.",
  },
  {
    question: "Faut-il entretenir son adoucisseur régulièrement ?",
    answer:
      "Oui, un entretien annuel est recommandé pour maintenir les performances et la durabilité de votre adoucisseur. Il comprend la vérification de la résine, le nettoyage de la vanne multivoies, le contrôle des paramètres de régénération et la mesure de la dureté en sortie. Découvrez nos offres d'entretien en Haute-Savoie.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Installation d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    telephone: siteConfig.contact.phone,
    url: siteConfig.domain,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: departementConfig.departementName,
  },
  description:
    `Installation d'adoucisseurs d'eau dans le département de la ${departementConfig.departementName}. Devis gratuit et personnalisé.`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AdoucisseurPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span>Installation adoucisseur d'eau en Haute-Savoie</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Adoucisseur d'eau en Haute-Savoie (74)
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Eau dure de 18 à 40 TH selon les zones — Genevois français, Chablais, vallée de l'Arve, bassin annécien. Un adoucisseur adapté protège vos équipements et améliore votre confort au quotidien. Devis gratuit sous 24h, intervention dans tout le département.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/qualite-eau-haute-savoie" className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 hover:bg-blue-100 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Voir la dureté de l'eau par ville
          </Link>
          <Link href="/prix-adoucisseur" className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 hover:bg-green-100 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
            Voir les prix
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Les raisons d'opter pour un traitement anti-calcaire en {departementConfig.departementName}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le titre hydrotimétrique fluctue entre communes, franchissant régulièrement le seuil de 25°fH sur les territoires du Chablais, de l'Albanais et du Faucigny. Ces niveaux élevés accélèrent l'entartrage de vos circuits hydrauliques.
              </p>
              <p>
                Les conséquences d'une eau fortement minéralisée sont multiples :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Formation de concrétions blanches obstruant tuyauteries et résistances</li>
                <li>Vieillissement accéléré du lave-linge, lave-vaisselle et cumulus</li>
                <li>Sensations de tiraillement cutané et cheveux rêches</li>
                <li>Surconsommation de détergents et anticalcaires</li>
                <li>Factures de dépannage et remplacements prématurés</li>
              </ul>
              <p>
                Équiper votre logement d'un dispositif d'adoucissement ramène le TH entre 8 et 12°fH, protégeant ainsi vos appareils quelle que soit l'origine montagnarde de votre eau. Un suivi régulier garantit cette protection sur le long terme – consultez nos{" "}
                <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  prestations de maintenance en {departementConfig.departementName}
                </Link>.
              </p>
              <p>
                Besoin d'un expert local ? Nos installateurs interviennent pour{" "}
                <Link href="/villes/annecy" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  adoucisseur Annecy
                </Link>
                ,{" "}
                <Link href="/villes/thonon-les-bains" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  installation adoucisseur Thonon-les-Bains
                </Link>{" "}
                ou encore{" "}
                <Link href="/villes/annemasse" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  adoucisseur Annemasse
                </Link>{" "}
                et les communes voisines.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Principe de fonctionnement d'un système d'adoucissement
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                La technologie repose sur la permutation ionique : l'eau circule à travers une résine saturée en ions sodium. Les ions calcium et magnésium (à l'origine de la dureté) sont capturés et remplacés par du sodium, transformant ainsi une eau calcaire en eau douce.
              </p>
              <p>
                Le cycle opératoire comprend trois phases distinctes :
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Phase de service :</strong> Le flux hydraulique traverse la colonne de résine qui piège calcium et magnésium.
                </li>
                <li>
                  <strong>Phase de régénération :</strong> Dès saturation de la résine, l'appareil déclenche automatiquement un lavage à la saumure (solution salée concentrée).
                </li>
                <li>
                  <strong>Phase de rinçage :</strong> Les eaux de lavage partent à l'égout, la résine retrouve sa capacité d'échange maximale.
                </li>
              </ol>
              <p>
                Ces régénérations s'effectuent typiquement durant les heures creuses nocturnes, sur une durée de 60 à 120 minutes selon les modèles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparatif des technologies disponibles
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le marché propose différentes solutions techniques, chacune répondant à des contextes d'usage particuliers :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Système à permutation ionique
                </h3>
                <p>
                  Solution la plus répandue, elle fonctionne avec du sel régénérant et s'adapte à la majorité des habitations. Les versions entièrement automatisées offrent le meilleur confort d'utilisation (programmation volumétrique ou temporelle).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Injection de CO2
                </h3>
                <p>
                  Procédé sans sel où le dioxyde de carbone dissout le calcaire en bicarbonate soluble. Empreinte écologique réduite, investissement initial généralement supérieur aux modèles à résine.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Conditionneurs magnétiques ou électroniques
                </h3>
                <p>
                  Appareils modifiant la cristallisation du calcaire sans élimination réelle. Efficacité limitée, adaptés uniquement aux situations de faible entartrage ou en complément d'autres traitements.
                </p>
              </div>

              <p>
                Les critères de sélection déterminants incluent :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Composition du foyer et nombre d'occupants</li>
                <li>Volume d'eau consommé journellement</li>
                <li>Taux de calcaire mesuré localement</li>
                <li>Contraintes d'encombrement et de raccordement</li>
                <li>Enveloppe budgétaire allouée au projet</li>
              </ul>
              <p>
                Retrouvez une grille tarifaire complète sur notre page dédiée aux{" "}
                <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  coûts d'acquisition et de pose en {departementConfig.departementName}
                </Link>.
              </p>
            </div>
          </section>

          {/* Liens thématiques */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              En savoir plus sur l'eau en Haute-Savoie
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/qualite-eau-haute-savoie" className="group flex gap-4 p-5 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition">
                <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-blue-700">Dureté de l'eau en Haute-Savoie</p>
                  <p className="text-sm text-gray-600">Tableau TH par ville — Annecy, Annemasse, Thonon, Chamonix…</p>
                </div>
              </Link>
              <Link href="/osmoseur-haute-savoie" className="group flex gap-4 p-5 bg-green-50 rounded-xl border border-green-100 hover:border-green-300 transition">
                <svg className="w-6 h-6 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-green-700">Osmoseur en Haute-Savoie</p>
                  <p className="text-sm text-gray-600">Eau ultra-pure au robinet, sans calcaire ni micropolluants</p>
                </div>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur l'adoucisseur en Haute-Savoie
            </h2>
            <FAQ items={faqItems} />
          </section>

          <section>
            <RelatedServices currentService="adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Demandez un devis pour votre adoucisseur d'eau
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Obtenez un devis gratuit et personnalisé pour l'installation d'un adoucisseur d'eau
            adapté à votre logement en {departementConfig.departementName}.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}













