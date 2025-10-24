import FormBanner from "./components/formBanner";

const banner = () => {
  return (
    <>
      <section>
        <div className=" bg-primary rounded-[40px] px-[72px] h-[660px] flex justify-center items-center">
          <div className=" flex items-center justify-center">
            <div className=" space-y-[33px]">
              <h1 className=" font-worksans font-bold text-[60px] text-surface max-w-[686px] leading-[72px]">
                Experience the road like never before
              </h1>
              <p className=" font-worksans font-normal text-[16px] max-w-[464px] text-surface leading-[23px]">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor tristique et gravida. Quis nunc interdum gravida
                ullamcorper
              </p>
              <button className="btn-orange">View all cars</button>
            </div>
          </div>
          <FormBanner />
        </div>
      </section>
    </>
  );
};

export default banner;
