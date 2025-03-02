import { useState, useEffect } from "react";

const useScrollSpy = (navItems, offset = 170) => {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || "");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const position = section.offsetTop - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: `0px 0px -50% 0px` }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return { activeSection, scrollToSection };
};

export default useScrollSpy;
