import logo1 from "../../../assets/vehicles/logos/Logo-1.png"
import logo2 from "../../../assets/vehicles/logos/Logo-2.png"
import logo3 from "../../../assets/vehicles/logos/Logo-3.png"
import logo4 from "../../../assets/vehicles/logos/Logo-4.png"
import logo5 from "../../../assets/vehicles/logos/Logo-5.png"
import logo6 from "../../../assets/vehicles/logos/Logo.png"

const Logos = () => {
    return (
        <>
            <div className=" bg-graycus rounded-[40px] flex justify-between px-[40px] py-[60px]">
                <img src={logo1} className="object-contain" alt="" />
                <img src={logo2} className="object-contain" alt="" />
                <img src={logo3} className="object-contain" alt="" />
                <img src={logo4} className="object-contain" alt="" />
                <img src={logo5} className="object-contain" alt="" />
                <img src={logo6} className="object-contain" alt="" />

            </div>
        </>
    )
}

export default Logos;