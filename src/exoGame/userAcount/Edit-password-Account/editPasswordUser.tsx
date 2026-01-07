import React from "react";
import styleComponent from "./Style-EditePassword/Style-EditedPassword";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import BtnELment from "./BtnElment/BtnElment";
import InputElment from "./inputElment/inputElment";
import axios from "axios";
import { Component_Props } from "./types/typeEditPasswordUser";

const EditPasswordUser: Component_Props = ({
  elmentValueList,
  setElmentValueList,
  stateId,
}) => {
  const {
    BoxBtns,
    BoxTitle,
    BtnReturn,
    Div,
    HderContinerDiv,
    HederParntDiv,
    Paragraph,
    ParagraphBox,
  } = styleComponent;

  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    handelChangeStatePass();
  }, []);

  const navigate = useNavigate();

  const handelChangeStatePass = async () => {
    try {
      const { data: userData } = await axios.get(
        `http://localhost:3300/users/${stateId}`
      );
      const { password } = userData;
      setUserPassword(password);
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

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
      {elmentValueList?.map((item) => {
        return (
          <ParagraphBox key={item.id}>
            <Paragraph>
              {item.title}
              {item.importData && <span style={{ color: "red" }}>*</span>}
            </Paragraph>
            <InputElment
              setElmentValueList={setElmentValueList}
              elmentValueList={elmentValueList}
              userPassword={userPassword}
              id={item.id}
            />
            <span style={{ color: "#ff0404ff" }}>{item.error}</span>
          </ParagraphBox>
        );
      })}
      <BoxBtns>
        <BtnReturn onClick={() => navigate("/acount/My-Account")} as="button">
          Return
        </BtnReturn>
        <BtnELment
          setElmentValueList={setElmentValueList}
          elmentValueList={elmentValueList}
          stateId={stateId}
        />
      </BoxBtns>
    </Div>
  );
};
export default EditPasswordUser;
