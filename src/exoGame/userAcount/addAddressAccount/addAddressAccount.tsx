import React from "react";
import styleComponent from "./style-Component/style-addAddressAccount";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios, { AxiosError } from "axios";
import contextUse from "../../useContext/useContext";

const AddAddressAccount = () => {
  const [userAddressList, setUserAddressList] = useState([]);
  const navigate = useNavigate();
  const context = useContext(contextUse);
  const { stateId } = context;

  const {
    HederParntDiv,
    HderContinerDiv,
    BoxTitle,
    BoxBtns,
    BtnNewAddres,
    BtnReturn,
    KeyboardArrowRightIcons,
    LocationOnOutlinedIcons,
    ContinerAddress,
    ContinerAddressP,
    P,
    EditAddressBox,
  } = styleComponent;

  useEffect(() => {
    fetchUserAddress();
  }, []);

  const fetchUserAddress = async () => {
    try {
      const { data: userAddress } = await axios.get(
        `http://localhost:3300/userAddres/${stateId}`,
      );
      setUserAddressList([userAddress]);
    } catch (err) {
      catchError(err as AxiosError);
    }
  };

  const handelRemoveUserAddress = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3300/userAddres/${id}`);
      setUserAddressList([]);
    } catch (err) {
      catchError(err as AxiosError);
    }
  };

  const handelEditUserAddress = (id: number) => {
    const { name, lastName, province, city, address, postalCode } =
      userAddressList[0];

    const nowUserAddress = [
      { id: 0, value: name, textTitle: "name", error: "", type: "text" },
      {
        id: 1,
        value: lastName,
        textTitle: "lastName",
        error: "",
        type: "text",
      },
      {
        id: 2,
        value: province,
        textTitle: "province",
        error: "",
        type: "AutocompleteProvince",
      },
      {
        id: 3,
        value: city,
        textTitle: "city",
        error: "",
        type: "AutocompleteCity",
      },
      { id: 4, value: address, textTitle: "address", error: "", type: "text" },
      {
        id: 5,
        value: postalCode,
        textTitle: "Postal-code",
        error: "",
        type: "text",
      },
    ];

    navigate("/acount/AddAddress", {
      state: { nowUserAddress: nowUserAddress },
    });
  };

  const catchError = (err: AxiosError) => {
    const errStatus = err as AxiosError;
    axios.isAxiosError(err) &&
      navigate("/failedToFetch", {
        state: { errorStatus: errStatus.status },
      });
  };

  return (
    <div style={{ width: "80%", padding: "5px" }}>
      <HederParntDiv>
        <HderContinerDiv>
          <LocationOnOutlinedIcons></LocationOnOutlinedIcons>
          <BoxTitle>Address book information</BoxTitle>
        </HderContinerDiv>
        <KeyboardArrowRightIcons></KeyboardArrowRightIcons>
      </HederParntDiv>

      {userAddressList.length === 0 ? (
        <h6 style={{ textAlign: "center", overflow: "hidden" }}>
          dont have addres!
        </h6>
      ) : (
        userAddressList.map((item) => {
          return (
            <ContinerAddress>
              <ContinerAddressP>
                <p>{item?.name}</p>
                <p>{item?.lastName}</p>
                <p>{item?.province}</p>
                <p>{item?.city}</p>
                <p>
                  {item?.address}:{item?.postalCode}
                </p>
              </ContinerAddressP>
              <EditAddressBox>
                <P
                  sx={{
                    color: "#03c03c",
                  }}
                  as="p"
                  onClick={() => handelEditUserAddress(item.id)}
                >
                  edit
                </P>
                <P as="p" onClick={() => handelRemoveUserAddress(item.id)}>
                  remove
                </P>
              </EditAddressBox>
            </ContinerAddress>
          );
        })
      )}

      <BoxBtns>
        <BtnReturn onClick={() => navigate("/acount/My-Account")} as="button">
          Return
        </BtnReturn>
        <BtnNewAddres
          onClick={() => navigate("/acount/AddAddress")}
          as="button"
        >
          new Addres
        </BtnNewAddres>
      </BoxBtns>
    </div>
  );
};
export default AddAddressAccount;
