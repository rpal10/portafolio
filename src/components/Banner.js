import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { Link } from "react-scroll";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";

import koi from "../assets/images/banner/koi.png";
import koi_1 from "../assets/images/banner/pez-koi.png";
import koi_2 from "../assets/images/banner/pez-koi-1.png";

function Banner() {
  const { t } = useTranslation();
  return (
    <div
      id="banner"
      className="flex items-center justify-center w-screen h-screen bg-purple flex-col"
    >
      <div className="text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold pb-4">
          {t("banner_title")}
        </h1>
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          {t("banner_subtitle")}
        </h1>
      </div>
      <Fragment>
        <Typography className="text-white absolute bottom-16 animate-bounce cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </Link>
        </Typography>
      </Fragment>
      <Fragment>
        <img
          src={koi}
          alt="Logo"
          className="w-36 absolute top-20 left-2 hover:animate-spin-slow"
        />
        <img
          src={koi_1}
          alt="Logo"
          className="w-36 absolute bottom-16 right-2"
        />
        <img src={koi_2} alt="Logo" className="w-36 mt-8" />
      </Fragment>
    </div>
  );
}

export default Banner;
