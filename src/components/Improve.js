import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import tailwind from "../assets/images/about/tailwind.png";
import react from "../assets/images/about/react.png";
import firebase from "../assets/images/about/firebase.png";
import figma from "../assets/images/about/figma.png";

function Improve() {
  const { t } = useTranslation();

  return (
    <div id="improve" className="mt-16">
      <div className="text-center">
        <h1 className="text-purple-dark text-2xl md:text-4xl font-semibold">
          {t("improve_title")}
        </h1>
        <p className="text-purple-dark text-center text-sm md:text-lg pt-4">
          {t("improve_description")}
        </p>
      </div>
      <div className="flex items-center justify-center mb-16 grid md:grid-cols-2 2xl:grid-cols-4">
        <div className="bg-purple w-96 h-96 mt-4 rounded grid text-center text-white 2xl:ml-4">
          <img
            src={react}
            alt="react"
            className="w-20 h-20 mt-4 self-center place-self-center"
          />
          <h2>React</h2>
          <p>{t("improve_react")}</p>
        </div>
        <div className="bg-purple w-96 h-96 mt-4 rounded grid text-center text-white 2xl:ml-4">
          <img
            src={tailwind}
            alt="tailwind"
            className="w-20 h-20 mt-4 self-center place-self-center"
          />
          <h2>Tailwind</h2>
          <p>{t("improve_tailwind")}</p>
        </div>
        <div className="bg-purple w-96 h-96 mt-4 rounded grid text-center text-white 2xl:ml-4">
          <img
            src={firebase}
            alt="firebase"
            className="w-20 h-20 mt-4 self-center place-self-center"
          />
          <h2>Firebase</h2>
          <p>{t("improve_firebase")}</p>
        </div>
        <div className="bg-purple w-96 h-96 mt-4 rounded grid text-center text-white 2xl:ml-4">
          <img
            src={figma}
            alt="figma"
            className="w-20 h-20 mt-4 self-center place-self-center"
          />
          <h2>Figma</h2>
          <p>{t("improve_figma")}</p>
        </div>
      </div>
    </div>
  );
}

export default Improve;
