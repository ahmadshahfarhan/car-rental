import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import icon from "../assets/Icon.png";
import Introduction from "../components/about/Introduction/introduction";
import DialogVideo from "../components/about/dialogVideo/dialogVideo";
import InfoBlock from "../components/about/infoBlock/infoBlock";
import Testimoni from "../components/about/testimoni/testimoni";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <link rel="icon" href={icon} sizes="32x32" type="image/png" />
      </Helmet>
      <MainLayout>
        <div className=" md:space-y-[120px] space-y-[60px]">
          <Introduction />
          <DialogVideo />
          <InfoBlock />
          <Testimoni />
        </div>
      </MainLayout>
    </>
  );
};
export default About;
