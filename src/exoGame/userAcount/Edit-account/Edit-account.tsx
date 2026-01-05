import StyleComponent from "./Style-Component/styleEditAccount";
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
} from "./types/Type-Edit-Account";

const EditAccount: Component_Props = ({
  elmentValueList,
  setElmentValueList,
  stateId,
}) => {
  const location = useLocation();
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

  const handelOnChange: Type_handelOnChange = (e, title) => {
    const value = e.target.value;
    const path = location.pathname;

    path === "/acount/Edit"
      ? setElmentValueList((prev) => ({
          ...prev,
          EditAccount: prev.EditAccount.map((item) => {
            return item.title === title ? { ...item, value: value } : item;
          }),
        }))
      : setElmentValueList((prev) => ({
          ...prev,
          EditPasswrodAccount: prev.EditAccount.map((item) => {
            return item.title === title ? { ...item, value: value } : item;
          }),
        }));
  };

  const handelOnClick = () => {
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
              placeholder={item.value}
              onChange={(e) => handelOnChange(e, item.title)}
            ></Input>
          </ParagraphBox>
        );
      })}
      <BoxBtns>
        <BtnReturn onClick={() => navigate("/acount/My-Account")} as="button">
          Return
        </BtnReturn>
        <BtnContinued as="button" onClick={handelOnClick}>
          Continued
        </BtnContinued>
      </BoxBtns>
    </Div>
  );
};
export default EditAccount;
