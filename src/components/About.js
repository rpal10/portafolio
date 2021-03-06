import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Carousel from "../utils/Carousel";
import bird from "../assets/images/about/bird.png";
import Improve from "./Improve";

function About() {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="relative flex items-center  content-center w-screen flex-col pt-20"
    >
      <div className="text-center">
        <h1 className="text-purple-dark text-2xl md:text-4xl font-semibold pb-4 ">
          {t("banner_title")}
        </h1>
        <h1 className="text-purple-dark text-2xl md:text-4xl font-semibold">
          {t("banner_subtitle")}
        </h1>
      </div>
      <div className="w-3/4 mt-6">
        <p className="text-purple-dark text-center text-sm md:text-lg">
          {t("about_description")}
        </p>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-purple-dark text-2xl md:text-4xl font-semibold pb-4 ">
          {t("about_skills")}
        </h1>
      </div>
      <Carousel />
      <Fragment>
        <img
          src={bird}
          alt="Logo"
          className="absolute md:w-18 w-28 top-0 right-0 lg:w-48"
        />
      </Fragment>
      <Improve />
    </div>
  );
}

export default About;
