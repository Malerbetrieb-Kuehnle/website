import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { scrollToTop } from "@/lib/utils";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-[75vh] max-w-screen-xl max-h-[1000px] mt-2.5 mb-40 mx-auto rounded-[15px] flex flex-col border-2 border-[#f5f5f5]">
      <WavyBackground className="max-w-4xl mx-auto">
        <Reveal keyframes={customAnimation} cascade triggerOnce>
          <span className="text-2xl text-center flex flex-col">
            Malerbetrieb Kühnle
          </span>
          <h1 className=" md:text-7xl text-5xl font-bold text-center mt-4 mb-8">
            Farbe schafft{" "}
            <span className="bg-gradient-to-r from-mbblue to-mbgreen text-transparent bg-clip-text">
              Atmosphäre
            </span>
            .
          </h1>
          <div className="flex justify-center">
            <Link to={"/kontakt"} onClick={scrollToTop}>
              <Button className="text-md">Kontakt</Button>
            </Link>
          </div>
        </Reveal>
      </WavyBackground>
    </div>
  );
}
