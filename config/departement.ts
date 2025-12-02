export const departementConfig = {
  departementName: "Haute-Savoie",
  departementNumber: "74",
  siteName: "Adoucisseur Haute-Savoie",
  domain: "adoucisseur-haute-savoie.fr",
  url: "https://www.adoucisseur-haute-savoie.fr",
  mainCities: [
    "Annecy",
    "Thonon-les-Bains",
    "Annemasse",
    "Cluses",
    "Sallanches",
    "Bonneville",
    "Rumilly",
    "Chamonix-Mont-Blanc",
    "La Roche-sur-Foron",
  ],
} as const;

export type DepartementConfig = typeof departementConfig;




