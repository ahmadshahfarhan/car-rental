import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import About from "../pages/About";

const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default RoutesIndex;
