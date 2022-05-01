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
    speed: 2000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <div className="container mt-6">
      <Slider {...settings}>
        <div>
          <img
            src={angular}
            alt="angular"
            className="w-20 h-20 lg:w-52 lg:h-52"
          />
        </div>
        <div>
          <img src={git} alt="git" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={react} alt="react" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={js} alt="js" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={ts} alt="ts" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={sass} alt="sass" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={node} alt="node" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={mongo} alt="mongo" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
        <div>
          <img src={mysql} alt="mysql" className="w-20 h-20 lg:w-52 lg:h-52" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
