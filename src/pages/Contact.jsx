import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import icon from "../assets/Icon.png";
import Hero from "../components/contact/hero/hero";
import Blog from "../components/contact/blog/blog";
import Logos from "../components/vehicles/logos/logos";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <link rel="icon" href={icon} sizes="32x32" type="image/png" />
      </Helmet>
      <MainLayout>
        <div className=" md:space-y-[120px] space-y-[60px]">
          <Hero />
          <Blog />
          <Logos />
        </div>
      </MainLayout>
    </>
  );
}

export default Contact;
