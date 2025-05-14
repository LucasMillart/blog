import Image from "next/image";
import Link from "next/link";
import StatistiquesGlobal from "./Projets/StatistiquesGlobal";
import ProjetsPresentation from "./Projets/ProjetsPresentation";

export default function Projects() {
  return (
    <section className=" text-center py-10 px-5">
      <h1 className="text-sm font-light mb-4 tracking-[10]">MES<span className='ml-5 tracking-[10]'>PROJETS</span></h1>
      <h2 className="text-5xl font-bold mb-6">
        Créez. Explorez. Transformez.
      </h2>
      <p className="text-lg mb-6">
        Là où l&apos;action rencontre l&apos;exécution. Découvrez mes projets en cours.
      </p>
      <ProjetsPresentation />
    </section>
  );
}