import { MoveRight } from "lucide-react";
import TesImage from "../../../assets/higlights/highlights.png";
import { SlidersVertical, Fuel, Snowflake } from "lucide-react";

const CardHighlights = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className=" p-3 rounded-[12px]">
          <img
            src={TesImage}
            className="mx-auto rounded-[12px] w-full"
            alt=""
          />
          <div>
            <div className=" flex justify-between">
              <div className=" flex flex-col">
                <h1 className=" font-worksans font-semibold text-[24px]">
                  Mercedes
                </h1>
                <span className=" font-worksans font-normal text-[16px]">
                  Sedan
                </span>
              </div>
              <div className=" flex flex-col">
                <h1 className=" font-worksans font-semibold text-[24px] text-primary text-end">
                  $25
                </h1>
                <span className=" font-worksans font-normal text-[16px]">
                  Per Day
                </span>
              </div>
            </div>
            <div className=" flex justify-start flex-wrap mt-[40px] gap-4">
              <div className="flex justify-center items-center gap-x-2">
                <SlidersVertical />
                <span className=" font-worksans text-[16px] font-normal">
                  Automatic
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <Fuel />
                <span className=" font-worksans text-[16px] font-normal">
                  PB 95
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <Snowflake />
                <span className=" font-worksans text-[16px] font-normal">
                  Air Conditioner
                </span>
              </div>
            </div>
            <button
              type="button"
              className=" font-inter text-surface bg-primary text-[16px] rounded-[12px] py-3 px-4 mt-4 w-full cursor-pointer hover:bg-accent transition-all"
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
      <div className=" mt-[120px]">
        {/* title */}
        <div className=" flex justify-between">
          <h1 className=" font-worksans font-bold text-[50px] max-w-[500px] items-start leading-[60px]">
            Choose the car that suits you
          </h1>
          <button
            type="button"
            className=" font-worksans font-bold text-[20px] flex items-center gap-2 cursor-pointer hover:gap-x-4 transition-all"
          >
            views all
            <span>
              <MoveRight />
            </span>
          </button>
        </div>
        {/* card highlights */}
        <div className=" grid grid-cols-3 gap-8 mt-10">
          <CardHighlights />
        </div>
      </div>
    </>
  );
};

export default Highlights;
