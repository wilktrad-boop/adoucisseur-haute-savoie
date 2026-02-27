import { Metadata } from "next";
import VillesPageClient from "@/components/VillesPageClient";
import { departementConfig } from "@/config/departement";
import { villes } from "@/config/site";

export const metadata: Metadata = {
  title: `Villes desservies en ${departementConfig.departementName} (${departementConfig.departementNumber}) — Adoucisseur d'eau`,
  description: `Découvrez les ${villes.length} villes de ${departementConfig.departementName} où nous installons, entretenons et dépannons les adoucisseurs d'eau. Annecy, Thonon-les-Bains, Annemasse et plus.`,
  alternates: {
    canonical: "/villes",
  },
};

export default function VillesPage() {
  return <VillesPageClient />;
}
