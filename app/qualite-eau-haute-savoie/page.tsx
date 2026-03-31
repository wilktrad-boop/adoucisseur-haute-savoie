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
  title: "Dureté et qualité de l'eau en Haute-Savoie — Carte et valeurs TH par ville",
  description:
    "Découvrez la dureté de l'eau en Haute-Savoie (74) : carte, valeurs TH par ville (Annecy, Annemasse, Thonon, Chamonix…) et solutions anti-calcaire adaptées.",
  alternates: {
    canonical: "/qualite-eau-haute-savoie",
  },
  openGraph: {
    title: "Dureté et qualité de l'eau en Haute-Savoie",
    description:
      "Carte et valeurs TH de la dureté de l'eau par ville en Haute-Savoie. Annecy, Annemasse, Thonon, Chamonix : découvrez si votre eau est calcaire.",
    url: `${siteConfig.domain}/qualite-eau-haute-savoie`,
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dureté et qualité de l'eau en Haute-Savoie",
  description:
    "Guide complet sur la dureté de l'eau en Haute-Savoie : valeurs TH par ville, causes géologiques et solutions adaptées.",
  url: `${siteConfig.domain}/qualite-eau-haute-savoie`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
  },
};

const faqItems = [
  {
    question: "L'eau est-elle calcaire en Haute-Savoie ?",
    answer:
      "Oui, la quasi-totalité de la Haute-Savoie est concernée par une eau dure à très dure. Les valeurs oscillent entre 18 et 40 TH selon les secteurs. Les zones les plus touchées sont le Genevois français (Annemasse, Saint-Julien), la vallée de l'Arve (Cluses, Bonneville) et l'Albanais (Rumilly). Même Chamonix, malgré les glaciers, présente une eau à 18-28 TH.",
  },
  {
    question: "Quelle est la dureté de l'eau à Annecy ?",
    answer:
      "La dureté de l'eau à Annecy varie entre 20 et 30 TH selon les quartiers. Le centre-ville, alimenté par le lac d'Annecy, bénéficie d'une eau légèrement moins calcaire. Les quartiers périphériques (Annecy-le-Vieux, Seynod, Meythet) raccordés au réseau intercommunal ont une eau plus chargée. À partir de 15 TH, un adoucisseur est recommandé.",
  },
  {
    question: "Pourquoi l'eau est-elle si calcaire dans le Genevois français ?",
    answer:
      "Le Genevois français (Annemasse, Saint-Julien, Gaillard…) présente une eau parmi les plus dures de Haute-Savoie (28-38 TH). Cette eau provient des nappes alluviales de l'Arve et de sources karstiques au pied du Salève, naturellement riches en calcium et magnésium. La géologie calcaire de la région explique cette forte minéralisation.",
  },
  {
    question: "À partir de quelle dureté faut-il un adoucisseur ?",
    answer:
      "Un adoucisseur est recommandé dès 15 TH (eau dure). En Haute-Savoie, la majorité des communes dépasse ce seuil. À 25 TH et au-delà, les conséquences sur les équipements sont significatives : encrassement des chauffe-eaux, usure prématurée des machines, dépôts sur robinetteries. L'investissement dans un adoucisseur se rentabilise généralement en 2 à 4 ans.",
  },
  {
    question: "Comment mesurer la dureté de l'eau chez moi ?",
    answer:
      "Vous pouvez mesurer la dureté de votre eau avec un test de dureté (bandelettes ou réactif, disponibles en pharmacie ou en ligne). Vous pouvez aussi contacter votre service des eaux municipal ou consulter les bulletins d'analyse de l'ARS Auvergne-Rhône-Alpes. Notre équipe peut également réaliser un test gratuit lors d'une visite de conseil.",
  },
];

