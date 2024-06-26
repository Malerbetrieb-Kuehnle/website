import { ProfileForm } from "@/components/ui/profileform";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

export default function CallBack() {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-2xl mb-8 max-w-7xl mx-auto"
      id="callback"
    >
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rückruf vereinbaren.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Lassen Sie sich bequem von uns zurückrufen. Wir melden uns so
              schnell wie möglich bei Ihnen.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <ProfileForm />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {/* Instagram*/}
            <div className="flex sm:flex-col sm:items-start flex-row items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 h-10 w-10">
                <FaInstagram
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dl className="sm:ml-0 ml-4">
                <dt className="sm:mt-4 mt-2 font-semibold text-white">
                  Instagram
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  <a
                    href="https://www.instagram.com/malerbetrieb_kuehnle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    malerbetrieb_kuehnle
                  </a>
                </dd>
              </dl>
            </div>

            {/* Email */}
            <div className="flex sm:flex-col sm:items-start flex-row items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 h-10 w-10">
                <FaEnvelope className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dl className="sm:ml-0 ml-4">
                <dt className="sm:mt-4 mt-2 font-semibold text-white">Email</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  <a href="mailto:malerbetrieb.kuehnle@gmx.de">
                    malerbetrieb.kuehnle@gmx.de
                  </a>
                </dd>
              </dl>
            </div>

            {/* Address */}
            <div className="flex sm:flex-col sm:items-start flex-row items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 h-10 w-10">
                <FaMapMarkerAlt
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dl className="sm:ml-0 ml-4">
                <dt className="sm:mt-4 mt-2 font-semibold text-white">
                  Adresse
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Ebersberger Straße 75 <br />
                  83043 Bad Aibling
                </dd>
              </dl>
            </div>

            {/* Phone */}
            <div className="flex sm:flex-col sm:items-start flex-row items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 h-10 w-10">
                <FaPhone className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dl className="sm:ml-0 ml-4">
                <dt className="sm:mt-4 mt-2 font-semibold text-white">
                  Telefon
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  <div className="flex flex-row gap-x-2">
                    <div className="flex shrink flex-col">
                      <p className="">Büro:</p>
                      <p className="">Mobil:</p>
                    </div>
                    <div className="flex flex-col">
                      <a href="tel:+4980619398333">+49 8061 93 98 333</a>
                      <a href="tel:+491728517479">+49 172 85 17 479</a>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem]  bg-gradient-to-tr from-mbblue to-mbblue opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
