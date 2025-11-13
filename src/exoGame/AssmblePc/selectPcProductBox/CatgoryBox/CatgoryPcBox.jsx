import Catgory from "../../../catgory-items/mainCatgoryPage/catgory";
import { Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styleComponent from "./Style-Component/StylePcPartsCatgory";

const CatgoryPcBox = ({
  DisplayCatgory,
  closeCatgoryPcShape,
  findTruetoChooseItems,
  categoryData,
  selectPCPartBox,
  setSelectPCPartBox,
}) => {
  const {
    BoxContainer,
    BoxParent,
    IconBox,
    TitleBox,
    ContinuBtnTrue,
    ContinuBtnFalse,
  } = styleComponent;

  return (
    <>
      {DisplayCatgory && (
        <BoxParent>
          <BoxContainer>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <CloseIcon
                onClick={closeCatgoryPcShape}
                sx={{ color: "#a1a1a1", cursor: "pointer" }}
              ></CloseIcon>
              {findTruetoChooseItems()[0].SeveralChoices && (
                <>
                  {findTruetoChooseItems()[0].ProductArray.length > 0 ? (
                    <ContinuBtnTrue
                      component="btn"
                      onClick={closeCatgoryPcShape}
                    >
                      continu
                    </ContinuBtnTrue>
                  ) : (
                    <ContinuBtnFalse component="btn">continu</ContinuBtnFalse>
                  )}
                </>
              )}
              <></>
            </Box>

            <Box>
              {findTruetoChooseItems().map((item) => {
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
            selectPCPartBox={selectPCPartBox}
            setSelectPCPartBox={setSelectPCPartBox}
            closeCatgoryPcShape={closeCatgoryPcShape}
            findTruetoChooseItems={findTruetoChooseItems}
          />
        </BoxParent>
      )}
    </>
  );
};

export default CatgoryPcBox;
