import { createFileRoute } from "@tanstack/react-router";
import GardenAstronaut from "../../features/(part-1)/garden-astronaut";

export const Route = createFileRoute("/(part-1)/garden-astronaut")({
  component: RouteComponent,
});

function RouteComponent() {
  return <GardenAstronaut />;
}
