import { Link } from "react-router-dom";
import styleComponents from "../components/component-Style/StyleConsoleGm.js";
import img1 from "./console-gm-img/img1.jpg";
import img2 from "./console-gm-img/img2.jpg";

const ConsoleGaming = () => {
  const { ParentDiv, BoxConsoleGm } = styleComponents;

  return (
    <ParentDiv>
      <Link to="/EMPTYFORNOW ">
        <BoxConsoleGm component="img" src={img1}></BoxConsoleGm>
      </Link>
      <Link to="/EMPTYFORNOW ">
        <BoxConsoleGm component="img" src={img2}></BoxConsoleGm>
      </Link>
    </ParentDiv>
  );
};

export default ConsoleGaming;
