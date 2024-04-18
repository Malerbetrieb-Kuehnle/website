import ContactNew from "@/components/contact-section-new";
import References from "@/components/references";
import Malerbetrieb from "@/components/malerbetrieb";
import Services from "@/components/services";
import Partner from "@/components/partner";
import Ausbildung from "@/components/ausbildung";
import FAQ from "@/components/FAQ";
import HERO from "@/components/HERO";

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
      <ContactNew />
    </>
  );
};
export default HomePage;
