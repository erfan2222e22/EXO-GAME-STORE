import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styleComponent from "./style-Component/style-HederInputElment";
import { Type_PropsComponent } from "./types/types-HederInputElment";
const HederInputElment: Type_PropsComponent = ({ checkToRemoveNaviLinks }) => {
  const {
    ContinerInputHeder,
    InputDiv,
    LogoImg,
    MediumeAndLargeBoxLogoAndInput,
    SmallSizeBoxLogoAndInput,
    SerchField,
  } = styleComponent;
  return (
    <ContinerInputHeder
      sx={{
        gridArea: checkToRemoveNaviLinks() ? "1 / 1 / 2 / 5" : "1 / 1 / 4 / 4",
      }}
    >
      <InputDiv>
        <SmallSizeBoxLogoAndInput>
          <Link to="/">
            <LogoImg
              src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
              alt="😑"
              as="img"
            ></LogoImg>
          </Link>
          <SerchField
            placeholder="search..."
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ marginLeft: "13px" }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </SmallSizeBoxLogoAndInput>

        <MediumeAndLargeBoxLogoAndInput>
          <Link to="/">
            <LogoImg
              src="https://exo.ir/catalog/view/theme/exo/image/logo.svg"
              alt="😑"
              as="img"
            ></LogoImg>
          </Link>
          <SerchField
            placeholder="search..."
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ marginLeft: "13px" }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </MediumeAndLargeBoxLogoAndInput>
      </InputDiv>
    </ContinerInputHeder>
  );
};

export default HederInputElment;
