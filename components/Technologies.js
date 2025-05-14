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
    <section className="py-10 px-5 text-center">
      <h1 className="text-sm font-light mb-4 tracking-[10]">MES<span className='ml-5 tracking-[10]'>TECHNOLOGIES</span></h1>
      <h2 className="text-5xl font-bold mb-6">
        Stack Technique
      </h2>
      <p className="text-lg mb-8">
        Les technologies que j&apos;utilise pour créer des applications web performantes.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="badge badge-primary badge-lg p-4 text-base flex items-center justify-center h-14 w-full"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
}