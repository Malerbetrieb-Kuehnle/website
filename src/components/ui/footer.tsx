import logo from "../../assets/logo.png";
import { footerLinks, socialMedia } from "../../constants";
import styles from "../../style.ts";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="Malerbetrieb Kühnle"
          className="w-[120px] h-auto object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Wir bringen Farbe in Ihr Leben.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px]">
        Copyright Ⓒ 2024 Malerbetrieb Kühnle.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div
            key={social.id}
            className={`w-6 h-6 cursor-pointer hover:text-blue-800 duration-300 ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            } social-icon`}
            style={{
              backgroundImage: `url(${social.icon})`,
            }}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export { Footer };
