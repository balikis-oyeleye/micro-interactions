import { createFileRoute, Link } from "@tanstack/react-router";
import { TextHelper } from "../helpers/text-helper";
import { MoveRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const links = ["/garden-astronaut"];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
        <Sparkles className="text-purple-500" />
        Micro Interactions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow hover:bg-purple-50 group"
          >
            <span className="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
              {TextHelper.capitalize(TextHelper.removeSpecialChars(link))}
            </span>
            <div className="mt-2 text-sm text-gray-500 group-hover:text-purple-400 transition-colors">
              View interaction <MoveRight className="inline" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
