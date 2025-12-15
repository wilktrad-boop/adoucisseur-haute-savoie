import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Dépannage d'adoucisseur d'eau en ${departementConfig.departementName} - Réparation et intervention d'urgence`,
  description:
    `Service de dépannage et réparation d'adoucisseurs d'eau en ${departementConfig.departementName}. Intervention rapide pour tous types de pannes. Disponible à ${departementConfig.mainCities.slice(0, 4).join(", ")} et dans tout le département.`,
  alternates: {
    canonical: "/depannage-adoucisseur",
  },
  openGraph: {
    title: `Dépannage d'adoucisseur d'eau en ${departementConfig.departementName} - Réparation et intervention d'urgence`,
    description:
      `Service de dépannage et réparation d'adoucisseurs d'eau en ${departementConfig.departementName}. Intervention rapide.`,
    url: `${siteConfig.domain}/depannage-adoucisseur`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dépannage d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
  },
  areaServed: {
    "@type": "State",
    name: departementConfig.departementName,
  },
  description:
    `Service de dépannage et réparation d'adoucisseurs d'eau dans le département de la ${departementConfig.departementName}. Intervention rapide.`,
};

export default function DepannagePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dépannage d'adoucisseur d'eau en {departementConfig.departementName}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Un dysfonctionnement bloque votre système de traitement de l'eau ? Nos techniciens interviennent en urgence sur l'ensemble du territoire haut-savoyard pour identifier l'origine du problème et restaurer le fonctionnement optimal de votre équipement. Disponibilité 7j/7 pour les situations critiques.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pannes fréquemment rencontrées sur les adoucisseurs
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Diverses défaillances peuvent compromettre l'efficacité de votre installation. Panorama des incidents les plus récurrents :
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Blocage du cycle de régénération
                  </h3>
                  <p>
                    Origines fréquentes : paramétrage erroné, dysfonctionnement de la vanne multivoies, encrassement de la résine, coupure électrique. Nécessite un diagnostic technique approfondi.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Perte d'efficacité du traitement
                  </h3>
                  <p>
                    Le calcaire réapparaît malgré l'appareil en service. Pistes d'investigation : résine épuisée ou colmatée, défaut de régénération, réglages inadaptés, vanne endommagée.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Infiltrations hydrauliques
                  </h3>
                  <p>
                    Flaque d'eau persistante sous l'installation. Suspects habituels : joint d'étanchéité dégradé, serrage insuffisant, vanne perforée, cuve fissurée. Réparation prioritaire indispensable.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Surconsommation de pastilles régénérantes
                  </h3>
                  <p>
                    Vidange anormalement rapide du bac à saumure. Explications probables : cycles trop rapprochés, mauvais calibrage, infiltration d'eau dans le réservoir.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Nuisances acoustiques
                  </h3>
                  <p>
                    Sons inhabituels lors du fonctionnement. Sources potentielles : vanne grippée, résine mobile, moteur défaillant, conduits entartrés.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Saveur salée de l'eau traitée
                  </h3>
                  <p>
                    Goût prononcé de chlorure de sodium. Hypothèses : défaut de rinçage post-régénération, vanne bloquée en position lavage, média saturé. Intervention urgente requise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              L'intervention d'un technicien qualifié
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Face à une défaillance, solliciter un expert permet de bénéficier de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Analyse technique approfondie :</strong> Détection méthodique de l'origine exacte du dysfonctionnement via tests et mesures
                </li>
                <li>
                  <strong>Recommandations sur mesure :</strong> Remise en état, changement de composants ou renouvellement complet selon le cas
                </li>
                <li>
                  <strong>Réactivité adaptée :</strong> Délai de 24-48h en situation normale, mobilisation express pour les urgences avérées
                </li>
                <li>
                  <strong>Garantie des prestations :</strong> Engagement sur les réparations effectuées, utilisation de pièces certifiées constructeur
                </li>
              </ul>
              <p>
                Évitez toute manipulation hasardeuse, particulièrement sur les circuits électriques ou en présence de fuites importantes. Seul un professionnel possède l'expertise et l'outillage pour opérer sans risque. La prévention reste le meilleur remède – programmez un{" "}
                <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  suivi préventif annuel de votre installation
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service express pour situations critiques en {departementConfig.departementName}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Lors de défaillances majeures (écoulement abondant, contamination saline, arrêt complet du système), notre réseau de dépanneurs assure une couverture départementale complète :
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Mobilisation sous 24 heures pour toute urgence constatée</li>
                  <li>Maillage territorial incluant {departementConfig.mainCities.slice(0, 5).join(", ")} et l'ensemble des communes de {departementConfig.departementName}</li>
                  <li>Analyse sur site et résolution immédiate lorsque la situation le permet</li>
                  <li>Chiffrage détaillé communiqué avant démarrage des travaux</li>
                </ul>
              </div>
              <p>
                Nous gérons régulièrement le{" "}
                <Link href="/villes/thonon-les-bains" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  dépannage d'adoucisseur à Thonon-les-Bains
                </Link>
                , les urgences à{" "}
                <Link href="/villes/bonneville" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  Bonneville
                </Link>{" "}
                ainsi que les interventions express à{" "}
                <Link href="/villes/sallanches" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  Sallanches
                </Link>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Réparation ou renouvellement : critères de décision
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Certaines situations rendent le remplacement plus judicieux économiquement que la remise en état. Éléments d'arbitrage :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ancienneté supérieure à 15 années de fonctionnement</li>
                <li>Facture de réparation excédant la moitié de la valeur d'un équipement neuf</li>
                <li>Défaillances répétées et récurrentes</li>
                <li>Technologie dépassée rendant l'approvisionnement en pièces problématique</li>
                <li>Rendement énergétique médiocre par rapport aux standards actuels</li>
              </ul>
              <p>
                Nos techniciens vous orientent objectivement vers la solution la plus pertinente pour votre contexte. En cas de renouvellement préconisé, explorez nos{" "}
                <Link href="/adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  offres d'installation clé en main en {departementConfig.departementName}
                </Link> et parcourez notre{" "}
                <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  grille tarifaire fourniture et pose
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <RelatedServices currentService="depannage-adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Besoin d'une intervention de dépannage ?
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Contactez-nous pour une intervention rapide de dépannage de votre adoucisseur d'eau
            en {departementConfig.departementName}. Nous intervenons dans tout le département.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}













