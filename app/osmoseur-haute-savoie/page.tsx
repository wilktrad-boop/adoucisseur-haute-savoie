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
  title: `Osmoseur et filtration de l'eau en ${departementConfig.departementName} — Installation et devis`,
  description: `Installez un osmoseur à domicile en ${departementConfig.departementName} : eau ultra-pure, sans calcaire ni micropolluants. Devis gratuit sous 24h à Annecy, Annemasse, Thonon et partout en ${departementConfig.departementName}.`,
  alternates: {
    canonical: "/osmoseur-haute-savoie",
  },
  openGraph: {
    title: `Osmoseur et filtration de l'eau en ${departementConfig.departementName}`,
    description: `Eau ultra-pure au robinet avec un osmoseur en ${departementConfig.departementName}. Idéal en complément d'un adoucisseur. Devis gratuit.`,
    url: `${siteConfig.domain}/osmoseur-haute-savoie`,
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Installation d'osmoseur en ${departementConfig.departementName}`,
  description: `Service d'installation d'osmoseurs inversés et systèmes de filtration de l'eau en ${departementConfig.departementName}.`,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.domain,
    telephone: siteConfig.contact.phone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: departementConfig.departementName,
    },
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: departementConfig.departementName,
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre un adoucisseur et un osmoseur ?",
    answer:
      "L'adoucisseur traite toute l'eau du logement en éliminant le calcaire par échange d'ions. Il protège vos canalisations et équipements. L'osmoseur filtre l'eau sous évier (eau de boisson) par filtration membranaire très fine : il élimine non seulement le calcaire mais aussi les nitrates, pesticides, microplastiques et métaux lourds. Les deux appareils sont complémentaires : l'un pour le confort domestique global, l'autre pour une eau de boisson parfaite.",
  },
  {
    question: "Un osmoseur est-il adapté à l'eau très calcaire de Haute-Savoie ?",
    answer:
      "Oui, et il est même particulièrement efficace sur les eaux chargées en calcium et magnésium comme celles du Genevois français ou de la vallée de l'Arve (28-40 TH). La membrane d'osmose inverse retient les ions dissous indépendamment de la dureté. Cependant, sur une eau très dure, la durée de vie de la membrane est réduite : il est donc recommandé d'installer un pré-filtre anticalcaire ou un adoucisseur en amont.",
  },
  {
    question: "L'eau osmosée est-elle bonne pour la santé ?",
    answer:
      "L'eau produite par osmose inverse est très pure (proche de l'eau distillée) : elle contient très peu de minéraux. Elle est saine à consommer et sa pureté est appréciée pour le goût. Pour les grands consommateurs d'eau du robinet comme seule source de minéraux, une reminéralisation légère peut être ajoutée via une cartouche spécifique. Dans la pratique, la majorité des personnes utilise l'osmoseur pour cuisiner et boire, et conserve une alimentation variée qui couvre les besoins en minéraux.",
  },
  {
    question: "Combien coûte l'installation d'un osmoseur en Haute-Savoie ?",
    answer:
      "Le prix d'un osmoseur sous évier installé en Haute-Savoie varie entre 400 € et 900 € fourni et posé selon le modèle et le nombre d'étages de filtration (3, 5 ou 7 étages). Les osmoseurs avec réservoir et robinet dédié sont plus pratiques. Les filtres consommables sont à changer tous les 6 à 12 mois (30 à 80 € selon le modèle). Nous établissons un devis gratuit et personnalisé sur site.",
  },
  {
    question: "Puis-je installer un osmoseur sans adoucisseur ?",
    answer:
      "Oui, c'est tout à fait possible. L'osmoseur fonctionne indépendamment de l'adoucisseur. Cependant, sans adoucisseur, le reste de vos équipements (lave-linge, chauffe-eau, robinetterie) reste exposé au calcaire. Si votre eau est très dure (25 TH et plus comme dans une grande partie de la Haute-Savoie), la combinaison adoucisseur + osmoseur est idéale : l'un protège vos installations, l'autre vous fournit une eau de boisson parfaite.",
  },
];

