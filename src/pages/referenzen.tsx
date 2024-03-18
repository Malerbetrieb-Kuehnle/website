import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// Import the images
import MetzgereiRumpel from "../assets/Metzgerei_Rumpel_Bruckmühl.jpg";
import Wohnhaus_Hohenthann from "../assets/Wohnhaus_Hohenthann.jpg";
import Wohnhaus_Bad_Aibling from "../assets/Wohnhaus _Bad_Aibling.jpg";
import Bauernhof_Brannenburg from "../assets/Bauernhof_Brannenburg.jpg";
import Bauernhof_Oberpframmern from "../assets/Bauernhof_Oberpframmern.jpg";

const images = [
    MetzgereiRumpel,
    Wohnhaus_Hohenthann,
    Wohnhaus_Bad_Aibling,
    Bauernhof_Brannenburg,
    Bauernhof_Oberpframmern,
    MetzgereiRumpel,
    Wohnhaus_Hohenthann,
    Wohnhaus_Bad_Aibling,
    Bauernhof_Brannenburg,
    Bauernhof_Oberpframmern,
    MetzgereiRumpel,
    Wohnhaus_Hohenthann,
    Wohnhaus_Bad_Aibling,
    Bauernhof_Brannenburg,
    Bauernhof_Oberpframmern,
  ];

export default function Referenzen(){
    return (<div>
         {/* Referenzen */}
         <div className="container-standard flex flex-col">
          <h1 className="text-6xl mb-6 mt-6 font-bold text-center">
            Referenzen.
          </h1>
          <ParallaxScroll images={images} />
        </div>
    </div>)
}