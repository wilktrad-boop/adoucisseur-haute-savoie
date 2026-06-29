import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
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

  const title = `Adoucisseur d'eau à ${ville.nom} (${ville.codePostal}) — Installation & entretien`;
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.domain}/villes/${slug}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "€€",
    openingHours: "Mo-Sa 08:00-19:00",
    areaServed: {
      "@type": "City",
      name: ville.nom,
      postalCode: ville.codePostal,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: departementConfig.departementName,
      },
    },
    address: {
      "@type": "PostalAddress",
      postalCode: ville.codePostal,
      addressLocality: ville.nom,
      addressRegion: departementConfig.departementName,
      addressCountry: "FR",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services adoucisseur d'eau",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation d'adoucisseur d'eau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien d'adoucisseur d'eau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage d'adoucisseur d'eau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Devis adoucisseur d'eau" } },
      ],
    },
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />

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
          <Breadcrumb items={[{ label: "Villes", href: "/villes" }, { label: ville.nom }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Adoucisseur d'eau à {ville.nom} : installation et entretien
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
              Nos services à {ville.nom}
            </h2>
            <p className="text-gray-700 mb-6">
              Notre réseau intervient à {ville.nom} pour l'ensemble de vos besoins en traitement de l'eau :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/adoucisseur", icon: "💧", title: "Installation", desc: "Pose complète d'un adoucisseur calibré pour votre foyer" },
                { href: "/entretien-adoucisseur", icon: "🔧", title: "Entretien", desc: "Révisions périodiques pour garantir la pérennité de votre appareil" },
                { href: "/depannage-adoucisseur", icon: "⚡", title: "Dépannage", desc: "Diagnostic et remise en état rapides en cas de dysfonctionnement" },
                { href: "/prix-adoucisseur", icon: "📋", title: "Devis gratuit", desc: "Estimation personnalisée pour votre projet à " + ville.nom },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                >
                  <span className="text-2xl shrink-0">{service.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition">{service.title}</p>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </Link>
              ))}
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

          {ville.faq && ville.faq.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions fréquentes sur l'adoucisseur d'eau à {ville.nom}
              </h2>
              <FAQ items={ville.faq} />
            </section>
          )}

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

      {/* En savoir plus */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            En savoir plus sur l'eau en Haute-Savoie
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/qualite-eau-haute-savoie"
              className="group flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition border border-blue-100"
            >
              <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium text-gray-800 group-hover:text-blue-700 text-sm">
                Dureté de l'eau en Haute-Savoie
              </span>
            </Link>

            <Link
              href="/osmoseur-haute-savoie"
              className="group flex items-start gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition border border-green-100"
            >
              <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="font-medium text-gray-800 group-hover:text-green-700 text-sm">
                Osmoseur et filtration de l'eau
              </span>
            </Link>

            <Link
              href="/guides"
              className="group flex items-start gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition border border-orange-100"
            >
              <svg className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-medium text-gray-800 group-hover:text-orange-700 text-sm">
                Guides pratiques adoucisseur
              </span>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/villes"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Retour à la liste des villes
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}











