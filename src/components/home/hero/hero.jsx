import FormBanner from "./components/formHero";
import HeroComponents from "../../../assets/hero/Hero.png";
import CarComponents from "../../../assets/hero/Car.png";
import Test from "../../../assets/hero/test.jpg";
import HeroBanner from "../../../assets/hero/new.png";
import test3 from "../../../assets/hero/test3.png";

const Hero = () => {
  return (
    <>
      <section>
        <div className=" bg-primary rounded-[40px] px-[72px] md:py-1 py-[72px] md:h-[660px] md:flex lg:flex justify-center gap-x-6 items-center relative overflow-hidden">
          <img
            className=" absolute w-screen z-[2]"
            src={HeroComponents}
            alt=""
          />
          <img
            className="absolute top-[21%] md:top-auto md:bottom-0 left-0 right-0 mx-auto z-[2] md:z-[2] md:w-auto w-[430px]"
            src={CarComponents}
            alt=""
          />
          <div className=" z-0 inset-0 absolute">
            <img className=" md:h-full h-auto w-full object-cover" src={test3} alt="" />
          </div>
          <div className="absolute inset-0 bg-black/30 z-[1]"></div>
          <div className="relative z-[2] text-center md:text-left max-w-[686px] space-y-[33px] backdrop-blur-[1.2px] md:backdrop-blur-none">
            <h1 className=" font-worksans font-bold text-[44px] md:text-[60px] text-surface max-w-[686px] leading-[52px] md:leading-[72px]">
              Experience the road like never before
            </h1>
            <p className=" font-worksans font-normal text-[16px] max-w-[464px] text-surface leading-[23px]">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
            <button className="btn-orange">View all cars</button>
          </div>
          <div className=" relative z-[2] lg:mt-0 md:mt-0 mt-12">
            <FormBanner />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
