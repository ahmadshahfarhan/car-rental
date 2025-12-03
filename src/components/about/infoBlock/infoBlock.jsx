import HeroImage from "../../../assets/infoBlock/HowitWorks.png";

const InfoBlock = () => {
  return (
    <>
      <div className="flex flex-row-reverse flex-wrap justify-center items-center mx-auto gap-10 md:gap-16">
        <img
          src={HeroImage}
          alt=""
          className=" w-full max-w-[500px] lg:max-w-[44%] object-cover rounded-[12px]"
        />
        <div className="space-y-6 w-full max-w-[500px] lg:max-w-[44%] mx-6 md:mx-0">
          <div>
            <div className=" flex items-center gap-x-2">
              <span className=" bg-primary text-white rounded-full w-[32px] h-[32px] p-1 text-center font-worksans font-semibold">
                1
              </span>
              <h1 className="font-worksans font-semibold text-[20px]">
                Pilih Mobil yang Anda Inginkan
              </h1>
            </div>
            <p className="font-worksans font-normal text-[16px] mt-6 inline-flex">
              Jelajahi berbagai pilihan mobil sesuai kebutuhan Anda — mulai dari
              city car, SUV, hingga mobil keluarga.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <span className=" bg-primary text-white rounded-full w-[32px] h-[32px] p-1 text-center font-worksans font-semibold">
                2
              </span>
              <h1 className="font-worksans font-semibold text-[20px]">
                Tentukan Tanggal dan Lokasi
              </h1>
            </div>
            <p className="font-worksans font-normal text-[16px] mt-6">
              Pilih tanggal mulai dan pengembalian serta lokasi pengambilan
              mobil. Kami melayani antar-jemput di area tertentu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBlock;
