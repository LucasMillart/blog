'use client';

import { useState, useEffect } from 'react';

export default function ProgressBarPlanifeo({ isAdmin = false }) {
  // État pour stocker le pourcentage d'avancement
  const [value, setValue] = useState(0);

  // Nombre total de tâches dans votre liste Microsoft To Do
  const totalTasks = 20; // À remplacer par votre nombre réel de tâches

  // Nombre de tâches complétées (à mettre à jour manuellement)
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    // Calculer le pourcentage d'avancement
    const percentage = Math.round((completedTasks / totalTasks) * 100);
    setValue(percentage);
  }, [completedTasks, totalTasks]);

  // Fonction pour augmenter le nombre de tâches complétées
  const handleTaskCompleted = () => {
    if (completedTasks < totalTasks) {
      setCompletedTasks(prev => prev + 1);
    }
  };

  // Fonction pour diminuer le nombre de tâches complétées
  const handleTaskUncompleted = () => {
    if (completedTasks > 0) {
      setCompletedTasks(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <progress
        className="progress progress-info w-56"
        value={value}
        max="100"
        aria-label={`Progression ${value}%`}
      ></progress>
      <p className="text-sm mt-2">{value}% complété</p>
      <p className="text-xs text-base-content/70 mb-4">
        {completedTasks} / {totalTasks} tâches
      </p>

      {isAdmin && (
        <div className="flex gap-2">
          <button
            onClick={handleTaskCompleted}
            className="btn btn-sm btn-success"
            disabled={completedTasks >= totalTasks}
          >
            Marquer une tâche terminée
          </button>
          <button
            onClick={handleTaskUncompleted}
            className="btn btn-sm btn-error"
            disabled={completedTasks <= 0}
          >
            Annuler une tâche
          </button>
        </div>
      )}
    </div>
  );
}