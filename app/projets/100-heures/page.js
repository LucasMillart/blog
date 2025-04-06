"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Head from "@/components/Projets/100-heures/Head";
import Grille100Heures from "@/components/Projets/100-heures/Grille100Heures";
import StatistiquesHeures from "@/components/Projets/100-heures/StatistiquesHeures";
import RepartitionHeures from "@/components/Projets/100-heures/RepartitionHeures";
import GestionHeures from "@/components/Projets/100-heures/GestionHeures";

export default function Page() {
  const [heures, setHeures] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [estDeveloppement, setEstDeveloppement] = useState(false);

  // Vérifier si nous sommes en environnement de développement (localhost)
  useEffect(() => {
    setEstDeveloppement(
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    );
  }, []);

  // Charger les données depuis l'API
  useEffect(() => {
    const chargerHeures = async () => {
      try {
        setChargement(true);
        const reponse = await fetch('/api/heures');

        if (!reponse.ok) {
          throw new Error('Erreur lors du chargement des heures');
        }

        const data = await reponse.json();
        setHeures(data);
        setErreur(null);
      } catch (err) {
        console.error('Erreur:', err);
        setErreur('Impossible de charger les données');
      } finally {
        setChargement(false);
      }
    };

    chargerHeures();
  }, []);

  // Sauvegarder les données via l'API
  const sauvegarderHeures = async (nouvelleListe) => {
    if (!estDeveloppement) return;

    try {
      const reponse = await fetch('/api/heures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nouvelleListe)
      });

      if (!reponse.ok) {
        throw new Error('Erreur lors de la sauvegarde');
      }
    } catch (err) {
      console.error('Erreur:', err);
      alert('Erreur lors de la sauvegarde des données');
    }
  };

  // Fonction pour ajouter une heure (uniquement en développement)
  const ajouterHeure = (nouvelleHeure) => {
    const nouvelleListe = [...heures, nouvelleHeure];
    setHeures(nouvelleListe);
    sauvegarderHeures(nouvelleListe);
  };

  // Fonction pour supprimer une heure (uniquement en développement)
  const supprimerHeure = (id) => {
    const nouvelleListe = heures.filter(h => h.id !== id);
    setHeures(nouvelleListe);
    sauvegarderHeures(nouvelleListe);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <Header />
      <Head />

      {chargement ? (
        <div className="flex justify-center items-center my-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : erreur ? (
        <div className="alert alert-error my-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{erreur}</span>
        </div>
      ) : (
        <div className="w-full max-w-3xl mt-8">
          <Grille100Heures heures={heures} />

          {estDeveloppement && (
            <GestionHeures
              heures={heures}
              onAjouterHeure={ajouterHeure}
              onSupprimerHeure={supprimerHeure}
            />
          )}

          <StatistiquesHeures heures={heures} />
          <RepartitionHeures heures={heures} />
        </div>
      )}
    </div>
  );
}