import { createFileRoute } from "@tanstack/react-router";
import CardStacking from "../../features/(part-1)/card-stacking";

export const Route = createFileRoute("/(part-1)/card-stacking")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CardStacking />;
}
