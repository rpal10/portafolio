import Slider from "react-slick";

import angular from "../assets/images/about/angular.png";
import git from "../assets/images/about/git.png";
import react from "../assets/images/about/react.png";
import js from "../assets/images/about/js.png";
import ts from "../assets/images/about/ts.png";
import sass from "../assets/images/about/sass.png";
import node from "../assets/images/about/node.png";
import mongo from "../assets/images/about/mongo.png";
import mysql from "../assets/images/about/mysql.png";

function Carousel() {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  };
  return (
    <div className="container mt-6">
      <Slider {...settings}>
        <div>
          <img src={angular} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={git} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={react} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={js} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={ts} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={sass} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={node} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={mongo} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={mysql} alt="Logo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
