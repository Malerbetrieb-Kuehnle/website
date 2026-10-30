import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants";

export default function Faq() {
  return (
    <section className="abschnitt grid gap-y-8 lg:grid-cols-12">
      <h2 className="titel-mittel lg:col-span-4">Noch Fragen?</h2>
      <Accordion type="single" collapsible className="border-t lg:col-span-8">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-serif text-xl font-normal">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
