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
      "Adoucisseur d'eau à Annecy (74000) — eau dure 20-30 TH selon les quartiers. Installation, entretien et dépannage par des experts. Devis gratuit sous 24h, intervention en demi-journée.",
    quartiers: [
      "Annecy-le-Vieux",
      "Seynod",
      "Cran-Gevrier",
      "Vieille Ville",
      "Novel",
      "Les Fins",
      "Meythet",
      "Pringy",
      "Argonay",
      "Épagny Metz-Tessy",
    ],
    caracteristiquesEau:
      "L'eau distribuée à Annecy est issue à la fois du lac d'Annecy et de sources alpines captées par le Syndicat des Eaux du lac d'Annecy (SILA). La dureté de l'eau à Annecy oscille entre 20 et 30 TH (Titre Hydrotimétrique) selon les secteurs. Les quartiers centraux bénéficient d'une eau du lac, naturellement plus douce (20-23 TH), tandis que les zones périphériques comme Annecy-le-Vieux, Seynod et Meythet raccordées au réseau intercommunal présentent une eau plus calcaire (25-30 TH). À partir de 15 TH, le tartre se dépose progressivement sur les résistances, robinetteries et canalisations. À Annecy, cela se traduit par un encrassement accéléré des chauffe-eaux, des traces blanches sur la robinetterie et une surconsommation de produits lessiviels.",
    dureteEau: "20-30 TH",
    referencesLocales: [
      "Installations dans les villas et résidences autour du lac d'Annecy",
      "Entretien pour les copropriétés de Seynod et Cran-Gevrier",
      "Dépannages récurrents à Annecy-le-Vieux et Meythet",
      "Pose d'adoucisseurs pour des appartements récents à Épagny et Argonay",
      "Interventions pour des hôtels et locations saisonnières du bord du lac",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à Annecy ?",
        answer:
          "La dureté de l'eau à Annecy varie entre 20 et 30 TH selon les quartiers. Les secteurs centraux alimentés par le lac d'Annecy ont une eau autour de 20-23 TH, tandis qu'Annecy-le-Vieux, Seynod, Meythet et Cran-Gevrier, raccordés au réseau intercommunal (SILA), reçoivent une eau plus chargée (25-30 TH). À titre de comparaison, l'eau est considérée dure à partir de 15 TH — un adoucisseur est donc recommandé dans toute la commune.",
      },
      {
        question: "Pourquoi l'eau est-elle calcaire à Annecy-le-Vieux et Seynod ?",
        answer:
          "Ces quartiers sont raccordés au réseau intercommunal du SILA (Syndicat Intercommunal du Lac d'Annecy), dont une partie de l'eau provient de captages souterrains dans les massifs des Aravis et des Bauges. Ces formations géologiques calcaires enrichissent naturellement l'eau en calcium et magnésium. La dureté peut atteindre 28-30 TH dans ces secteurs, ce qui accélère l'entartrage des équipements.",
      },
      {
        question: "Combien coûte l'installation d'un adoucisseur à Annecy ?",
        answer:
          "Le prix d'un adoucisseur d'eau à Annecy varie entre 1 000 € et 2 500 € fourni et posé, selon la taille du logement, le nombre d'occupants et la dureté locale (20-30 TH). Nous proposons un devis gratuit et personnalisé sous 24h, avec une intervention rapide possible en demi-journée. Pour les appartements du centre ou les maisons de Seynod et Meythet, nous adaptons le dimensionnement à chaque situation.",
      },
      {
        question: "Faut-il un adoucisseur dans un appartement à Annecy ?",
        answer:
          "Oui, même en appartement, un adoucisseur est utile à Annecy. La dureté de l'eau (20-30 TH) encrasse les chauffe-eaux collectifs, les lave-linges individuels et détériore la robinetterie. L'installation dans un appartement est possible dès lors qu'on accède à l'arrivée d'eau froide du logement, généralement sous l'évier ou dans un placard technique. Nos techniciens réalisent régulièrement des poses dans les immeubles de Cran-Gevrier, Novel et Épagny.",
      },
      {
        question: "Y a-t-il du calcaire dans l'eau du lac d'Annecy ?",
        answer:
          "Oui. Malgré sa réputation de lac propre, l'eau du lac d'Annecy distribuée dans le réseau public présente une dureté de 20-23 TH — ce qui est considéré comme de l'eau dure. Le bassin versant du lac est entouré de massifs calcaires (Aravis, Bauges) qui enrichissent naturellement les eaux de ruissellement et les captages. Un adoucisseur reste donc pertinent même dans les quartiers alimentés directement par le lac.",
      },
    ],
  },
  {
    slug: "thonon-les-bains",
    nom: "Thonon-les-Bains",
    codePostal: "74200",
    zone: "Chablais",
    metaDescription:
      "Adoucisseur d'eau à Thonon-les-Bains (74200) — eau dure 25-35 TH dans le Chablais. Installation, entretien et dépannage par des experts. Devis gratuit sous 24h.",
    quartiers: [
      "Centre-ville",
      "Rives du Léman",
      "Concise",
      "Marlioz",
      "Vongy",
    ],
    caracteristiquesEau:
      "L'eau distribuée à Thonon-les-Bains provient principalement du lac Léman via les installations de traitement de la ville, complétées par des captages souterrains dans les formations calcaires du Chablais. La dureté oscille entre 25 et 35 TH selon les secteurs — Vongy et les zones périphériques raccordées aux nappes souterraines affichant les valeurs les plus élevées. À ces niveaux, le tartre s'accumule progressivement sur les résistances de chauffe-eau, les robinetteries et l'électroménager. La proximité du lac ne protège pas : les eaux superficielles comme souterraines du Chablais traversent des formations géologiques calcaires qui les minéralisent avant distribution. Un adoucisseur est recommandé dès 15 TH, seuil largement dépassé dans toute la commune.",
    dureteEau: "25-35 TH",
    referencesLocales: [
      "Installations dans les résidences proches du port de Thonon",
      "Entretien pour des maisons individuelles à Concise et Marlioz",
      "Pose d'adoucisseurs pour des appartements au centre-ville",
      "Dépannages et remplacement de résines à Vongy",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à Thonon-les-Bains ?",
        answer:
          "La dureté de l'eau à Thonon-les-Bains varie entre 25 et 35 TH selon les secteurs. Les zones alimentées par les captages souterrains du Chablais (Vongy, périphérie) présentent les valeurs les plus élevées. À 25-35 TH, l'eau est classée 'très dure' — un adoucisseur est fortement recommandé pour protéger vos équipements et réduire votre consommation de produits lessiviels.",
      },
      {
        question: "Un adoucisseur est-il utile malgré la proximité du lac Léman ?",
        answer:
          "Oui. L'eau du robinet à Thonon n'est pas l'eau brute du lac : elle est traitée et complétée par des captages souterrains dans les formations calcaires du Chablais, ce qui l'enrichit en calcium et magnésium. La dureté mesurée (25-35 TH) confirme que le calcaire pose des problèmes réels sur les installations domestiques, indépendamment de la proximité du lac.",
      },
      {
        question: "Intervenez-vous à Vongy et dans les communes autour de Thonon ?",
        answer:
          "Oui, nous couvrons Thonon-les-Bains dans son intégralité (Centre-ville, Vongy, Concise, Marlioz, Rives du Léman) ainsi que les communes voisines du Chablais. La dureté de l'eau est similaire sur tout le secteur. Devis gratuit sous 24h, intervention possible en demi-journée.",
      },
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
      "Adoucisseur d'eau à Cluses (74300) — eau très dure 30-40 TH dans la vallée de l'Arve. Installation, entretien et dépannage. Devis gratuit sous 24h, intervention rapide.",
    quartiers: [
      "Centre-ville",
      "La Sardagne",
      "Messy",
      "Les Ewues",
      "Scionzier",
    ],
    caracteristiquesEau:
      "Cluses et la vallée de l'Arve figurent parmi les zones les plus touchées par la dureté de l'eau en Haute-Savoie. La dureté atteint 30 à 40 TH — classée 'eau extrêmement dure' au sens de la norme française. Cette eau provient de captages dans les roches sédimentaires calcaires et dolomitiques du massif du Faucigny, naturellement très riches en calcium et magnésium. La géologie encaissée de la vallée concentre ces minéraux dans les nappes souterraines. Concrètement, les résistances de chauffe-eau s'entartrent en quelques mois seulement, les joints de robinetterie durcissent prématurément et les lave-linges affichent une durée de vie réduite. À 35-40 TH, l'installation d'un adoucisseur se rentabilise en moins de 2 ans grâce aux économies réalisées sur l'énergie, les produits d'entretien et la longévité des équipements.",
    dureteEau: "30-40 TH",
    referencesLocales: [
      "Installations pour les pavillons et maisons individuelles de Scionzier",
      "Entretien d'adoucisseurs chez des PME industrielles locales",
      "Pose d'adoucisseurs pour des appartements au centre de Cluses",
      "Dépannages à Marignier et dans les communes de la vallée de l'Arve",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à Cluses ?",
        answer:
          "La dureté de l'eau à Cluses atteint 30 à 40 TH selon les secteurs — c'est l'une des valeurs les plus élevées de Haute-Savoie. Cette eau extrêmement dure provient de captages dans les formations calcaires et dolomitiques du Faucigny. À ces niveaux, les dépôts de tartre sont visibles en quelques semaines sur la robinetterie et les équipements. Un adoucisseur est indispensable pour protéger votre installation.",
      },
      {
        question: "Intervenez-vous à Scionzier et Marignier ?",
        answer:
          "Oui, nous couvrons l'ensemble de la vallée de l'Arve autour de Cluses : Scionzier, Marignier, Thyez, Nancy-sur-Cluses et les communes environnantes. La dureté de l'eau est similaire sur tout ce secteur (30-40 TH), ce qui justifie fortement l'installation d'un adoucisseur dans toute la zone.",
      },
      {
        question: "Combien coûte un adoucisseur à Cluses avec une eau à 35-40 TH ?",
        answer:
          "Pour une eau à 35-40 TH à Cluses, il est important de choisir un adoucisseur correctement dimensionné pour la dureté locale. Le prix fourni et posé varie entre 1 200 € et 2 800 € selon la taille du foyer et le modèle. Un appareil sous-dimensionné ne suffira pas à traiter efficacement une eau aussi calcaire. Nous établissons un devis gratuit et personnalisé sous 24h après évaluation de vos besoins.",
      },
    ],
  },
  {
    slug: "sallanches",
    nom: "Sallanches",
    codePostal: "74700",
    zone: "Pays du Mont-Blanc",
    metaDescription:
      "Adoucisseur d'eau à Sallanches (74700) — eau dure 22-32 TH dans le Pays du Mont-Blanc. Installation, entretien, dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Saint-Martin",
      "Saint-Roch",
      "La Motte",
      "Cordon",
      "Domancy",
    ],
    caracteristiquesEau:
      "L'eau de Sallanches et du Pays du Mont-Blanc est alimentée par un mix de sources alpines d'altitude et de captages dans les nappes du piémont. La dureté varie de 22 à 32 TH selon les quartiers et les communes — Saint-Roch et les zones basses bénéficiant des eaux les plus douces, tandis que Cordon, Domancy et les hameaux reliés au réseau intercommunal du bassin affichent des valeurs plus élevées. Si l'eau est globalement moins dure qu'à Cluses ou Rumilly, une dureté de 25-32 TH reste suffisante pour encrasser progressivement chauffe-eaux, robinetteries et lave-linges. Les chalets et résidences de montagne, souvent équipés de systèmes de chauffage à eau chaude sanitaire, sont particulièrement exposés au tartre.",
    dureteEau: "22-32 TH",
    referencesLocales: [
      "Installations dans les chalets sur les hauteurs de Sallanches et Cordon",
      "Contrats d'entretien pour les copropriétés de Domancy",
      "Pose d'adoucisseurs pour des résidences secondaires dans le secteur",
      "Dépannages pour des maisons individuelles à Saint-Martin et Saint-Roch",
    ],
    faq: [
      {
        question: "L'eau est-elle calcaire à Sallanches ?",
        answer:
          "Oui, la dureté de l'eau à Sallanches varie de 22 à 32 TH selon les secteurs. Si l'altitude apporte des eaux de montagne naturellement plus douces dans certaines zones, le réseau intercommunal distribue aussi des eaux issues de captages plus minéralisés. À partir de 22 TH, le tartre se dépose progressivement sur les équipements, et un adoucisseur est recommandé pour préserver la plomberie et l'électroménager.",
      },
      {
        question: "Intervenez-vous à Cordon et Domancy ?",
        answer:
          "Oui, nous couvrons Sallanches et toutes les communes du Pays du Mont-Blanc : Cordon, Domancy, Combloux, Megève et les alentours. Nos techniciens sont habitués aux installations en zone de montagne, y compris dans les chalets difficiles d'accès. Devis gratuit sous 24h.",
      },
      {
        question: "Un adoucisseur est-il adapté pour un chalet de montagne à Sallanches ?",
        answer:
          "Oui, et c'est particulièrement utile pour les chalets équipés de planchers chauffants ou de systèmes de chauffage central à eau : le tartre réduit l'efficacité de ces installations et augmente la consommation d'énergie. Nous proposons des solutions adaptées aux chalets, y compris pour les résidences secondaires avec mises en veille prolongées.",
      },
    ],
  },
  {
    slug: "bonneville",
    nom: "Bonneville",
    codePostal: "74130",
    zone: "Vallée de l'Arve",
    metaDescription:
      "Adoucisseur d'eau à Bonneville (74130) — eau très dure 28-38 TH dans la vallée de l'Arve. Installation, entretien et dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Centre ancien",
      "Pontchy",
      "Marcellaz",
      "Saint-Jeoire",
      "Ayse",
    ],
    caracteristiquesEau:
      "Bonneville se situe en pleine vallée de l'Arve, l'un des secteurs de Haute-Savoie où la dureté de l'eau est la plus problématique. La dureté atteint 28 à 38 TH, issue de captages dans les alluvions de l'Arve et les nappes souterraines des formations calcaires du Faucigny et des Bornes. Les quartiers de Pontchy et d'Ayse, raccordés au réseau intercommunal de la vallée, affichent les valeurs les plus élevées. À 30 TH et au-delà, le tartre se dépose à un rythme soutenu : une résistance de chauffe-eau standard s'encroûte en 2 à 3 ans sans protection, et les canalisations en cuivre voient leur section se réduire progressivement. Pour les lotissements neufs — nombreux autour de Bonneville — l'installation d'un adoucisseur dès l'emménagement évite toute dégradation prématurée des équipements.",
    dureteEau: "28-38 TH",
    referencesLocales: [
      "Entretien d'adoucisseurs dans les lotissements récents de Pontchy",
      "Installations pour les maisons individuelles à Ayse et Saint-Jeoire",
      "Pose d'adoucisseurs dans les programmes neufs autour de Bonneville",
      "Dépannages pour des particuliers à Marcellaz et Bonneville centre",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à Bonneville ?",
        answer:
          "La dureté de l'eau à Bonneville oscille entre 28 et 38 TH selon les secteurs. Les quartiers reliés aux nappes alluviales de l'Arve affichent les valeurs les plus élevées. À ce niveau, l'eau est classée 'très dure' à 'extrêmement dure', et un adoucisseur est fortement recommandé pour protéger vos équipements domestiques.",
      },
      {
        question: "Intervenez-vous à Ayse et Saint-Jeoire ?",
        answer:
          "Oui, nous couvrons Bonneville et toutes les communes de la vallée de l'Arve : Ayse, Saint-Jeoire, Marignier, Reignier-Ésery et les environs. La dureté de l'eau est similaire sur tout ce secteur. Nos techniciens interviennent pour l'installation, l'entretien et le dépannage d'adoucisseurs.",
      },
      {
        question: "J'emménage dans un logement neuf à Bonneville, faut-il un adoucisseur ?",
        answer:
          "Oui, et idéalement dès l'emménagement. Dans un logement neuf avec une eau à 30-38 TH, le tartre commence à se déposer dès les premières semaines sur les résistances de chauffe-eau, la robinetterie et les joints. Installer un adoucisseur avant que les dépôts ne s'accumulent protège vos équipements neufs et préserve leur garantie constructeur.",
      },
    ],
  },
  {
    slug: "rumilly",
    nom: "Rumilly",
    codePostal: "74150",
    zone: "Albanais",
    metaDescription:
      "Adoucisseur d'eau à Rumilly (74150) — eau extrêmement dure 30-40 TH dans l'Albanais. Installation, entretien et dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Centre-ville",
      "Moye",
      "Sales",
      "Boussy",
      "Massonnaz",
    ],
    caracteristiquesEau:
      "Rumilly et l'Albanais comptent parmi les secteurs de Haute-Savoie où l'eau est la plus dure : la dureté atteint 30 à 40 TH, en raison des nappes karstiques particulièrement chargées en carbonates. Ces aquifères traversent des plateaux calcaires typiques de l'Avant-Pays savoyard, qui enrichissent naturellement l'eau en calcium et magnésium bien avant qu'elle n'atteigne les robinets. À Moye, Sales, Boussy et Massonnaz, les habitants constatent rapidement les effets : bouilloires entartrées en quelques semaines, robinetteries tachées, chauffe-eaux qui perdent en efficacité. Sans protection, une résistance de chauffe-eau à 40 TH dure rarement plus de 5 ans. Un adoucisseur correctement dimensionné se rentabilise en moins de 3 ans à Rumilly, en tenant compte des économies sur l'énergie, les produits ménagers et la longévité des appareils.",
    dureteEau: "30-40 TH",
    referencesLocales: [
      "Installations dans les lotissements familiaux de Rumilly",
      "Dépannages pour des artisans et PME locales",
      "Entretien d'adoucisseurs à Moye et Sales",
      "Pose pour des maisons individuelles à Boussy et Massonnaz",
    ],
    faq: [
      {
        question: "Pourquoi l'eau est-elle si calcaire à Rumilly ?",
        answer:
          "Rumilly est alimentée par des nappes karstiques qui traversent les plateaux calcaires de l'Albanais. Ces formations géologiques enrichissent naturellement l'eau en calcium et magnésium. La dureté atteint 30 à 40 TH — parmi les valeurs les plus élevées de Haute-Savoie. À ce niveau, les dépôts de tartre se forment rapidement sur tous les équipements en contact avec l'eau chaude.",
      },
      {
        question: "Intervenez-vous dans les communes autour de Rumilly ?",
        answer:
          "Oui, nous couvrons Rumilly et toutes les communes de l'Albanais : Moye, Sales, Boussy, Massonnaz, Hauteville-sur-Fier et les environs. La qualité de l'eau est similaire sur tout le secteur. Nos techniciens interviennent pour l'installation, l'entretien et le dépannage d'adoucisseurs dans toute la zone.",
      },
      {
        question: "Combien de sel consomme un adoucisseur avec une eau à 35-40 TH à Rumilly ?",
        answer:
          "Avec une eau à 35-40 TH comme à Rumilly, un adoucisseur pour un foyer de 4 personnes consomme entre 6 et 9 kg de sel par semaine. Prévoyez 2 à 3 sacs de pastilles de 25 kg par mois. C'est la fourchette haute pour la Haute-Savoie — raison pour laquelle un adoucisseur volumétrique (qui régénère selon la consommation réelle et non une minuterie fixe) est particulièrement recommandé pour optimiser la consommation de sel.",
      },
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
      "Adoucisseur d'eau à La Roche-sur-Foron (74800) — eau très dure 26-34 TH dans le Faucigny. Installation, entretien et dépannage. Devis gratuit sous 24h.",
    quartiers: [
      "Centre historique",
      "Saint-Sigismond",
      "Arenthon",
      "Saint-Pierre-en-Faucigny",
      "Etaux",
    ],
    caracteristiquesEau:
      "La Roche-sur-Foron et le Faucigny sont alimentés par des captages dans les formations carbonatées du massif du même nom — calcaires urgoniens et dolomies qui confèrent à l'eau une dureté de 26 à 34 TH. Les communes de Saint-Sigismond, Arenthon et Saint-Pierre-en-Faucigny affichent des valeurs dans la fourchette haute, dues à leur raccordement aux nappes souterraines profondes. La ville connaît un développement pavillonnaire soutenu depuis quelques années, et les propriétaires de logements neufs sont souvent les premiers surpris par la dégradation rapide de leur robinetterie et de leurs équipements. À 28-34 TH, le tartre se forme en quelques mois sur les résistances et les parois de douche. Un adoucisseur installé dès l'emménagement préserve la valeur du bien et réduit significativement les coûts d'entretien courant.",
    dureteEau: "26-34 TH",
    referencesLocales: [
      "Installations dans les nouvelles zones pavillonnaires de La Roche-sur-Foron",
      "Entretien pour des PME artisanales et ateliers locaux",
      "Pose d'adoucisseurs pour des maisons individuelles à Saint-Sigismond",
      "Dépannages à Arenthon et Saint-Pierre-en-Faucigny",
    ],
    faq: [
      {
        question: "Quelle est la dureté de l'eau à La Roche-sur-Foron ?",
        answer:
          "La dureté de l'eau à La Roche-sur-Foron varie entre 26 et 34 TH selon les secteurs. Cette eau est classée 'très dure' et provient des formations calcaires du Faucigny. À ces niveaux, le tartre affecte progressivement tous les équipements en contact avec l'eau chaude : chauffe-eau, robinetterie, lave-linge. Un adoucisseur est recommandé pour protéger votre installation.",
      },
      {
        question: "Intervenez-vous à Saint-Sigismond et Arenthon ?",
        answer:
          "Oui, nous couvrons La Roche-sur-Foron et l'ensemble du Faucigny : Saint-Sigismond, Arenthon, Saint-Pierre-en-Faucigny, Etaux et les communes alentours. Nos techniciens interviennent pour l'installation, l'entretien et le dépannage d'adoucisseurs dans toute la zone. Devis gratuit sous 24h.",
      },
      {
        question: "J'ai un logement neuf à La Roche-sur-Foron, quand installer un adoucisseur ?",
        answer:
          "Le plus tôt possible — idéalement avant le premier emménagement. Avec une eau à 28-34 TH, les dépôts de tartre commencent dès les premières semaines sur les équipements neufs. Installer un adoucisseur dès l'installation préserve la robinetterie, les joints, le chauffe-eau et l'électroménager dans leur état d'origine, et évite les interventions de détartrage coûteuses.",
      },
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











