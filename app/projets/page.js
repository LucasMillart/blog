import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ProgressBarPlanifeo from "@/components/Projets/ProgressBarPlanifeo";

export default function Projets() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Projects />
      <ProgressBarPlanifeo />

    </div>
  );
}