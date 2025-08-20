import { useState } from "react";
import { Rating } from "@mui/material";
import styleComponent from "../../../../components/component-Style/StyleCommentProducts";

const AddCommentComponent = ({
  userName,
  stare,
  labels,
  hover,
  felingIcons,
  setUserName,
}) => {
  const { CommentBox, AddNewCommentBtn } = styleComponent;
  const [array, setArray] = useState([]);
  const [comentValue, setComentValue] = useState("");

  const addComennts = (e) => {
    e.stopPropagation();
    // add coments in dom
    if (comentValue.trim() !== "" && userName.trim() !== "") {
      // "It will run if the item is not equal to an empty string"

      const newComment = {
        text: comentValue,
        name: userName,
        rating: stare,
        show: felingIcons(stare, labels, hover),
      };

      setArray([...array, newComment]);
      setComentValue("");
      setUserName("");
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <textarea
        placeholder="yourComment:"
        style={{ width: "500px" }}
        onChange={(e) => {
          e.stopPropagation();
          setComentValue(e.target.value);
        }}
        value={comentValue}
      ></textarea>
      <AddNewCommentBtn onClick={(e) => addComennts(e)}>
        add coment
      </AddNewCommentBtn>
      {array.map((item, index) => {
        return (
          <CommentBox key={index}>
            <p>name:{item.name}</p>
            <Rating value={item.rating} readOnly></Rating>
            <p>{item.show}</p>
            <p>coments:{item.text}</p>
          </CommentBox>
        );
      })}
    </div>
  );
};

export default AddCommentComponent;
