import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
    </>
  );
}
