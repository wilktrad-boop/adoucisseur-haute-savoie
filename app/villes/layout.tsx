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
  },
};

export default function VillesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

