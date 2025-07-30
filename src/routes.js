import Herder from "./exoGame/heder/herder.jsx";
import LoginWithPhone from "./exoGame/loginWithPhon/loginWithPhone.jsx";
import Footer from "./exoGame/foter/footer.jsx";
import AboutUs from "./exoGame/aboutUs/aboutUs.jsx";
import Slider1 from "./exoGame/slider1/slider.jsx";
import ProductionBox from "./exoGame/productions_shortcut_box/production_box.jsx";
import SugestExo from "./exoGame/sugestExo/sugestExo.jsx";
import ConsoleGaming from "./exoGame/consoleGaming/console_gm.jsx";
import SugMonitor from "./exoGame/suggestion_monitor/sug_monitor.jsx";
import BestBrandLaptop from "./exoGame/bestMonitorBrand/best-laptop-brand.jsx";
import FormAndBenchmarkSlider from "./exoGame/form-and-benchmark-slide/form-and-benchmark-slider.jsx";
import CategoryPopularSlider from "./exoGame/TheMostPopularCategoriesSlider/catgory-popular-slider.jsx";
import PlaystaionXboxConsoleSlider from "./exoGame/playstaion-xbox-console-slide/playstaion-xbox-console-slide.jsx";
import Catgory from "./exoGame/catgory-items/mainCatgoryPage/catgory.jsx";
import ProductDiscription from "./exoGame/catgory-items/productDiscription/ProductDiscription.jsx";
import IconsSlider from "./exoGame/catgory-items/productDiscription/iconsSlider/IconsSlider.jsx";
import Test from "./exoGame/catgory-items/test/test.jsx";

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
        <ProductionBox></ProductionBox>
        <SugestExo array={itmes1} titel="پیشنهاد اگزو"></SugestExo>
        <SugestExo array={itmes2} titel="جدیدترین‌های اگزوگیم"></SugestExo>
        <SugestExo array={itmes3} titel="پرفروش‌ترین‌های اگزوگیم"></SugestExo>
        <ConsoleGaming></ConsoleGaming>
        <SugMonitor></SugMonitor>
        <BestBrandLaptop></BestBrandLaptop>
        <FormAndBenchmarkSlider></FormAndBenchmarkSlider>
        <CategoryPopularSlider></CategoryPopularSlider>
        <PlaystaionXboxConsoleSlider></PlaystaionXboxConsoleSlider>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount-login-Phone",
    element: (
      <div>
        <Herder></Herder>
        <LoginWithPhone></LoginWithPhone>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/about-us",
    element: (
      <div>
        <Herder></Herder>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/catgory",
    element: (
      <div>
        <Herder></Herder>
        <Catgory></Catgory>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/catgory/:title",
    element: (
      <div>
        <Herder></Herder>
        <Catgory></Catgory>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/catgory/:title/:id",
    element: (
      <div>
        <Herder></Herder>
        <ProductDiscription></ProductDiscription>
        <IconsSlider></IconsSlider>
        <Test></Test>
        <Footer></Footer>
      </div>
    ),
  },
];

export default rutes;
