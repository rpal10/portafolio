import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import "./Navbar.css";
import LanguageSelect from "../utils/LanguageSelect";

function Nabvar() {
  const { t } = useTranslation();

  return (
    <div className="fixed w-screen bg-purple h-16 flex items-center justify-center">
      <Link
        activeClass="active"
        to="banner"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-white ml-4 text-base lg:ml-8 cursor-pointer navbarHover"
      >
        {t("navbar_home")}
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-65}
        duration={500}
        className="text-white ml-4 text-base lg:ml-8 cursor-pointer navbarHover"
      >
        {t("navbar_about")}
      </Link>
      <Link
        activeClass="active"
        spy={true}
        to="contact"
        smooth={true}
        offset={-65}
        duration={500}
        className="text-white ml-4 text-base lg:ml-8 cursor-pointer navbarHover"
      >
        {t("navbar_contact")}
      </Link>
      <div className="absolute text-white right-6 text-xs">
        <LanguageSelect />
      </div>
    </div>
  );
}

export default Nabvar;
