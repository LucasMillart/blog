export default function RepartitionHeures({ heures = [] }) {
  // Calculer le nombre d'heures par type
  const siteHeures = heures.filter(h => h.type === 'site').length;
  const planifeoHeures = heures.filter(h => h.type === 'planifeo').length;
  const alternanceHeures = heures.filter(h => h.type === 'alternance').length;

  const total = heures.length || 1; // Éviter la division par zéro

  return (
    <div className="card bg-base-200 shadow-xl mt-8">
      <div className="card-body">
        <h2 className="card-title">Répartition des heures</h2>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-pink-500">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
            </div>
            <div className="stat-title">Site Web</div>
            <div className="stat-value text-pink-500">{siteHeures}</div>
            <div className="stat-desc">heures</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-blue-500">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
            <div className="stat-title">Planifeo</div>
            <div className="stat-value text-blue-500">{planifeoHeures}</div>
            <div className="stat-desc">heures</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-500">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="stat-title">Alternance</div>
            <div className="stat-value text-green-500">{alternanceHeures}</div>
            <div className="stat-desc">heures</div>
          </div>
        </div>

        <div className="w-full bg-base-300 rounded-full h-2.5 mt-4">
          <div className="flex h-2.5 rounded-full">
            <div
              className="bg-pink-500 h-2.5 rounded-l-full"
              style={{ width: `${(siteHeures / total) * 100}%` }}
            ></div>
            <div
              className="bg-blue-500 h-2.5"
              style={{ width: `${(planifeoHeures / total) * 100}%` }}
            ></div>
            <div
              className="bg-green-500 h-2.5 rounded-r-full"
              style={{ width: `${(alternanceHeures / total) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}