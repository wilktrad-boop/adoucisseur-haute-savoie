import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import RelatedServices from "@/components/RelatedServices";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Entretien d'adoucisseur d'eau en ${departementConfig.departementName} - Maintenance et révision`,
  description:
    `Entretien régulier de votre adoucisseur d'eau en ${departementConfig.departementName}. Fréquence, signes d'alerte, coûts. Service professionnel disponible à ${departementConfig.mainCities.slice(0, 4).join(", ")} et dans tout le département.`,
  alternates: {
    canonical: "/entretien-adoucisseur",
  },
  openGraph: {
    title: `Entretien d'adoucisseur d'eau en ${departementConfig.departementName} - Maintenance et révision`,
    description:
      `Entretien régulier de votre adoucisseur d'eau en ${departementConfig.departementName}. Service professionnel disponible.`,
    url: `${siteConfig.domain}/entretien-adoucisseur`,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
        width: 1200,
        height: 630,
        alt: `Entretien d'adoucisseur d'eau en ${departementConfig.departementName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Entretien d'adoucisseur d'eau en ${departementConfig.departementName} - Maintenance`,
    description: `Entretien régulier de votre adoucisseur d'eau en ${departementConfig.departementName}.`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Entretien d'adoucisseur d'eau",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
  },
  areaServed: {
    "@type": "State",
    name: departementConfig.departementName,
  },
  description:
    `Service d'entretien et de maintenance d'adoucisseurs d'eau dans le département de la ${departementConfig.departementName}.`,
};

export default function EntretienPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      
      <Section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Entretien d'adoucisseur d'eau en {departementConfig.departementName}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          La longévité et l'efficacité de votre installation dépendent directement de la qualité du suivi technique. Apprenez quand planifier les interventions, quels signaux surveiller, et comment nos professionnels assurent la pérennité de votre équipement dans toute la{" "}
          {departementConfig.departementName}.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rythme optimal des visites de maintenance
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                La périodicité des interventions varie selon le niveau de minéralisation locale, le volume traité et les caractéristiques du matériel. Voici les recommandations standards :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contrôle annuel obligatoire</strong> incluant inspection complète et désinfection de la résine
                </li>
                <li>
                  <strong>Révision semestrielle</strong> conseillée pour les eaux dépassant 25°fH ou les usages intensifs
                </li>
                <li>
                  <strong>Intervention immédiate</strong> dès constatation d'anomalies ou chute de rendement
                </li>
              </ul>
              <p>
                Parallèlement aux passages techniques, surveillez personnellement la jauge de sel et réapprovisionnez le réservoir dès que nécessaire. La cadence de rechargement dépend de vos usages et du TH mesuré à votre robinet.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Symptômes révélateurs d'un besoin de révision
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Certains indices témoignent d'un dysfonctionnement ou d'une maintenance trop espacée :
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Retour du calcaire :</strong> Réapparition de traces blanches, sensation de peau sèche après la douche
                  </li>
                  <li>
                    <strong>Épuisement accéléré du sel :</strong> Le niveau baisse anormalement vite entre deux rechargements
                  </li>
                  <li>
                    <strong>Nuisances sonores :</strong> Claquements, sifflements ou vibrations pendant les cycles de lavage
                  </li>
                  <li>
                    <strong>Qualité organoleptique altérée :</strong> Eau trouble, coloration ou saveur désagréable
                  </li>
                  <li>
                    <strong>Absence de régénération :</strong> Le cycle de nettoyage automatique ne se déclenche plus
                  </li>
                  <li>
                    <strong>Suintements ou écoulements :</strong> Humidité persistante autour du socle ou des raccords
                  </li>
                </ul>
              </div>
              <p>
                Face à l'un de ces symptômes, contactez rapidement un spécialiste pour établir un diagnostic précis. Pour les pannes avérées nécessitant une réparation, consultez nos{" "}
                <Link href="/depannage-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  prestations de dépannage rapide en {departementConfig.departementName}
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Déroulement d'une révision technique en {departementConfig.departementName}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Chaque intervention de maintenance suit un protocole rigoureux en plusieurs phases :
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    1. Inspection du réservoir de saumure
                  </h3>
                  <p>
                    Contrôle du stock restant, évaluation de la pureté du produit utilisé, détartrage du récipient si encrassement détecté.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    2. Examen de la colonne de résine
                  </h3>
                  <p>
                    Test de performance du média échangeur, désinfection au besoin. Remplacement obligatoire après 5 à 10 années de service selon l'intensité d'utilisation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    3. Ajustement des paramètres
                  </h3>
                  <p>
                    Vérification et optimisation de la programmation horaire ou volumétrique pour garantir une régénération adaptée à vos besoins réels.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    4. Mesure du titre hydrotimétrique
                  </h3>
                  <p>
                    Analyse comparative eau brute/eau traitée confirmant l'efficacité du système et la conformité aux objectifs de douceur.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    5. Contrôle d'étanchéité global
                  </h3>
                  <p>
                    Inspection minutieuse des joints, vannes et tuyauteries pour prévenir tout risque de fuite ou infiltration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Formules d'abonnement pour une tranquillité totale
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Souscrire à un forfait annuel sécurise le bon entretien de votre installation sans démarches répétées. Les prestations habituellement incluses :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Visites planifiées automatiquement (une à deux par an selon formule)</li>
                <li>Révision complète avec désinfection</li>
                <li>Fourniture du sel régénérant en option</li>
                <li>Dépannage prioritaire en cas d'urgence</li>
                <li>Accompagnement personnalisé et historique technique</li>
              </ul>
              <p>
                Ces formules préventives maximisent la longévité de votre matériel et minimisent les risques de pannes onéreuses.
              </p>
              <p>
                Nous assurons notamment l'
                <Link href="/villes/annecy" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  entretien d'adoucisseur à Annecy
                </Link>
                , le suivi à{" "}
                <Link href="/villes/cluses" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  Cluses et dans la vallée de l'Arve
                </Link>{" "}
                ainsi que les visites préventives à{" "}
                <Link href="/villes/rumilly" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  Rumilly
                </Link>{" "}
                et dans tout le département.
              </p>
            </div>
          </section>

          <section>
            <RelatedServices currentService="entretien-adoucisseur" />
          </section>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Programmez l'entretien de votre adoucisseur
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Contactez-nous pour programmer l'entretien de votre adoucisseur d'eau en {departementConfig.departementName}. Nous
            vous proposons un service professionnel adapté à vos besoins.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}













