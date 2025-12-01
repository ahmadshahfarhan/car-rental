import { MapPinned, CarFront, Wallet } from "lucide-react";

const Advantages = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-13 md:gap-0">
        <div className="text-center mx-auto font-inter font-normal text-[16px] space-y-3">
          <MapPinned
            strokeWidth={1.5}
            absoluteStrokeWidth
            className="mx-auto w-[54px] h-auto"
          />
          <h1 className=" font-semibold font-worksans md:text-[24px] text-[22px]">
            Availability
          </h1>
          <p className=" text-[13px] font-inter font-normal w-[357px]">
            Kami siap melayani kapan pun Anda butuh. Armada kami tersedia setiap
            hari dengan berbagai pilihan mobil sesuai kebutuhan Anda.
          </p>
        </div>

        <div className=" text-center mx-auto font-inter font-normal text-[16px] space-y-3">
          <CarFront
            strokeWidth={1.5}
            absoluteStrokeWidth
            className="mx-auto w-[54px] h-auto"
          />
          <h1 className="font-semibold font-worksans md:text-[24px] text-[22px]">
            Comfort
          </h1>
          <p className="text-[13px] font-inter font-normal w-[357px]">
            Nikmati perjalanan tanpa khawatir. Setiap mobil kami dirawat secara
            rutin untuk memastikan pengalaman berkendara yang nyaman dan aman.
          </p>
        </div>

        <div className=" text-center mx-auto font-inter font-normal text-[16px] space-y-3">
          <Wallet
            strokeWidth={1.5}
            absoluteStrokeWidth
            className=" mx-auto w-[54px] h-auto"
          />
          <h1 className="font-semibold font-worksans md:text-[24px] text-[22px]">
            Savings{" "}
          </h1>
          <p className="text-[13px] font-inter font-normal w-[357px]">
            Dapatkan harga sewa terbaik tanpa biaya tersembunyi. Kami menawarkan
            tarif yang transparan dan kompetitif untuk setiap perjalanan Anda.
          </p>
        </div>
      </div>
    </>
  );
};

export default Advantages;
