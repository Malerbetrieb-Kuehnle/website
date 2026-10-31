import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/ui/reveal";
import { faqItems } from "@/constants";

export default function Faq() {
  return (
    <section className="abschnitt grid gap-y-8 lg:grid-cols-12">
      <Reveal className="lg:col-span-4">
        <h2 className="titel-mittel">Noch Fragen?</h2>
      </Reveal>
      <Reveal verzoegerung={100} className="lg:col-span-8">
        <Accordion type="single" collapsible className="border-t">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-display text-xl font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-lg leading-8 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
