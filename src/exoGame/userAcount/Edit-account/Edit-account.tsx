import React from "react";
import StyleComponent from "./Style-Component/styleEditAccount";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import { Component_Props } from "./types/Type-Edit-Account";
const EditAccount: Component_Props = ({ elmentValueList }) => {
  const location = useLocation();
  const {
    BoxTitle,
    HderContinerDiv,
    HederParntDiv,
    BtnReturn,
    BtnContinued,
    BoxBtns,
    Input,
    ParagraphBox,
    Paragraph,
    Div,
  } = StyleComponent;

  return (
    <Div>
      <HederParntDiv>
        <HderContinerDiv>
          <PersonIcon
            sx={{ fontSize: "2rem", height: "100%", color: "#03c03c" }}
          ></PersonIcon>
          <BoxTitle>My-Account</BoxTitle>
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
      {elmentValueList.map((item) => {
        return (
          <ParagraphBox key={item.id}>
            <Paragraph>
              {item.title}
              {item.importData && <span style={{ color: "red" }}>*</span>}
            </Paragraph>
            <Input as="input" aria-label="."></Input>
          </ParagraphBox>
        );
      })}
      <BoxBtns>
        <BtnReturn onClick={() => console.log(location.pathname)} as="button">
          Return
        </BtnReturn>
        <BtnContinued as="button">Continued</BtnContinued>
      </BoxBtns>
    </Div>
  );
};
export default EditAccount;
