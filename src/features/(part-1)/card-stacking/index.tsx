import { cn } from "@sglara/cn";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CardStacking = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      img: "/assets/part-1/pink-astronaut.webp",
      transform: "translate(-40px, 0px) rotate(-10deg)",
      position: "left-0 top-0",
    },
    {
      id: 2,
      title: "Card 2",
      img: "/assets/part-1/fair-astronaut.webp",
      transform: "translate(0px, -45px) rotate(5deg)",
      position: "right-0 top-0",
    },
    {
      id: 3,
      title: "Card 3",
      img: "/assets/part-1/orange-astronaut.webp",
      transform: "translate(60px, -10px) rotate(25deg)",
      position: "bottom-0 left-0",
    },
    {
      id: 4,
      title: "Card 4",
      img: "/assets/part-1/yellow-astronaut.webp",
      transform: "translate(-30px, -10px) rotate(-25deg)",
      position: "bottom-0 right-0",
    },
  ];

  return (
    <main className="bg-white min-h-screen h-full grid place-items-center w-full p-2">
      <section className="bg-[#f9f9f9] mx-auto px-6 py-10 rounded-lg md:min-w-xl w-full min-h-96 grid place-items-center max-w-xl">
        <AnimatePresence>
          <motion.div
            className={cn(
              "relative w-full h-full max-w-[310px] max-h-[320px] grid place-items-center"
            )}
          >
            {cards.map((card) => (
              <motion.button
                key={card.id}
                type="button"
                onClick={() =>
                  setSelectedCard((prev) => (prev ? null : card.id))
                }
                aria-label={`Select ${card.title}`}
                className={cn(
                  "absolute h-36 w-36 cursor-pointer transition-all duration-300 ease-in-out border-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 overflow-hidden",
                  selectedCard
                    ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-2xl"
                    : `${card.position} border-transparent`
                )}
                initial={false}
                animate={{
                  zIndex: selectedCard === card.id ? 2 : 1,
                }}
                style={{
                  transform: !selectedCard
                    ? "none"
                    : selectedCard === card.id
                      ? "translate(0px, 0px) rotate(0deg)"
                      : card.transform,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover h-full w-full"
                />
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
};

export default CardStacking;
