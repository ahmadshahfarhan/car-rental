import Mainlayout from "../layouts/MainLayout";
import Hero from "../components/home/hero/hero.jsx";
import Advantages from "../components/home/infoBlock/Advantages.jsx";
import HowItWorks from "../components/home/infoBlock/HowItWorks.jsx";
import FactsinNumber from "../components/home/banner/FactsinNumber.jsx";
import Highlights from "../components/home/highlights/highlights.jsx";

const Home = () => {
  return (
    <>
      <Mainlayout>
        <div className=" space-y-[120px]">
          <Hero />
          <Advantages />
          <HowItWorks />
          <FactsinNumber />
          <Highlights />
        </div>
      </Mainlayout>
    </>
  );
};

export default Home;
