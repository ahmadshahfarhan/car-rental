import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import About from "../pages/About";
import Contact from "../pages/Contact";

const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default RoutesIndex;
