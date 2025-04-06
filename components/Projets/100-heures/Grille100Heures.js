export default function Grille100Heures({ heures = [] }) {
  const rows = 10;
  const cols = 10;

  // Fonction pour déterminer la couleur en fonction du type de travail
  const getColorClass = (type) => {
    switch (type) {
      case 'site':
        return 'bg-pink-500';
      case 'planifeo':
        return 'bg-blue-500';
      case 'alternance':
        return 'bg-green-500';
      default:
        return 'bg-gray-800';
    }
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-[repeat(10,2rem)] gap-1 bg-black p-2 rounded-lg">
        {Array.from({ length: rows * cols }).map((_, index) => {
          // Rechercher si cette case correspond à une heure enregistrée
          const heure = heures.find(h => h.position === index);

          return (
            <div
              key={index}
              className={`w-8 h-8 ${heure ? getColorClass(heure.type) : 'bg-gray-800'} 
                     transition-all duration-300 hover:opacity-80`}
              title={heure ? `${heure.type} - ${new Date(heure.date).toLocaleDateString('fr-FR')}` : `Case ${index + 1}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}