import { createFileRoute, Link } from "@tanstack/react-router";
import { TextHelper } from "../helpers/text-helper";
import { IoSparklesSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const links = ["/garden-astronaut", "/card-stacking"];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <IoSparklesSharp className="text-purple-500" />
          Micro Interactions
        </h1>
        <p className="text-gray-500 mt-2">
          Explore and interact with beautiful micro-interactions.
        </p>
      </header>

      <section
        aria-label="List of micro interactions"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow hover:bg-purple-50 group"
          >
            <h2 className="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
              {TextHelper(link).removeSpecialChars().capitalize().getText()}
            </h2>
            <p className="mt-2 text-sm text-gray-500 group-hover:text-purple-400 transition-colors">
              View interaction <FaArrowRight className="inline" />
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
