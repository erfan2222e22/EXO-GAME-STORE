import { Typography, Box, Slider } from "@mui/material";
import component from "./Style-Component/StyleFilterSlider";
import { useState } from "react";
import { Props_Component, Type_handelOnchange } from "./Types_FilterSlider";
const FilterSlider: Props_Component = ({ setPriceFunction }) => {
  const { InsideBox, TextItems } = component;
  const [maxValuePrice] = useState(20000);
  const [minValuePrice] = useState(100);
  const [valueSlider, setValueSlider] = useState([
    minValuePrice,
    maxValuePrice,
  ]);
  const handelOnchange: Type_handelOnchange = (event, newitem) => {
    setValueSlider(newitem);
    setPriceFunction({
      minPrice: valueSlider[0],
      maxPrice: valueSlider[1],
    });
  };

  return (
    <InsideBox>
      <Slider
        valueLabelDisplay="auto"
        onChange={handelOnchange}
        value={valueSlider}
        max={maxValuePrice}
        min={minValuePrice}
      />
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography>{valueSlider[0]}</Typography>
          <TextItems>$</TextItems>
        </Box>
        <Box
          sx={{
            margin: "0 auto",
            position: "relative",
            left: "30%",
          }}
        >
          <Typography>{valueSlider[1]}</Typography>
          <TextItems>$</TextItems>
        </Box>
      </Box>
    </InsideBox>
  );
};

export default FilterSlider;
