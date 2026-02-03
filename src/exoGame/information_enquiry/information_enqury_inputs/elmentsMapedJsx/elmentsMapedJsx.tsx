import React from "react";
import { Box, Typography, Autocomplete, TextField } from "@mui/material";
import styleComponent from "./style-component/style-ElmentMaped";
import { Props_Type } from "./types/TypesElmentMapedJsx";
const ElmentsMapedJsx: Props_Type = ({
  elmentsInArray,
  failRequest,
  phoneNumberEroreBolean,
  phoneNumberEroreText,
  handelOnchange,
  handelAutocomplete,
}) => {
  const { Inputs } = styleComponent;

  const AutocompleteOptions = [
    { label: "pleas chose" },
    { label: "telegram" },
    { label: "whatsap" },
    { label: "call" },
    { label: "email" },
  ];

  return (
    <>
      {elmentsInArray.map((item) => {
        return (
          <Box zIndex={item.id}>
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
                    as="input"
                    type={item.name === "phoneNumber" ? "tel" : "text"}
                    onChange={(e) => handelOnchange(item.name, e)}
                    value={item.value}
                    placeholder={
                      item.name === "phoneNumber" ? "frist num 0 and num 9" : ""
                    }
                  ></Inputs>
                )}
                {item.type === "Autocomplete" && (
                  <Autocomplete
                    disablePortal
                    options={AutocompleteOptions}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(e) => handelAutocomplete(e)}
                  ></Autocomplete>
                )}

                {item.importeData && item.value.length === 0 && failRequest && (
                  <span style={{ color: "red" }}>{item.name} need this </span>
                )}

                {item.name === "phoneNumber" &&
                  failRequest &&
                  phoneNumberEroreBolean && (
                    <span style={{ color: "red" }}>{phoneNumberEroreText}</span>
                  )}

                {item.type === "textarea" && (
                  <textarea
                    aria-label="."
                    onChange={(e) => handelOnchange(item.name, e)}
                    value={item.value}
                    style={{ width: "100%" }}
                  ></textarea>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
export default ElmentsMapedJsx;
