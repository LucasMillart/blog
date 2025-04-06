import { useState } from 'react';

export default function GestionHeures({ heures = [], onAjouterHeure, onSupprimerHeure }) {
  const [type, setType] = useState('site');
  const [position, setPosition] = useState('');
  const [afficherGestion, setAfficherGestion] = useState(false);

  const handleAjouterHeure = (e) => {
    e.preventDefault();

    // Vérifier que la position est valide
    const pos = parseInt(position);
    if (isNaN(pos) || pos < 0 || pos >= 100) {
      alert('Position invalide. Veuillez entrer un nombre entre 0 et 99.');
      return;
    }

    // Vérifier si la position est déjà occupée
    if (heures.some(h => h.position === pos)) {
      alert('Cette position est déjà occupée.');
      return;
    }

    // Créer une nouvelle heure
    const nouvelleHeure = {
      id: Date.now(),
      type,
      position: pos,
      date: new Date().toISOString(),
    };

    onAjouterHeure(nouvelleHeure);
    setPosition('');
  };

  if (!afficherGestion) {
    return (
      <div className="mt-6 mb-6 text-center">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setAfficherGestion(true)}
        >
          Afficher la gestion des heures (localhost)
        </button>
      </div>
    );
  }

  return (
    <div className="card bg-base-200 shadow-xl mt-6 mb-6">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">Gestion des heures</h2>
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setAfficherGestion(false)}
          >
            Masquer
          </button>
        </div>

        <form onSubmit={handleAjouterHeure} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type de travail</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="site">Site web (Rose)</option>
              <option value="planifeo">Planifeo (Bleu)</option>
              <option value="alternance">Alternance (Vert)</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Position (0-99)</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              min="0"
              max="99"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-auto">
            <button type="submit" className="btn btn-primary">Ajouter une heure</button>
          </div>
        </form>

        <div className="divider">Heures enregistrées</div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Position</th>
                <th>Type</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {heures.map(heure => (
                <tr key={heure.id}>
                  <td>{heure.position}</td>
                  <td>
                    <span className={`badge ${heure.type === 'site' ? 'bg-pink-500' :
                        heure.type === 'planifeo' ? 'bg-blue-500' :
                          'bg-green-500'
                      } text-white`}>
                      {heure.type}
                    </span>
                  </td>
                  <td>{new Date(heure.date).toLocaleDateString('fr-FR')}</td>
                  <td>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => onSupprimerHeure(heure.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}