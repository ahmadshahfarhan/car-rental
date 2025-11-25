import Shadow from "../../../assets/banner/CtaSection/shadow.png";
import Vector from "../../../assets/banner/CtaSection/Vector.png";
import FormInput from "./components/CtaSectionFormInput";

const CtaSection = () => {
  return (
    <>
      <div className="bg-primary rounded-[20px] mb-5 py-[60px] md:py-[50px] px-2 md:px-[50px] relative overflow-hidden">
        <img
          src={Shadow}
          className="absolute left-0 pointer-events-none"
          alt=""
        />
        <div className="relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">
          <div className="w-full md:w-[55%] lg:w-[50%] space-y-6 text-center md:text-left">
            <h1 className="font-worksans font-bold text-[35px] md:text-[42px] lg:text-[50px] text-surface leading-[40px] md:leading-[50px] lg:leading-[60px]">
              Enjoy every mile with adorable companionship.
            </h1>
            <p className="font-worksans text-[16px] text-surface max-w-[540px] mx-auto md:mx-0">
              Jadikan setiap perjalanan Anda lebih menyenangkan dengan layanan
              penyewaan mobil kami yang andal dan cepat.
            </p>
            <div className="mx-auto md:mx-0 w-full max-w-[500px]">
              <FormInput />
            </div>
          </div>
          <img
            src={Vector}
            className="hidden md:block md:w-[42%] lg:w-[35%] object-contain"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CtaSection;
