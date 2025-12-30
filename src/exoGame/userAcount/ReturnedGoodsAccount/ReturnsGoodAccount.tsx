import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StyleComponent from "./style-Componet/style-RrturnsGoodsAccount";
import { Typography } from "@mui/material";

const ReturnsGoodAccount = () => {
  const { Div, HederParntDiv, HderContinerDiv, BoxTitle } = StyleComponent;
  return (
    <Div>
      <HederParntDiv>
        <HderContinerDiv>
          <img
            src="https://img.icons8.com/?size=100&id=91644&format=png&color=000000"
            alt="."
            style={{ width: "4.5%", fontSize: "1rem", height: "100%" }}
          ></img>
          <BoxTitle> Returns and Exchanges</BoxTitle>
        </HderContinerDiv>
        <ArrowRightIcon
          sx={{
            fontSize: "2rem",
            height: "100%",
            color: "#7b7b7b",
            marginRight: "10px",
          }}
        ></ArrowRightIcon>
      </HederParntDiv>
      <Typography sx={{ margin: "10px", fontSize: "0.9rem" }}>
        You have no returned items!
      </Typography>
    </Div>
  );
};
export default ReturnsGoodAccount;
