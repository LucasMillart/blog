import Image from "next/image";
import Header from "@/components/Header";
import Head from "@/components/Head";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Head />
      <Technologies />
      <Projects />
      <Blog />
    </div>

  );
}
