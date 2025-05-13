import "../../styles/AboutHero.css";
import Vector from "../../assets/Images/Vector 1.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleStartProject = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      // Replace with your desired navigation or action
      navigate("/contact");
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="about-hero-section mt-32">
      <div className="about-hero-bg absolute inset-0 overflow-visible">
        <img
          src={Vector}
          alt="Yellow Curve"
          className="absolute left-1/2  -translate-x-1/2 w-[220vw] max-w-[1800px] min-w-[600px] h-auto object-cover"
        />
      </div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">
          We’re a dedicated <br />
          <span className="about-hero-digital-pill">Digital</span>
          <br />
          IT Experts
        </h1>
        <button
          className="relative overflow-hidden flex items-center bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group"
          onClick={handleStartProject}
          style={{ minWidth: "180px" }}
        >
          <span
            className={`flex items-center justify-center rounded-full transition-all duration-500 ease-in-out absolute
              ${isAnimating ? "left-full -translate-x-12" : "left-4 bg-white"}`}
            style={{ width: "2rem", height: "2rem" }}
          >
            <ArrowRight
              className={`w-4 h-4 transition-colors duration-500 ${isAnimating ? "text-white" : "text-blue-600"}`}
            />
          </span>
          <span
            className={`transition-transform duration-500 ease-in-out
              ${isAnimating ? "-translate-x-8" : "translate-x-0"} pl-10`}
          >
            Start a project
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;