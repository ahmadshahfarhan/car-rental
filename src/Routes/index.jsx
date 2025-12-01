import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";   

const RoutesIndex = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/vehicles" element={<Vehicles/>}/>
            </Routes>
        </>
    )
}   

export default RoutesIndex;