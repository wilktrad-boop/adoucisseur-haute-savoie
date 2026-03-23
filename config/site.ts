import { departementConfig } from "./departement";
import type { FAQItem } from "@/data/faq";

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
  faq?: FAQItem[]; // FAQ spécifique à la ville
}

export const villes: Ville[] = [
  {
    slug: "annecy",
    nom: "Annecy",
    codePostal: "74000",
    zone: "Lac d'Annecy",
    image: "/Villes/annecy.png",
    metaDescription:
      "Adoucisseur d'eau à Annecy (74000) — eau dure 20-30 TH. Installation, entretien et dépannage par des experts. Devis gratuit sous 24h.",
    quartiers: [
      "Annecy-le-Vieux",
      "Seynod",
      "Cran-Gevrier",
      "Vieille Ville",
      "Novel",
      "Les Fins",
      "Meythet",
      "Pringy",
    ],
    caracteristiquesEau:
      "L'eau distribuée à Annecy est issue à la fois du lac d'Annecy et de sources alpines captées par le Syndicat des Eaux du lac d'Annecy (SILA). Sa dureté oscille entre 20 et 30 TH selon les secteurs : les quartiers centraux bénéficient d'une eau légèrement moins calcaire que les zones périphériques (Annecy-le-Vieux, Seynod, Meythet) raccordées au réseau intercommunal. Au-delà de 15 TH, le tartre se dépose progressivement sur les résistances, robinetteries et canalisations. À Annecy, cela se traduit concrètement par un encrassement accéléré des chauffe-eaux et une consommation accrue de produits lessiviels.",
    dureteEau: "20-30 TH",
    referencesLocales: [
      "Installations dans les villas autour du lac d'Annecy",
      "Entretien pour les copropriétés de Seynod et Cran-Gevrier",
      "Dépannages récurrents à Annecy-le-Vieux",
      "Pose d'adoucisseurs pour des résidences récentes à Meythet",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à Annecy ?",
        answer:
          "La dureté de l'eau à Annecy se situe généralement entre 20 et 30 TH (Titre Hydrotimétrique). Elle varie selon les quartiers : les secteurs centraux sont alimentés par l'eau du lac, naturellement plus douce, tandis que les quartiers périphériques comme Annecy-le-Vieux, Seynod ou Meythet reçoivent une eau intercommunale plus calcaire. À partir de 15 TH, un adoucisseur est recommandé pour protéger vos équipements.",
      },
      {
        question: "Pourquoi l'eau est-elle calcaire à Annecy-le-Vieux et Seynod ?",
        answer:
          "Ces quartiers sont raccordés au réseau du Syndicat Intercommunal des Eaux de la région d'Annecy, dont l'eau provient de captages souterrains plus chargés en calcium et magnésium que l'eau de surface du lac. La traversée des sols calcaires des Aravis et des Bauges augmente la minéralisation. Un adoucisseur dimensionné pour 28-30 TH est généralement recommandé dans ces secteurs.",
      },
      {
        question: "Combien coûte l'installation d'un adoucisseur à Annecy ?",
        answer:
          "Le prix d'un adoucisseur d'eau à Annecy varie entre 1 000€ et 2 500€ fourni et posé, selon la taille de votre logement, le nombre de personnes et la dureté de l'eau sur votre secteur. Nous établissons un devis gratuit et personnalisé sous 24h, avec une intervention possible en demi-journée.",
      },
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
      "Adoucisseur d'eau à Annemasse (74100) — eau très dure 28-36 TH dans le Genevois français. Installation, entretien et dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Centre-ville",
      "Le Perrier",
      "Romagny",
      "Livron",
      "Château-Rouge",
      "Gaillard",
      "Vétraz-Monthoux",
    ],
    caracteristiquesEau:
      "Annemasse et le Genevois français présentent une eau parmi les plus calcaires de Haute-Savoie, avec une dureté de 28 à 36 TH. Cette eau provient de captages souterrains dans les nappes alluviales de l'Arve et de sources karstiques du Salève, naturellement chargées en calcium et magnésium. La densité urbaine de l'agglomération — immeubles collectifs, résidences récentes — amplifie les conséquences : les chauffe-eaux collectifs et les ballons individuels s'entartrent rapidement, les robinetteries se dégradent prématurément et les machines à laver affichent une durée de vie réduite. À 28-36 TH, un adoucisseur devient un investissement rentable en moins de 3 ans grâce aux économies sur les produits lessiviels et l'entretien électroménager.",
    dureteEau: "28-36 TH",
    referencesLocales: [
      "Installations dans les immeubles collectifs proches de la gare d'Annemasse",
      "Dépannage et remplacement de résines pour des maisons à Vétraz-Monthoux",
      "Contrats d'entretien pour des copropriétés à Gaillard",
      "Pose d'adoucisseurs dans des appartements récents au Perrier",
    ],
    faq: [
      {
        question: "Pourquoi l'eau est-elle si calcaire à Annemasse ?",
        answer:
          "L'eau distribuée à Annemasse provient principalement des nappes alluviales de l'Arve et de captages karstiques au pied du Salève. Ces formations géologiques chargent naturellement l'eau en calcium et magnésium, ce qui explique une dureté de 28 à 36 TH — parmi les plus élevées de Haute-Savoie. À titre de comparaison, l'eau est considérée dure à partir de 15 TH.",
      },
      {
        question: "Peut-on installer un adoucisseur dans un appartement à Annemasse ?",
        answer:
          "Oui, tout à fait. L'installation en appartement est possible dès lors qu'il y a un accès à l'arrivée d'eau générale du logement (souvent sous l'évier ou dans un placard technique). Nos techniciens sont habitués aux installations en milieu urbain dense dans le Genevois français. Dans certaines copropriétés, une installation centralisée sur la colonne montante peut être envisagée avec l'accord du syndic.",
      },
      {
        question: "Intervenez-vous à Gaillard et Vétraz-Monthoux ?",
        answer:
          "Oui, nous couvrons l'ensemble de l'agglomération d'Annemasse : Gaillard, Vétraz-Monthoux, Ambilly, Ville-la-Grand et les communes limitrophes. La dureté de l'eau est similaire sur tout le Genevois français (28-36 TH), ce qui rend l'adoucisseur particulièrement pertinent dans tout ce secteur.",
      },
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
      "Adoucisseur d'eau à Chamonix-Mont-Blanc (74400) — spécialiste chalets et résidences secondaires. Eau 18-28 TH malgré les glaciers. Devis gratuit sous 24h.",
    quartiers: [
      "Centre-ville",
      "Les Praz",
      "Argentière",
      "Les Houches",
      "Servoz",
      "Les Bossons",
    ],
    caracteristiquesEau:
      "Contrairement aux idées reçues, l'eau du robinet à Chamonix n'est pas exempte de calcaire. Si une partie de l'alimentation provient effectivement de la fonte glaciaire, le réseau de distribution traverse des couches rocheuses calcaires et des réservoirs qui élèvent la minéralisation. La dureté mesurée oscille entre 18 et 28 TH selon les secteurs — Les Houches et Servoz affichent des valeurs plus élevées que le centre-ville. Pour les résidences secondaires laissées inoccupées plusieurs mois, le tartre se concentre dans les canalisations et les chauffe-eaux pendant les périodes sans circulation d'eau, aggravant l'encrassement au retour.",
    dureteEau: "18-28 TH",
    referencesLocales: [
      "Installations pour les chalets touristiques en saison",
      "Contrats d'entretien pour des résidences secondaires à Argentière",
      "Dépannages express avant saison de ski pour des propriétaires absents",
      "Pose d'adoucisseurs pour des copropriétés aux Houches",
    ],
    faq: [
      {
        question: "L'eau de Chamonix est-elle vraiment calcaire ?",
        answer:
          "Oui, contrairement à l'idée reçue que l'eau glaciaire serait douce, l'eau du robinet à Chamonix présente une dureté de 18 à 28 TH. Le réseau de distribution traverse des formations calcaires qui enrichissent l'eau en calcium et magnésium. Les Houches et Servoz affichent généralement des valeurs plus élevées que le centre-ville. Un adoucisseur reste utile dès 15 TH pour protéger vos équipements.",
      },
      {
        question: "Un adoucisseur est-il utile pour une résidence secondaire à Chamonix ?",
        answer:
          "Oui, et c'est même particulièrement recommandé. Lors des périodes d'inoccupation, le tartre se concentre dans les canalisations et les chauffe-eaux stagnants. Au retour, les dépôts peuvent endommager les équipements ou altérer la qualité de l'eau. Un adoucisseur avec mise en veille automatique protège votre installation même en votre absence. Nous proposons des solutions spécifiquement adaptées aux résidences secondaires du massif du Mont-Blanc.",
      },
      {
        question: "Intervenez-vous à Argentière et aux Houches ?",
        answer:
          "Oui, nous couvrons l'ensemble de la vallée de Chamonix : le centre-ville, Les Praz, Argentière, Les Houches, Servoz et Les Bossons. Nos techniciens interviennent pour l'installation, l'entretien et le dépannage d'adoucisseurs d'eau. Devis gratuit sous 24h, installation possible en demi-journée.",
      },
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
  {
    slug: "saint-julien-en-genevois",
    nom: "Saint-Julien-en-Genevois",
    codePostal: "74160",
    zone: "Genevois français",
    metaDescription:
      "Adoucisseur d'eau à Saint-Julien-en-Genevois (74160) — eau très dure 28-38 TH. Installation, entretien et dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Centre-ville",
      "Neydens",
      "Archamps",
      "Collonges-sous-Salève",
      "Bossey",
      "Viry",
      "Valleiry",
    ],
    caracteristiquesEau:
      "Saint-Julien-en-Genevois se situe en plein cœur du Genevois français, une zone géographique caractérisée par une eau parmi les plus calcaires de Haute-Savoie. La dureté oscille entre 28 et 38 TH selon les communes du canton — Archamps, Collonges-sous-Salève et Viry affichant les valeurs les plus élevées, dues à la nature karstique des aquifères sous-jacents (molasses miocènes et calcaires du Salève). Cette dureté se traduit concrètement par un encrassement rapide des chauffe-eaux, des robinetteries et des électroménagers. La population frontalière, à fort pouvoir d'achat, investit fréquemment dans des systèmes de traitement de l'eau pour protéger des logements récents et bien équipés.",
    dureteEau: "28-38 TH",
    referencesLocales: [
      "Installations dans les résidences neuves du Technoparc d'Archamps",
      "Entretien pour des maisons individuelles à Collonges-sous-Salève",
      "Pose d'adoucisseurs pour des familles frontalières à Viry et Valleiry",
      "Dépannages à Neydens et Bossey",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à Saint-Julien-en-Genevois ?",
        answer:
          "La dureté de l'eau à Saint-Julien-en-Genevois et dans le Genevois français varie de 28 à 38 TH selon les communes. Les secteurs d'Archamps, Collonges-sous-Salève et Viry sont particulièrement concernés. À ces niveaux, un adoucisseur est fortement recommandé pour protéger vos équipements et réduire votre consommation de produits lessiviels.",
      },
      {
        question: "Intervenez-vous dans les communes autour de Saint-Julien ?",
        answer:
          "Oui, nous couvrons l'ensemble du canton de Saint-Julien-en-Genevois : Archamps, Collonges-sous-Salève, Neydens, Bossey, Viry, Valleiry et toutes les communes limitrophes. La qualité de l'eau est similaire sur tout le secteur, ce qui rend l'installation d'un adoucisseur particulièrement pertinente dans toute cette zone frontalière.",
      },
      {
        question: "Combien coûte l'installation d'un adoucisseur à Saint-Julien-en-Genevois ?",
        answer:
          "Le prix d'un adoucisseur à Saint-Julien-en-Genevois varie entre 1 200€ et 2 800€ fourni et posé selon la taille du logement et la dureté locale de l'eau. Nous établissons un devis gratuit et personnalisé sous 24h. Pour une eau à 35 TH, un adoucisseur de capacité suffisante est recommandé pour garantir une eau correctement adoucie même en forte consommation.",
      },
    ],
  },
  {
    slug: "evian-les-bains",
    nom: "Évian-les-Bains",
    codePostal: "74500",
    zone: "Chablais",
    metaDescription:
      "Adoucisseur d'eau à Évian-les-Bains (74500) — eau du robinet calcaire 22-30 TH malgré la source Évian. Installation et entretien. Devis gratuit.",
    quartiers: [
      "Centre thermal",
      "Neuvecelle",
      "Maxilly-sur-Léman",
      "Saint-Gingolph",
      "Lugrin",
      "Meillerie",
    ],
    caracteristiquesEau:
      "Évian-les-Bains présente un paradoxe bien connu : la source Évian, exploitée par Danone, livre une eau de source particulièrement pure et douce — mais ce n'est pas l'eau qui coule dans les robinets des habitants. Le réseau public d'Évian est alimenté par des captages différents dans les Alpes du Chablais, dont la dureté oscille entre 22 et 30 TH. Les communes voisines comme Neuvecelle, Maxilly-sur-Léman et Lugrin présentent des valeurs similaires à légèrement supérieures. Les chauffe-eaux, lave-linges et robinetteries s'entartrent donc progressivement, comme dans toute la région du lac Léman.",
    dureteEau: "22-30 TH",
    referencesLocales: [
      "Installations dans les hôtels et résidences thermales",
      "Pose pour des villas avec vue sur le lac Léman à Neuvecelle",
      "Entretien d'adoucisseurs dans les résidences secondaires de Lugrin",
      "Dépannages pour des maisons individuelles à Maxilly-sur-Léman",
    ],
    faq: [
      {
        question: "L'eau du robinet à Évian est-elle aussi douce que la source Évian ?",
        answer:
          "Non, c'est une idée reçue très répandue. La source Évian (exploitée par Danone) est un captage privé distinct du réseau public d'eau potable. L'eau du robinet à Évian-les-Bains provient d'autres captages alpins et présente une dureté de 22 à 30 TH, ce qui est considéré comme de l'eau dure à très dure. Un adoucisseur est donc utile pour les habitants d'Évian, comme pour leurs voisins du Chablais.",
      },
      {
        question: "Intervenez-vous à Neuvecelle, Lugrin et Meillerie ?",
        answer:
          "Oui, nous couvrons Évian-les-Bains et toutes les communes du Chablais riverain du Léman : Neuvecelle, Maxilly-sur-Léman, Saint-Gingolph, Lugrin, Meillerie et au-delà. La dureté de l'eau est relativement homogène sur tout ce secteur (22-30 TH), ce qui justifie l'installation d'un adoucisseur dans toute la zone.",
      },
      {
        question: "Un adoucisseur est-il adapté pour une résidence secondaire à Évian ?",
        answer:
          "Oui, et c'est particulièrement important pour les résidences inoccupées plusieurs mois. Le tartre se concentre dans les canalisations et les ballons d'eau chaude pendant les périodes sans circulation. Nous proposons des adoucisseurs avec mise en veille programmable, adaptés aux résidences secondaires du bord du Léman.",
      },
    ],
  },
];

export const getVilleBySlug = (slug: string): Ville | undefined => {
  return villes.find((v) => v.slug === slug);
};











