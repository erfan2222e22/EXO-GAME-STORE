import { useEffect, useState } from "react";
import axios from "axios";
import styleComponent from "../../../components/component-Style/StyleInformationBoxDiscription";
import { Box } from "@mui/material";
const BoxDiscriptionItems = ({ ...item }) => {
  const { Paragraf, HederText, BoxParent } = styleComponent;
  const [array, setArray] = useState([]);
  const [test1, setTest1] = useState([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (item.ProductReview) {
      axios
        .get("http://localhost:3300/SonyDiscription")
        .then((item) => {
          let afterIndexOne = item.data.slice(1);
          let index0Data = item.data[0];
          setTest1([index0Data]);
          setArray(afterIndexOne);
        })
        .catch((err) => console.log(err));
    }
  }, [array, test1, item]);

  return (
    <>
      {item.ProductReview &&
        test1.map((value) => {
          return (
            <BoxParent>
              <HederText>{value.hederText}</HederText>
              {valid && (
                <Box
                  component="img"
                  sx={{ margin: "0 auto" }}
                  src={value.img}
                  alt="💖"
                ></Box>
              )}
              <Paragraf>{value.discription}</Paragraf>
            </BoxParent>
          );
        })}

      {item.ProductReview && !valid && (
        <span
          style={{ color: "#03c03c", margin: "15px", cursor: "pointer" }}
          onClick={() => setValid(true)}
        >
          more
        </span>
      )}

      {item.ProductReview &&
        valid &&
        array.map((value) => {
          return (
            <BoxParent>
              <HederText>{value.hederText}</HederText>
              <Box
                component="img"
                sx={{ margin: "0 auto" }}
                src={value.img}
                alt="bad"
              ></Box>
              <Paragraf>{value.discription}</Paragraf>
            </BoxParent>
          );
        })}
      {valid && (
        <span
          style={{
            cursor: "pointer",
            color: "#03c03c",
            margin: "15px",
          }}
          onClick={() => setValid(false)}
        >
          close
        </span>
      )}
    </>
  );
};
export default BoxDiscriptionItems;
