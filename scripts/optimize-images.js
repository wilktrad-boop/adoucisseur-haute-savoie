const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Fonction pour optimiser une image
async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    console.log(`Optimisation de: ${filePath} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    let image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Configuration selon le type d'image
    if (ext === '.png') {
      // Pour les PNG, on peut les convertir en WebP ou optimiser le PNG
      // On garde PNG pour la compatibilité mais on optimise
      image = image.png({ 
        quality: 85,
        compressionLevel: 9,
        adaptiveFiltering: true
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Pour les JPG, on optimise avec une bonne qualité
      image = image.jpeg({ 
        quality: 85,
        mozjpeg: true,
        progressive: true
      });
    }
    
    // Redimensionner si l'image est très grande (max 1920px de largeur)
    if (metadata.width > 1920) {
      image = image.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Sauvegarder l'image optimisée dans un fichier temporaire
    const tempPath = filePath + '.tmp';
    await image.toFile(tempPath);
    
    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;
    
    // Remplacer l'original par l'optimisé
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ Optimisé: ${(newSize / 1024).toFixed(2)} KB (réduction: ${reduction}%)`);
    
    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de ${filePath}:`, error.message);
    return null;
  }
}

// Fonction pour parcourir récursivement les dossiers
async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  const results = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Récursion pour les sous-dossiers
      const subResults = await processDirectory(filePath);
      results.push(...subResults);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Optimiser l'image
      const result = await optimizeImage(filePath);
      if (result) {
        results.push(result);
      }
    }
  }
  
  return results;
}

// Fonction principale
async function main() {
  console.log('🚀 Début de l\'optimisation des images...\n');
  
  const results = await processDirectory(publicDir);
  
  console.log('\n📊 Résumé:');
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);
  
  console.log(`Images optimisées: ${results.length}`);
  console.log(`Taille totale originale: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Taille totale optimisée: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Réduction totale: ${totalReduction}%`);
  console.log(`\n✅ Optimisation terminée!`);
}

main().catch(console.error);
