import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

import CallBack from "./rueckruf";

export default function ContactNew() {
  return (
    <>
      <div className="mb-10 max-w-7xl mx-auto">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <Reveal keyframes={customAnimation} cascade triggerOnce>
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

          {/* <div className="animate-slidein700 opacity-0 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {contact_details.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-mbgreen">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.link ? (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {window.innerWidth < 640 ? (
                        <>
                          <p>{feature.description.split("\n")[0]}</p>
                          <p>{feature.description.split("\n")[1]}</p>
                          <p>{feature.description.split("\n")[2]}</p>
                          <p>{feature.description.split("\n")[3]}</p>
                        </>
                      ) : (
                        feature.description.split("\n").map((line, index) => (
                          <p
                            key={index}
                            className={`${index !== 0 ? "mt-2" : ""}`}
                          >
                            {line}
                          </p>
                        ))
                      )}
                    </a>
                  ) : (
                    feature.description.split("\n").map((line, index) => (
                      <p key={index} className={`${index !== 0 ? "mt-2" : ""}`}>
                        {line}
                      </p>
                    ))
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
        </div>
      </div>
      <Reveal keyframes={customAnimation} triggerOnce delay={800}>
        <CallBack />
      </Reveal>
    </>
  );
}
