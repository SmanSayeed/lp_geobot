import React from "react";
// import { Home } from "./partials";
import HomeTop from "./partials/HomeTop";
import HomeSecondCard from "./partials/HomeSecondCard";
import HomeConnectedList from "./partials/HomeConnectedList";
import HomeSeperatedCard from "./partials/HomeSeperatedCard";
import HomeLeftImage from "./partials/HomeLeftImage";
import HomeRightImage from "./partials/HomeRightImage";
import HomeLastSection from "./partials/HomeLastSection";

export default function Home() {
  return (  
    <div id="home">
      <HomeTop />
      <HomeSecondCard />
      <HomeConnectedList />
      <HomeSeperatedCard />
      <HomeLeftImage />
      <HomeRightImage />
      <HomeLastSection />
    </div>
  );
}
