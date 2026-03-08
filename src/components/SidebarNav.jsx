import { useEffect, useState } from "react";

const sections = [
  { id: "aim", label: "Objetivo" },
  { id: "leaders", label: "Program Leaders" },
  { id: "members", label: "Program Members" },
];

const SidebarNav = () => {
  const [active, setActive] = useState("aim");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = sections.findIndex((s) => s.id === active);

  return (
    <aside className="sidebar-container">
      <div className="sidebar-sticky">
        <h2 className="sidebar-title">En esta página:</h2>

        <div className="sidebar-nav-wrapper">
          {/* Línea de fondo */}
          <div className="sidebar-line-bg" />

          {/* Indicador activo con transición */}
          <div
            className="sidebar-indicator"
            style={{
              transform: `translateY(${activeIndex * 42}px)`,
            }}
          />

          <nav className="sidebar-links">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`sidebar-link ${active === section.id ? "active" : ""}`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
