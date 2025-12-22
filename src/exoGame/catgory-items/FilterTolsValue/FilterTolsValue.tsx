import StyleComponent from "./Style-Component/StyleToolsValuse";
import FilterCheckbox from "../filterCheCheckbox";
import FilterSlider from "../filterSlider";
import { MenuItem, Box } from "@mui/material";
import { Type_ComponentProps } from "./types/types-FilterTolsValue";

const FilterTolsValue: Type_ComponentProps = ({ props }) => {
  const {
    FilterValue,
    kind_filters,
    setFilterValue,
    setPriceFunction,
    itemsSetting,
  } = props;

  const { InputLabelText, MainSelect } = StyleComponent;
  return (
    <Box sx={{ margin: "10px" }}>
      {kind_filters?.map((item, key) => {
        return (
          <Box key={(key += 1)}>
            <InputLabelText sx={{ fontFamily: "vazir" }}>
              {item.label}
            </InputLabelText>
            <MainSelect labelId="demo-simple-select-label">
              <MenuItem sx={{ backgroundColor: "blue" }}>
                {item.kindOfFilter === "cheCheckbox" && item.filterType && (
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
                  <FilterSlider setPriceFunction={setPriceFunction} />
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
