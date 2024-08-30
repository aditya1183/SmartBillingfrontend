import React from "react";
import Header from "./Header/Header.jsx";
import MiniFeature from "./Header/MiniFeature.jsx";
import FeatureSection from "./Header/Feature.jsx";
import Newsletter from "./Header/NewsLetter.jsx";
import Process from "./Header/Process.jsx";

function Home() {
  return <div>
    <Header/>
    <MiniFeature/>
    <FeatureSection/>
    <Newsletter/>
    <Process/>
  </div>
}

export default Home;
