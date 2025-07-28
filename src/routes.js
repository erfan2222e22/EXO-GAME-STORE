import { Router, Route, Link, Routes } from "react-router-dom";
import Herder from "./exoGame/heder/herder.jsx";
import LoginWithPhone from "./exoGame/loginWithPhon/loginWithPhone.jsx";
import Navbar from "./exoGame/foter/footer.jsx";
import AboutUs from "./exoGame/aboutUs/aboutUs.jsx";
import Slider1 from "./exoGame/slider1/slider.jsx";
import Production_box from "./exoGame/productions_shortcut_box/production_box.jsx";
import SugestExo from "./exoGame/sugestExo/sugestExo.jsx";
import Consloe_gm from "./exoGame/consoleGaming/console_gm.jsx";
import Sug_Monitor from "./exoGame/suggestion_monitor/sug_monitor.jsx";
import Best_Brand_laptop from "./exoGame/bestMonitorBrand/best-laptop-brand.jsx";
import Form_and_benchmark_slider from "./exoGame/form-and-benchmark-slide/form-and-benchmark-slider.jsx";
import CategoryPopularSlider from "./exoGame/TheMostPopularCategoriesSlider/catgory-popular-slider.jsx";
import PlaystaionXboxConsoleSlider from "./exoGame/playstaion-xbox-console-slide/playstaion-xbox-console-slide.jsx";
import Catgory from "./exoGame/catgory-items/mainCatgoryPage/catgory.jsx";
import ProductDiscription from "./exoGame/catgory-items/productDiscription/ProductDiscription.jsx";

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
        <Sug_Monitor></Sug_Monitor>
        <Best_Brand_laptop></Best_Brand_laptop>
        <Form_and_benchmark_slider></Form_and_benchmark_slider>
        <CategoryPopularSlider></CategoryPopularSlider>
        <PlaystaionXboxConsoleSlider></PlaystaionXboxConsoleSlider>
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
  {
    path: "/catgory",
    element: (
      <div>
        <Herder></Herder>
        <Catgory></Catgory>
        <Navbar></Navbar>
      </div>
    ),
  },
  {
    path: "/catgory/:title",
    element: (
      <div>
        <Herder></Herder>
        <Catgory></Catgory>
        <Navbar></Navbar>
      </div>
    ),
  },
  {
    path: "/catgory/:title/:id",
    element: (
      <div>
        <Herder></Herder>
        <ProductDiscription></ProductDiscription>
        <Navbar></Navbar>
      </div>
    ),
  },
];

export default rutes;
