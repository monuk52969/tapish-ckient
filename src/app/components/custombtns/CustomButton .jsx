import { useEffect, useRef } from "react";
import gsap from "gsap";

const MagneticButton = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const strength = 80; // Magnetic power (increase for stronger pull)

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x / 2,
        y: y / 2,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-transparent">
      <button
        ref={btnRef}
        className="btn-5 relative px-10 py-4 rounded-full border-2 border-stone-300 text-stone-300 text-xl font-semibold overflow-hidden group transition-all duration-300 ease-in-out"
      >
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
          Let's Talk
        </span>
        {/* Hover background effect */}
        <span className="absolute inset-0 bg-[#E3FF73] scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-center rounded-full"></span>
      </button>
    </div>
  );
};

export default MagneticButton;
