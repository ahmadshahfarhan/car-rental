import Shadow from "../../../assets/banner/CtaSection/shadow.png";
import Vector from "../../../assets/banner/CtaSection/Vector.png";
import FormInput from "./components/CtaSectionFormInput";

const CtaSection = () => {
  return (
    <>
      <div className=" bg-primary rounded-[20px] mb-5 py-[60px] px-[72px] relative overflow-hidden">
        <img src={Shadow} className=" absolute left-0" alt="" />
        <div className=" z-10 relative mx-auto">
          <div className=" flex items-center justify-between">
            <div className=" space-y-[37px]">
              <h1 className=" font-worksans font-bold text-[50px] text-surface text-start max-w-[630px] leading-[60px]">
                Enjoy every mile with adorable companionship.
              </h1>
              <p className=" font-worksans font-normal text-[16px] text-surface text-start mt-[20px] max-w-[540px]">
                Jadikan setiap perjalanan Anda lebih menyenangkan dengan layanan
                penyewaan mobil kami yang andal dan cepat.
              </p>
              <FormInput />
            </div>
            <img src={Vector} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaSection;
