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
          Entre les rives du lac d'Annecy, le Genevois français et la vallée de l'Arve, l'eau de la {departementConfig.departementName} est naturellement calcaire. Un adoucisseur d'eau permet de réduire la dureté, protège vos équipements et améliore votre confort. Découvrez comment choisir le modèle adapté à votre logement.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi installer un adoucisseur d'eau en {departementConfig.departementName} ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                La dureté de l'eau varie selon les communes de la {departementConfig.departementName}, mais elle dépasse souvent 25°fH dans les zones du Chablais, de l'Albanais ou du Faucigny. Cette eau classée "dure" encrasse les installations domestiques.
              </p>
              <p>
                Cette eau calcaire peut causer plusieurs problèmes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dépôts de calcaire dans les canalisations et les appareils</li>
                <li>Usure prématurée des appareils électroménagers (lave-linge, lave-vaisselle, chauffe-eau)</li>
                <li>Eau désagréable pour la peau et les cheveux</li>
                <li>Consommation accrue de produits lessiviels et d'entretien</li>
                <li>Coûts de réparation et de remplacement d'équipements</li>
              </ul>
              <p>
                Installer un adoucisseur d'eau en {departementConfig.departementName} permet de stabiliser la dureté autour de 8 à 12°fH et de préserver vos équipements, même avec une eau issue des réseaux de montagne. Pour maintenir votre installation en parfait état, découvrez notre{" "}
                <Link href="/entretien-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  service d'entretien d'adoucisseur en {departementConfig.departementName}
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
              Comment fonctionne un adoucisseur d'eau ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Un adoucisseur d'eau fonctionne selon le principe de l'échange d'ions. L'eau
                traverse une résine échangeuse d'ions chargée en sodium. Les ions calcium et
                magnésium (responsables de la dureté) sont échangés contre des ions sodium,
                adoucissant ainsi l'eau.
              </p>
              <p>
                Le processus se déroule en plusieurs étapes :
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Adoucissement :</strong> L'eau dure traverse la résine, qui retient les
                  ions calcium et magnésium.
                </li>
                <li>
                  <strong>Régénération :</strong> Lorsque la résine est saturée, l'adoucisseur se
                  régénère automatiquement en utilisant une solution de saumure (eau salée).
                </li>
                <li>
                  <strong>Rinçage :</strong> L'eau de rinçage est évacuée, et l'adoucisseur est
                  prêt pour un nouveau cycle.
                </li>
              </ol>
              <p>
                La régénération se fait généralement la nuit, lorsque la consommation d'eau est
                faible, et dure environ 1 à 2 heures.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quel type d'adoucisseur choisir ?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Il existe plusieurs types d'adoucisseurs d'eau, chacun adapté à des besoins
                spécifiques :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Adoucisseur à résine échangeuse d'ions
                </h3>
                <p>
                  C'est le type le plus courant. Il nécessite du sel pour la régénération et
                  convient à la plupart des foyers. Il existe des modèles manuels, semi-automatiques
                  et automatiques (recommandés).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Adoucisseur au CO2
                </h3>
                <p>
                  Alternative écologique qui n'utilise pas de sel. Le CO2 transforme le calcaire
                  en bicarbonate, qui reste soluble dans l'eau. Plus respectueux de
                  l'environnement, mais généralement plus coûteux à l'achat.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Adoucisseur magnétique ou électronique
                </h3>
                <p>
                  Ces systèmes modifient la structure du calcaire sans le supprimer. Moins efficace
                  que les adoucisseurs à résine, ils conviennent pour des besoins moins importants.
                </p>
              </div>

              <p>
                Pour choisir le bon adoucisseur, il est essentiel de prendre en compte :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Le nombre de personnes dans le foyer</li>
                <li>La consommation d'eau quotidienne</li>
                <li>La dureté de l'eau dans votre commune</li>
                <li>L'espace disponible pour l'installation</li>
                <li>Votre budget</li>
              </ul>
              <p>
                Pour connaître les tarifs détaillés, consultez notre page sur les{" "}
                <Link href="/prix-adoucisseur" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  prix d'un adoucisseur d'eau en {departementConfig.departementName}
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













