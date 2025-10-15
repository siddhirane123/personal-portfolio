import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100" style={{background: "linear-gradient(120deg, #667eea, #764ba2, #6b8dd6)"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-black">{proj.title}</h3>
              <p className="text-gray-700">{proj.description}</p>
              <p className="mt-3 text-sm text-gray-500">{proj.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
