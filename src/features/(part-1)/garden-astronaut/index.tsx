import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { cn } from "@sglara/cn";

const GardenAstronaut = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState({
    img: "/assets/part-1/pink-astronaut.webp",
    color: "#87173d",
    alt: "pink astronaut",
  });

  const astronauts = [
    {
      img: "/assets/part-1/pink-astronaut.webp",
      color: "#87173d",
      alt: "pink astronaut",
      name: "Armar 6",
    },
    {
      img: "/assets/part-1/yellow-astronaut.webp",
      color: "#2c646a",
      alt: "yellow astronaut",
      name: "Alter 3",
    },
    {
      img: "/assets/part-1/red-astronaut.webp",
      color: "#c21d1d",
      alt: "red astronaut",
      name: "Ameca",
    },
    {
      img: "/assets/part-1/orange-astronaut.webp",
      color: "#d26332",
      alt: "orange astronaut",
      name: "Apollo",
    },
    {
      img: "/assets/part-1/fair-astronaut.webp",
      color: "#d4a173",
      alt: "fair astronaut",
      name: "Atlas",
    },
  ];

  const navLinks = ["New releases", "3d illus", "Digital", "Art", "Customize"];

  return (
    <main
      className={cn(
        "min-h-screen pt-8 transition-colors duration-700 ease-in-out"
      )}
      style={{ backgroundColor: selectedAstronaut.color }}
    >
      <div className="container mx-auto px-2">
        <header className="flex justify-between items-center">
          <button className="sm:hidden">
            <MdMenu className="text-white" size={20} />
          </button>
          <nav className="hidden sm:block">
            <ul className="flex gap-4">
              {navLinks.map((link) => (
                <li className="text-white uppercase">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4 text-white pr-6">
            <button>
              <FaRegUserCircle size={20} />
            </button>
            <button className="relative">
              <BsBag size={20} />
              <span className="bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full absolute -top-2 -right-2 text-[10px]">
                2
              </span>
            </button>
          </div>
        </header>
        <section className="flex justify-between items-center mt-20 gap-6 max-w-7xl mx-auto">
          {astronauts.map((astronaut) => (
            <button
              key={astronaut.img}
              className={cn(
                "relative transition-all duration-700 ease-in-out bg-no-repeat bg-center bg-cover overflow-hidden",
                selectedAstronaut.img === astronaut.img ? "flex-6" : "flex-2",
                `h-[566px] rounded-[102px] cursor-pointer w-full`
              )}
              style={{
                backgroundImage: `url(${astronaut.img})`,
                backgroundSize: "500px auto",
              }}
              onClick={() => setSelectedAstronaut(astronaut)}
            >
              <div
                className={cn(
                  "w-[402px] absolute bottom-10 left-6 duration-700 ease-in-out transition-all",
                  selectedAstronaut.img === astronaut.img
                    ? "translate-x-0 opacity-100"
                    : "translate-x-7 opacity-0"
                )}
              >
                <h3 className="text-white uppercase text-start text-2xl font-semibold">
                  {astronaut.name}
                </h3>
                <p className="text-white mt-2 text-start">
                  Engineered arts latest and most advanced humanoid robot is{" "}
                  <span className="underline">{astronaut.name}</span>, which the
                  company bills as a development platform where{" "}
                  <span className="underline">AI and machine learning</span>{" "}
                  systems can be tested.
                </p>
              </div>
            </button>
          ))}
        </section>
        <footer className="mt-16 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-1">
              AI ROBOTS
            </h3>
            <div>
              <p className="flex flex-col text-lg text-white">
                <span>Published</span>
                <span>Nov 06 2020</span>
                <span>More digital art:</span>
                <span>Enhance more</span>
              </p>
            </div>
          </div>
          <p className="max-w-[400px] text-lg text-white">
            While many humanoid robots are still in the early stages of
            development, a few house have escaped research and development
            entering the real world as bartenders.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default GardenAstronaut;
