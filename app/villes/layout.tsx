import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { departementConfig } from "@/config/departement";

export const metadata: Metadata = {
  title: `Villes desservies en ${departementConfig.departementName} - Installation adoucisseur d'eau`,
  description:
    `Liste des villes desservies pour l'installation et l'entretien d'adoucisseurs d'eau en ${departementConfig.departementName} : ${departementConfig.mainCities.slice(0, 6).join(", ")} et bien d'autres communes.`,
  alternates: {
    canonical: "/villes",
  },
  openGraph: {
    title: `Villes desservies en ${departementConfig.departementName} - Installation adoucisseur d'eau`,
    description:
      `Liste des villes desservies pour l'installation et l'entretien d'adoucisseurs d'eau en ${departementConfig.departementName}.`,
    url: `${siteConfig.domain}/villes`,
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
        width: 1200,
        height: 630,
        alt: `Villes desservies en ${departementConfig.departementName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Villes desservies en ${departementConfig.departementName} - Installation adoucisseur d'eau`,
    description: `Liste des villes desservies pour l'installation et l'entretien d'adoucisseurs d'eau en ${departementConfig.departementName}.`,
  },
};

export default function VillesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

