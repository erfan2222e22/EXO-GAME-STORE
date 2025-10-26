import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { Input } from "@mui/material";
const ParentBpx = styled(Box)({
  margin: "20px",
});

const AddNewCommentBtn = styled(Button)({
  margin: "20px",
  backgroundColor: "#ffff",
  borderRadius: "10px",
  border: "1px solid #03c03c",
  color: "#03c03c",
  "&:hover": {
    backgroundColor: "#03c03c",
    color: "#ffff",
    borderColor: "#03c03c",
  },
});

const ParentBoxUserName = styled(Box)({
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "80%",
});

const HederText = styled(Typography)({
  margin: "20px",
  borderLeft: "2px solid #03c03c",
  padding: "1%",
  fontSize: "2rem",
});

const HederTextUserName = styled(Typography)({
  fontSize: "1rem",
});

const InputUserName = styled(Input)({
  padding: "2px",
  border: "1px solid black ",
  borderRadius: "5px",
});

const RatingDivBox = styled(Box)({
  display: "flex",
  gap: "5px",
  margin: "10px",
});

const CommentBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

const CloseBtn = styled(Button)({
  // width: "160px",
  border: "1px solid red",
  borderRadius: "10px",
  fontSize: "1.2rem",
  cursor: "pointer",
  color: "white",
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "#fff",
    color: "red",
    // borderColor: "#",
  },
});

const styleComponent = {
  ParentBpx,
  AddNewCommentBtn,
  HederText,
  HederTextUserName,
  ParentBoxUserName,
  InputUserName,
  RatingDivBox,
  CommentBox,
  CloseBtn,
};

export default styleComponent;
