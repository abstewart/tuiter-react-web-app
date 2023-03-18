import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

import "./index.css";
const HomeComponent = () => {
  return(
      <>
        <h1>Home</h1>
        <WhatsHappening/>
        <TuitsList/>
      </>
  );
};
export default HomeComponent;