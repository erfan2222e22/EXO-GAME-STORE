import { Box } from "@mui/material";
import { useState } from "react";
import contextUse from "../useContext/useContext";
import InformationEnquryInputs from "./information_enqury_inputs/information_enqury_inputs";
import styleComponent from "./Style-Component/StyleInformationEnqury";
import InformationEnquryBtn from "./information_enqury_Btn/information_enqury_Btn";
const InformationEnquiry = () => {
  const { ContinerBox, ContinerBoxMain } = styleComponent;
  const [request, setRequest] = useState({
    name: "",
    phoneNumber: "",
    emailAdrees: "",
    fille: "",
    titleRequest: "",
    HowNoticeYou: "",
    request: "",
  });
  const [failRequest, setFailRequest] = useState(false);
  const [correctRequest, setCorrectRequest] = useState(false);
  const [phoneNumberEroreBolean, setPhoneNumberEroreBolean] = useState(false);
  const [phoneNumberEroreText, setPhoneNumberEroreText] = useState("");

  const [elmentsInArray, setElmentInArray] = useState([
    {
      id: 1,
      type: "input",
      hederText: "your name",
      importeData: true,
      name: "name",
      value: "",
    },
    {
      id: 2,
      type: "input",
      hederText: "phone number",
      importeData: true,
      name: "phoneNumber",
      value: "",
    },
    {
      id: 3,
      type: "input",
      hederText: "email addres",
      importeData: false,
      name: "emailAdrees",
      value: "",
    },
    {
      id: 4,
      type: "input",
      hederText: "choise fille",
      importeData: false,
      name: "fille",
      value: "",
    },
    {
      id: 5,
      type: "input",
      hederText: "Request title",
      importeData: true,
      name: "titleRequest",
      value: "",
    },
    {
      id: 6,
      type: "Autocomplete",
      hederText: "How We Notify You",
      importeData: true,
      name: "howNotifYou",
      value: "",
    },
    {
      id: 7,
      type: "textarea",
      hederText: "Title:",
      importeData: true,
      name: "request",
      value: "",
    },
  ]);

  return (
    <ContinerBox>
      <ContinerBoxMain>
        <contextUse.Provider
          value={{
            setPhoneNumberEroreText,
            setPhoneNumberEroreBolean,
            setRequest,
            setCorrectRequest,
            setFailRequest,
            setElmentInArray,

            phoneNumberEroreText,
            phoneNumberEroreBolean,
            request,
            elmentsInArray,
            correctRequest,
            failRequest,
          }}
        >
          <InformationEnquryInputs></InformationEnquryInputs>
          <InformationEnquryBtn></InformationEnquryBtn>
        </contextUse.Provider>
        {correctRequest && (
          <Box sx={{ backgroundColor: "green" }}>send to ✅</Box>
        )}
      </ContinerBoxMain>

      <Box
        component="img"
        src="https://exo.ir/catalog/view/theme/exo/image/Exo-PF-splash.jpg"
        alt="🖤"
        sx={{ width: "50%", height: "50%" }}
      ></Box>
    </ContinerBox>
  );
};
export default InformationEnquiry;