const villesData = [
  { nom: "Annecy", slug: "annecy", durete: "20-30 TH", zone: "Lac d'Annecy", niveau: "dure" },
  { nom: "Annemasse", slug: "annemasse", durete: "28-36 TH", zone: "Genevois français", niveau: "très dure" },
  { nom: "Thonon-les-Bains", slug: "thonon-les-bains", durete: "25-35 TH", zone: "Chablais", niveau: "très dure" },
  { nom: "Cluses", slug: "cluses", durete: "30-40 TH", zone: "Vallée de l'Arve", niveau: "très dure" },
  { nom: "Chamonix-Mont-Blanc", slug: "chamonix", durete: "18-28 TH", zone: "Mont-Blanc", niveau: "dure" },
  { nom: "Saint-Julien-en-Genevois", slug: "saint-julien-en-genevois", durete: "28-38 TH", zone: "Genevois français", niveau: "très dure" },
  { nom: "Bonneville", slug: "bonneville", durete: "28-38 TH", zone: "Vallée de l'Arve", niveau: "très dure" },
  { nom: "Rumilly", slug: "rumilly", durete: "30-40 TH", zone: "Albanais", niveau: "très dure" },
  { nom: "Sallanches", slug: "sallanches", durete: "22-32 TH", zone: "Mont-Blanc", niveau: "dure" },
  { nom: "Évian-les-Bains", slug: "evian-les-bains", durete: "22-30 TH", zone: "Chablais", niveau: "dure" },
  { nom: "La Roche-sur-Foron", slug: "la-roche-sur-foron", durete: "26-34 TH", zone: "Faucigny", niveau: "très dure" },
];

