import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig, getVilleBySlug, villes } from "@/config/site";
import { departementConfig } from "@/config/departement";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return villes.map((ville) => ({
    slug: ville.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);

  if (!ville) {
    return {};
  }

  const title = `Installation et entretien d'adoucisseurs d'eau à ${ville.nom}`;
  const description =
    ville.metaDescription ||
    `Installation et entretien d'adoucisseurs d'eau à ${ville.nom} (${ville.codePostal}). Devis gratuit pour votre adoucisseur d'eau en ${departementConfig.departementName}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/villes/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.domain}/villes/${slug}`,
      type: "website",
      images: ville.image
        ? [
            {
              url: `${siteConfig.domain}${ville.image}`,
              width: 1200,
              height: 630,
              alt: `Installation d'adoucisseur d'eau à ${ville.nom}`,
            },
          ]
        : [
            {
              url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
              width: 1200,
              height: 630,
              alt: `Installation d'adoucisseur d'eau à ${ville.nom}`,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function VillePage({ params }: PageProps) {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);

  if (!ville) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Installation d'adoucisseur d'eau",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "City",
      name: ville.nom,
      postalCode: ville.codePostal,
    },
    description: `Installation et entretien d'adoucisseurs d'eau à ${ville.nom}, ${departementConfig.departementName}.`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Section className="relative bg-gradient-to-br from-primary-50 to-white py-12 overflow-hidden">
        {/* Image de fond avec opacité */}
        {ville.image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${ville.image})`,
              }}
            />
            <div className="absolute inset-0 bg-white/70" />
          </>
        )}

        {/* Contenu au-dessus du fond */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Installation et entretien d'adoucisseurs d'eau à {ville.nom}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Résidents de {ville.nom} ({ville.codePostal}), bénéficiez d'un service de mise en contact avec des experts certifiés du traitement de l'eau. Notre réseau couvre toute la {departementConfig.departementName} pour vos besoins en pose, maintenance et réparation de systèmes anti-calcaire.
          </p>
          {ville.zone && (
            <p className="text-gray-600 mt-2">
              Zone : {ville.zone}
            </p>
          )}
          {ville.dureteEau && (
            <p className="text-gray-600 mt-2">
              Dureté de l'eau : {ville.dureteEau}
            </p>
          )}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {ville.quartiers && ville.quartiers.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Zones d'intervention à {ville.nom}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nos partenaires techniques opèrent sur l'ensemble des secteurs de {ville.nom} pour vos projets d'adoucissement :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {ville.quartiers.map((quartier, index) => (
                    <div
                      key={index}
                      className="bg-primary-50 px-4 py-2 rounded-lg text-gray-800 font-medium"
                    >
                      {quartier}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Votre quartier ne figure pas dans cette liste ? Pas d'inquiétude, notre maillage couvre l'intégralité du territoire communal de {ville.nom}.
                </p>
              </div>
            </section>
          )}

          {ville.caracteristiquesEau && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Caractéristiques de l'eau à {ville.nom}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>{ville.caracteristiquesEau}</p>
                {ville.dureteEau && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-semibold text-blue-900 mb-2">Dureté de l'eau mesurée</p>
                    <p className="text-blue-800">
                      La dureté de l'eau à {ville.nom} est de <strong>{ville.dureteEau}</strong>{" "}
                      (Titre Hydrotimétrique). Une eau est considérée comme dure à partir de 15 TH.
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Avantages d'un système anti-calcaire à {ville.nom}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                La minéralisation importante constatée à {ville.nom} comme ailleurs en {departementConfig.departementName} génère divers désagréments domestiques :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Concrétions blanches obstruant progressivement tuyaux et résistances</li>
                <li>Vieillissement accéléré du parc électroménager (machines, ballons thermodynamiques)</li>
                <li>Inconfort cutané post-douche et cheveux ternes</li>
                <li>Multiplication des doses de détergents pour compenser</li>
                <li>Budgets de réparation et renouvellement alourdis</li>
              </ul>
              <p>
                Équiper son logement à {ville.nom} d'un adoucisseur corrige efficacement ces désagréments tout en préservant vos installations sur la durée.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prestations disponibles à {ville.nom}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Notre panel de services répond à l'ensemble de vos attentes en matière de traitement de l'eau à{" "}
                {ville.nom} :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Mise en place d'équipement :</strong> Pose intégrale d'un dispositif calibré selon vos usages domestiques
                </li>
                <li>
                  <strong>Suivi préventif :</strong> Révisions périodiques assurant la pérennité et l'efficacité de votre appareil
                </li>
                <li>
                  <strong>Interventions curatives :</strong> Diagnostic et remise en état rapides lors de dysfonctionnements
                </li>
                <li>
                  <strong>Renouvellement de matériel :</strong> Substitution d'installations obsolètes par des modèles récents et performants
                </li>
                <li>
                  <strong>Expertise technique :</strong> Analyse qualitative de votre eau et orientation vers la solution optimale
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Réactivité de nos partenaires à {ville.nom}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le réseau de techniciens avec qui nous collaborons garantit une prise en charge efficace à {ville.nom} et sur l'ensemble du département :
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Chiffrage sur mesure et sans frais sous 24-48h maximum</li>
                  <li>Rendez-vous d'installation coordonné avec votre agenda</li>
                  <li>Dépannage express mobilisable pour les situations d'urgence</li>
                  <li>Assistance téléphonique pour tout renseignement complémentaire</li>
                </ul>
              </div>
            </div>
          </section>

          {ville.referencesLocales && ville.referencesLocales.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos références à {ville.nom}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous avons déjà réalisé de nombreuses installations et interventions à {ville.nom} :
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {ville.referencesLocales.map((reference, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{reference}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Ces références témoignent de notre expérience et de notre connaissance du terrain
                  à {ville.nom}.
                </p>
              </div>
            </section>
          )}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Demander un devis pour un adoucisseur à {ville.nom}
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Remplissez le formulaire ci-dessous pour recevoir un devis gratuit et personnalisé
            pour votre adoucisseur d'eau à {ville.nom}. Nous vous contacterons rapidement.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LeadForm villePreselectionnee={ville.nom} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Link
            href="/villes"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← Retour à la liste des villes
          </Link>
        </div>
      </Section>
    </>
  );
}











