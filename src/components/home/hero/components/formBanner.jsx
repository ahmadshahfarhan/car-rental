"use client";

import * as React from "react";
import { CheckIcon, ChevronDown, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../../ui/button";
import { Calendar } from "../../../ui/calendar";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "blitz", label: "Blitz" },
  { value: "strapi", label: "Strapi" },
];

const FormBanner = () => {
  const [open, setOpen] = React.useState(null);
  const [date, setDate] = React.useState();
  const [returnDate, setReturnDate] = React.useState();
  const [month, setMonth] = React.useState();

  const [value, setValue] = React.useState({
    carType: "",
    placeOfRental: "",
    placeOfReturn: "",
    rentalDate: "",
    returnDate: "",
  });

  return (
    <section>
      <div className="bg-surface rounded-[20px] w-[416px]">
        <form className="p-[40px] flex flex-col justify-center items-center gap-4">
          <label className="font-worksans font-semibold text-[28px] text-text-main">
            Book your car
          </label>

          {/* Car type */}
          <Popover
            open={open === "carType"}
            onOpenChange={(state) => setOpen(state ? "carType" : null)}
          >
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                aria-expanded={open === "carType"}
                className="w-full justify-between border-0 outline-none bg-gray-50 hover:bg-gray-100 py-4 font-normal text-[16px]"
              >
                {value.carType
                  ? frameworks.find((f) => f.value === value.carType)?.label
                  : "Car type"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 bg-surface shadow-gray-500 border-0 outline-0 rounded-xl">
              <Command>
                <CommandInput
                  placeholder="Search car type"
                  className="placeholder:font-worksans placeholder:text-xs"
                />
                <CommandList>
                  <CommandEmpty className="font-worksans font-normal text-xs text-center py-2">
                    No car type found.
                  </CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        className="cursor-pointer flex-row-reverse justify-between"
                        onSelect={(currentValue) => {
                          setValue((prev) => ({
                            ...prev,
                            carType:
                              currentValue === prev.carType ? "" : currentValue,
                          }));
                          setOpen(null);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "h-4 w-4",
                            value.carType === framework.value
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

          {/* place of rental */}
          <Popover
            open={open === "placeOfRental"}
            onOpenChange={(state) => setOpen(state ? "placeOfRental" : null)}
          >
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                aria-expanded={open === "placeOfRental"}
                className="w-full justify-between border-0 outline-none bg-gray-50 hover:bg-gray-100 py-4 font-normal text-[16px]"
              >
                {value.placeOfRental
                  ? frameworks.find(
                      (framework) => framework.value === value.placeOfRental
                    )?.label
                  : "Place of rental"}
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
                  placeholder="Search place of rental"
                />
                <CommandList>
                  <CommandEmpty className=" font-worksans font-normal text-xs text-center py-2">
                    No data type found.
                  </CommandEmpty>
                  <CommandGroup className=" font-worksans">
                    {frameworks.map((framework) => (
                      <CommandItem
                        className="cursor-pointer flex-row-reverse justify-between"
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue((prev) => ({
                            ...prev,
                            placeOfRental:
                              currentValue === prev.placeOfRental
                                ? ""
                                : currentValue,
                          }));
                          setOpen(null);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "h-4 w-4",
                            value.placeOfRental === framework.value
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

          {/* place of return */}
          <Popover
            open={open === "placeOfReturn"}
            onOpenChange={(state) => setOpen(state ? "placeOfReturn" : null)}
          >
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                aria-expanded={open === "placeOfReturn"}
                className="w-full justify-between border-0 outline-none bg-gray-50 hover:bg-gray-100 py-4 font-normal text-[16px]"
              >
                {value.placeOfReturn
                  ? frameworks.find(
                      (framework) => framework.value === value.placeOfReturn
                    )?.label
                  : "Place of return"}
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
                  placeholder="Search place of return"
                />
                <CommandList>
                  <CommandEmpty className=" font-worksans font-normal text-xs text-center py-2">
                    No data type found.
                  </CommandEmpty>
                  <CommandGroup className=" font-worksans">
                    {frameworks.map((framework) => (
                      <CommandItem
                        className="cursor-pointer flex-row-reverse justify-between"
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue((prev) => ({
                            ...prev,
                            placeOfReturn:
                              currentValue === prev.placeOfReturn
                                ? ""
                                : currentValue,
                          }));
                          setOpen(null);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "h-4 w-4",
                            value.placeOfReturn === framework.value
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

          {/* Rental Date */}
          <div className="flex flex-col gap-3 w-full">
            <div className="relative flex gap-2 font-worksans font-normal text-[16px]">
              <Input
                id="date"
                value={value.rentalDate ? value.rentalDate : "Rental date"}
                className="bg-gray-50 hover:bg-gray-100 py-4 font-normal text-[16px] outline-none border-0 outline-0"
                readOnly
              />
              <Popover
                open={open === "calendar"}
                onOpenChange={(state) => setOpen(state ? "calendar" : null)}
              >
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0 bg-surface shadow-gray-500 border-0 outline-0 rounded-xl"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    className=" font-normal font-worksans"
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      setMonth(selectedDate);
                      setValue((prev) => ({
                        ...prev,
                        rentalDate: formatDate(selectedDate),
                      }));
                      setOpen(null);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Rental Date */}
          <div className="flex flex-col gap-3 w-full">
            <div className="relative flex gap-2 font-worksans font-normal text-[16px]">
              <Input
                id="date"
                value={value.returnDate ? value.returnDate : "Return date"}
                className="bg-gray-50 hover:bg-gray-100 py-4 font-normal text-[16px] outline-none border-0 outline-0"
                readOnly
              />
              <Popover
                open={open === "returnCalendar"}
                onOpenChange={(state) => setOpen(state ? "returnCalendar" : null)}
              >
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0 bg-surface shadow-gray-500 border-0 outline-0 rounded-xl"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    className=" font-normal font-worksans"
                    mode="single"
                    selected={returnDate}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(selectedDate) => {
                      setReturnDate(selectedDate);
                      setMonth(selectedDate);
                      setValue((prev) => ({
                        ...prev,
                        returnDate: formatDate(selectedDate),
                      }));
                      setOpen(null);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
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
