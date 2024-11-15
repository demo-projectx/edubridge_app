import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600">
          Empowering Schools, Connecting Parents, Inspiring Students.
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          EduBridge brings together teachers, parents, and students to enhance
          student success and holistic growth.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            to="/"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Get Started
          </Link>
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-100">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
