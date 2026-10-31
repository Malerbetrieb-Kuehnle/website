import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import { faqGruppen } from "@/constants";

export default function Faq() {
  return (
    <section className="abschnitt grid gap-y-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Reveal art="titel">
          <h2 className="titel-mittel">
            <WortMaske text="Häufige Fragen" />
          </h2>
        </Reveal>
        <Reveal verzoegerung={100}>
          <p className="mt-4 max-w-xs text-lg leading-8 text-muted-foreground">
            Ihre Frage ist nicht dabei?{" "}
            <Link
              to="/kontakt/"
              className="text-foreground underline decoration-1 underline-offset-4 transition-colors hover:text-mbgreen"
            >
              Rufen Sie uns an oder fordern Sie einen Rückruf an.
            </Link>
          </p>
        </Reveal>
      </div>
      <div className="space-y-12 lg:col-span-8">
        {faqGruppen.map((gruppe) => (
          <Reveal key={gruppe.titel}>
            <h3 className="label">{gruppe.titel}</h3>
            <div className="mt-3 border-t">
              {gruppe.fragen.map((item) => (
                <details
                  key={item.question}
                  name="faq"
                  className="group border-b"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-x-6 py-5 text-xl font-medium transition-colors hover:text-mbgreen [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDownIcon
                      className="mt-1 h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-2xl pb-6 text-lg leading-8 text-muted-foreground motion-safe:group-open:animate-einblenden">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
