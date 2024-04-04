import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

const contact_details = [
  {
    name: "Email",
    description: "malerbetrieb.kuehnle@gmx.de",
    icon: FaEnvelope,
    link: "mailto:malerbetrieb.kuehnle@gmx.de",
  },
  {
    name: "Instagram",
    description: "malerbetrieb_kuehnle",
    icon: FaInstagram,
    link: "https://www.instagram.com/malerbetrieb_kuehnle/",
  },
  {
    name: "Telefon",
    description: "Büro: +49 8061 93 98 333\nMobil: +49 172 85 17 479",
    icon: FaPhone,
  },
  {
    name: "Adresse",
    description: "Ebersberger Straße 75\n83043 Bad Aibling",
    icon: FaMapMarkerAlt,
  },
];

export default function ContactNew() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            So erreichen Sie uns.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bei Fragen oder für weitere Informationen stehen wir Ihnen gerne zur
            Verfügung.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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
                <dd className="mt-2 text-base leading-7 text-gray-500">
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
        </div>
      </div>
    </div>
  );
}
