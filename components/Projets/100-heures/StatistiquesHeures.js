import React from "react";

const StatistiquesHeures = () => {
  const totalHours = 1; // Nombre total d'heures de travail
  const lastUpdate = "06/04/2025"; // Dernière mise à jour (modifiable)

  // Calcul des jours restants jusqu'au 1er juillet 2025
  const today = new Date();
  const deadline = new Date("2025-07-01");
  const daysRemaining = Math.max(
    Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)),
    0
  ); // Empêche un nombre négatif

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-10">
      {/* Card 1: Total Hours */}
      <div className="card bg-gray-800 text-gray-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title">Heures Totales</h2>
          <p className="text-blue-400 text-xl">{totalHours} heures</p>
        </div>
      </div>

      {/* Card 2: Days Remaining */}
      <div className="card bg-gray-800 text-gray-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title">Temps Restant</h2>
          <p className="text-blue-400 text-xl">{daysRemaining} jours</p>
        </div>
      </div>

      {/* Card 3: Last Update */}
      <div className="card bg-gray-800 text-gray-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title">Dernière Mise à Jour</h2>
          <p className="text-blue-400 text-xl">{lastUpdate}</p>
        </div>
      </div>
    </div>
  );
};

export default StatistiquesHeures;