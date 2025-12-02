import { de } from "date-fns/locale";
import logo1 from "../../../assets/vehicles/logos/Logo-1.png";
import logo2 from "../../../assets/vehicles/logos/Logo-2.png";
import logo3 from "../../../assets/vehicles/logos/Logo-3.png";
import logo4 from "../../../assets/vehicles/logos/Logo-4.png";
import logo5 from "../../../assets/vehicles/logos/Logo-5.png";
import logo6 from "../../../assets/vehicles/logos/Logo.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const Logos = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <>
      <div className=" bg-graycus md:rounded-[40px] rounded-[20px] md:px-[40px] px-[20px] md:py-[60px] py-[35px]">
        <Carousel
          opts={{ align: "center", loop: true }}
          plugins={[plugin.current]}
          className=" w-full mx-auto"
        >
          <CarouselContent className="">
            <CarouselItem className="lg:basis-1/6 md:basis-1/4 basis-1/3 inline-flex justify-center">
              <img src={logo1} className="object-contain md:w-[95px]" alt="" />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/6 md:basis-1/4 basis-1/3 inline-flex justify-center">
              <img src={logo2} className="object-contain md:w-[95px]" alt="" />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/6 md:basis-1/4 basis-1/3 inline-flex justify-center">
              <img src={logo3} className="object-contain md:w-[95px]" alt="" />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/6 md:basis-1/4 basis-1/3 inline-flex justify-center">
              <img src={logo4} className="object-contain md:w-[95px]" alt="" />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/6 md:basis-1/4 basis-1/3 inline-flex justify-center">
              <img src={logo5} className="object-contain md:w-[95px]" alt="" />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/6 md:basis-1/4 basis-1/3 inline-flex justify-center">
              <img src={logo6} className="object-contain md:w-[95px]" alt="" />
            </CarouselItem>
          </CarouselContent>
          <div className=" hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Logos;
