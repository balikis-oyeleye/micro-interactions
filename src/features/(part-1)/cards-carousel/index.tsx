import { FaBookmark } from "react-icons/fa";
import Navbar from "./navbar";
import { IoChevronBackOutline, IoChevronForwardSharp } from "react-icons/io5";
import { useState } from "react";
import { cn } from "@sglara/cn";
import { motion, AnimatePresence } from "motion/react";

const IMAGES = [
  {
    id: 1,
    url: "/assets/part-1/saint-antonien.webp",
    name: "Saint Antonien",
    location: "Switzerland",
    description:
      "Saint Antönien is a peaceful mountain village in eastern Switzerland’s Graubünden region, surrounded by dramatic peaks.",
  },
  {
    id: 2,
    url: "/assets/part-1/nagano-prefecture.webp",
    name: "Nagano Prefecture",
    location: "Japan",
    description:
      "Nagano Prefecture is located in central Japan, known for its beautiful alpine landscapes, hot springs, and the famous Zenko-ji Temple.",
  },
  {
    id: 3,
    url: "/assets/part-1/marrakech-merzouga.webp",
    name: "Marrakech Merzouga",
    location: "Morocco",
    description:
      "Marrakech Merzouga is famous for its stunning desert landscapes, where travelers can experience camel trekking through the Sahara.",
  },
  {
    id: 4,
    url: "/assets/part-1/yosemite-national-park.webp",
    name: "Yosemite National Park",
    location: "United States",
    description:
      "Yosemite National Park in California is renowned for its giant sequoia trees, towering cliffs, and dramatic waterfalls, making it a popular natural destination.",
  },
  {
    id: 5,
    url: "/assets/part-1/los-lances-beach.webp",
    name: "Los Lances Beach",
    location: "Spain",
    description:
      "Los Lances Beach in Tarifa, Spain, is known for its beautiful sandy shores, windsurfing, and kite surfing, making it a favorite spot for water sports enthusiasts.",
  },
];

const CardCarousel = () => {
  const [data, setData] = useState(IMAGES.slice(1));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitingImageId, setExitingImageId] = useState(IMAGES[0]);

  const totalImages = IMAGES.length;

  const getRotatedImages = () => {
    return Array.from({ length: totalImages }, (_, i) => {
      const index = (currentIndex + i + 2) % totalImages;
      return IMAGES[index];
    });
  };

  const handleNext = () => {
    setExitingImageId(data[0]);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
      setData(getRotatedImages());
    }, 600);
  };

  const handlePrev = () => {
    // setExitingImageId(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    setData(getRotatedImages());
  };

  const currentImage = IMAGES[currentIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="min-h-screen h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))`,
        }}
      >
        <motion.img
          layoutId={`image-${currentIndex}`}
          src={currentImage.url}
          alt={currentImage.name}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: "0.6" },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.img
          layoutId={`image-${exitingImageId}`}
          src={exitingImageId.url}
          alt={exitingImageId.name}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: "0.6" },
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

        <Navbar />

        <section className="relative max-w-[1800px] mx-auto overflow-hidden min-h-[90svh]">
          <div className="mx-auto container mt-32">
            <div className="bg-white h-0.5 w-6 rounded-2xl mb-3" />
            <p className="text-white text-lg mb-6">{currentImage.location}</p>
            <h1 className="text-8xl font-bold text-white max-w-xl uppercase mb-4">
              {currentImage.name}
            </h1>
            <p className="max-w-xl text-white text-sm mb-6">
              {currentImage.description}
            </p>
            <div className="flex items-center gap-4">
              <button className="p-2 bg-yellow-400 w-fit rounded-full">
                <FaBookmark className="text-xl text-white" />
              </button>
              <button
                className="border border-white px-6 py-2 rounded-3xl text-white hover:bg-yellow-400  transition-colors duration-300"
                type="button"
              >
                Discover Location
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-[450px] max-h-[1000px] min-h-[400px] max-w-2xl overflow-x-auto -translate-y-1/2">
            <div className="flex items-center gap-4 h-full overflow-hidden">
              {data.map((image) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.4 },
                  }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                  key={image.id}
                  className="rounded-2xl overflow-hidden h-72 min-w-48 relative"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${image.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-3 left-3 z-20">
                    <p className="text-white text-xs">{image.location}</p>
                    <h1 className="text-lg font-bold text-white max-w-xl uppercase leading-tight">
                      {image.name}
                    </h1>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-6 pr-2">
              <div className="flex items-center gap-2">
                <button
                  className="p-2 border border-white/40 rounded-full"
                  onClick={handlePrev}
                >
                  <IoChevronBackOutline className="text-2xl text-white" />
                </button>
                <button
                  className="p-2 border border-white/40 rounded-full"
                  onClick={handleNext}
                >
                  <IoChevronForwardSharp className="text-2xl text-white" />
                </button>
              </div>
              <div className="w-full h-0.5 bg-white/40 rounded-2xl">
                <div
                  className={cn(
                    "bg-yellow-400 h-0.5 rounded-2xl transition-all duration-500"
                  )}
                  style={{
                    width: `${((currentIndex + 1) * 100) / totalImages}%`,
                  }}
                />
              </div>
              <div>
                <span className="text-white text-xl">0{currentIndex + 1}</span>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
};

export default CardCarousel;
