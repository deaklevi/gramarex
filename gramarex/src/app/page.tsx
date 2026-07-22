import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Gallery from "@/components/Gallery";
import Stones from "@/components/Stones";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Gallery />
      <Stones />
    </div>
  );
}