import Select from "react-select";

const car = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "gray", label: "Gray" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "pink", label: "Pink" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    boxShadow: "none",
    border: "none",
    minHeight: "45px",
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    boxShadow: "none",
    padding: "10px",
    backdropFilter: "blur(2px)", 
  }),
};

const FormBanner = () => {
  return (
    <section>
      <div className="bg-surface rounded-[20px] w-[416px]">
        <form className="p-[40px] flex flex-col justify-center items-center gap-4">
          <label className="font-worksans font-semibold text-[28px] text-text-main">
            Book your car
          </label>

          <div className="w-full">
            <Select
              options={car}
              placeholder="Select car type"
              classNamePrefix="react-select"
              styles={customStyles}
            />
          </div>

          <button
            type="submit"
            className="btn-orange w-full mt-4 py-2 rounded-md text-white font-semibold"
          >
            Book now
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormBanner;
