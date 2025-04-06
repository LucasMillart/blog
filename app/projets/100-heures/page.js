import Header from "@/components/Header";
import Head from "@/components/Projets/100-heures/Head";
import Grille100Heures from "@/components/Projets/100-heures/Grille100Heures";
import StatistiquesHeures from "@/components/Projets/100-heures/StatistiquesHeures";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <Head />
      <Grille100Heures />
      <StatistiquesHeures />
    </div>
  );
}