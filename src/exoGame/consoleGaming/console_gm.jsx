// import img1 from "./img-console-gm/img1.jpg";
// import img2 from "./img-console-gm/img2.jpg";
import { Box } from "@mui/material";
import component from "../components/component-Style/StyleConsoleGm";
import { Link } from "react-router-dom";
import img1 from "./console-gm-img/img1.jpg";
import img2 from "./console-gm-img/img2.jpg";

const Consloe_gm = () => {
  const { Box_console_Gm, Test } = component;

  return (
    <Test>
      <Link to="/awd">
        <Box_console_Gm component="img" src={img1}></Box_console_Gm>
      </Link>
      <Link to="/awd">
        <Box_console_Gm component="img" src={img2}></Box_console_Gm>
      </Link>
    </Test>
  );
};

export default Consloe_gm;
