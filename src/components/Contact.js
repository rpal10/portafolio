import { useTranslation } from "react-i18next";

import github from "../assets/images/contact/github.png";
import linkedin from "../assets/images/contact/linkedin.png";

function Contact() {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="bg-purple h-96 flex items-center justify-center grid"
    >
      <div className="text-center">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
          {t("contact_title")}
        </h1>
        <p className="text-white text-center text-sm md:text-lg pt-4">
          {t("contact_description")}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center float-left">
          <a
            href="https://github.com/rpal10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="w-20 h-20 self-center place-self-center"
            />
          </a>
        </div>
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center ml-4">
          <a
            href="https://www.linkedin.com/in/rpalaciosl10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-16 h-16 self-center place-self-center"
            />
          </a>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white text-center text-xl font-semibold">
          rpalacios1099@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
