import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";

// Scroll to the top of the Page when pressing any Link
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const HERO = () => {
  return (
    <div className="container-waves flex flex-col items-center justify-center border-2">

    <WavyBackground className="max-w-4xl mx-auto ">
      <h2 className="md:text-2xl text-xl mb-4 text-center">
        Malerbetrieb Kühnle
      </h2>

      <h1 className="md:text-7xl text-4xl font-bold text-center">
        Farbe schafft{" "}
        <span className="bg-gradient-to-r from-mbblue to-mbgreen text-transparent bg-clip-text">
          Atmosphäre
        </span>
        .
      </h1>
      <div className="flex justify-center pt-8">
        <Link to={"/kontakt"} onClick={scrollToTop}>
          <Button variant="default">Kontakt</Button>
        </Link>
      </div>
    </WavyBackground>
    </div>
  );
};

export default HERO;