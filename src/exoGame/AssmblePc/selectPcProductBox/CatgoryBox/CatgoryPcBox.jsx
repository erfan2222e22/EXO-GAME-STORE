import Catgory from "../../../catgory-items/mainCatgoryPage/catgory";
import { Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styleComponent from "../../../components/component-Style/StylePcPartsCatgory";
const CatgoryPcBox = ({
  DisplayCatgory,
  closeCatgory,
  findFalsetoChooseItems,
  categoryData,
}) => {
  const { BoxContainer, BoxParent, IconBox, TitleBox } = styleComponent;

  return (
    <>
      {DisplayCatgory && (
        <BoxParent>
          <BoxContainer>
            <Box>
              <CloseIcon
                onClick={closeCatgory}
                sx={{ color: "#a1a1a1", cursor: "pointer" }}
              ></CloseIcon>
            </Box>

            <Box>
              {findFalsetoChooseItems().map((item) => {
                return (
                  <TitleBox>
                    <Typography>{item.text}</Typography>
                    <IconBox component="img" src={item.iconSrc}></IconBox>
                  </TitleBox>
                );
              })}
            </Box>
          </BoxContainer>
          <Catgory
            product={categoryData?.product}
            pathName={categoryData?.pathName}
          />
        </BoxParent>
      )}
    </>
  );
};
export default CatgoryPcBox;
