import { Router, Route, Link, Routes } from "react-router-dom";
import Herder from "./exoGame/heder/herder.jsx";
import LoginWithPhone from "./exoGame/loginWithPhon/loginWithPhone.jsx";
import Navbar from "./exoGame/foter/footer.jsx";
import { element } from "prop-types";
import AboutUs from "./exoGame/aboutUs/aboutUs.jsx";
import Slider1 from "./exoGame/slider1/slider.jsx";
import Production_box from "./exoGame/productions_shortcut_box/production_box.jsx";
import SugestExo from "./exoGame/sugestExo/sugestExo.jsx";
import Consloe_gm from "./exoGame/consoleGaming/console_gm.jsx";

let itmes1 = [1, 2, 3, 4, 5, 6, 7, 8];
let itmes2 = [9, 10, 11, 12, 13, 14];
let itmes3 = [15, 16, 17, 18, 19, 20];

let rutes = [
  {
    path: "/",
    element: (
      <div>
        <Herder></Herder>
        <Slider1></Slider1>
        <Production_box></Production_box>
        <SugestExo array={itmes1} titel="پیشنهاد اگزو"></SugestExo>
        <SugestExo array={itmes2} titel="جدیدترین‌های اگزوگیم"></SugestExo>
        <SugestExo array={itmes3} titel="پرفروش‌ترین‌های اگزوگیم"></SugestExo>
        <Consloe_gm></Consloe_gm>
        <Navbar></Navbar>
      </div>
    ),
  },
  {
    path: "/acount-login-Phone",
    element: (
      <div>
        <Herder></Herder>
        <LoginWithPhone></LoginWithPhone>
        <Navbar></Navbar>
      </div>
    ),
  },
  {
    path: "/about-us",
    element: (
      <div>
        <Herder></Herder>
        <AboutUs></AboutUs>
        <Navbar></Navbar>
      </div>
    ),
  },
];

export default rutes;
