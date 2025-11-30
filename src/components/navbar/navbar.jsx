import { BsFillTelephoneFill } from "react-icons/bs";
import { Menu } from "lucide-react";
import logo from "../../assets/Logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet.jsx";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Vehicles",
    href: "/vehicles",
  },
  {
    label: "Details",
    href: "/details",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export function SidebarResponsive() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" cursor-pointer md:hidden block" />
      </SheetTrigger>
      <SheetContent className="w-[250px]">
        <div className=" p-6 py-14">
          <ul className=" mx-auto flex flex-col justify-center gap-x-8 text-text-main font-inter font-medium space-y-2">
            {links.map((link) => (
              <li key={link.href} className="">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className=" flex items-center gap-x-2 absolute bottom-2">
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
      </SheetContent>
    </Sheet>
  );
}

const Navbar = () => {
  return (
    <nav>
      <div className=" flex items-center justify-between md:py-[28px] py-[17px]">
        <img src={logo} className="" alt="" />
        <ul className=" mx-auto flex justify-center gap-x-8 text-text-main font-inter font-medium ">
          {links.map((link) => (
            <li key={link.href} className="  md:block hidden">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <SidebarResponsive />
        <div className="md:block hidden">
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
      </div>
    </nav>
  );
};

export default Navbar;
