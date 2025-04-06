import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Chemin vers le fichier JSON
const DATA_FILE = path.join(process.cwd(), 'data', 'heures.json');

// Fonction pour lire les données
function readData() {
  try {
    // Vérifier si le fichier existe
    if (!fs.existsSync(DATA_FILE)) {
      // Créer le dossier data s'il n'existe pas
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
      }
      // Créer le fichier avec un tableau vide
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
      return [];
    }

    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erreur lors de la lecture des données:', error);
    return [];
  }
}

// Fonction pour écrire les données
function writeData(data) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'écriture des données:', error);
    return false;
  }
}

// GET - Récupérer toutes les heures
export async function GET() {
  const heures = readData();
  return NextResponse.json(heures);
}

// POST - Ajouter/modifier des heures (uniquement en développement)
export async function POST(request) {
  // Vérifier si nous sommes en développement
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Modification autorisée uniquement en environnement de développement' }, { status: 403 });
  }

  try {
    const data = await request.json();
    writeData(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}