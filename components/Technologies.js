import Link from "next/link";

export default function Technologies() {
  const technologies = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "MongoDB" },
    { name: "Tailwind CSS" },
    { name: "Python" },
    { name: "Java" }
  ];
  return (
    <section className="py-12 px-4 md:px-8 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Colonne de gauche - Texte de présentation */}
        <div className="lg:w-1/2 space-y-6 lg:pr-8">
          <div className="max-w-xl mx-auto lg:mx-0">            <h2 className="text-lg mb-4 underline text-center lg:text-left font-medium">Apprendre à me connaître</h2>
            <p className="text-base mb-4 font-light leading-relaxed text-base-content">
              Je suis un <strong>développeur web full stack</strong> orienté front-end, qui conçoit et gère l&apos;interface des sites et applications web contribuant directement à la réussite du produit final.
              J&apos;aime créer des expériences claires, performantes et utiles. Tu peux découvrir mon travail dans la section <strong>Projets</strong>.
            </p>

            <p className="text-base mb-4 font-light leading-relaxed text-base-content">
              Je partage aussi ce que j&apos;apprends dans le développement web, notamment à travers des articles ou des posts. Mon objectif est de transmettre ce que j&apos;apprends pour aider d&apos;autres développeurs à progresser.
              N&apos;hésite pas à me suivre ou me contacter sur <Link className="link link-primary font-bold" href="https://linkedin.com/in/lucas-millart/" target="_blank">LinkedIn</Link> ou <Link className="link link-primary font-bold" href="https://github.com/LucasMillart" target="_blank">GitHub</Link>, où je publie régulièrement du contenu lié au développement et à la programmation.
            </p>

            <p className="text-base font-light leading-relaxed text-base-content">
              🎯 Je suis ouvert aux opportunités en alternance, où je peux apporter mes compétences, apprendre aux côtés d&apos;une équipe expérimentée et continuer à évoluer.
              Si tu as une opportunité qui correspond à mon profil, je serais ravi d&apos;en discuter !
            </p>
          </div>
        </div>        {/* Colonne de droite - Technologies */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-lg underline mb-4 text-center lg:text-left">Mes technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="badge badge-primary badge-lg p-4 text-base flex items-center justify-center h-14 w-full"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}