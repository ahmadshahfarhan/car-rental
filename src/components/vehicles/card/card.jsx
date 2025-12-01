import { MoveRight } from "lucide-react";
import TesImage from "../../../assets/higlights/highlights.png";
import { SlidersVertical, Fuel, Snowflake } from "lucide-react";
import { cn } from "@/lib/utils"

import { useState } from "react";

const CategoryVehicle = [
    {
        title: "sedan",
        icons: "gambar icon",
    },
    {
        title: "Cabriolet",
        icons: "gambar Cabriolet"
    },
    {
        title: "Pickup",
        icons: "icon Pickup",
    },
    {
        title: "Suv",
        icons: "icon Suv"
    },
    {
        title: "Minivan",
        icons: "incons minivan"
    }
]

const CardItem = () => {
    return (
        <>
            {Array.from({ length: 9 }).map((_, i) => (
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

const Card = () => {
    const [activeButton, setActiveButton] = useState("all");

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    }
    return (
        <>
            <div>
                <h1 className=" text-[50px] font-bold font-worksans text-center ">Select a vehicle group</h1>
                <div className=" mt-[40px] flex flex-wrap gap-5 justify-center">
                    <button
                        onClick={() => handleClick("all")}
                        className={cn(
                            "transition-all rounded-[50px] px-[29.5px] py-[15.5px] font-worksans cursor-pointer",
                            {
                                "bg-primary text-surface": activeButton === "all",
                                "bg-graycus text-muted": activeButton !== "all"
                            }
                        )}>
                        All vehicles
                    </button>
                    {CategoryVehicle.map((category) => (
                        <button
                            onClick={() => handleClick(category.title)}
                            key={category.title}
                            className={cn(
                                "transition-all rounded-[50px] px-[29.5px] py-[15.5px] font-worksans cursor-pointer",
                                {
                                    "bg-primary text-surface": activeButton === category.title,
                                    "bg-graycus text-muted": activeButton !== category.title,
                                }
                            )}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
                <div className=" grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-y-7 mt-10">
                    <CardItem />
                </div>
            </div>
        </>
    )
}

export default Card;