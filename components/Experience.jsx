export default function Experience() {
  const experience = [
    {
      company: "Republic Media Network",
      role: "Software Developer",
      duration: "Jul 2021 – Present",
      details:
        "Developed multilingual news platforms using React.js, Next.js, and SvelteKit. Integrated MGID, Taboola, and AMP.Improved Page Speed Performance for Core web vitals",
    },
    {
      company: "Edulab",
      role: "Junior Software Developer",
      duration: "Feb 2021 – Jul 2021",
      details: "Worked on Express.js projects, bug fixes, and UI updates.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 text-white" style={{background: "linear-gradient(145deg, #0f2027, #203a43, #2c5364)"}}>
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-500">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <p className="mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
