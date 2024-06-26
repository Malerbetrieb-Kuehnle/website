import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Separator } from "./separator.tsx";
import { socialMedia } from "@/constants/index.tsx";
import { scrollToTop } from "@/lib/utils.ts";
import { footerLinks } from "@/constants/index.tsx";

const Footer: React.FC = () => {
  return (
    <section
      className={`relative overflow-hidden h-auto flex justify-center items-center bg-[#f5f5f5] mx-auto py-16 px-3 rounded-[15px] flex-col max-w-7xl`}
    >
      <div
        className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full max-w-2xl`}
      >
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Link to="/" onClick={scrollToTop}>
            <img
              src={logo}
              alt="Logo Malerbetrieb Kühnle"
              className="h-16 w-32 object-contain"
            />
          </Link>
          <p
            className={`font-normal text-[16px] leading-[30.8px] mt-4 max-w-[312px] text-gray-900`}
          >
            Wir bringen Farbe in Ihr Leben.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <div
                className={`font-poppins font-medium text-[18px] leading-[27px] text-gray-900`}
              >
                {section.title}
              </div>
              <ul className={`list-none mt-4`}>
                {section.links.map((link, index) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-500 hover:text-mbgreen cursor-pointer ${
                      index !== section.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.onClick ? (
                      <a href="#" onClick={link.onClick}>
                        {link.title}
                      </a>
                    ) : (
                      <Link to={link.path} onClick={scrollToTop}>
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator className="max-w-2xl px-3" />
      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col pt-6 max-w-2xl`}
      >
        <p
          className={`font-poppins font-normal text-center text-[14px] leading-[27px] text-gray-500`}
        >
          Copyright Ⓒ 2024 Malerbetrieb Kühnle.
        </p>
        <div className={`flex flex-row md:mt-0 mt-6`}>
          {socialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={social.id}
                className={`w-6 h-6 cursor-pointer hover:text-mbgreen duration-300 text-gray-900 ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              >
                <a
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Media"
                >
                  <Icon />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
