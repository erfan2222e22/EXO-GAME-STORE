import { useState } from "react";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddCommentComponent from "./addComents/addComents";
import styleComponent from "../../../components/component-Style/StyleCommentProducts";
const labels = {
  //imogi for all rate
  1: "useLess+☹",

  2: "poor+😢",

  3: "Ok+✔",

  4: "Good+😍",

  5: "master💖",
};

const labelText = (value) => {
  //concat function
  return `${value} Stare ${value !== 1 ? "s" : ""},${labels[value]}`;
};

const ComentBoxProducts = () => {
  const {
    AddNewCommentBtn,
    HederText,
    ParentBpx,
    HederTextUserName,
    ParentBoxUserName,
    InputUserName,
    RatingDivBox,
    CloseBtn,
  } = styleComponent;

  const [valid, setValid] = useState(false);
  const [userName, setUserName] = useState("");
  const [stare, setStare] = useState(5);
  const [hover, setHover] = useState(-1);

  const felingIcons = (stare, labels, hover) => {
    if (stare !== null) {
      return [labels[hover !== -1 ? hover : stare]];
    }
  };

  return (
    <ParentBpx>
      <HederText>comments</HederText>

      <AddNewCommentBtn
        onClick={(e) => {
          e.stopPropagation();
          setValid(true);
        }}
      >
        ADD NEW Coment +
      </AddNewCommentBtn>

      {valid && (
        <Box>
          <ParentBoxUserName>
            <HederTextUserName>youname:</HederTextUserName>
            <InputUserName
              placeholder="Username:"
              onChange={(e) => {
                e.stopPropagation();
                setUserName(e.target.value);
              }}
              value={userName}
            ></InputUserName>
          </ParentBoxUserName>

          <RatingDivBox>
            <Rating
              value={stare}
              precision={1}
              getLabelText={labelText}
              onChange={(e, newValue) => {
                e.stopPropagation();
                setStare(newValue);
              }}
              onChangeActive={(e, newHover) => {
                e.stopPropagation();
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55 }}
                  fontSize="inherit"
                ></StarIcon>
              }
            ></Rating>
            {<Box>{felingIcons(stare, labels, hover)}</Box>}
          </RatingDivBox>

          {/* {comentValue.trim() === "" && <h1>enter items frist</h1>} */}

          <AddCommentComponent
            userName={userName}
            stare={stare}
            labels={labels}
            hover={hover}
            felingIcons={felingIcons}
            setUserName={setUserName}
          />
          <CloseBtn
            onClick={(e) => {
              e.stopPropagation();
              setValid(false);
            }}
          >
            close
          </CloseBtn>
        </Box>
      )}
    </ParentBpx>
  );
};

export default ComentBoxProducts;
