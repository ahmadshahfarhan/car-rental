import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className=" flex items-center py-[28px]">
        <img src={logo} alt="" />
        <ul className=" flex-1 flex justify-center gap-x-8 text-text-main font-inter font-medium">
          <li>
            <a href="">Home</a>
          </li>
          <li className=" text-text-main font-bold active">
            <a href="">Vehicles</a>
          </li>
          <li>
            <a href="">Details</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div className=" flex items-center gap-x-2">
          <BsFillTelephoneFill className=" text-white bg-primary p-1 text-2xl rounded-full" />
          <div className=" flex flex-col">
            <span className=" text-text-main font-worksans font-normal font text-sm">
              Need Help?
            </span>
            <span className=" text-text-main font-worksans font-semibold text-sm">
              +996 247-1680
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
