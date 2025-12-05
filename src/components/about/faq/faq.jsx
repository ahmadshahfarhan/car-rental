import { id } from "date-fns/locale/id";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const FaqData = [
  {
    id: 1,
    question: "How does it works?",
    answer:
      "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
  },
  {
    id: 2,
    question: "Can I rent a car without a credit card?",
    answer:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    id: 3,
    question: "What are the requirements for renting a car?",
    answer:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    id: 4,
    question:
      "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
    answer:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    id: 5,
    question:
      "Does Car Rental offer coverage products for purchase with my rental?",
    answer:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
];

const Faq = () => {
  return (
    <>
      <div>
        <h1 className="md:text-5xl text-3xl text-main font-worksans font-bold text-center">
          Top Car Rental Questions
        </h1>
        <div className=" mt-[40px]">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-5"
            defaultValue={FaqData[0].id}
          >
            {FaqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className=" border-[2.3px] border-border rounded-[20px] p-3 px-8 cursor-pointer"
              >
                <AccordionTrigger className=" font-worksans font-semibold text-xl cursor-pointer">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className=" font-worksans font-normal text-mf">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
