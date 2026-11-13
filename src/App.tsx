import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Differentials from "./components/sections/Differentials";
import Products from "./components/sections/Products";
import About from "./components/sections/About";
import Structure from "./components/sections/Structure";
import Process from "./components/sections/Process";
import Partners from "./components/sections/Partners";
import { showPartners } from "./data/site";
import "./styles/animations.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Products />
        <About />
        <Structure />
        <Process />
        {showPartners && <Partners />}
      </main>
    </>
  );
}
