"use client"
import { useState, useEffect } from "react";
import { Cards } from "./components/cards";
import Footer from "./components/Footer";
import { HeroParallaxDemo } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import DarkMode from "./tsx-components/DarkMode";
import { useTheme } from './Hooks/useTheme.jsx';

export default function Home() {
  const [theme, setTheme] = useTheme();
  
  const handleThemeSwitch = (checked) => {
    console.log("Checked:", checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div>
        <div className='float-right px-5 py-4'>
          <DarkMode onChange={handleThemeSwitch} theme={theme}/>
        </div>
        <Navbar/>
        <HeroParallaxDemo/>
        <div className="text-sm grid grid-cols-2 gap-10 p-4">
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