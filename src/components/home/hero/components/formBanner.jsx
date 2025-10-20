const formBanner = () => {
  return (
    <>
      <section>
        <div className=" bg-surface rounded-[20px] w-[416px]">
          <form className=" p-[40px] flex flex-col justify-center items-center">
            <label
              htmlFor=""
              className=" font-worksans font-semibold text-[28px] text-text-main"
            >
              Book your car
            </label>
             <button className="btn-orange w-full">Book now</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default formBanner;
