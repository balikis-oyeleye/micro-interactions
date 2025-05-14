import { createFileRoute } from "@tanstack/react-router";
import CardCarousel from "../../features/(part-1)/cards-carousel";

export const Route = createFileRoute("/(part-1)/cards-carousel")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CardCarousel />;
}
