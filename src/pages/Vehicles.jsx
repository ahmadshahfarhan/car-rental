import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import icon from "../assets/Icon.png";
import Card from "../components/vehicles/card/card";
import Logos from "../components/vehicles/logos/logos";

const Vehicles = () => {
  return (
    <>
      <Helmet>
        <title>Vehicles</title>
        <link rel="icon" href={icon} sizes="32x32" type="image/png" />
      </Helmet>
      <MainLayout>
        <div className=" md:space-y-[120px] space-y-[60px]">
          <Card />
          <Logos />
        </div>
      </MainLayout>
    </>
  );
};

export default Vehicles;
