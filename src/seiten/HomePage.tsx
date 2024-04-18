import Start from "@/components/start";
import Contact from "@/components/contact";
import References from "@/components/references";
import Malerbetrieb from "@/components/malerbetrieb";
import Services from "@/components/services";
import Partner from "@/components/partner";
import Ausbildung from "@/components/ausbildung";
import Faq from "@/components/fragen";

const HomePage = () => {
  return (
    <>
      <Start />
      <Malerbetrieb />
      <Services />
      <References />
      <Ausbildung />
      <Partner />
      <Faq />
      <Contact />
    </>
  );
};
export default HomePage;
