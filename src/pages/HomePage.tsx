import Contact from "@/components/contact";
import References from "@/components/references";
import Malerbetrieb from "@/components/malerbetrieb";
import Services from "@/components/services";
import Partner from "@/components/partner";
import Ausbildung from "@/components/ausbildung";
import FAQ from "@/components/faq";
import HERO from "@/components/hero";

const HomePage = () => {
  return (
    <>
      <HERO />
      <Malerbetrieb />
      <Services />
      <References />
      <Ausbildung />
      <Partner />
      <FAQ />
      <Contact />
    </>
  );
};
export default HomePage;
