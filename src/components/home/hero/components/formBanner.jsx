"use client";

import * as React from "react";
import { CheckIcon, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../../../ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "blitz",
    label: "Blitz",
  },
  {
    value: "strapi",
    label: "Strapi",
  },
];

const FormBanner = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  return (
    <section>
      <div className="bg-surface rounded-[20px] w-[416px]">
        <form className="p-[40px] flex flex-col justify-center items-center gap-4">
          <label className="font-worksans font-semibold text-[28px] text-text-main">
            Book your car
          </label>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between border-0 outline-none bg-gray-50 hover:bg-gray-100 py-4 font-normal text-[16px]"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Car type"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              style={{ minWidth: "var(--radix-popover-trigger-width)" }}
              className="w-full p-0 bg-surface shadow-gray-500 border-0 outline-0 rounded-xl"
            >
              <Command>
                <CommandInput
                  className=" placeholder:font-worksans placeholder:text-xs"
                  placeholder="Search car type"
                />
                <CommandList>
                  <CommandEmpty className=" font-worksans font-normal text-xs text-center py-2">
                    No car type found.
                  </CommandEmpty>
                  <CommandGroup className=" font-worksans">
                    {frameworks.map((framework) => (
                      <CommandItem
                        className="cursor-pointer flex-row-reverse justify-between"
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "h-4 w-4",
                            value === framework.value
                              ? "opacity-100 text-green-400"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

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
