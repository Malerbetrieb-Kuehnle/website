import { useState } from "react";
import Reveal from "@/components/ui/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { service_innenbereich, service_aussenbereich } from "@/constants";
import { cn } from "@/lib/utils";

const bereiche = [
  {
    id: "innenbereich",
    title: "Innenbereich",
    leistungen: service_innenbereich,
  },
  {
    id: "aussenbereich",
    title: "Außenbereich",
    leistungen: service_aussenbereich,
  },
];

export default function Services({ seite = false }: { seite?: boolean }) {
  const [bereich, setBereich] = useState(bereiche[0].id);
  const [active, setActive] = useState(0);
  const Titel = seite ? "h1" : "h2";
  const leistungen = bereiche.find((b) => b.id === bereich)!.leistungen;

  return (
    <section className="grid lg:grid-cols-2">
      {/* Bild zur gewählten Leistung, bleibt beim Scrollen stehen */}
      <div className="sticky top-[var(--header)] hidden h-[calc(100svh-var(--header))] overflow-hidden bg-mbkalk lg:block">
        {leistungen.map((item, index) => (
          <img
            key={bereich + item.title}
            src={item.image}
            alt={index === active ? item.title : ""}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              index === active ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
          />
        ))}
      </div>

      <div className="gutter py-20 lg:py-16">
        <Reveal>
          <Titel className="titel-gross">Service</Titel>
        </Reveal>
        <Reveal verzoegerung={100}>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Von der Farbberatung bis zur fertigen Fassade: unsere Leistungen für
            innen und außen.
          </p>
        </Reveal>

        <Tabs
          value={bereich}
          onValueChange={(value) => {
            setBereich(value);
            setActive(0);
          }}
          className="mt-10"
        >
          <TabsList className="h-auto gap-x-6 rounded-none bg-transparent p-0">
            {bereiche.map((b) => (
              <TabsTrigger
                key={b.id}
                value={b.id}
                className="rounded-none border-b-2 border-transparent px-0 py-2 text-lg font-normal text-muted-foreground data-[state=active]:border-foreground data-[state=active]:shadow-none"
              >
                {b.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {bereiche.map((b) => (
            <TabsContent key={b.id} value={b.id} className="mt-6">
              <ul role="list">
                {b.leistungen.map((item, index) => (
                  <li
                    key={item.title}
                    onMouseEnter={() => setActive(index)}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 border-t py-4 last:border-b sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
                  >
                    <h3 className="text-xl max-sm:hyphens-auto">
                      <span className="lg:hidden">{item.title}</span>
                      {/* Großes Bild gibt es nur am Desktop, nur dort wählbar */}
                      <button
                        type="button"
                        aria-pressed={index === active}
                        onClick={() => setActive(index)}
                        onFocus={() => setActive(index)}
                        className={cn(
                          "hidden text-left font-semibold transition-colors lg:inline",
                          index === active && "text-mbgreen"
                        )}
                      >
                        {item.title}
                      </button>
                    </h3>
                    <p className="col-start-1 row-start-2 mt-2 leading-6 text-muted-foreground sm:col-start-2 sm:row-start-1 sm:mt-0">
                      {item.description}
                    </p>
                    <img
                      src={item.image}
                      alt=""
                      className="foto col-start-2 row-span-2 row-start-1 h-20 w-20 object-cover sm:col-start-3 lg:hidden"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
