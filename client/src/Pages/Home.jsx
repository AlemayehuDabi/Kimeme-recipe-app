import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar/NavBar";
import Hero from "../component/Hero/Hero";
import TopHeader from "../component/TopHeader/TopHeader";
import Recipe from "../component/RecipeComp/Recipe";
import Board from "../component/Board/Board";
import Catagories from "../component/Catagories/Catagories";
import FooterComp from "../component/Footer/Footer";

function Home() {
  const [isSticky, setIsSticky] = useState("");

  const handleScroll = () => {
    if (window.scrollY > document.querySelector("header").offsetHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopHeader />
      <NavBar isSticky={isSticky} />
      <Hero />
      <Recipe />
      <Board />
      <Catagories />
      <FooterComp />
    </>
  );
}

export default Home;