export default function OsmoseurHauteSavoiePage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      {/* Hero */}
      <Section className="bg-gradient-to-br from-green-900 to-primary-900 text-white py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-200 mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Osmoseur en Haute-Savoie</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Osmoseur et filtration de l'eau<br />
            <span className="text-green-300">en Haute-Savoie</span>
          </h1>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Eau ultra-pure au robinet grâce à l'osmose inverse. Idéal en complément d'un adoucisseur pour une eau de boisson débarrassée du calcaire, des nitrates et des micropolluants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition text-center"
            >
              Devis gratuit sous 24h
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition text-center"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </Section>

      {/* Présentation */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu'est-ce qu'un osmoseur inverse ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                L'osmose inverse est une technologie de filtration membranaire qui élimine jusqu'à 99% des substances dissoutes dans l'eau : calcaire, nitrates, pesticides, microplastiques, métaux lourds, fluorures et bactéries.
              </p>
              <p className="text-gray-700 mb-4">
                L'eau passe sous pression à travers une membrane semi-perméable aux pores ultrafins (0,0001 micron). Seules les molécules d'eau passent — les contaminants sont rejetés et évacués. Le résultat : une eau d'une pureté exceptionnelle, directement au robinet de votre cuisine.
              </p>
              <p className="text-gray-700">
                En Haute-Savoie, où l'eau est dure (18 à 40 TH selon les zones) et peut contenir des traces de nitrates ou de pesticides agricoles dans certains secteurs, l'osmoseur est une solution appréciée pour l'eau de boisson.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-bold text-gray-900 mb-4">Ce que filtre l'osmoseur :</h3>
              <ul className="space-y-2">
                {[
                  "Calcaire (calcium, magnésium)",
                  "Nitrates et nitrites",
                  "Pesticides et herbicides",
                  "Microplastiques",
                  "Métaux lourds (plomb, arsenic)",
                  "Chlore et sous-produits",
                  "Bactéries et virus",
                  "Fluorures",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Adoucisseur vs Osmoseur */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Osmoseur vs adoucisseur : quelle différence ?
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Critère</th>
                  <th className="px-4 py-3 font-semibold">Adoucisseur</th>
                  <th className="px-4 py-3 font-semibold">Osmoseur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Eau traitée", "Tout le logement", "Point de distribution (sous évier)"],
                  ["Cible principale", "Calcaire (calcium, magnésium)", "Tous les contaminants dissous"],
                  ["Protection équipements", "Oui (chauffe-eau, lave-linge…)", "Non"],
                  ["Eau de boisson", "Partiellement (eau douce)", "Oui (ultra-pure)"],
                  ["Consommable", "Sel (régénération résines)", "Filtres à changer tous les 6-12 mois"],
                  ["Prix installation", "1 000 € – 2 500 €", "400 € – 900 €"],
                  ["Idéal pour", "Eau dure, protection globale", "Eau de boisson parfaite"],
                ].map(([critere, adoucisseur, osmoseur], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{critere}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{adoucisseur}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{osmoseur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-primary-50 border border-primary-200 rounded-lg p-4">
            <p className="text-primary-800 font-medium">
              💡 Notre recommandation pour la Haute-Savoie : la combinaison adoucisseur + osmoseur est idéale. L'adoucisseur protège toutes vos canalisations et équipements. L'osmoseur vous fournit une eau de boisson parfaite, exempte de calcaire résiduel et de micropolluants.
            </p>
          </div>
        </div>
      </Section>

      {/* Nos prestations */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos prestations osmoseur en Haute-Savoie
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔧",
                title: "Installation sous évier",
                desc: "Pose complète de votre osmoseur avec raccordement à l'arrivée d'eau froide, connexion au siphon, perçage de l'évier et installation du robinet dédié. Paramétrage et test de qualité inclus.",
              },
              {
                icon: "🔄",
                title: "Remplacement des cartouches",
                desc: "Changement des filtres sédiments, charbon actif et membrane d'osmose selon les préconisations fabricant. Nous assurons le suivi de vos consommables.",
              },
              {
                icon: "🏔️",
                title: "Solutions pour résidences secondaires",
                desc: "Systèmes adaptés aux logements inoccupés plusieurs mois. Purge et remise en service à chaque saison. Idéal pour les chalets de montagne en Haute-Savoie.",
              },
              {
                icon: "📊",
                title: "Analyse et conseil",
                desc: "Test de qualité de l'eau chez vous avant installation. Recommandation du système adapté à votre eau (TH, nitrates, chlore) et à votre consommation.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Zones d'intervention */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Zones d'intervention pour l'osmoseur en Haute-Savoie
          </h2>
          <p className="text-gray-700 mb-6">
            Nos techniciens interviennent dans toute la Haute-Savoie (74) pour l'installation et la maintenance d'osmoseurs :
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { nom: "Annecy", slug: "annecy" },
              { nom: "Annemasse", slug: "annemasse" },
              { nom: "Thonon-les-Bains", slug: "thonon-les-bains" },
              { nom: "Cluses", slug: "cluses" },
              { nom: "Chamonix", slug: "chamonix" },
              { nom: "Bonneville", slug: "bonneville" },
              { nom: "Rumilly", slug: "rumilly" },
              { nom: "Sallanches", slug: "sallanches" },
              { nom: "Évian-les-Bains", slug: "evian-les-bains" },
              { nom: "La Roche-sur-Foron", slug: "la-roche-sur-foron" },
              { nom: "Saint-Julien-en-Genevois", slug: "saint-julien-en-genevois" },
            ].map((ville) => (
              <Link
                key={ville.slug}
                href={`/villes/${ville.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-500 hover:text-primary-600 transition"
              >
                {ville.nom}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Votre commune n'est pas dans la liste ? <Link href="/contact" className="text-primary-600 hover:underline">Contactez-nous</Link> — nous couvrons tout le département.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur l'osmoseur en Haute-Savoie
          </h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-600 text-white py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Installez votre osmoseur en Haute-Savoie
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Devis gratuit et personnalisé sous 24h. Nos techniciens interviennent sur tout le département 74.
          </p>
          <div className="bg-white rounded-lg p-6 md:p-8">
            <LeadForm />
          </div>
        </div>
      </Section>

      {/* Related services */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <RelatedServices currentService="osmoseur-haute-savoie" />
        </div>
      </Section>
    </>
  );
}
