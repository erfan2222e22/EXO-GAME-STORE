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
import BenchmarkHome from "./exoGame/benchmarkHome/benchmarkHome.jsx";
import ProductDiscription from "./exoGame/catgory-items/productDiscription/ProductDiscription.jsx";
import IconsSlider from "./exoGame/catgory-items/productDiscription/iconsSlider/IconsSlider.jsx";
import BoxInfoProducts from "./exoGame/catgory-items/box-Information-Items/box-Information-products.jsx";
import HederPrentBox from "./exoGame/heder/HederPrentBox/HederPrentBox.jsx";
import BenchmarkTabel from "./exoGame/benchmarkHome/benchmarkTabel/benchmarkTabel.jsx";
let itmes1 = [1, 2, 3, 4, 5, 6, 7, 8];
let itmes2 = [9, 10, 11, 12, 13, 14];
let itmes3 = [15, 16, 17, 18, 19, 20];

let rutes = [
  {
    path: "/",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
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
        <HederPrentBox></HederPrentBox>
        <LoginWithPhone></LoginWithPhone>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/about-us",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/catgory",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <Catgory></Catgory>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/catgory/:title",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <Catgory></Catgory>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/catgory/:title/:id",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <ProductDiscription></ProductDiscription>
        <IconsSlider></IconsSlider>
        <BoxInfoProducts></BoxInfoProducts>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/benchmark_Home",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <BenchmarkHome></BenchmarkHome>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/benchmark_Home/passmark-multi-core",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <BenchmarkTabel></BenchmarkTabel>
        <Footer></Footer>
      </div>
    ),
  },
];

export default rutes;
