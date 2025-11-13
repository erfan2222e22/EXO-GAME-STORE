import LoginWithPhone from "./exoGame/loginWithPhon/loginWithPhone.jsx";
import Footer from "./exoGame/foter/footer.jsx";
import AboutUs from "./exoGame/aboutUs/aboutUs.jsx";
import Slider1 from "./exoGame/slider1/slider.jsx";
import ProductionBox from "./exoGame/productions_shortcut_box/production_box.jsx";
import SliderContainer from "./exoGame/sliderContiner/sliderContainer.jsx";
import ConsoleGamingSlider from "./exoGame/consoleGaming/console_gm_slider.jsx";
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
import InformationEnquiry from "./exoGame/information_enquiry/information_enquiry.jsx";
import AssmbleContiner from "./exoGame/AssmblePc/AssmbleCntiner.jsx";
import ShoppingCartCheckout from "./exoGame/ShoppingCartCheckout/ShoppingCartCheckout.jsx";
import ShoppingStepBox from "./exoGame/ShoppingCartCheckout/Shopping Steps Box/Shopping Steps Box.jsx";
import ScrollBtn from "./exoGame/ScrollBtn/ScrollBtn.jsx";
import Test from "./test.jsx";
import Test2 from "./test2.jsx";
import Page404Erroe from "./exoGame/404UndefindPage/404PageErroe.jsx";
import FailToFetchDataPage from "./exoGame/failToFetchDataPage/failToFetchDataPage.jsx";
import FuqReact from "./fuqReact.jsx";
let rutes = [
  {
    path: "/",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <Slider1></Slider1>
        <ScrollBtn></ScrollBtn>
        <ProductionBox></ProductionBox>
        <SliderContainer></SliderContainer>
        <ConsoleGamingSlider></ConsoleGamingSlider>
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
    path: "*",
    element: <Page404Erroe></Page404Erroe>,
  },
  {
    path: "failedToFetch",
    element: (
      <div>
        <FailToFetchDataPage></FailToFetchDataPage>
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
    path: "/ShopingCartCheckout",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <ShoppingStepBox></ShoppingStepBox>
        <ShoppingCartCheckout></ShoppingCartCheckout>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/pc_assemble",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <AssmbleContiner></AssmbleContiner>
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
  {
    path: "/benchmark_Home/SingleCorePassmarkCpu",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <BenchmarkTabel></BenchmarkTabel>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/benchmark_Home/3d-mark-dx12",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <BenchmarkTabel></BenchmarkTabel>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/benchmark_Home/2d-mark",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <BenchmarkTabel></BenchmarkTabel>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/benchmark_Home/gpu-compute",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <BenchmarkTabel></BenchmarkTabel>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/information_enquiry",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <InformationEnquiry></InformationEnquiry>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/test",
    element: (
      <div>
        <Test></Test>
      </div>
    ),
  },
  {
    path: "/test2",
    element: (
      <div>
        <FuqReact></FuqReact>
      </div>
    ),
  },
];

export default rutes;
