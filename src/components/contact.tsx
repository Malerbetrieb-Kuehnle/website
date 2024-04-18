import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/lib/utils";
import CallBack from "@/components/callback";

export default function Contact() {
  return (
    <>
      <div className="mb-10 max-w-7xl mx-auto">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <Reveal keyframes={customAnimation} cascade triggerOnce duration={500}>
              <h2 className=" text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 text-balance">
                So erreichen Sie uns.
              </h2>
              <p className="  mt-6 text-lg leading-8 text-gray-600">
                Haben Sie Fragen oder benötigen Sie weitere Informationen? Gerne
                können Sie einen Rückruf vereinbaren, damit wir Ihnen persönlich
                weiterhelfen können. Falls Sie es bevorzugen, erreichen Sie uns
                natürlich auch per E-Mail. Wir sind für Sie da und unterstützen
                Sie gerne bei Ihren Anliegen.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <Reveal keyframes={customAnimation} triggerOnce delay={800} duration={500}>
        <CallBack />
      </Reveal>
    </>
  );
}
