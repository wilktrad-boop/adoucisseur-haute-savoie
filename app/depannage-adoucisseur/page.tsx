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
  title: `Dépannage adoucisseur Haute-Savoie (74) — Intervention rapide Annecy, Annemasse`,
  description:
    `Dépannage adoucisseur d'eau en Haute-Savoie : panne, fuite, eau salée, calcaire qui revient. Intervention sous 24h à Annecy, Annemasse, Thonon, Chamonix et dans tout le 74.`,
  alternates: {
    canonical: "/depannage-adoucisseur",
  },
  openGraph: {
    title: `Dépannage adoucisseur Haute-Savoie (74) — Intervention rapide`,
    description:
      `Votre adoucisseur est en panne en Haute-Savoie ? Intervention sous 24h à Annecy, Annemasse, Thonon, Chamonix. Diagnostic et réparation sur site.`,
    url: `${siteConfig.domain}/depannage-adoucisseur`,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
        width: 1200,
        height: 630,
        alt: `Dépannage d'adoucisseur d'eau en ${departementConfig.departementName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Dépannage adoucisseur Haute-Savoie (74) — Intervention rapide`,
    description: `Votre adoucisseur est en panne en Haute-Savoie ? Intervention sous 24h, diagnostic et réparation sur site.`,
  },
};

const faqItems = [
  {
    question: "Mon adoucisseur ne consomme plus de sel — est-ce une panne ?",
    answer:
      "Pas nécessairement, mais c'est un signal d'alarme. Si le bac à sel est plein mais que le niveau ne baisse pas, l'adoucisseur ne se régénère plus. Causes possibles : vanne multivoies bloquée, timer défaillant, prise électrique coupée, ou bouchon de sel (pont de sel). Vérifiez d'abord le branchement électrique, puis appelez un technicien si le problème persiste.",
  },
  {
    question: "Mon eau a un goût salé après adoucisseur — que faire ?",
    answer:
      "Un goût salé indique que l'eau de rinçage post-régénération n'est pas correctement évacuée. Le cycle de rinçage est bloqué ou insuffisant. C'est une panne qui nécessite une intervention rapide car l'eau salée peut endommager vos équipements et est désagréable à consommer. Coupez l'adoucisseur en position bypass et appelez-nous.",
  },
  {
    question: "Le calcaire est revenu malgré l'adoucisseur en marche — pourquoi ?",
    answer:
      "Si le calcaire réapparaît, plusieurs causes sont possibles : résine épuisée ou colmatée (remplacement nécessaire), régénération insuffisante (ajuster la quantité de sel ou la fréquence), vanne bypass ouverte par inadvertance, ou réglage de dureté trop élevé. Un technicien mesure la dureté en sortie d'adoucisseur pour diagnostiquer rapidement.",
  },
  {
    question: "Y a-t-il une fuite sous mon adoucisseur — est-ce grave ?",
    answer:
      "Une fuite, même minime, doit être traitée rapidement. Les adoucisseurs travaillent sous pression et une fuite peut s'aggraver rapidement. Coupez l'arrivée d'eau de l'adoucisseur (bypass) et contactez-nous. La plupart des fuites proviennent d'un joint usé, d'un raccord desserré ou d'une vanne endommagée — des réparations généralement rapides et peu coûteuses.",
  },
  {
    question: "Mon adoucisseur fait du bruit — est-ce normal ?",
    answer:
      "Un léger bruit pendant la régénération (généralement la nuit) est normal. En revanche, des bruits forts, des claquements ou des bruits continus sont anormaux. Causes fréquentes : vanne multivoies grippée, résine se déplaçant dans le tank, moteur de la vanne défaillant. Ne laissez pas un adoucisseur bruyant sans diagnostic.",
  },
  {
    question: "Combien coûte un dépannage d'adoucisseur en Haute-Savoie ?",
    answer:
      "Le coût d'un dépannage dépend de la panne. Un déplacement + diagnostic coûte généralement 80 à 120 €. Une réparation simple (joint, nettoyage de vanne) : 80 à 200 €. Un remplacement de résine : 200 à 400 €. Un remplacement de vanne multivoies : 150 à 350 €. Nous établissons un devis transparent avant toute intervention.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dépannage d'adoucisseur d'eau",
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
    `Service de dépannage et réparation d'adoucisseurs d'eau dans le département de la ${departementConfig.departementName}. Intervention rapide sous 24h.`,
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

export default function DepannagePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Section className="bg-gradient-to-br from-red-50 to-white py-12">
        <nav className="text-sm text-gray-500 mb-4" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <span>Dépannage adoucisseur Haute-Savoie</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dépannage adoucisseur d'eau en Haute-Savoie (74)
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Votre adoucisseur est en panne, fuit ou ne traite plus correctement l'eau ? Nos techniciens interviennent sous 24h dans tout le département — Annecy, Annemasse, Thonon-les-Bains, Chamonix, Cluses et toutes les communes de Haute-Savoie.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-red-700 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Appeler maintenant
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-gray-700 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition">
            Demander une intervention
          </Link>
        </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dépannage adoucisseur en Haute-Savoie : zones d'intervention
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Notre réseau intervient pour le dépannage d'adoucisseurs d'eau dans l'ensemble de
                la Haute-Savoie. Chaque zone présente des caractéristiques d'eau différentes qui
                peuvent accélérer l'usure de votre appareil :
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {[
                  { href: "/villes/annecy", label: "Annecy (74000)", detail: "eau dure 20-30 TH" },
                  { href: "/villes/thonon-les-bains", label: "Thonon-les-Bains (74200)", detail: "eau dure 25-35 TH" },
                  { href: "/villes/annemasse", label: "Annemasse (74100)", detail: "eau très dure 28-36 TH" },
                  { href: "/villes/cluses", label: "Cluses (74300)", detail: "eau très dure 30-40 TH" },
                  { href: "/villes/sallanches", label: "Sallanches (74700)", detail: "eau dure 22-32 TH" },
                  { href: "/villes/bonneville", label: "Bonneville (74130)", detail: "eau très dure 28-38 TH" },
                  { href: "/villes/rumilly", label: "Rumilly (74150)", detail: "eau très dure 30-40 TH" },
                  { href: "/villes/chamonix", label: "Chamonix (74400)", detail: "eau modérée 18-28 TH" },
                  { href: "/villes/la-roche-sur-foron", label: "La Roche-sur-Foron (74800)", detail: "eau dure 26-34 TH" },
                ].map((ville) => (
                  <li key={ville.href} className="bg-gray-50 rounded-lg p-3">
                    <Link href={ville.href} className="text-primary-600 hover:text-primary-700 font-medium underline block">
                      {ville.label}
                    </Link>
                    <span className="text-sm text-gray-500">{ville.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Votre ville ne figure pas dans cette liste ? Contactez-nous : nos techniciens
                couvrent l'intégralité du département de la Haute-Savoie.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur le dépannage adoucisseur en Haute-Savoie
            </h2>
            <FAQ items={faqItems} />
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













