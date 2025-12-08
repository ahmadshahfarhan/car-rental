import { HeroVideoDialog } from "../../ui/hero-video-dialog";
import { NumberTicker } from "../../ui/number-ticker";

const DialogVideo = () => {
  return (
    <>
      <div>
        <div className="relative">
          <HeroVideoDialog
            className=""
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        <div className="flex md:justify-between justify-center flex-wrap gap-8 text-center md:mt-20 mt-14">
          <div>
            <div className="text-primary font-worksans font-bold md:text-7xl text-5xl flex justify-center">
              <NumberTicker value={20} />
              <span>k+</span>
            </div>
            <span className=" font-worksans font-bold md:text-xl text-lg">
              Happy customers
            </span>
          </div>
          <div>
            <div className="text-primary font-worksans font-bold md:text-7xl text-5xl flex justify-center">
              <NumberTicker value={540} />
              <span>+</span>
            </div>
            <span className=" font-worksans font-bold md:text-xl text-lg">
              Count of cars
            </span>
          </div>
          <div>
            <div className="text-primary font-worksans font-bold md:text-7xl text-5xl flex justify-center">
              <NumberTicker value={25} />
              <span>+</span>
            </div>
            <span className=" font-worksans font-bold md:text-xl text-lg">
              Years of experince
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogVideo;
