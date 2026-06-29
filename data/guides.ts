export interface Guide {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

import { departementConfig } from "@/config/departement";

export const guides: Guide[] = [
  {
    slug: "choisir-adoucisseur-eau",
    title: `Comment choisir son adoucisseur d'eau en ${departementConfig.departementName} ?`,
    description: `Guide complet pour choisir l'adoucisseur d'eau adapté à vos besoins en ${departementConfig.departementName}. Critères de sélection, types d'adoucisseurs et conseils d'experts.`,
    date: "2024-03-15",
    content: `
# Comment choisir son adoucisseur d'eau en ${departementConfig.departementName} ?

Entre les eaux du Léman, du lac d'Annecy et les captages de la vallée de l'Arve, l'eau de la ${departementConfig.departementName} est réputée pour sa minéralité. Choisir le bon adoucisseur d'eau est essentiel pour protéger votre installation et améliorer votre confort.

## Comprendre la dureté de l'eau en ${departementConfig.departementName}

La dureté de l'eau varie selon les communes de la ${departementConfig.departementName}. Elle se mesure en degrés français (°fH) ou en TH (titre hydrotimétrique). Une eau est considérée comme dure à partir de 15°fH.

Dans le Genevois français, le Chablais ou l'Albanais, la dureté dépasse souvent 25°fH, ce qui nécessite un adoucisseur adapté.

## Les critères de choix

### 1. La capacité de l'adoucisseur

La capacité dépend du nombre de personnes dans votre foyer et de votre consommation d'eau. Un foyer de 2 personnes nécessite généralement un adoucisseur de 10 à 15 litres, tandis qu'un foyer de 4 personnes ou plus nécessite 20 à 30 litres.

### 2. Le type d'adoucisseur

Il existe principalement deux types d'adoucisseurs :
- **Adoucisseur à résine échangeuse d'ions** : le plus courant, nécessite du sel pour la régénération
- **Adoucisseur au CO2** : alternative écologique sans sel

### 3. La consommation d'eau

Analysez votre consommation d'eau annuelle pour dimensionner correctement votre adoucisseur. Un professionnel peut vous aider à faire ce calcul.

## Les avantages d'un adoucisseur adapté

Un adoucisseur bien choisi vous permet de :
- Protéger vos appareils électroménagers (lave-linge, lave-vaisselle, chauffe-eau)
- Réduire les dépôts de calcaire dans vos canalisations
- Améliorer le confort de l'eau pour la douche et la toilette
- Réduire la consommation de produits lessiviels

## Faire appel à un professionnel en ${departementConfig.departementName}

Pour choisir le bon adoucisseur, il est recommandé de faire appel à un professionnel qui pourra :
- Analyser la dureté de votre eau
- Évaluer vos besoins réels
- Vous proposer une solution adaptée à votre budget

Contactez-nous pour un devis gratuit et personnalisé en ${departementConfig.departementName}.
    `.trim(),
  },
  {
    slug: "entretien-adoucisseur-regulier",
    title: `Entretien adoucisseur d'eau : fréquence, étapes et coûts en ${departementConfig.departementName}`,
    description: `Guide complet sur l'entretien d'un adoucisseur d'eau en ${departementConfig.departementName} : fréquence selon la dureté de l'eau (25-40 TH), checklist annuelle, coûts et signes d'alerte. Eau très dure = entretien plus fréquent.`,
    date: "2024-03-10",
    content: `
# Entretien adoucisseur d'eau : fréquence, étapes et coûts en ${departementConfig.departementName}

Un adoucisseur d'eau est un appareil robuste, mais il ne s'entretient pas seul. En ${departementConfig.departementName}, où la dureté de l'eau atteint couramment 25 à 40 TH selon les zones, les résines travaillent intensément et les cycles de régénération sont fréquents. Résultat : sans entretien adapté, les performances se dégradent silencieusement — et la facture d'intervention finit par dépasser ce qu'un contrat d'entretien annuel aurait coûté. Voici le guide complet pour entretenir votre adoucisseur correctement.

## Pourquoi l'entretien est indispensable — et plus critique en eau très dure

Un adoucisseur fonctionne grâce à une résine échangeuse d'ions qui capture les ions calcium et magnésium. Plus l'eau est dure, plus la résine travaille, plus les cycles de régénération au sel sont fréquents. À 30-40 TH (comme à Cluses, Rumilly, Annemasse ou Bonneville), un adoucisseur pour un foyer de 4 personnes peut se régénérer tous les 2 à 3 jours — soit plus de 100 cycles par an.

À ce rythme, plusieurs problèmes surviennent si l'entretien est négligé :
- **Encrassement du bac à sel** : dépôts de boue de sel qui diminuent la qualité de la saumure
- **Pontage de résine** (channeling) : l'eau passe sans être traitée, l'adoucissement devient inefficace
- **Colmatage des injecteurs** : les circuits de régénération se bouchent progressivement
- **Prolifération bactérienne** : la résine humide est un milieu favorable aux bactéries si elle stagne sans maintenance
- **Déréglage de la programmation** : consommation de sel excessive ou régénérations insuffisantes

Un adoucisseur non entretenu pendant 3 ans en zone à 35 TH peut voir ses performances chuter de 30 à 50 % — sans que l'utilisateur s'en rende compte immédiatement.

## Fréquence d'entretien recommandée selon la dureté de l'eau

La fréquence d'entretien n'est pas la même à Chamonix (18-28 TH) et à Rumilly (30-40 TH). Voici les recommandations adaptées à la réalité de l'eau en ${departementConfig.departementName} :

| Dureté de l'eau | Zone concernée en ${departementConfig.departementName} | Entretien recommandé |
|---|---|---|
| 15-20 TH | Chamonix centre, Sallanches altitude | 1 fois par an |
| 20-28 TH | Annecy centre, Évian, Thonon nord | 1 fois par an, contrôle sel tous les 2 mois |
| 28-35 TH | Annecy périphérie, Annemasse, La Roche-sur-Foron | 2 fois par an |
| 35-40 TH | Cluses, Bonneville, Rumilly, Vallée de l'Arve | 2 fois par an + contrôle mensuel |

Pour les foyers avec forte consommation d'eau (> 5 personnes, usage professionnel, location saisonnière), augmentez d'un cran la fréquence quelle que soit la dureté.

## Les 7 étapes d'un entretien complet

### 1. Test de la dureté en entrée et en sortie

L'entretien commence toujours par un test de dureté : mesurer la dureté de l'eau en entrée (avant l'adoucisseur) et en sortie (eau adoucie). Une eau de sortie correctement adoucie doit être entre **8 et 15 TH**. En dessous de 8 TH, l'eau peut devenir agressive pour les canalisations cuivre. Au-dessus de 15 TH, l'adoucisseur sous-performe.

Si la dureté de sortie dépasse 15 TH alors que le sel est présent, c'est le signe d'un problème de résine ou de programmation.

### 2. Inspection et nettoyage du bac à sel

Le bac à sel accumule au fil du temps des boues de sel impures, des dépôts de calcium et parfois une croûte dure en surface (pont de sel). Ces dépôts perturbent la dissolution du sel et dégradent la qualité de la saumure.

Lors d'un entretien sérieux :
- Vidanger le bac complètement
- Rincer les parois à l'eau claire
- Vérifier l'absence de corps étrangers (insectes, débris)
- Inspecter le flotteur de niveau de saumure

### 3. Régénération manuelle forcée

Forcer une régénération manuelle permet de purger la résine et les circuits avant le reste de l'entretien. C'est aussi l'occasion de vérifier que le cycle de régénération se déroule correctement (bruits normaux, durée conforme, évacuation correcte).

### 4. Nettoyage et désinfection de la résine

Avec le temps, la résine peut s'encrasser avec du fer, du manganèse ou des matières organiques présentes en traces dans l'eau du réseau. En ${departementConfig.departementName}, la présence de fer dissous dans certains captages (notamment les nappes alluviales de l'Arve) peut accélérer ce phénomène.

Un nettoyant résine spécifique (type résine cleaner) est utilisé lors de l'entretien pour purger ces dépôts et restaurer la capacité d'échange ionique. Ce nettoyage n'est pas prévu dans la routine DIY standard — c'est une des raisons pour lesquelles un entretien professionnel reste recommandé tous les 1 à 2 ans.

### 5. Vérification et nettoyage des injecteurs et clapets

Les injecteurs de saumure (petites pièces en plastique ou inox) sont des points de colmatage fréquents. Un injecteur bouché provoque une régénération incomplète et une consommation de sel en hausse. Les clapets anti-retour et les électrovannes sont également inspectés.

### 6. Contrôle et reprogrammation du minuteur ou du compteur volumétrique

La programmation doit être vérifiée et ajustée si la consommation d'eau du foyer a évolué (arrivée d'un enfant, résidence secondaire en location...). Les adoucisseurs volumétriques modernes s'adaptent automatiquement, mais leur paramétrage initial doit correspondre à la dureté réelle de votre eau — celle-ci peut varier légèrement d'une saison à l'autre dans certains secteurs de ${departementConfig.departementName}.

### 7. Remplacement des joints et pièces d'usure si nécessaire

Joints toriques, piston de vanne, flotteur de bac à sel : ces pièces s'usent progressivement. Les remplacer lors de l'entretien annuel évite une panne future. Le coût d'un jeu de joints reste très inférieur à une intervention d'urgence.

## Checklist d'entretien : ce que vous pouvez faire vous-même

Certaines opérations ne nécessitent pas de technicien et peuvent être réalisées régulièrement par le propriétaire :

| Fréquence | Action à réaliser |
|---|---|
| Chaque semaine | Vérifier le niveau de sel dans le bac (ne jamais laisser le bac vide) |
| Chaque mois | Vérifier visuellement l'absence de pont de sel, écouter les bruits lors d'une régénération |
| Tous les 2-3 mois | Tester la dureté de l'eau en sortie avec une bandelette de test |
| Chaque année | Entretien complet par un professionnel (ou tous les 6 mois en zone > 30 TH) |
| Tous les 5-10 ans | Remplacement de la résine échangeuse d'ions |

## Ce qu'il se passe si vous n'entretenez pas votre adoucisseur

Négliger l'entretien d'un adoucisseur en zone d'eau très dure comme en ${departementConfig.departementName} entraîne une dégradation progressive et coûteuse :

**À 6 mois sans entretien** : légère baisse de performance, consommation de sel légèrement supérieure, début d'encrassement du bac.

**À 1-2 ans sans entretien** : dureté de sortie remontant au-dessus de 15 TH, tartre qui recommence à se déposer sur la robinetterie et les résistances, sel moins bien dissous.

**À 3 ans ou plus sans entretien** : résine partiellement colmatée nécessitant un remplacement prématuré (entre 300 € et 600 € selon le modèle), risque de panne sur la vanne de régénération, prolifération bactérienne possible dans la résine.

Un remplacement de résine à 400 € représente 4 à 6 ans d'un contrat d'entretien annuel. La maintenance régulière est clairement plus économique sur la durée.

## Coûts d'entretien : DIY vs professionnel en ${departementConfig.departementName}

### Entretien DIY (par le propriétaire)

- Sel régénérant (pastilles 25 kg) : 8 à 15 € le sac — budget annuel de 200 à 500 € selon la dureté locale et le foyer
- Bandelettes de test dureté : 5 à 15 € pour 50 tests
- Nettoyant résine : 10 à 25 € par traitement annuel
- **Total annuel DIY (hors sel) : 20 à 40 €**

### Entretien professionnel en ${departementConfig.departementName}

Un contrat d'entretien annuel chez un spécialiste local comprend généralement : visite technique, nettoyage complet, test de dureté, réglage de la programmation, vérification des pièces d'usure.

- **Contrat entretien annuel** : 80 à 150 € selon le modèle et le prestataire
- **Entretien ponctuel sans contrat** : 100 à 200 € selon les interventions nécessaires
- **Remplacement de résine** : 300 à 600 € (main-d'œuvre + résine)
- **Remplacement de vanne** : 200 à 400 € selon la marque

Pour une eau à 30-40 TH (Cluses, Rumilly, Annemasse), un contrat d'entretien bisannuel à 120 €/visite représente 240 € par an — à mettre en regard des économies réalisées sur le sel, l'énergie et la durée de vie de vos appareils.

## Les signes d'alerte : quand appeler un professionnel immédiatement

Certains symptômes indiquent un dysfonctionnement sérieux qui ne doit pas attendre l'entretien annuel :

- **Retour du tartre** sur les robinets, la douche ou dans la bouilloire alors que l'adoucisseur tourne
- **Surconsommation brutale de sel** : si votre bac se vide deux fois plus vite qu'à l'habitude
- **Eau avec goût salé** : signe d'une vanne de régénération défaillante qui laisse passer la saumure
- **Bruit de claquement ou de grattement** lors de la régénération
- **Fuite d'eau** autour de la vanne ou du bac à sel
- **Pression d'eau chutant brutalement** après installation de l'adoucisseur (colmatage possible)

En ${departementConfig.departementName}, l'eau très dure peut transformer une panne mineure en problème majeur rapidement : un adoucisseur qui ne traite plus l'eau à 35 TH laisse le tartre s'accumuler sur vos équipements à un rythme accéléré.

## Faire appel à un professionnel en ${departementConfig.departementName}

L'entretien d'un adoucisseur en zone d'eau très dure mérite l'intervention d'un technicien qui connaît les spécificités locales : dureté variable entre les secteurs (18 TH à Chamonix, 40 TH dans la vallée de l'Arve), présence de fer dissous dans certains captages, eaux chargées en matières organiques dans d'autres zones.

Nous intervenons pour l'entretien et le dépannage d'adoucisseurs sur tout le département : Annecy, Annemasse, Thonon-les-Bains, Cluses, Bonneville, Chamonix, Sallanches, Rumilly, La Roche-sur-Foron et toutes les communes environnantes.

Contactez-nous pour programmer l'entretien de votre adoucisseur ou obtenir un devis pour un contrat d'entretien adapté à la dureté de votre eau.
    `.trim(),
  },
  {
    slug: "economies-adoucisseur-eau",
    title: "Les économies réalisées avec un adoucisseur d'eau",
    description: "Découvrez comment un adoucisseur d'eau peut vous faire économiser de l'argent sur le long terme : protection des appareils, réduction des produits d'entretien, etc.",
    date: "2024-03-05",
    content: `
# Les économies réalisées avec un adoucisseur d'eau

Investir dans un adoucisseur d'eau représente un coût initial, mais cet investissement peut être rentabilisé sur le long terme grâce aux économies réalisées.

## Protection de vos appareils électroménagers

L'eau calcaire endommage vos appareils électroménagers :
- **Lave-linge** : le calcaire encrasse les résistances, réduisant leur durée de vie
- **Lave-vaisselle** : dépôts de calcaire sur les parois et les résistances
- **Chauffe-eau** : accumulation de tartre réduisant l'efficacité et la durée de vie

Un adoucisseur permet de prolonger la durée de vie de vos appareils de 30 à 50%, ce qui représente des économies significatives sur le remplacement.

## Réduction des produits d'entretien

Avec une eau adoucie, vous utilisez :
- **Moins de lessive** : jusqu'à 50% de réduction
- **Moins de produits de nettoyage** : le calcaire ne se dépose plus
- **Moins de produits anti-calcaire** : plus besoin de détartrer régulièrement

Ces économies peuvent représenter plusieurs centaines d'euros par an.

## Réduction de la consommation d'énergie

Un chauffe-eau sans calcaire consomme moins d'énergie car :
- La résistance n'est plus entartrée
- Le transfert de chaleur est plus efficace
- La durée de chauffe est réduite

Vous pouvez économiser jusqu'à 15% sur votre facture d'énergie.

## Réduction des réparations de plomberie

Le calcaire obstrue progressivement vos canalisations, nécessitant des interventions coûteuses. Un adoucisseur protège votre installation et réduit les risques de pannes.

## Calcul du retour sur investissement

Pour un adoucisseur à 1500€ :
- Économies sur les produits d'entretien : ~200€/an
- Économies sur l'énergie : ~100€/an
- Économies sur le remplacement d'appareils : ~300€/an (amorti sur plusieurs années)

**Retour sur investissement estimé : 3 à 5 ans**

## Conclusion

Un adoucisseur d'eau est un investissement rentable qui vous fait économiser de l'argent tout en améliorant votre confort quotidien. Contactez-nous pour un devis gratuit en ${departementConfig.departementName}.
    `.trim(),
  },
  {
    slug: "sel-adoucisseur-eau",
    title: "Quel sel choisir pour son adoucisseur d'eau ?",
    description: "Guide complet sur le sel pour adoucisseur d'eau : pastilles, granulés, tablettes — quelle forme choisir, quelle quantité mettre et à quelle fréquence recharger le bac.",
    date: "2024-06-01",
    content: `
# Quel sel choisir pour son adoucisseur d'eau ?

Le sel est l'élément consommable indispensable au bon fonctionnement d'un adoucisseur à résine échangeuse d'ions. Sans sel, la résine ne peut pas se régénérer et l'adoucisseur cesse de traiter l'eau. Voici tout ce qu'il faut savoir pour bien choisir et bien utiliser le sel de votre adoucisseur.

## Pourquoi l'adoucisseur a-t-il besoin de sel ?

Un adoucisseur fonctionne grâce à une résine qui capture les ions calcium et magnésium responsables du calcaire. Au bout d'un certain temps, cette résine est saturée et doit être régénérée. La régénération consiste à faire passer une saumure (eau très concentrée en sel) à travers la résine pour la "recharger" en ions sodium. Le sel est donc consommé lors de chaque cycle de régénération — généralement tous les 3 à 7 jours selon la dureté de l'eau et la consommation du foyer.

En Haute-Savoie, où la dureté de l'eau dépasse souvent 25-35 TH, les régénérations sont fréquentes : comptez entre 4 et 6 kg de sel par semaine pour un foyer de 3 à 4 personnes.

## Les différentes formes de sel pour adoucisseur

### Pastilles de sel (les plus répandues)

Les pastilles compressées de sel sont la forme la plus utilisée pour les adoucisseurs domestiques. Elles présentent plusieurs avantages :
- Dissolution progressive et régulière dans le bac à sel
- Moins de risque de "pont de sel" (croûte qui bloque la dissolution)
- Disponibles en sacs de 25 kg dans la plupart des grandes surfaces et magasins de bricolage
- Pureté généralement supérieure à 99,5% de NaCl

Les pastilles sont adaptées à la quasi-totalité des adoucisseurs du marché.

### Sel en granulés

Le sel granulé est similaire aux pastilles mais de texture plus fine. Il se dissout légèrement plus vite, ce qui peut être utile pour des adoucisseurs à forte consommation ou en cas de régénération rapprochée. Inconvénient : il forme plus facilement des ponts de sel dans les bacs profonds.

### Sel en tablettes

Les tablettes sont des compressions plus denses que les pastilles classiques. Elles conviennent aux adoucisseurs industriels ou semi-professionnels avec des bacs de grande capacité. Pour un usage domestique, les pastilles standards sont suffisantes.

### Sel en blocs

Les blocs de sel sont réservés à certains modèles d'adoucisseurs spécifiques (notamment les anciennes générations). Vérifiez toujours la notice de votre appareil avant d'acheter ce format.

## Choisir un sel de qualité : les critères essentiels

### La pureté

Optez pour un sel à **99,9% de pureté en NaCl** minimum. Un sel moins pur (95-97%) contient des impuretés qui s'accumulent dans la résine, réduisent son efficacité et peuvent nécessiter un nettoyage prématuré. Les bons sels pour adoucisseur sont étiquetés "sel régénérant" ou "sel adoucisseur" — évitez le sel de mer alimentaire non traité.

### L'absence d'additifs inutiles

Certains fabricants proposent des sels enrichis en "anti-calcaire", "protection résine" ou autres additifs. Ces formulations sont rarement nécessaires si votre adoucisseur est correctement dimensionné et entretenu.

### Le conditionnement

Les sacs de 25 kg sont le format le plus économique pour un usage régulier. Prévoyez 2 à 4 sacs par mois selon la taille de votre foyer et la dureté locale de l'eau en Haute-Savoie.

## Quelle quantité de sel mettre dans son adoucisseur ?

### Règle générale

Le bac à sel doit toujours contenir **au minimum 1/3 de sa capacité** en sel. Ne laissez jamais le bac se vider complètement : l'adoucisseur ne pourrait pas régénérer sa résine et laisserait passer l'eau calcaire sans traitement.

### Consommation estimée selon la dureté (foyer 3-4 personnes)

| Dureté de l'eau | Consommation de sel estimée |
|---|---|
| 15-20 TH (eau dure) | 3-4 kg / semaine |
| 20-30 TH (eau très dure) | 4-6 kg / semaine |
| 30-40 TH (eau extrêmement dure) | 6-9 kg / semaine |

En Haute-Savoie (Annemasse, Cluses, Bonneville : 28-38 TH), prévoyez plutôt la fourchette haute.

### Vérifier le niveau de sel

Il est recommandé de vérifier le niveau de sel **une fois par semaine**. Certains adoucisseurs modernes disposent d'une alerte manque de sel (visuelle ou sonore). Si vous partez en vacances, faites le plein avant de partir.

## Que faire en cas de pont de sel ?

Le "pont de sel" est une croûte dure qui se forme à la surface du bac à sel, empêchant le sel du dessous de se dissoudre. Résultat : l'adoucisseur ne régénère plus sa résine, même si le bac semble plein.

Pour résoudre le problème :
1. Cassez délicatement la croûte avec un manche à balai ou un outil similaire
2. Remuez le sel pour briser les agglomérats
3. Ajoutez de l'eau tiède si nécessaire pour dissoudre les blocs

Pour éviter les ponts de sel : utilisez des pastilles de haute pureté (moins hygroscopiques), ne surchargez pas le bac, et évitez de stocker le sel dans une pièce très humide.

## Où acheter son sel pour adoucisseur en Haute-Savoie ?

Le sel pour adoucisseur (pastilles 25 kg) est disponible :
- En grandes surfaces (rayon adoucisseur / bricolage)
- En magasins de bricolage (Leroy Merlin, Brico Dépôt)
- Chez les revendeurs spécialisés en traitement de l'eau
- En ligne (livraison à domicile pratique pour éviter de porter des sacs lourds)

Comptez entre **8€ et 15€ par sac de 25 kg** selon la marque et le point de vente.

## Conclusion

Choisir le bon sel pour adoucisseur n'est pas compliqué : optez pour des **pastilles à 99,9% de pureté**, vérifiez le niveau hebdomadairement et ne laissez jamais le bac se vider. En Haute-Savoie, avec une eau à 25-35 TH, un entretien régulier du bac à sel est essentiel pour maintenir l'efficacité de votre adoucisseur sur la durée.

Besoin d'un conseil pour l'entretien de votre adoucisseur ou d'un devis d'installation ? Contactez notre équipe pour un accompagnement personnalisé.
    `.trim(),
  },
  {
    slug: "durete-eau-haute-savoie",
    title: `Dureté de l'eau en ${departementConfig.departementName} : carte, valeurs et solutions`,
    description: `Découvrez la dureté de l'eau dans les principales villes de ${departementConfig.departementName}. Valeurs en TH par commune, impact du calcaire et solutions pour adoucir votre eau.`,
    date: "2024-07-01",
    content: `
# Dureté de l'eau en ${departementConfig.departementName} : carte, valeurs et solutions

La ${departementConfig.departementName} est l'un des départements français où la dureté de l'eau est la plus marquée. Alimentée par des nappes souterraines qui traversent des formations géologiques calcaires — molasses miocènes, calcaires urgoniens, roches alpines — l'eau du robinet est classée "dure" à "très dure" dans la grande majorité des communes. Voici un état des lieux détaillé par secteur.

## Comprendre la dureté de l'eau : qu'est-ce que le TH ?

La dureté de l'eau se mesure en **degrés français (°fH ou TH)**, correspondant à la concentration en calcium (Ca²⁺) et magnésium (Mg²⁺) dissous dans l'eau.

| Valeur en TH | Qualité de l'eau |
|---|---|
| < 7 TH | Eau très douce |
| 7-15 TH | Eau douce à modérée |
| 15-25 TH | Eau dure |
| 25-35 TH | Eau très dure |
| > 35 TH | Eau extrêmement dure |

En France, la valeur moyenne est d'environ 20 TH. En ${departementConfig.departementName}, la grande majorité des communes dépasse 20 TH, et nombreuses sont celles qui atteignent 30 à 40 TH.

## La dureté de l'eau par secteur en ${departementConfig.departementName}

### Annecy et agglomération (20-30 TH)

L'eau d'Annecy est alimentée en partie par le lac d'Annecy, ce qui tempère la dureté dans les quartiers centraux. Cependant, les secteurs raccordés au réseau intercommunal (Annecy-le-Vieux, Seynod, Meythet, Cran-Gevrier) reçoivent une eau plus calcaire, issue de captages souterrains. La dureté varie de 20 à 30 TH selon les quartiers. Découvrez nos solutions d'[adoucisseur d'eau à Annecy](/villes/annecy).

### Genevois français — Annemasse, Saint-Julien-en-Genevois (28-38 TH)

C'est l'un des secteurs les plus touchés par la dureté de l'eau en ${departementConfig.departementName}. Les nappes alluviales de l'Arve et les aquifères karstiques du Salève fournissent une eau chargée en calcium et magnésium. La dureté atteint couramment 30 à 38 TH à Annemasse, Vétraz-Monthoux, Archamps, Viry et Collonges-sous-Salève. Nous intervenons pour l'installation d'un [adoucisseur à Annemasse](/villes/annemasse) et à [Saint-Julien-en-Genevois](/villes/saint-julien-en-genevois).

### Chablais — Thonon-les-Bains, Évian-les-Bains (22-35 TH)

Le Chablais présente une dureté élevée malgré la proximité du lac Léman. L'eau de Thonon-les-Bains peut atteindre 35 TH. Évian-les-Bains, bien que célèbre pour sa source minérale, distribue sur son réseau public une eau à 22-30 TH issue d'autres captages alpins — et non la fameuse source Évian, qui est un captage privé. Voir nos services d'[adoucisseur à Thonon-les-Bains](/villes/thonon-les-bains) et à [Évian-les-Bains](/villes/evian-les-bains).

### Vallée de l'Arve — Cluses, Bonneville (28-40 TH)

La vallée de l'Arve est caractérisée par des eaux extrêmement dures, issues de captages dans les roches sédimentaires calcaires du massif du Faucigny. La dureté peut dépasser 35 TH à Cluses, Bonneville et Marignier. C'est une des zones où l'installation d'un adoucisseur est la plus vivement recommandée : voir nos pages [adoucisseur à Cluses](/villes/cluses) et [adoucisseur à Bonneville](/villes/bonneville).

### Pays du Mont-Blanc — Sallanches, Chamonix (18-32 TH)

Plus on monte en altitude, plus l'eau est influencée par la fonte glaciaire et les sources alpines, naturellement plus douces. À Chamonix, la dureté oscille entre 18 et 28 TH. Sallanches et ses environs affichent des valeurs de 22 à 32 TH. L'eau reste calcaire mais la situation est globalement moins extrême que dans la vallée basse. Retrouvez nos interventions d'[adoucisseur à Sallanches](/villes/sallanches) et à [Chamonix](/villes/chamonix).

### Albanais — Rumilly (30-40 TH)

L'Albanais est alimenté par des nappes karstiques particulièrement chargées en carbonates. Rumilly et ses environs affichent des niveaux de dureté parmi les plus élevés du département, entre 30 et 40 TH. Les installations de plomberie vieillissent rapidement sans protection anti-calcaire : découvrez nos solutions d'[adoucisseur à Rumilly](/villes/rumilly).

### Faucigny — La Roche-sur-Foron (26-34 TH)

La Roche-sur-Foron et le Faucigny présentent une eau dure à très dure (26-34 TH), issue de captages dans les formations carbonatées du massif. Les zones pavillonnaires récentes sont particulièrement exposées, avec des équipements neufs qui se détériorent prématurément. Voir notre page [adoucisseur à La Roche-sur-Foron](/villes/la-roche-sur-foron).

## Comment mesurer la dureté de l'eau chez soi ?

Plusieurs méthodes permettent de connaître la dureté précise de votre eau :

1. **Bandelettes de test** (réactifs colorés) : rapides, peu coûteuses, précision suffisante pour un usage domestique. Disponibles en pharmacie ou en ligne.
2. **Test en laboratoire** : analyse complète de l'eau, utile si vous avez des doutes sur la qualité générale.
3. **Relevé ARS** : les données de dureté par commune sont publiées par les Agences Régionales de Santé et accessibles sur leurs sites. Votre mairie peut aussi vous fournir la valeur officielle.
4. **Votre distributeur d'eau** : le syndicat des eaux de votre commune publie généralement un rapport annuel de qualité de l'eau.

## Quand installer un adoucisseur ?

L'installation d'un adoucisseur est recommandée dès **15 TH**. En ${departementConfig.departementName}, la très grande majorité des foyers dépasse ce seuil. Voici les signaux concrets qui indiquent que votre eau est trop calcaire :

- Dépôts blancs sur la robinetterie, les parois de douche et les vitres
- Traces blanchâtres dans la bouilloire ou la cafetière
- Peau tiraillée après la douche, cheveux ternes
- Électroménager (lave-linge, chauffe-eau) qui tombe en panne prématurément
- Factures d'énergie élevées liées à l'entartrage des résistances

## Les solutions pour lutter contre le calcaire

### L'adoucisseur à résine échangeuse d'ions

C'est la solution la plus efficace et la plus répandue pour un traitement total de l'eau entrante. Il élimine calcium et magnésium par échange ionique, produisant une eau "douce" (3-8 TH) pour toutes les utilisations domestiques. Nécessite du sel régénérant (4 à 9 kg/semaine selon la dureté locale) et un [entretien annuel](/entretien-adoucisseur). Découvrez le fonctionnement et le [prix d'un adoucisseur d'eau](/prix-adoucisseur), ou notre service complet d'[installation d'adoucisseur](/adoucisseur).

### Les anti-tartre magnétiques ou électroniques

Ces dispositifs modifient temporairement la structure des cristaux de calcaire pour réduire leur adhérence aux surfaces. Moins efficaces qu'un adoucisseur à résine, ils ne "suppriment" pas le calcaire mais limitent les dépôts. Adaptés aux budgets limités ou aux locataires.

### Les filtres à eau sous évier

Ils améliorent la qualité gustative de l'eau de boisson mais ne traitent pas l'eau calcaire pour l'ensemble du circuit. À combiner avec un adoucisseur global.

## Faire appel à un professionnel en ${departementConfig.departementName}

Le choix de l'adoucisseur doit être adapté à la dureté locale de votre eau et à la taille de votre foyer. Un professionnel du traitement de l'eau pourra :
- Mesurer la dureté exacte sur votre point d'eau
- Dimensionner l'adoucisseur en fonction de votre consommation réelle
- Vous proposer un devis adapté à votre budget

[Contactez-nous pour un devis gratuit](/contact) et personnalisé en ${departementConfig.departementName}, ou découvrez notre service d'[installation d'adoucisseur d'eau](/adoucisseur) dans tout le département.
    `.trim(),
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find((g) => g.slug === slug);
};













