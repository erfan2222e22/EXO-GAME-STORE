import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router";
import { ShopCardStateContext } from "./exoGame/shopCardStateContext/ShopCardStateContext.jsx";
import { PaginationConterCatgory } from "./exoGame/PaginationCatgoryProducts/PaginationCatgoryProducts.jsx";
import { UserIdContext } from "./exoGame/userIdContext/userIdContext.jsx";
import { YandXPositionWindow } from "./exoGame/Y-X-WindowContext/Y-X-WindowContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <YandXPositionWindow
    childern={
      <UserIdContext
        childern={
          <PaginationConterCatgory
            childern={
              <ShopCardStateContext
                childern={
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                }
              ></ShopCardStateContext>
            }
          ></PaginationConterCatgory>
        }
      ></UserIdContext>
    }
  ></YandXPositionWindow>,
);

reportWebVitals();