export default function QualiteEauHauteSavoiePage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-900 to-primary-900 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-200 mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Qualité de l'eau en Haute-Savoie</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dureté et qualité de l'eau en Haute-Savoie
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Carte des valeurs TH par ville, causes géologiques de la dureté et solutions adaptées pour protéger vos équipements dans le département 74.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-800/50 rounded-lg px-4 py-2 text-sm">
              <span className="text-blue-200">Dureté moyenne</span>
              <span className="block font-bold text-white text-lg">18 à 40 TH</span>
            </div>
            <div className="bg-blue-800/50 rounded-lg px-4 py-2 text-sm">
              <span className="text-blue-200">Communes concernées</span>
              <span className="block font-bold text-white text-lg">Tout le département</span>
            </div>
            <div className="bg-blue-800/50 rounded-lg px-4 py-2 text-sm">
              <span className="text-blue-200">Seuil critique</span>
              <span className="block font-bold text-white text-lg">à partir de 15 TH</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Tableau des villes */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dureté de l'eau par ville en Haute-Savoie
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ces valeurs sont indicatives et peuvent varier selon les quartiers et les sources d'alimentation. Contactez-nous pour un test gratuit chez vous.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Ville</th>
                  <th className="px-4 py-3 font-semibold">Zone</th>
                  <th className="px-4 py-3 font-semibold">Dureté (TH)</th>
                  <th className="px-4 py-3 font-semibold">Niveau</th>
                  <th className="px-4 py-3 font-semibold">Détails</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {villesData.map((ville, i) => (
                  <tr key={ville.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{ville.nom}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{ville.zone}</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-primary-700">{ville.durete}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          ville.niveau === "très dure"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {ville.niveau}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/villes/${ville.slug}`}
                        className="text-primary-600 hover:underline text-sm font-medium"
                      >
                        Voir →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 italic">
            Sources : ARS Auvergne-Rhône-Alpes, syndicats des eaux locaux. Valeurs mesurées en TH (Titre Hydrotimétrique).
          </p>
        </div>
      </Section>

      {/* Pourquoi l'eau est-elle calcaire */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi l'eau est-elle si calcaire en Haute-Savoie ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Géologie calcaire alpine</h3>
              <p className="text-gray-700">
                Les Alpes sont majoritairement constituées de roches calcaires (calcaires, dolomies, molasses). En traversant ces formations, l'eau dissout le calcium et le magnésium, augmentant sa dureté. C'est pourquoi même les sources de montagne peuvent être très calcaires.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aquifères karstiques</h3>
              <p className="text-gray-700">
                Le Genevois français, l'Albanais et le Chablais sont alimentés par des aquifères karstiques (nappes souterraines dans les roches calcaires). Ces eaux souterraines sont naturellement très minéralisées avant d'arriver dans le réseau public.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Paradoxe du lac d'Annecy</h3>
              <p className="text-gray-700">
                Le lac d'Annecy est l'un des lacs les plus propres d'Europe, mais son eau reste dure (20-25 TH) car le bassin versant est entouré de massifs calcaires (Aravis, Bauges). Les captages intercommunaux ajoutent souvent des sources encore plus minéralisées.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Idée reçue sur Chamonix</h3>
              <p className="text-gray-700">
                Contrairement à l'idée reçue, l'eau glaciaire de Chamonix est calcaire (18-28 TH). Le réseau de distribution traverse des formations calcaires avant d'arriver aux robinets. Les résidences secondaires sont particulièrement exposées aux dépôts de tartre concentrés pendant les périodes d'inoccupation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conséquences */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Les conséquences d'une eau dure sur vos équipements
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "🔥",
                title: "Chauffe-eau et ballons thermodynamiques",
                desc: "Un dépôt de 1 mm de tartre sur une résistance augmente la consommation électrique de 10 à 15 %. À 25-35 TH, un chauffe-eau sans adoucisseur s'encrasse en 2 à 3 ans.",
              },
              {
                icon: "🫧",
                title: "Lave-linge et lave-vaisselle",
                desc: "La pompe et la résistance sont les premières victimes du calcaire. Durée de vie divisée par deux sans traitement. Les pannes de machine représentent une des premières causes de demande d'adoucisseur.",
              },
              {
                icon: "🚿",
                title: "Robinetterie et joints",
                desc: "Dépôts blancs sur les mitigeurs, les pommeaux de douche et les parois de verre. Remplacement prématuré et esthétique dégradée. En location, cela génère des frais de remise en état importants.",
              },
              {
                icon: "💧",
                title: "Canalisations et plomberie",
                desc: "Dans les maisons anciennes avec des canalisations en cuivre ou en acier galvanisé, le tartre peut réduire progressivement le diamètre des tuyaux, diminuant la pression et créant des foyers de corrosion.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Les solutions contre le calcaire en Haute-Savoie
          </h2>
          <p className="text-gray-700 mb-8">
            Face à la dureté élevée de l'eau dans le département, plusieurs solutions existent selon votre budget et vos besoins :
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/adoucisseur"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 hover:shadow-md transition group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                Adoucisseur à résine
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Solution la plus efficace. Élimine 95% du calcaire sur l'ensemble du circuit d'eau. Idéal pour les foyers avec eau à plus de 20 TH.
              </p>
              <span className="text-primary-600 text-sm font-medium">Voir l'installation →</span>
            </Link>
            <Link
              href="/osmoseur-haute-savoie"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 hover:shadow-md transition group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                Osmoseur sous évier
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Filtration ultra-poussée pour l'eau de boisson. Élimine le calcaire, les nitrates et les micropolluants. Complément idéal à l'adoucisseur.
              </p>
              <span className="text-primary-600 text-sm font-medium">En savoir plus →</span>
            </Link>
            <Link
              href="/prix-adoucisseur"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 hover:shadow-md transition group"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                Devis personnalisé
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Chaque situation est unique. Obtenez une estimation gratuite adaptée à votre logement, votre consommation et la dureté de votre eau.
              </p>
              <span className="text-primary-600 text-sm font-medium">Demander un devis →</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur la qualité de l'eau en Haute-Savoie
          </h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-600 text-white py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Votre eau est calcaire — on s'en occupe
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Devis gratuit sous 24h pour votre adoucisseur en Haute-Savoie. Nos techniciens interviennent sur tout le département.
          </p>
          <div className="bg-white rounded-lg p-6 md:p-8">
            <LeadForm />
          </div>
        </div>
      </Section>

      {/* Related services */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <RelatedServices currentService="qualite-eau-haute-savoie" />
        </div>
      </Section>
    </>
  );
}
