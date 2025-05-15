import Header from "@/components/Header";
import Image from "next/image";

export default function planifeoPage() {
  return (
    <div>
      <Header />
      <div className="text-center py-10 px-5">
        <h2 className="text-4xl font-bold mb-4">Planifeo</h2>
        <p className="text-lg">
          Organisez vos tâches. Planifiez vos projets. Simplifiez votre quotidien.
        </p>
        <Image
          src="/planifeoimage.png"
          alt="Démonstration de Planifeo"
          width={800}
          height={450}
          className="rounded-lg shadow-xl max-w-full h-auto mx-auto mt-6"
          priority
        />
      </div>
    </div>
  );
}