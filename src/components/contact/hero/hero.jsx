import { Link } from "react-router-dom";
import FormHero from "./components/formHero";
import Testing from "../../../assets/hero/new.png";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

function Hero() {
  return (
    <>
      <div>
        <h1 className="md:text-[50px] text-[32px] font-bold font-worksans text-center mt-6 text-main ">
          Contact Us
        </h1>
        <div className=" flex items-center gap-2 justify-center">
          <Link rel="stylesheet" to="/">
            <button className="font-worksans font-normal text-[20px] text-graycus2 cursor-pointer">
              Home
            </button>
          </Link>
          <span className="font-worksans font-normal text-[20px] text-graycus2">
            /
          </span>
          <Link rel="stylesheet" to="/contact">
            <button className="font-worksans font-normal text-[20px] text-main cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between mx-auto mt-[60px] gap-5">
          <div className="flex-1">
            <FormHero />
          </div>

          <div className="w-full flex justify-end">
            <img
              className="rounded-[20px] object-cover 
                 w-full max-w-4xl sm:h-[350px] md:h-[480px]"
              src={Testing}
              alt=""
            />
          </div>
        </div>
        <div className=" md:flex sm:flex-nowrap flex-nowrap space-y-3 justify-between gap-4 mt-[60px]">
          <div className=" flex gap-2">
            <MapPin className=" bg-accent rounded-full text-surface p-3 w-14 h-14" />
            <div className="font-worksans text-[16px]">
              <span className=" font-normal">Address</span>
              <h2 className=" font-semibold">Oxford Ave. Cary, NC 27511</h2>
            </div>
          </div>
          <div className=" flex gap-2">
            <Mail className=" bg-accent rounded-full text-surface p-3 w-14 h-14" />
            <div className=" font-worksans text-[16px]">
              <span className=" font-normal">Email</span>
              <h2 className=" font-semibold">nwiger@yahoo.com</h2>
            </div>
          </div>
          <div className=" flex gap-2">
            <Phone className=" bg-accent rounded-full text-surface p-3 w-14 h-14" />
            <div className=" font-worksans text-[16px]">
              <span className=" font-normal">Phone</span>
              <h2 className=" font-semibold">+996 247-1680</h2>
            </div>
          </div>
          <div className=" flex gap-2">
            <Clock className=" bg-accent rounded-full text-surface p-3 w-14 h-14" />
            <div className=" font-worksans text-[16px]">
              <span className=" font-normal">Opening hours</span>
              <h2 className=" font-semibold">Sun-Mon: 10am - 10pm</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
