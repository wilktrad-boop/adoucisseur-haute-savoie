import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Prix d'un adoucisseur d'eau en ${departementConfig.departementName} - Devis gratuit`,
  description:
    `Tarifs et prix d'un adoucisseur d'eau en ${departementConfig.departementName}. Devis gratuit pour l'installation, l'entretien et le dépannage. Informations sur les coûts à ${departementConfig.mainCities.slice(0, 4).join(", ")} et tout le département.`,
  alternates: {
    canonical: "/prix-adoucisseur",
  },
  openGraph: {
    title: `Prix d'un adoucisseur d'eau en ${departementConfig.departementName} - Devis gratuit`,
    description:
      `Tarifs et prix d'un adoucisseur d'eau en ${departementConfig.departementName}. Devis gratuit et personnalisé.`,
    url: `${siteConfig.domain}/prix-adoucisseur`,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
        width: 1200,
        height: 630,
        alt: `Prix d'un adoucisseur d'eau en ${departementConfig.departementName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Prix d'un adoucisseur d'eau en ${departementConfig.departementName} - Devis gratuit`,
    description: `Tarifs et prix d'un adoucisseur d'eau en ${departementConfig.departementName}.`,
  },
};

export default function PrixPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Prix d'un adoucisseur d'eau en {departementConfig.departementName}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          L'investissement nécessaire pour équiper votre habitation dépend de multiples critères : superficie à traiter, composition du foyer, taux de minéralisation et gamme de l'appareil retenu. Explorez les fourchettes tarifaires habituelles et recevez une estimation chiffrée adaptée à votre situation en {departementConfig.departementName}.
        </p>
        <p className="text-base text-gray-600 max-w-3xl">
          Nous réalisons par exemple des{" "}
          <Link href="/villes/la-roche-sur-foron" className="text-primary-600 hover:text-primary-700 font-medium underline">
            devis adoucisseur à La Roche-sur-Foron
          </Link>
          , des estimations à{" "}
          <Link href="/villes/annecy" className="text-primary-600 hover:text-primary-700 font-medium underline">
            Annecy
          </Link>{" "}
          ou encore à{" "}
          <Link href="/villes/rumilly" className="text-primary-600 hover:text-primary-700 font-medium underline">
            Rumilly
          </Link>{" "}
          pour vous donner une vision claire du budget.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coût d'acquisition d'un système d'adoucissement
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                L'enveloppe budgétaire pour l'achat du matériel s'échelonne habituellement de <strong>1000€ à 2700€</strong>, en fonction de différents paramètres :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Variables impactant le tarif
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Volume de traitement :</strong> Comptez 1000-1400€ pour un foyer de 2-3 occupants, 1400-2200€ pour 4-6 personnes
                  </li>
                  <li>
                    <strong>Technologie employée :</strong> Les systèmes à permutation ionique restent plus accessibles que les dispositifs à injection CO2
                  </li>
                  <li>
                    <strong>Degré d'automatisation :</strong> Les versions entièrement programmables coûtent davantage que les variantes à pilotage manuel
                  </li>
                  <li>
                    <strong>Positionnement commercial :</strong> Les références premium de fabricants reconnus affichent un surcoût justifié par une fiabilité accrue
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="font-semibold mb-2">💡 Conseil</p>
                <p>
                  Privilégiez la performance et la pérennité plutôt que le seul critère tarifaire. Un équipement correctement calibré et robuste génère des économies substantielles par sa longévité et son rendement optimal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Budget de mise en œuvre
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                La main-d'œuvre pour l'installation représente typiquement{" "}
                <strong>400 à 700€</strong>, modulée selon la configuration du chantier :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Branchement sur l'alimentation générale</li>
                <li>Positionnement du réservoir de saumure</li>
                <li>Paramétrages initiaux et mise au point</li>
                <li>Démarrage supervisé avec contrôle qualité</li>
                <li>Adaptations hydrauliques si nécessaire</li>
              </ul>
              <p>
                De nombreux prestataires commercialisent des offres globales intégrant équipement et pose, souvent plus avantageuses financièrement. Détails complets sur notre rubrique{" "}
                <Link href="/adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  installation d'adoucisseur en {departementConfig.departementName}
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dépenses d'exploitation annuelles
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Au-delà de l'investissement initial, anticipez les frais de fonctionnement réguliers :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Consommables régénérants</h3>
                  <p className="text-sm">
                    Provision annuelle de 250 à 300€ variant avec l'usage et le TH initial
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Maintenance préventive</h3>
                  <p className="text-sm">
                    De 300 à 400€/an pour une{" "}
                    <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                      révision technique complète
                    </Link>
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Surconsommation hydraulique</h3>
                  <p className="text-sm">
                    Majoration modérée liée aux cycles de lavage (approximativement +5% sur la facture)
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Renouvellement du média</h3>
                  <p className="text-sm">
                    Changement quinquennal ou décennal, budget 400-600€ selon référence
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dispositifs d'aide et solutions de paiement
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Plusieurs leviers peuvent alléger le poids financier de votre projet :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Avantages fiscaux :</strong> Examinez votre éligibilité aux déductions ou crédits d'impôt selon votre profil
                </li>
                <li>
                  <strong>Subventions territoriales :</strong> Collectivités locales et intercommunalités financent parfois l'amélioration qualitative de l'eau domestique
                </li>
                <li>
                  <strong>Facilités de règlement :</strong> Échelonnement du paiement proposé par de nombreux professionnels du secteur
                </li>
              </ul>
              <p>
                Interrogez votre artisan ou les services municipaux pour identifier les dispositifs applicables à votre localité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              L'intérêt d'une estimation sur mesure
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les montants communiqués constituent des ordres de grandeur. Le chiffrage précis découle de vos spécificités :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Minéralisation constatée sur votre secteur géographique</li>
                <li>Composition de votre maisonnée</li>
                <li>Volumes journaliers soutirés</li>
                <li>Configuration spatiale et accessibilité technique</li>
                <li>État et agencement de la plomberie existante</li>
                <li>Gamme et fabricant sélectionnés</li>
              </ul>
              <p>
                Une proposition commerciale individualisée garantit un tarif exact, calibré sur vos contraintes réelles. Démarche totalement gratuite et non contraignante.
              </p>
            </div>
          </section>

          <section>
            <RelatedServices currentService="prix-adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Obtenez un devis gratuit personnalisé
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Remplissez le formulaire ci-dessous pour recevoir un devis gratuit et personnalisé
            pour votre adoucisseur d'eau en {departementConfig.departementName}. Nous vous contacterons rapidement avec une
            estimation précise.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}













