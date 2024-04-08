import ContactNew from "@/components/ui/contact-section-new";
import References from "@/components/ui/references";
import Malerbetrieb from "@/components/ui/malerbetrieb";
import Services from "@/components/ui/services";
import Partner from "@/components/ui/partner";
import Ausbildung from "@/components/ui/ausbildung";
import FAQ from "@/components/ui/FAQ";
import HERO from "@/components/ui/HERO";
import { ProfileForm } from "@/components/ui/profileform";
import Example from "@/components/ui/rueckruf";

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
