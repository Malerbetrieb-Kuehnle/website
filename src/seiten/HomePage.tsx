import { lazy } from "react";
import Start from "@/components/start";
const Contact = lazy(() => import("@/components/contact"));
const References = lazy(() => import("@/components/references"));
const Malerbetrieb = lazy(() => import("@/components/malerbetrieb"));
const Services = lazy(() => import("@/components/services"));
const Partner = lazy(() => import("@/components/partner"));
const Ausbildung = lazy(() => import("@/components/ausbildung"));
const Faq = lazy(() => import("@/components/fragen"));

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
