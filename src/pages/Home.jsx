import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/hero/hero.jsx";
import Advantages from "../components/home/infoBlock/Advantages.jsx";
import HowItWorks from "../components/home/infoBlock/HowItWorks.jsx";
import FactsinNumber from "../components/home/banner/FactsinNumber.jsx";
import Highlights from "../components/home/highlights/highlights.jsx";
import CtaSection from "../components/home/banner/CtaSection.jsx";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <link rel="icon" href="" />
    </Helmet>
      <MainLayout>
        <div className=" md:space-y-[120px] space-y-[60px]">
          <Hero />
          <Advantages />
          <HowItWorks />
          <FactsinNumber />
          <Highlights />
          <CtaSection />
        </div>  
      </MainLayout>
    </>
  );
};

export default Home;
