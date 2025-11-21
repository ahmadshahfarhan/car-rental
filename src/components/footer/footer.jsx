import logo from "../../assets/logo.png";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-transparent p-2 mt-[120px] mb-[20px]">
        <div className=" flex justify-between flex-wrap">
          <img src={logo} className=" flex object-scale-down" alt="" />
          <div className=" flex gap-2">
            <MapPin
              className=" bg-accent rounded-full text-surface p-2"
              size={40}
            />
            <div className="font-worksans text-[16px]">
              <span className=" font-normal">Address</span>
              <h2 className=" font-semibold">Oxford Ave. Cary, NC 27511</h2>
            </div>
          </div>
          <div className=" flex gap-2">
            <Mail
              className=" bg-accent rounded-full text-surface p-2"
              size={40}
            />
            <div className=" font-worksans text-[16px]">
              <span className=" font-normal">Email</span>
              <h2 className=" font-semibold">nwiger@yahoo.com</h2>
            </div>
          </div>
          <div className=" flex gap-2">
            <Phone
              className=" bg-accent rounded-full text-surface p-2"
              size={40}
            />
            <div className=" font-worksans text-[16px]">
              <span className=" font-normal">Phone</span>
              <h2 className=" font-semibold">+996 247-1680</h2>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-8 mt-16">
          <div>
            <p className=" font-worksans font-semibold text-[20px] max-w-[270px] leading-[23px]">
              Kami siap membantu Anda 24/7 untuk memenuhi kebutuhan penyewaan
              mobil Anda. Hubungi kami sekarang!
            </p>
            <ul className=" flex items-center gap-x-3 mt-4">
              <li>
                <Facebook
                  className="bg-main rounded-full p-1 text-surface"
                  size={34}
                />
              </li>
              <li>
                <Instagram
                  className="bg-main rounded-full p-1 text-surface"
                  size={34}
                />
              </li>
              <li>
                <Twitter
                  className="bg-main rounded-full p-1 text-surface"
                  size={34}
                />
              </li>
              <li>
                <Youtube
                  className="bg-main rounded-full p-1 text-surface"
                  size={34}
                />
              </li>
            </ul>
          </div>
          <div>
            <label className=" font-worksans font-semibold text-[20px]">
              Useful links
            </label>
            <ul className=" font-worksans font-normal text-[16px] mt-4 space-y-1">
              <li>About us</li>
              <li>Contact us</li>
              <li>Blog</li>
              <li>F.A.Q</li>
            </ul>
          </div>
          <div>
            <label className=" font-worksans font-semibold text-[20px]">
              Vehicles
            </label>
            <ul className="font-worksans font-normal text-[16px] mt-4 space-y-1">
              <li>SUV</li>
              <li>Cars</li>
              <li>Trucks</li>
              <li>Minivan</li>
              <li>Pickup</li>
            </ul>
          </div>
        </div>
        <h1 className=" font-worksans text-normal text-center mt-12 text-muted text-[13px]">
          Copyright © 2025 All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
