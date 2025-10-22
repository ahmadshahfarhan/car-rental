import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
  { id: 6, name: "Tom Cook" },
  { id: 7, name: "Wade Cooper" },
  { id: 8, name: "Tanya Fox" },
  { id: 9, name: "Arlene Mccoy" },
  { id: 10, name: "Devon Webb" },
];

const FormBanner = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <section>
      <div className="bg-surface rounded-[20px] w-[416px]">
        <form className="p-[40px] flex flex-col justify-center items-center gap-4">
          <label className="font-worksans font-semibold text-[28px] text-text-main">
            Book your car
          </label>

          <Combobox
            value={selected}
            onChange={(value) => setSelected(value)}
            onClose={() => setQuery("")}
          >
            <div className="relative w-full">
              <ComboboxButton className="w-full">
                <ComboboxInput
                  className={clsx(
                    "w-full rounded-[12px] border-none outline-none bg-alt py-2 pr-8 pl-3 text-[16px] text-text-main font-normal font-worksans"
                  )}
                  placeholder="Car type"
                  displayValue={(person) => person?.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </ComboboxButton>
              <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                <ChevronDownIcon className="size-5 fill-text-main group-data-hover:fill-text-muted" />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                "w-(--input-width) rounded-xl border border-white/5 backdrop-blur-2xl bg-white/5 p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                "transition duration-100 ease-in data-leave:data-closed:opacity-0"
              )}
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                >
                  <CheckIcon className="invisible size-4 text-green-300 group-data-selected:visible" />
                  <div className="text-[14px] text-text-main font-normal font-worksans">
                    {person.name}
                  </div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>

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
