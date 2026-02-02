import LoginWithPhone from "./exoGame/loginWithPhon/loginWithPhone.tsx";
import Footer from "./exoGame/foter/footer.tsx";
import AboutUs from "./exoGame/aboutUs/aboutUs.tsx";
import FristSliderPage from "./exoGame/slider1/slider.tsx";
import ProductionBox from "./exoGame/productions_shortcut_box/production_box.tsx";
import SliderContainer from "./exoGame/sliderContiner/sliderContainer.tsx";
import ConsoleGamingSlider from "./exoGame/consoleGaming/console_gm_slider.tsx";
import SugMonitor from "./exoGame/suggestion_monitor/sug_monitor.tsx";
import BestBrandLaptop from "./exoGame/bestMonitorBrand/best-laptop-brand.tsx";
import FormAndBenchmarkSlider from "./exoGame/form-and-benchmark-slide/form-and-benchmark-slider.tsx";
import CategoryPopularSlider from "./exoGame/TheMostPopularCategoriesSlider/catgory-popular-slider.tsx";
import PlaystaionXboxConsoleSlider from "./exoGame/playstaion-xbox-console-slide/playstaion-xbox-console-slide.tsx";
import Catgory from "./exoGame/catgory-items/mainCatgoryPage/catgory.tsx";
import BenchmarkHome from "./exoGame/benchmarkHome/benchmarkHome.tsx";
import ProductDiscription from "./exoGame/catgory-items/productDiscription/ProductDiscription.tsx";
import IconsSlider from "./exoGame/catgory-items/productDiscription/iconsSlider/IconsSlider.tsx";
import BoxInfoProducts from "./exoGame/catgory-items/box-Information-Items/box-Information-products.tsx";
import HederPrentBox from "./exoGame/heder/HederPrentBox/HederPrentBox.tsx";
import BenchmarkTabel from "./exoGame/benchmarkHome/benchmarkTabel/benchmarkTabel.tsx";
import InformationEnquiry from "./exoGame/information_enquiry/information_enquiry.tsx";
import AssmbleContiner from "./exoGame/AssmblePc/AssmbleCntiner.tsx";
import ShoppingCartCheckout from "./exoGame/ShoppingCartCheckout/ShoppingCartCheckout.tsx";
import ShoppingStepBox from "./exoGame/ShoppingCartCheckout/Shopping Steps Box/Shopping Steps Box.tsx";
import ScrollBtn from "./exoGame/ScrollBtn/ScrollBtn.tsx";
import Test from "./test.jsx";
import Page404Erroe from "./exoGame/404UndefindPage/404PageErroe.tsx";
import RegisterCodeBox from "./exoGame/loginWithPhon/RegisterCodeBox/RegisterCode_Box.tsx";
import FailToFetchDataPage from "./exoGame/failToFetchDataPage/failToFetchDataPage.tsx";
import RegisterNewUser from "./exoGame/Register-User/Register-user";
import UserAccount from "./exoGame/userAcount/UserAccount.tsx";
import MyAccountBox from "./exoGame/userAcount/My-account-Box/My-Account-Box.tsx";
import EditUserAccountParent from "./exoGame/userAcount/EditeUserAccountParent/EditUserAccountParent.tsx";
import AddAddressAccount from "./exoGame/userAcount/addAddressAccount/addAddressAccount.tsx";
import WishlistAccount from "./exoGame/userAcount/WishlistAccount/WishlistAccount.tsx";
import OrderHistoryAccount from "./exoGame/userAcount/orderHistoryAccount/orderHistoryAccount.tsx";
import ReturnsGoodAccount from "./exoGame/userAcount/ReturnedGoodsAccount/ReturnsGoodAccount.tsx";
import LogOutAccount from "./exoGame/userAcount/Log out Account/LogOutAccount.tsx";
import UserTransactions from "./exoGame/userAcount/UserTransactions/userTransactions.tsx";
import LogUserPassUser from "./exoGame/logUserWidthUserAndPass/logUserPassUser.tsx";
import AddAddressAccountInputs from "./exoGame/userAcount/addAddressAccount/addUserAccoutnInputs/AccounAddrestInputs.tsx";
let rutes = [
  {
    path: "/",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <FristSliderPage></FristSliderPage>
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
    path: "/register-with-userPass",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <LogUserPassUser></LogUserPassUser>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/register-user",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <RegisterNewUser></RegisterNewUser>
        <Footer></Footer>
      </div>
    ),
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
    path: "/acount",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={MyAccountBox}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/My-Account",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={MyAccountBox}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/Edit",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={EditUserAccountParent}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },

  {
    path: "/acount/password",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={EditUserAccountParent}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/address",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={AddAddressAccount}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/AddAddress",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={AddAddressAccountInputs}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/Wishlist",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={WishlistAccount}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/order",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={OrderHistoryAccount}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/return",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={ReturnsGoodAccount}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/Transactions",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={UserTransactions}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount/logout",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <UserAccount Component={LogOutAccount}></UserAccount>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/acount-login-Phone/verify-Code",
    element: (
      <div>
        <HederPrentBox></HederPrentBox>
        <RegisterCodeBox></RegisterCodeBox>
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
];

export default rutes;
