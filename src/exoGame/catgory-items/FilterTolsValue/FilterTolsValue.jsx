import StyleComponent from "./Style-Component/StyleToolsValuse";
import FilterCheckbox from "../filterCheCheckbox";
import FilterSlider from "../filterSlider";
import { MenuItem, Box } from "@mui/material";
const FilterTolsValue = ({
  kind_filters,
  setFilterValue,
  handeOnClick,
  itemsSetting,
  FilterValue,
}) => {
  const { InputLabelText, MainSelect } = StyleComponent;
  return (
    <Box sx={{ margin: "10px" }}>
      {kind_filters?.map((item, key) => {
        return (
          <Box key={key}>
            <InputLabelText sx={{ fontFamily: "vazir" }} variant="standard">
              {item.label}
            </InputLabelText>
            <MainSelect labelId="demo-simple-select-label">
              <MenuItem sx={{ backgroundColor: "blue" }}>
                {item.kindOfFilter === "cheCheckbox" && (
                  <FilterCheckbox
                    onFilterChange={(field, value) =>
                      setFilterValue((prev) => ({
                        ...prev,
                        [field]: value,
                      }))
                    }
                    filterType={item.filterType}
                    setingConsoleFilters={itemsSetting}
                    FilterValue={FilterValue}
                  />
                )}
                {item.kindOfFilter === "Slider" && (
                  <FilterSlider onFilterChange={handeOnClick} />
                )}
              </MenuItem>
            </MainSelect>
          </Box>
        );
      })}
    </Box>
  );
};
export default FilterTolsValue;
