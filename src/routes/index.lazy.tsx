import { createLazyFileRoute } from "@tanstack/react-router";
import TeamSection from "@/components/teams";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-16 bg-gradient-to-t from-white to-lime-400">
      <TeamSection />
    </div>
  );
}
