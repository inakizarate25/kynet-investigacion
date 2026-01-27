import { useEffect, useState } from "react";
import arrow from "../assets/arrow-up.svg";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-[#e2ec55] text-gray-800
        shadow-lg
        transition-all duration-300
        hover:brightness-95
        cursor-pointer
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
      aria-label="Volver arriba"
    >
      <img src={arrow} alt="" className="w-10" />
    </button>
  );
};

export default BackToTop;
