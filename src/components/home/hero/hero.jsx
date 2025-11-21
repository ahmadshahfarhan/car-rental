import FormBanner from "./components/formHero";
import HeroComponents from "../../../assets/hero/Hero.png";
import CarComponents from "../../../assets/hero/Car.png";
import Test from "../../../assets/hero/test.jpg";

const Hero = () => {
  return (
    <>
      <section>
        <div className=" bg-primary rounded-[40px] px-[72px] h-[660px] flex justify-center items-center relative overflow-hidden">
          <img className=" absolute w-screen" src={HeroComponents} alt="" />
          <img className="absolute bottom-0" src={CarComponents} alt="" />
          {/* <img className="absolute bottom-0" src={Test} alt="" /> */}
          <div className=" flex items-center justify-center z-10">
            <div className=" space-y-[33px]">
              <h1 className=" font-worksans font-bold text-[60px] text-surface max-w-[686px] leading-[72px]">
                Experience the road like never before
              </h1>
              <p className=" font-worksans font-normal text-[16px] max-w-[464px] text-surface leading-[23px]">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor tristique et gravida. Quis nunc interdum gravida
                ullamcorper
              </p>
              <button className="btn-orange">View all cars</button>
            </div>
          </div>
          <div className=" z-10">
            <FormBanner />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
