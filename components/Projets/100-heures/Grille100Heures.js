export default function Grille100Heures() {
  const rows = 10; // Augmenter le nombre de lignes
  const cols = 10; // Réduire le nombre de colonnes

  return (
    <div className="grid grid-cols-10 gap-1 bg-black">
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div
          key={index}
          className={`w-5 h-5 bg-gray-800`}
        ></div>
      ))}
    </div>
  );
}