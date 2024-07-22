import { Cards } from "./components/cards";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { HeroParallaxDemo } from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main >
    <div>
    <Navbar/>
    <HeroParallaxDemo/>
    <div className=" text-sm grid grid-cols-2 gap-10 p-4">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    <Footer/>
    </div>
    </main>
  );
}
