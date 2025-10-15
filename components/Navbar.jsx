"use client";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-700 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-center gap-8 py-4  font-medium">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-blue-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
