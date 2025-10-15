export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 text-center text-white" style={{background: "linear-gradient(90deg, #141e30, #243b55)"}}>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-6">
        Have a project or opportunity? Let’s connect.
      </p>
      <a
        href="mailto:siddhirane265@gmail.com"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        siddhirane265@gmail.com
      </a>
    </section>
  );
}
