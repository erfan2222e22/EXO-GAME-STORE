import { Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Component_Props } from "./Types_FilterCheckBox";
import { Type_FilterValuse } from "./mainCatgoryPage/types/types-Catgory";
import styleComponent from "./Style-Component/styleFilterCheckBox";

const FilterCheckbox = ({
  filterType,
  onFilterChange,
  setingConsoleFilters,
  FilterValue,
}: Component_Props) => {
  const { ParntBox, ContinerBox } = styleComponent;
  const [filter, setFilter] = useState({});
  const [filterValues, setfilterValues] = useState<Type_FilterValuse>(
    {} as Type_FilterValuse | [] as Type_FilterValuse,
  );

  useEffect(() => {
    setfilterValues(setingConsoleFilters[0]);
  }, []);

  const handeClickBox = (value: string) => {
    setFilter((prev) => {
      Object.keys(FilterValue).forEach((item) => {
        if (filterType === item) {
          onFilterChange(item, value); //send data to function
        }
      });
      return prev;
    });
  };

  const currentFilterValues = (filterValues[filterType] as string[]) || [];

  return (
    <ParntBox>
      {currentFilterValues.map((value: string, index: number) => {
        return (
          <ContinerBox key={index}>
            <Checkbox onClick={() => handeClickBox(value)} />
            <Typography sx={{ overflow: "hidden" }}>{value}</Typography>
          </ContinerBox>
        );
      })}
      <button onClick={() => console.log(setingConsoleFilters)}>slame </button>
    </ParntBox>
  );
};

export default FilterCheckbox;
