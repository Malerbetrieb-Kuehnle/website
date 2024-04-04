import logo from "../../assets/logo.png";
import styles from "../../style.ts";
import { Separator } from "./separator.tsx";
import { footerLinks, socialMedia } from "../../constants/index.ts";
import "../../App.css";
import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
const Footer = () => (
  
  <section
    className={`${styles.flexCenter} ${styles.paddingY} container-footer flex-col sm:mt-16 mt-6`}
  >
    <div>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Link to="/" onClick={scrollToTop}>
          <img
            src={logo}
            alt="Malerbetrieb Kühnle"
            className="w-[120px] h-auto object-contain"
          />
          </Link>
          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-gray-500`}>
            Wir bringen Farbe in Ihr Leben.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-gray-900">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.title}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-500 hover:text-[#027f3f] cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <Link to={link.path} onClick={scrollToTop}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator />

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6">
        <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-gray-900">
          Copyright Ⓒ 2024 Malerbetrieb Kühnle.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={social.id}
                className={`w-6 h-6 cursor-pointer hover:text-[#027f3f] duration-300 text-gray-900 ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              >
                <Link to={social.path}>
                  <Icon />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
