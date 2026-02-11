import { useContext, useState, useEffect } from "react";
import contextUse from "../../../useContext/useContext";
import axios from "axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
  cityOption_interface,
  type_handleError,
} from "./types/Type_AccountAddresInuts";
import styleComponent from "./style-Component/style-AccountAddressInput";
import { addDataOnServer } from "./addDataOnServer";
import InputElmentsAbilityMaped from "./InputElmentsAbilityMaped/InputElmentsAbilityMaped";
const AddAddressAccountInputs = () => {
  const context = useContext(contextUse);
  const navigate = useNavigate();
  const { stateId } = context;
  const {
    ButtonContiner,
    Button,
    HederParntDiv,
    BoxTitle,
    HderContinerDiv,
    Div,
    LocationOnOutlinedIcons,
    KeyboardArrowRightIcons,
  } = styleComponent;

  const [InputElmentsAbility, setInputElmentsAbility] = useState([
    { id: 0, value: "", textTitle: "name", error: "", type: "text" },
    { id: 1, value: "", textTitle: "lastName", error: "", type: "text" },
    {
      id: 2,
      value: "",
      textTitle: "province",
      error: "",
      type: "AutocompleteProvince",
    },
    {
      id: 3,
      value: "",
      textTitle: "city",
      error: "",
      type: "AutocompleteCity",
    },
    { id: 4, value: "", textTitle: "address", error: "", type: "text" },
    {
      id: 5,
      value: "",
      textTitle: "Postal-code",
      error: "",
      type: "text",
    },
  ]);

  const [cityTitleOptions, setCityTitleOptios] = useState("");
  const [cityOption, setCityOption] = useState<cityOption_interface>({
    defaultLabel: [{ label: "select your provinceOptions" }],
  });
  const [provinceOptions, setProvinceOptions] = useState(null);

  useEffect(() => {
    fetchAutocompleteOptions();
  }, []);

  const fetchAutocompleteOptions = async () => {
    try {
      const optionsDataList = [
        "http://localhost:3300/cityOption",
        "http://localhost:3300/provinceOptions",
      ];

      const fetchAllLinks = Promise.all(
        optionsDataList.map((data) =>
          axios.get(data).then((items) => items.data),
        ),
      );

      const [cityOption, provinceOptions] = await fetchAllLinks;

      setCityOption(cityOption);
      setProvinceOptions(provinceOptions);
    } catch (err) {
      handleError(err as AxiosError);
    }
  };

  const handelButtonClick = () => {
    const EmptyInputLength = 0;

    const findEmptyInput = InputElmentsAbility.find(
      (fill) => fill.value.trim().length === EmptyInputLength,
    );

    setInputElmentsAbility((prev) => {
      return prev.map((item) => {
        return item.value.trim().length === EmptyInputLength
          ? { ...item, error: `pls enter the ${item.textTitle}` }
          : { ...item, error: "" };
      });
    });

    !findEmptyInput &&
      addDataOnServer(stateId, InputElmentsAbility, handleError, navigate);
  };

  const handleError: type_handleError = (err) => {
    const errStatus = err as AxiosError;
    axios.isAxiosError(err) &&
      navigate("/failedToFetch", {
        state: { errorStatus: errStatus.status },
      });
  };

  return (
    <Div>
      <HederParntDiv>
        <HderContinerDiv>
          <LocationOnOutlinedIcons />
          <BoxTitle>Address book information</BoxTitle>
        </HderContinerDiv>
        <KeyboardArrowRightIcons />
      </HederParntDiv>

      <InputElmentsAbilityMaped
        InputElmentsAbility={InputElmentsAbility}
        provinceOptions={provinceOptions}
        cityOption={cityOption}
        cityTitleOptions={cityTitleOptions}
        setCityTitleOptios={setCityTitleOptios}
        setInputElmentsAbility={setInputElmentsAbility}
      />

      <ButtonContiner>
        <Button onClick={handelButtonClick}>click me</Button>
        <Button
          onClick={() => navigate("/acount/My-Account")}
          sx={{ backgroundColor: "#6c757d" }}
        >
          return
        </Button>
      </ButtonContiner>
    </Div>
  );
};

export default AddAddressAccountInputs;
