import StyleComponent from "./style-EditUserName/style-EditeUser";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosError } from "axios";

import {
  Component_Props,
  Type_handelOnChange,
  Type_handelUpdateUser,
} from "./types/typeUserAccount";

const EditUserAccount: Component_Props = ({
  elmentValueList,
  setElmentValueList,
  stateId,
}) => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
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

  const handelOnChangeDataUser: Type_handelOnChange = (e, title) => {
    const value = e.target.value;
    setElmentValueList((prev) => ({
      ...prev,
      EditAccount: prev.EditAccount.map((item) => {
        return item.title === title ? { ...item, value: value } : item;
      }),
    }));
  };

  const handelUserData = () => {
    const userData = elmentValueList.map((item) => item.value);
    const [name, phoneNumber, lastName, email] = userData;
    const updateUser = {
      name: name,
      phoneNumber: phoneNumber,
      LastName: lastName,
      email: email,
    };
    handelUpdateUser(updateUser);
  };

  const handelUpdateUser: Type_handelUpdateUser = async (updateUser) => {
    try {
      await axios.patch(`http://localhost:3300/users/${stateId}`, updateUser);
      navigate("/acount/My-Account");
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
            <Input
              as="input"
              type="text"
              aria-label="."
              placeholder={path === "/acount/Edit" && item.value}
              // value={item.value}
              onChange={(e) => {
                path === "/acount/Edit" &&
                  handelOnChangeDataUser(e, item.title);
              }}
            ></Input>
            <span style={{ color: "#ff0404ff" }}>{item.error}</span>
          </ParagraphBox>
        );
      })}
      <BoxBtns>
        <BtnReturn
          onClick={() => console.log(elmentValueList.map((item) => item))}
          as="button"
        >
          Return
        </BtnReturn>
        <BtnContinued as="button" onClick={handelUserData}>
          Continued
        </BtnContinued>
      </BoxBtns>
    </Div>
  );
};
export default EditUserAccount;
