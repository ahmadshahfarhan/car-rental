import { Check } from 'lucide-react';
import HeroImage from "../../../assets/infoBlock/HowitWorks.png";

const List = [
  {
    title: " Jelajahi berbagai pilihan mobil sesuai kebutuhan Anda — mulai dari city car, SUV, hingga mobil keluarga."
  },
  {
    title: "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum "
  },
  {
    title: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor "
  },
  {
    title: "Quis nunc interdum gravida ullamcorper"
  }
];

const InfoBlock = () => {
  return (
    <>
      <div className="flex flex-row-reverse flex-wrap justify-center items-center mx-auto gap-10 md:gap-16">
        <img
          src={HeroImage}
          alt=""
          className=" w-full max-w-[500px] lg:max-w-[44%] object-cover rounded-[12px]"
        />
        <div className=" w-full max-w-[500px] lg:max-w-[44%] mx-6 md:mx-0">
          <div className=" md:space-y-[40px] space-y-[30px]">
            <h1 className=" md:text-5xl text-3xl text-main font-worksans font-bold">Unlock unforgettable memories on the road</h1>
            <p className=" font-worksans font-normal">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-6">
              {List.map((item) => (
                <div key={item.title} className=" flex gap-3 items-start">
                  <div className=" bg-primary rounded-full p-2 flex items-center justify-center">
                    <Check size={16} className=" text-surface" />
                  </div>
                  <p className="font-worksans font-normal text-[16px] inline-flex">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBlock;
