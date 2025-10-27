import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import StyleComponent from "./Style-Componet/StyleScroolBtn";
const ScrollBtn = () => {
  const { ScrollButtonBox, ScrollButton } = StyleComponent;
  return (
    <ScrollButtonBox>
      <ScrollButton onClick={() => window.scrollTo(100, 0)}>
        <ArrowUpwardIcon sx={{ fontSize: "2.5rem" }}></ArrowUpwardIcon>
      </ScrollButton>
    </ScrollButtonBox>
  );
};
export default ScrollBtn;
