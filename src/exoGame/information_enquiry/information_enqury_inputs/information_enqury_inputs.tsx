import React, { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { Typography, Box } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import styleComponent from "./Style-Component/StyleInformationEnqury";
import ElmentsMapedJsx from "./elmentsMapedJsx/elmentsMapedJsx";
import {
  Types_useContext,
  Type_HandelOnChange,
  Type_handelAutocomplete,
  Type_PhoneNumberHndelErroe,
} from "./types/Types_information_enqury_inputs";

const InformationEnquryInputs = () => {
  const { ContinerInputs, HederBoxContiner } = styleComponent;
  const {
    elmentsInArray,
    failRequest,
    phoneNumberEroreBolean,
    phoneNumberEroreText,
    setRequest,
    setElmentInArray,
    setPhoneNumberEroreBolean,
    setPhoneNumberEroreText,
  }: Types_useContext = useContext(contextUse);
  // ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const PhoneNumberHndelErroe: Type_PhoneNumberHndelErroe = (
    ItemName,
    valueText
  ) => {
    const valueNumber = valueText.replace(/\D/g, "");

    if (ItemName === "phoneNumber") {
      if (valueNumber.length >= 1 && valueNumber[0] !== "0") {
        setPhoneNumberEroreText("start number with 0");
        setPhoneNumberEroreBolean(true);
      } else if (valueNumber.length >= 2 && valueNumber[1] !== "9") {
        setPhoneNumberEroreText("secend number start width 9");
        setPhoneNumberEroreBolean(true);
      } else if (valueNumber.length > 11) {
        setPhoneNumberEroreText("max length is 11 cant be more ");
        setPhoneNumberEroreBolean(true);
      } else {
        setPhoneNumberEroreText("");
        setPhoneNumberEroreBolean(false);
      }
    }
  };

  const handelAutocomplete: Type_handelAutocomplete = (e) => {
    setElmentInArray((prev) =>
      prev.map((item) =>
        item.name === "howNotifYou"
          ? { ...item, value: e.currentTarget.innerHTML ?? "" }
          : item
      )
    );
  };

  const handelOnchange: Type_HandelOnChange = (itemName, e) => {
    let valueInput = e.target.value;

    setRequest((prev) => ({
      ...prev,
      [itemName]: valueInput,
    }));

    if (itemName === "phoneNumber") {
      valueInput = valueInput.replace(/\D/g, "");
      PhoneNumberHndelErroe(itemName, valueInput);
    }

    setElmentInArray((prev) =>
      prev.map((item) =>
        item.name === itemName ? { ...item, value: valueInput } : item
      )
    );
    console.log(elmentsInArray);
  };

  return (
    <Box>
      <HederBoxContiner>
        <DescriptionOutlinedIcon
          sx={{ color: "#03c03c", fontSize: "2rem" }}
        ></DescriptionOutlinedIcon>
        <Typography sx={{ fontSize: "1.3rem", color: "#818181" }}>
          requst form
        </Typography>
      </HederBoxContiner>
      <ContinerInputs>
        <ElmentsMapedJsx
          elmentsInArray={elmentsInArray}
          failRequest={failRequest}
          phoneNumberEroreBolean={phoneNumberEroreBolean}
          phoneNumberEroreText={phoneNumberEroreText}
          handelOnchange={handelOnchange}
          handelAutocomplete={handelAutocomplete}
        />
      </ContinerInputs>
    </Box>
  );
};
export default InformationEnquryInputs;
