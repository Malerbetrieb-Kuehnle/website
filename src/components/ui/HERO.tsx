import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";

// Scroll to the top of the Page when pressing any Link
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const HERO = () => {
  return (
    <div className="relative overflow-hidden h-[75vh] max-w-screen-xl max-h-[1000px] mt-2.5 mb-40 mx-auto rounded-[15px] flex flex-col border-2 border-[#f5f5f5]">
      <WavyBackground className="max-w-4xl mx-auto">
        <h2 className="animate-slidein300 opacity-0 text-2xl text-center">Malerbetrieb Kühnle</h2>

        <h1 className="animate-slidein500 opacity-0 md:text-7xl text-5xl font-bold text-center mt-4 mb-8">
          Farbe schafft{" "}
          <span className="bg-gradient-to-r from-mbblue to-mbgreen text-transparent bg-clip-text">
            Atmosphäre
          </span>
          .
        </h1>
        <div className="animate-slidein700 opacity-0 flex justify-center">
          <Link to={"/kontakt"} onClick={scrollToTop}>
            <Button variant="default">Kontakt</Button>
          </Link>
        </div>
      </WavyBackground>
    </div>
  );
};

export default HERO;