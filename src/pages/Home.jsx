import Mainlayout from "../layouts/MainLayout";
import Hero from "../components/home/hero/banner.jsx";
import InfoBlock from "../components/home/infoBlock/infoBlock.jsx";

const Home = () => {
  return (
    <>
      <Mainlayout>
        <Hero />
        <InfoBlock />
      </Mainlayout>
    </>
  );
};

export default Home;
