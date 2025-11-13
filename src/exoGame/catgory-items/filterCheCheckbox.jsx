import { Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const FilterCheckbox = ({
  filterType,
  onFilterChange,
  setingConsoleFilters,
  FilterValue,
}) => {
  const [filter, setFilter] = useState({});

  const [filterValues, setfilterValues] = useState({});

  useEffect(() => {
    setfilterValues(setingConsoleFilters[0]);
  }, [setingConsoleFilters]);

  const handeClickBox = (value) => {
    setFilter((prev) => {
      Object.keys(FilterValue).forEach((item) => {
        if (filterType === item) {
          onFilterChange(item, value);
        }
      });
      return prev;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {filterValues[filterType]?.map((value, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Checkbox onClick={() => handeClickBox(value)} />
          <Typography>{value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FilterCheckbox;
