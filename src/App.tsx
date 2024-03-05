import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function App() {
  return (
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Malerbetrieb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <main>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Frage 1</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Frage 2</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Frage 3</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p>
            Hallo noch ein <b>Text der Fett ist</b>.
          </p>
        </div>
      </main>
      <footer>Das ist der Footer.</footer>
    </html>
  );
}

export default App;
