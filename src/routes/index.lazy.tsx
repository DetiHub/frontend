import { createLazyFileRoute } from "@tanstack/react-router";
import TeamSection from "@/components/teams";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-16">
      <TeamSection />
    </div>
  );
}
