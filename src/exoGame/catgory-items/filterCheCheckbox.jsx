import { Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const FilterCheckbox = ({
  filterType,
  onFilterChange,
  setingConsoleFilters,
}) => {
  const [filter, setFilter] = useState({
    company: "",
    genration: "",
  });

  const [filterValues, setfilterValues] = useState({
    manufacturers: [],
    generation: [],
  });

  useEffect(() => {
    setfilterValues(setingConsoleFilters);
  }, []);

  const handeClickBox = (value) => {
    setFilter((prev) => {
      if (filterType === "manufacturers") {
        onFilterChange("company", value);
      }
      if (filterType === "generation") {
        onFilterChange("genration", value);
      }
      return prev;
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {filterValues[filterType]?.map((value, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Checkbox onClick={() => handeClickBox(value)} />
          <Typography>{value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FilterCheckbox;
