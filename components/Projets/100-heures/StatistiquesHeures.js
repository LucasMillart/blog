import React from "react";

const StatistiquesHeures = ({ heures = [] }) => {
  const totalHours = heures.length; // Nombre total d'heures de travail

  // Déterminer la dernière mise à jour
  const lastUpdate = heures.length > 0
    ? new Date(Math.max(...heures.map(h => new Date(h.date)))).toLocaleDateString('fr-FR')
    : "Aucune";

  // Calcul des jours restants jusqu'au 1er juillet 2025
  const today = new Date();
  const deadline = new Date("2025-07-01");
  const daysRemaining = Math.max(
    Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)),
    0
  );

  return (
    <div className="w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {/* Card 1: Total Hours */}
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Heures Totales</h2>
            <p className="text-primary text-xl font-bold">{totalHours} / 100 heures</p>
            <progress className="progress progress-primary w-full" value={totalHours} max="100"></progress>
          </div>
        </div>

        {/* Card 2: Days Remaining */}
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Temps Restant</h2>
            <p className="text-accent text-xl font-bold">{daysRemaining} jours</p>
          </div>
        </div>

        {/* Card 3: Last Update */}
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Dernière Mise à Jour</h2>
            <p className="text-secondary text-xl font-bold">{lastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistiquesHeures;