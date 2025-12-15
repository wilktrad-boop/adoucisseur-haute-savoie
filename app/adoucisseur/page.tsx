import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Adoucisseur d'eau en ${departementConfig.departementName} - Installation et conseils`,
  description:
    `Tout savoir sur l'adoucisseur d'eau en ${departementConfig.departementName} : fonctionnement, types d'adoucisseurs, avantages. Devis gratuit pour ${departementConfig.mainCities.slice(0, 4).join(", ")} et tout le département.`,
  alternates: {
    canonical: "/adoucisseur",
  },
  openGraph: {
    title: `Adoucisseur d'eau en ${departementConfig.departementName} - Installation et conseils`,
    description:
      `Tout savoir sur l'adoucisseur d'eau en ${departementConfig.departementName} : fonctionnement, types d'adoucisseurs, avantages.`,
    url: `${siteConfig.domain}/adoucisseur`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Installation d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
  },
  areaServed: {
    "@type": "State",
    name: departementConfig.departementName,
  },
  description:
    `Installation d'adoucisseurs d'eau dans le département de la ${departementConfig.departementName}. Devis gratuit et personnalisé.`,
};

export default function AdoucisseurPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Adoucisseur d'eau en {departementConfig.departementName}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Que vous résidiez près du Léman, dans les Aravis ou le bassin annécien, le calcaire présent dans les réseaux locaux menace vos installations. Comprendre le fonctionnement d'un système d'adoucissement vous aide à sélectionner l'équipement idéal pour votre habitation.
        </p>
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













