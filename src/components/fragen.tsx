import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/lib/utils";
import { faqItems } from "@/constants";

export default function Faq() {
  return (
    <div className="relative h-fit overflow-hidden flex max-w-screen-xl mx-auto rounded-[15px] mb-32">
      <BackgroundGradientAnimation className="z-0">
        <div className="flex flex-col sm:p-20 pt-16 px-4">
          <Reveal
            keyframes={customAnimation}
            cascade
            triggerOnce
            duration={500}
          >
            <h2 className="text-4xl pb-4 sm:text-5xl font-bold tracking-tight text-gray-900 z-10">
              Noch Fragen?
            </h2>
          </Reveal>
          <Accordion
            type="single"
            collapsible
            className="overflow-x-auto w-full z-10 mt-6 text-gray-600"
          >
            <Reveal
              keyframes={customAnimation}
              cascade
              duration={300}
              triggerOnce
            >
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Reveal>
          </Accordion>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
