export default function Skills() {
  const skills = [
    "React.js", "Next.js", "SvelteKit", "Tailwind CSS", "JavaScript", "TypeScript",
    "Node.js", "Strapi", "Express.js", "Material-UI", "Redux", "Git", "AMP", "EJS"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 text-center" style={{background: "linear-gradient(135deg, #0f3460 0%, #1abc9c 50%, #16a085 100%)"}}>
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-white text-black rounded-lg shadow">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
