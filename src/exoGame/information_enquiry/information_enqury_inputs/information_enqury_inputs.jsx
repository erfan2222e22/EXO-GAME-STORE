import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import styleComponent from "../../components/component-Style/StyleInformationEnqury";
const InformationEnquryInputs = () => {
  const { Inputs, ContinerInputs, HederBoxContiner } = styleComponent;
  const {
    elmentsInArray,
    failRequest,
    phoneNumberEroreBolean,
    phoneNumberEroreText,
    setRequest,
    setElmentInArray,
    setPhoneNumberEroreText,
    setPhoneNumberEroreBolean,
  } = useContext(contextUse);

  const PhoneNumberHndelErroe = (ItemName, e) => {
    const valueNumber = e.replace(/\D/g, "");

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

  const handelAutocomplete = (e, newValue) => {
    setElmentInArray((prev) =>
      prev.map((item) =>
        item.name === "howNotifYou"
          ? { ...item, value: newValue?.label || {} }
          : item
      )
    );
  };

  const handelOnchange = (itemName, e) => {
    let valueText = e;

    setRequest((prev) => ({
      ...prev,
      [itemName]: e,
    }));

    if (itemName === "phoneNumber") {
      valueText = e.replace(/\D/g, "");
      PhoneNumberHndelErroe(itemName, e);
    }

    setElmentInArray((prev) =>
      prev.map((item) =>
        item.name === itemName ? { ...item, value: valueText } : item
      )
    );
  };

  const AutocompleteOptions = [
    { label: "pleas chose" },
    { label: "telegram" },
    { label: "whatsap" },
    { label: "call" },
    { label: "email" },
  ];

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
        {elmentsInArray.map((item) => {
          return (
            <Box index={item.id}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    gap: "5px",
                  }}
                >
                  <Typography>{item.hederText}</Typography>
                  {item.importeData && (
                    <Typography sx={{ color: "red" }}>*</Typography>
                  )}
                </Box>
                <Box
                  sx={{
                    margin: "10px",
                  }}
                >
                  {item.type === "input" && (
                    <Inputs
                      component="input"
                      type={item.name === "phoneNumber" ? "tel" : "text"}
                      onChange={(e) =>
                        handelOnchange(item.name, e.target.value)
                      }
                      value={item.value}
                      placeholder={
                        item.name === "phoneNumber"
                          ? "frist num 0 and num 9"
                          : ""
                      }
                    ></Inputs>
                  )}
                  {item.type === "Autocomplete" && (
                    <Autocomplete
                      disablePortal
                      options={AutocompleteOptions}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={handelAutocomplete}
                    ></Autocomplete>
                  )}

                  {item.importeData &&
                    item.value.length === 0 &&
                    failRequest && (
                      <span style={{ color: "red" }}>
                        {item.name} need this{" "}
                      </span>
                    )}

                  {item.name === "phoneNumber" &&
                    failRequest &&
                    phoneNumberEroreBolean && (
                      <span style={{ color: "red" }}>
                        {phoneNumberEroreText}
                      </span>
                    )}

                  {item.type === "textarea" && (
                    <textarea
                      onChange={(e) =>
                        handelOnchange(item.name, e.target.value)
                      }
                      value={item.value}
                      style={{ width: "100%" }}
                    ></textarea>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </ContinerInputs>
    </Box>
  );
};
export default InformationEnquryInputs;
