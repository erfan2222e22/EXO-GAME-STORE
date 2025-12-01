import { Typography, Box, Slider } from "@mui/material";
import component from "./Style-Component/StyleFilterSlider";
import { useEffect, useState } from "react";
import { Props_Component, Type_handelOnchange } from "./Types_FilterSlider";
const FilterSlider = ({ onFilterChange }: Props_Component) => {
  const { InsideBox, TextItems } = component;
  const [maxValue] = useState(20000);
  const [minValue] = useState(100);
  const [valueSlider, setValueSlider] = useState([minValue, maxValue]);
  const [ItemsSlider, ItemsSetSlider] = useState([]);

  useEffect(() => {
    const allValidItems = value_filters.map((item) => item.valueFillter);
    ItemsSetSlider(allValidItems);
  }, []);

  let value_filters = [
    {
      id: 1,
      valueFillter: [1],
    },
  ];

  const handelOnchange: Type_handelOnchange = (event, newitem) => {
    setValueSlider(newitem);
    onFilterChange({
      minPrice: valueSlider[0],
      maxPrice: valueSlider[1],
    });
  };

  return (
    <>
      {ItemsSlider.map((item) => {
        return (
          <>
            <InsideBox key={item.id}>
              <Slider
                valueLabelDisplay="auto"
                onChange={handelOnchange}
                value={valueSlider}
                max={maxValue}
                min={minValue}
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
          </>
        );
      })}
    </>
  );
};

export default FilterSlider;
