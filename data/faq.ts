export interface FAQItem {
  question: string;
  answer: string;
}

import { departementConfig } from "@/config/departement";

export const faqHome: FAQItem[] = [
  {
    question: `Pourquoi installer un adoucisseur d'eau en ${departementConfig.departementName} ?`,
    answer:
      `Entre les eaux du Léman, du lac d'Annecy et des captages de montagne, la ${departementConfig.departementName} présente une eau naturellement calcaire. Un adoucisseur protège vos appareils, évite les dépôts de tartre et améliore votre confort au quotidien.`,
  },
  {
    question: "Combien coûte l'installation d'un adoucisseur ?",
    answer: "Le prix d'un adoucisseur d'eau varie selon plusieurs facteurs : la taille de votre logement, le nombre de personnes dans le foyer, la dureté de l'eau et le modèle choisi. En général, comptez entre 800€ et 2500€ pour l'équipement et l'installation. Nous proposons des devis gratuits et personnalisés pour vous aider à choisir la solution adaptée à vos besoins.",
  },
  {
    question: "Faut-il un entretien régulier ?",
    answer: "Oui, un entretien régulier est essentiel pour garantir le bon fonctionnement de votre adoucisseur. Il est recommandé de faire vérifier votre appareil une à deux fois par an, et de recharger le sel régulièrement. Notre équipe peut vous proposer un contrat d'entretien adapté à vos besoins.",
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer: "L'installation d'un adoucisseur d'eau prend généralement entre 2 et 4 heures, selon la complexité de votre installation existante. Notre professionnel s'occupe de tout : raccordement, réglages et mise en service. Vous pourrez utiliser votre adoucisseur immédiatement après l'installation.",
  },
  {
    question: `Quelles villes de la ${departementConfig.departementName} desservez-vous ?`,
    answer:
      `Nous intervenons sur tout le département (${departementConfig.departementNumber}), notamment à ${departementConfig.mainCities.slice(0, 6).join(", ")} ainsi que dans les communes voisines. Contactez-nous pour vérifier la disponibilité dans votre ville.`,
  },
];













