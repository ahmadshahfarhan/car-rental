import { MoveRight } from "lucide-react";
import TesImage from "../../../assets/higlights/highlights.png";
import { SlidersVertical, Fuel, Snowflake } from "lucide-react";

const CardHighlights = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className=" p-[24px] rounded-[12px] bg-graycus">
          <img
            src={TesImage}
            className="mx-auto rounded-[12px] w-full"
            alt=""
          />
          <div>
            <div className=" flex justify-between">
              <div className=" flex flex-col">
                <h1 className=" font-worksans font-semibold md:text-[24px] text-[20px]">
                  Mercedes
                </h1>
                <span className=" font-worksans font-normal md:text-[16px] text-[14px]">
                  Sedan
                </span>
              </div>
              <div className=" flex flex-col">
                <h1 className=" font-worksans font-semibold md:text-[24px] text-[20px] text-primary text-end">
                  $25
                </h1>
                <span className=" font-worksans font-normal md:text-[16px] text-[14px]">
                  Per Day
                </span>
              </div>
            </div>
            <div className=" flex justify-start flex-wrap mt-[40px] md:gap-4 gap-1">
              <div className="flex justify-center items-center gap-x-2">
                <SlidersVertical className=" md:w-auto w-5" />
                <span className=" font-worksans md:text-[16px] text-[14px] font-normal">
                  Automatic
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <Fuel className="md:w-auto w-5" />
                <span className=" font-worksans md:text-[16px] text-[14px] font-normal">
                  PB 95
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <Snowflake className="md:w-auto w-5" />
                <span className=" font-worksans md:text-[16px] text-[14px] font-normal">
                  Air Conditioner
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn-card font-inter text-surface bg-primary hover:bg-accent"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const Highlights = () => {
  return (
    <>
      <div className=" md:mt-[120px] mt-[60px]">
        {/* title */}
        <div className=" flex flex-wrap justify-between">
          <h1 className=" font-worksans font-bold lg:text-[50px] sm:text-[40px] text-[32px] max-w-[500px] items-start lg:leading-[60px] sm:leading-[50px] leading-[40px]">
            Choose the car that suits you
          </h1>
          <button
            type="button"
            className=" font-worksans font-bold text-[20px] flex items-center gap-2 cursor-pointer hover:gap-x-4 transition-all mt-4 md:mt-0"
          >
            views all
            <span>
              <MoveRight />
            </span>
          </button>
        </div>
        {/* card highlights */}
        <div className=" grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-y-7 mt-10">
          <CardHighlights />
        </div>
      </div>
    </>
  );
};

export default Highlights;
