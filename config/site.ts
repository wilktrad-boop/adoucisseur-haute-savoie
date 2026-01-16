import { departementConfig } from "./departement";

const principalesVilles = departementConfig.mainCities.slice(0, 3).join(", ");

export const siteConfig = {
  name: departementConfig.siteName,
  domain: departementConfig.url,
  description: `Installation, entretien et dépannage d'adoucisseurs d'eau dans le département de la ${departementConfig.departementName}. Devis gratuit pour ${principalesVilles} et toute la ${departementConfig.departementName}.`,
  contact: {
    phone: "06 75 67 12 60",
    email: "contact@adoucisseur-haute-savoie.fr",
  },
};

export interface Ville {
  slug: string;
  nom: string;
  codePostal: string;
  zone?: string; // Ex: "Lac d'Annecy", "Chablais"
  metaDescription?: string;
  quartiers?: string[]; // Quartiers desservis dans la ville
  caracteristiquesEau?: string; // Caractéristiques spécifiques de l'eau locale
  referencesLocales?: string[]; // Références ou points d'intérêt locaux
  dureteEau?: string; // Dureté de l'eau en TH (Titre Hydrotimétrique)
  image?: string; // Chemin vers l'image de la ville
}

export const villes: Ville[] = [
  {
    slug: "annecy",
    nom: "Annecy",
    codePostal: "74000",
    zone: "Lac d'Annecy",
    image: "/Villes/annecy.png",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Annecy. Devis gratuit pour votre adoucisseur d'eau en Haute-Savoie.",
    quartiers: [
      "Annecy-le-Vieux",
      "Seynod",
      "Cran-Gevrier",
      "Vieille Ville",
      "Novel",
      "Les Fins",
    ],
    caracteristiquesEau:
      "L'eau d'Annecy provient du lac et des sources alpines. Elle est plutôt dure dans les quartiers périphériques raccordés au réseau intercommunal.",
    dureteEau: "20-30 TH",
    referencesLocales: [
      "Installations dans les villas autour du lac",
      "Entretien pour les copropriétés de Seynod",
      "Dépannages récurrents à Annecy-le-Vieux",
    ],
  },
  {
    slug: "thonon-les-bains",
    nom: "Thonon-les-Bains",
    codePostal: "74200",
    zone: "Chablais",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Thonon-les-Bains. Devis gratuit en Haute-Savoie.",
    quartiers: [
      "Centre-ville",
      "Rives du Léman",
      "Concise",
      "Marlioz",
      "Vongy",
    ],
    caracteristiquesEau:
      "Avec une eau issue du Léman, la dureté reste élevée à cause des sols calcaires du Chablais.",
    dureteEau: "25-35 TH",
    referencesLocales: [
      "Installations dans les résidences proches du port",
      "Entretien pour des maisons individuelles à Concise",
    ],
  },
  {
    slug: "annemasse",
    nom: "Annemasse",
    codePostal: "74100",
    zone: "Genevois français",
    metaDescription:
      "Installation d'adoucisseurs d'eau à Annemasse. Service d'entretien et dépannage en Haute-Savoie.",
    quartiers: [
      "Centre-ville",
      "Le Perrier",
      "Romagny",
      "Livron",
      "Château-Rouge",
    ],
    caracteristiquesEau:
      "Le Genevois français est alimenté par plusieurs captages avec une eau calcaire nécessitant un traitement adapté.",
    dureteEau: "28-36 TH",
    referencesLocales: [
      "Interventions dans les immeubles proches de la gare",
      "Dépannage pour les maisons de Vétraz-Monthoux",
    ],
  },
  {
    slug: "cluses",
    nom: "Cluses",
    codePostal: "74300",
    zone: "Vallée de l'Arve",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Cluses. Intervention sur toute la vallée de l'Arve.",
    quartiers: [
      "Centre-ville",
      "La Sardagne",
      "Messy",
      "Les Ewues",
      "Scionzier",
    ],
    caracteristiquesEau:
      "L'eau de la vallée de l'Arve est naturellement chargée en calcaire à cause des roches sédimentaires.",
    dureteEau: "30-40 TH",
    referencesLocales: [
      "Installations pour les pavillons de Scionzier",
      "Entretien d'adoucisseurs chez des industriels locaux",
    ],
  },
  {
    slug: "sallanches",
    nom: "Sallanches",
    codePostal: "74700",
    zone: "Pays du Mont-Blanc",
    metaDescription:
      "Installation, entretien et dépannage d'adoucisseurs d'eau à Sallanches et dans le Pays du Mont-Blanc.",
    quartiers: [
      "Saint-Martin",
      "Saint-Roch",
      "La Motte",
      "Cordon",
      "Domancy",
    ],
    caracteristiquesEau:
      "Entre captages de montagne et réseau intercommunal, la dureté de l'eau varie mais reste calcaire.",
    dureteEau: "22-32 TH",
    referencesLocales: [
      "Installations dans les chalets sur les hauteurs",
      "Contrats d'entretien pour les copropriétés proches de Domancy",
    ],
  },
  {
    slug: "bonneville",
    nom: "Bonneville",
    codePostal: "74130",
    zone: "Vallée de l'Arve",
    metaDescription:
      "Installation et maintenance d'adoucisseurs d'eau à Bonneville. Devis gratuit en Haute-Savoie.",
    quartiers: [
      "Centre ancien",
      "Pontchy",
      "Marcellaz",
      "Saint-Jeoire",
      "Ayse",
    ],
    caracteristiquesEau:
      "Le réseau intercommunal dessert une eau dure nécessitant une solution contre le tartre.",
    dureteEau: "28-38 TH",
    referencesLocales: [
      "Entretien d'adoucisseurs dans les lotissements récents",
      "Installations pour les maisons de Marignier",
    ],
  },
  {
    slug: "rumilly",
    nom: "Rumilly",
    codePostal: "74150",
    zone: "Albanais",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Rumilly. Intervention rapide dans l'Albanais.",
    quartiers: [
      "Centre-ville",
      "Moye",
      "Sales",
      "Boussy",
      "Massonnaz",
    ],
    caracteristiquesEau:
      "Les nappes karstiques de l'Albanais produisent une eau très calcaire qui encrasse rapidement les installations.",
    dureteEau: "30-40 TH",
    referencesLocales: [
      "Installations dans les lotissements familiaux",
      "Dépannages pour les artisans locaux",
    ],
  },
  {
    slug: "chamonix",
    nom: "Chamonix-Mont-Blanc",
    codePostal: "74400",
    zone: "Mont-Blanc",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à Chamonix-Mont-Blanc. Solutions adaptées aux résidences secondaires.",
    quartiers: [
      "Centre-ville",
      "Les Praz",
      "Argentière",
      "Les Houches",
      "Servoz",
    ],
    caracteristiquesEau:
      "Malgré une eau issue des glaciers, les réseaux urbains présentent une minéralité élevée lors du stockage.",
    dureteEau: "18-28 TH",
    referencesLocales: [
      "Installations pour les chalets touristiques",
      "Entretien régulier pour les résidences secondaires",
    ],
  },
  {
    slug: "la-roche-sur-foron",
    nom: "La Roche-sur-Foron",
    codePostal: "74800",
    zone: "Faucigny",
    metaDescription:
      "Installation et entretien d'adoucisseurs d'eau à La Roche-sur-Foron et dans le Faucigny.",
    quartiers: [
      "Centre historique",
      "Saint-Sigismond",
      "Arenthon",
      "Saint-Pierre-en-Faucigny",
      "Etaux",
    ],
    caracteristiquesEau:
      "L'eau locale est riche en calcium et magnésium, ce qui nécessite un adoucisseur pour protéger la plomberie.",
    dureteEau: "26-34 TH",
    referencesLocales: [
      "Installations dans les zones pavillonnaires nouvelles",
      "Entretien pour les PME artisanales",
    ],
  },
];

export const getVilleBySlug = (slug: string): Ville | undefined => {
  return villes.find((v) => v.slug === slug);
};











