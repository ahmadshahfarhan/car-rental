const CtaSectionForm = () => {
  return (
    <>
      <form action="">
        <div className=" flex justify-between items-center gap-x-3 bg-surface p-2 px-4 rounded-[20px] w-full max-w-[460px]">
          <input className=" placeholder:font-inter placeholder:font-semibold placeholder:text-[16px] border-0 outline-0 font-inter" placeholder="City" type="text" />
          <button
            type="button"
            className=" bg-accent text-surface rounded-[12px] font-inter font-semibold text-[16px] py-3 px-6 hover:bg-orange-600 transition-all cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default CtaSectionForm;
