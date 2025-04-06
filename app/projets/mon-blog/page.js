import Header from "@/components/Header";
import StatistiquesBlog from "@/components/Projets/Blog/StatistiquesBlog";
import Hero from "@/components/Projets/Blog/Hero";
import Blog from "@/components/Blog";

export default function monBlog() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <StatistiquesBlog />
      <Blog />
    </div>
  );
}