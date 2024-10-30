import React from "react";
import Header from "./Header/Header.jsx";
import MiniFeature from "./Header/MiniFeature.jsx";
import FeatureSection from "./Header/Feature.jsx";
import Newsletter from "./Header/NewsLetter.jsx";
import Process from "./Header/Process.jsx";
import CallToAction from "./BottomPages/CallToAction.jsx";
import Products from "./BottomPages/Products.jsx";
import ReviewPage from "../Components/BottomPages/ReviewPage.jsx";
import Faqs from "../Components/BottomPages/Faqs.jsx";
import ContactBottom from "../Components/BottomPages/ContactBottom.jsx";
import Footer from "./BottomPages/Footer.jsx";

function Home() {
  return (
    <div>
      <Header />

      <MiniFeature />

      <FeatureSection />
      <Newsletter />
      <Process />
      <CallToAction />

      <Products />
      {/* <ReviewPage/> */}
      <Faqs />
      <ContactBottom />
      <Footer />
    </div>
  );
}

export default Home;
