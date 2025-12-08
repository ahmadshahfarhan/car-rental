import { CarFront, UserCheck, CalendarCheck, CircleGauge } from "lucide-react";
import Shadow from "../../../assets/banner/FactinNumber/Shadow.png";
import { NumberTicker } from "../../ui/number-ticker";

const FactsinNumber = () => {
  return (
    <>
      <div className=" bg-primary rounded-[20px] py-[60px] md:px-[72px] px-2 relative overflow-hidden">
        <img src={Shadow} className=" absolute left-0 top-0" alt="" />
        <div className=" z-10 relative">
          <h1 className=" font-worksans font-bold md:text-[50px] text-[35px] text-surface text-center">
            Facts in numbers
          </h1>
          <p className=" font-worksans font-normal text-[16px] text-surface text-center mt-[20px] max-w-[712px] mx-auto">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </p>
          <div className=" flex justify-center flex-wrap   gap-8 w-auto mt-[70px]">
            <div className=" bg-surface rounded-[20px] p-[16px] w-full md:max-w-[240px] max-w-[300px]">
              <div className="flex items-center gap-x-3 font-worksans">
                <CarFront
                  className="bg-accent text-white rounded-[12px] w-[60px] h-auto p-2"
                  size={48}
                />
                <div>
                  <div className=" flex items-center">
                    <NumberTicker
                      value={540}
                      className="uppercase font-bold text-[24px]"
                    />
                    <span className="uppercase font-bold text-[24px]">+</span>
                  </div>
                  <p className=" font-semibold text-[16px] text-text-muted">
                    Cars
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-surface rounded-[20px] p-[16px] w-full md:max-w-[240px] max-w-[300px] ">
              <div className="flex items-center gap-x-3 font-worksans">
                <UserCheck
                  className="bg-accent text-white rounded-[12px] w-[60px] h-auto p-2"
                  size={48}
                />
                <div>
                  <div className=" flex items-center">
                    <NumberTicker
                      value={20}
                      className="uppercase font-bold text-[24px]"
                    />
                    <span className="uppercase font-bold text-[24px]">+</span>
                  </div>
                  <p className=" font-semibold text-[16px] text-text-muted">
                    Customers
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-surface rounded-[20px] p-[16px] w-full md:max-w-[240px] max-w-[300px] ">
              <div className="flex items-center gap-x-3 font-worksans">
                <CalendarCheck
                  className="bg-accent text-white rounded-[12px] w-[60px] h-auto p-2"
                  size={48}
                />
                <div>
                  <div className=" flex items-center">
                    <NumberTicker
                      value={25}
                      className="uppercase font-bold text-[24px]"
                    />
                    <span className="uppercase font-bold text-[24px]">+</span>
                  </div>
                  <p className=" font-semibold text-[16px] text-text-muted">
                    Years
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-surface rounded-[20px] p-[16px] w-full md:max-w-[240px] max-w-[300px] ">
              <div className="flex items-center gap-x-3 font-worksans">
                <CircleGauge
                  className="bg-accent text-white rounded-[12px] w-[60px] h-auto p-2"
                  size={48}
                />
                <div>
                  <div className=" flex items-center">
                    <NumberTicker
                      value={20}
                      className="uppercase font-bold text-[24px]"
                    />
                    <span className="font-bold text-[24px]">m+</span>
                  </div>
                  <p className=" font-semibold text-[16px] text-text-muted">
                    Miles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactsinNumber;
