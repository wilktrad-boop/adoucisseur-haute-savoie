const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '..', 'public', "Installation d'un adoucisseur d'eau_hero.png");
const outputPath = path.join(__dirname, '..', 'public', "Installation d'un adoucisseur d'eau_hero.webp");

async function convertToWebP() {
  try {
    if (!fs.existsSync(imagePath)) {
      console.error(`Image non trouvée: ${imagePath}`);
      process.exit(1);
    }

    const stats = fs.statSync(imagePath);
    const originalSize = stats.size;
    console.log(`Conversion de: ${imagePath}`);
    console.log(`Taille originale: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

    // Convertir en WebP avec optimisation
    await sharp(imagePath)
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ Conversion réussie: ${outputPath}`);
    console.log(`Taille WebP: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Réduction: ${reduction}%`);
  } catch (error) {
    console.error('Erreur lors de la conversion:', error);
    process.exit(1);
  }
}

convertToWebP();
