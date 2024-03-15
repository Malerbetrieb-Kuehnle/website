import { IconType } from "react-icons";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

interface ContactItemProps {
  icon: IconType;
  title: string;
  content: string | string[];
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  content,
}) => (
  <li className="flex flex-col mb-4 lg:mb-6 lg:w-1/2">
    <div className="flex items-start">
      {Icon && (
        <span className="text-2xl mr-2">
          <Icon />
        </span>
      )}
      <div>
        <p className="text-lg font-bold mb-1">{title}:</p>
      </div>
    </div>
    <div className="ml-8 lg:ml-0">
      {" "}
      {/* Adjusted margin for smaller screens */}
      {Array.isArray(content) ? (
        <ul className="list-none pl-0">
          {content.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">{content}</p>
      )}
    </div>
  </li>
);

const ContactSection: React.FC = () => (
  <div className="container-contact bg-center bg-cover flex flex-col lg:flex-row items-center justify-center py-12 px-6 lg:px-24">
    <div className="text-center lg:text-left lg:w-full lg:max-w-2xl lg:mr-12">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        So erreichen Sie uns.
      </h2>
      <p className="text-lg lg:text-xl mb-6">
        Bei Fragen oder für weitere Informationen stehen wir Ihnen gerne zur
        Verfügung.
      </p>
      <ul className="list-none p-0 lg:flex lg:flex-wrap lg:justify-between">
        <ContactItem
          icon={FaPhone}
          title="Telefon"
          content={["Büro: (123) 456-7890", "Mobil: (987) 654-3210"]}
        />
        <ContactItem
          icon={FaEnvelope}
          title="Email"
          content="info@example.com"
        />
        <ContactItem
          icon={FaInstagram}
          title="Instagram"
          content="@example_instagram"
        />
        <ContactItem
          icon={FaMapMarkerAlt}
          title="Adresse"
          content="123 Beispielstraße, 12345 Musterstadt"
        />
      </ul>
    </div>
  </div>
);

export default ContactSection;
