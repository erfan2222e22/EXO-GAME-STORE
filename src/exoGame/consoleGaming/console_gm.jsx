import component from "../components/component-Style/StyleConsoleGm";
import { Link } from "react-router-dom";
import img2 from "./img_Console_Gm/img2.jpg";
import img1 from "./img_Console_Gm/img1.jpg";

const Consloe_gm = () => {
  const { Box_console_Gm, Main_div } = component;

  return (
    <Main_div>
      <Link to="/">
        <Box_console_Gm component="img" src={img2}></Box_console_Gm>
      </Link>
      <Link to="/">
        <Box_console_Gm component="img" src={img1}></Box_console_Gm>
      </Link>
    </Main_div>
  );
};

export default Consloe_gm;
