import React from "react";
import styleComponent from "./style-Component/style-addAddressAccount";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const AddAddressAccount = () => {
  const {
    HederParntDiv,
    HderContinerDiv,
    BoxTitle,
    BoxBtns,
    BtnNewAddres,
    BtnReturn,
  } = styleComponent;

  return (
    <div style={{ width: "80%", padding: "5px" }}>
      <HederParntDiv>
        <HderContinerDiv>
          <LocationOnOutlinedIcon
            sx={{
              fontSize: "2rem",
              height: "100%",
              color: "#03c03c",
              marginLeft: "10px",
            }}
          ></LocationOnOutlinedIcon>
          <BoxTitle>Address book information</BoxTitle>
        </HderContinerDiv>
        <KeyboardArrowRightIcon
          sx={{
            fontSize: "2rem",
            height: "100%",
            color: "#7b7b7b",
            marginRight: "10px",
          }}
        ></KeyboardArrowRightIcon>
      </HederParntDiv>
      <h6 style={{ textAlign: "center", overflow: "hidden" }}>
        dont have addres
      </h6>
      <BoxBtns>
        <BtnReturn as="button">Return</BtnReturn>
        <BtnNewAddres as="button">new Addres</BtnNewAddres>
      </BoxBtns>
    </div>
  );
};
export default AddAddressAccount;
