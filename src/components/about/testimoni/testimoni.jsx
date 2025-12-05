import { Quote } from "lucide-react";
import Testing from "../../../assets/Icon.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { id } from "date-fns/locale/id";

const Testimonis = [
    {
        id: 1,
        name: "Emanuel Boyle",
        profesi: "Kuphal LLC",
        image: Testing,
        description: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque  "
    },
    {
        id: 2,
        name: "River Graves",
        profesi: "Glover - Orn",
        image: Testing,
        description: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula"
    },
    {
        id: 3,
        name: "Ryder Malone",
        profesi: "Haag LLC",
        image: Testing,
        description: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et"
    },
    {
        id: 4,
        name: "gea shinta",
        profesi: "Software engginer",
        image: Testing,
        description: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et"
    },
    {
        id: 5,
        name: "Ryder Malone",
        profesi: "Haag LLC",
        image: Testing,
        description: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et"
    },
]

const Testimoni = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    return (
        <>
            <div>
                <h1 className="md:text-5xl text-3xl text-main font-worksans font-bold text-center">Reviews from our customers</h1>
                <div className=" mt-[40px]">
                    <Carousel
                        opts={{ align: "center", loop: true }}
                        plugins={[plugin.current]}
                        className=" w-full mx-auto"
                    >
                        <CarouselContent>
                            {Testimonis.map((item) => (
                                <CarouselItem key={item.id} className="lg:basis-1/3 md:basis-1/2 sm:basis-1/2 basis-1/1 inline-flex justify-center">
                                    <div className="bg-graycus rounded-[20px] min-h-[470px] relative overflow-hidden">
                                        <div className="bg-primary/10 p-3 rounded-full inline-flex absolute md:top-10 top-9 left-12">
                                            <Quote size={24} className="text-primary" />
                                        </div>
                                        <div className="h-[330px] flex flex-col items-center justify-center px-14">
                                            <p className="text-center font-worksans font-medium  leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="bg-primary h-[140px] w-full absolute bottom-0 left-0 rounded-b-[20px]"></div>
                                        <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 w-[75px] h-[75px] rounded-full overflow-hidden shadow-xl border-4 border-surface bg-surface">
                                            <img
                                                src={item.image}
                                                className="w-full h-full object-cover"
                                                alt="profile"
                                            />
                                        </div>
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
                                            <p className=" font-worksans font-normal">{item.profesi}</p>
                                            <p className=" font-worksans font-semibold text-xl">{item.name}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Testimoni;