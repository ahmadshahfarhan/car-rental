import { MapPinned, CarFront, Wallet } from "lucide-react";

const Advantages = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-center mx-auto font-inter font-normal text-[16px] space-y-3">
          <MapPinned
            size={64}
            strokeWidth={3.6}
            absoluteStrokeWidth
            className="mx-auto"
          />
          <h1 className=" font-semibold font-worksans text-[24px]">
            Availability
          </h1>
          <p className=" text-[13px] font-inter font-normal w-[357px]">
            Kami siap melayani kapan pun Anda butuh. Armada kami tersedia setiap
            hari dengan berbagai pilihan mobil sesuai kebutuhan Anda.
          </p>
        </div>

        <div className=" text-center mx-auto font-inter font-normal text-[16px] space-y-3">
          <CarFront
            size={64}
            strokeWidth={3.6}
            absoluteStrokeWidth
            className=" mx-auto"
          />
          <h1 className="font-semibold font-worksans text-[24px]">Comfort</h1>
          <p className="text-[13px] font-inter font-normal w-[357px]">
            Nikmati perjalanan tanpa khawatir. Setiap mobil kami dirawat secara
            rutin untuk memastikan pengalaman berkendara yang nyaman dan aman.
          </p>
        </div>

        <div className=" text-center mx-auto font-inter font-normal text-[16px] space-y-3">
          <Wallet
            size={64}
            strokeWidth={3.6}
            absoluteStrokeWidth
            className=" mx-auto"
          />
          <h1 className="font-semibold font-worksans text-[24px]">Savings </h1>
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
