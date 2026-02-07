import React from "react";
import styleComponent from "./Style_Component/Style_HederEditAccount";
import { TypePropsComponent } from "./types/type_HederEditAccount";
const HederEditAccount: TypePropsComponent = ({ checkToRemoveNaviLinks }) => {
  const { EditAccountBox, EditAccountLinks } = styleComponent;
  return (
    <EditAccountBox
      sx={{
        top: checkToRemoveNaviLinks() && "12%",
        left: checkToRemoveNaviLinks() && "9%",
      }}
    >
      <EditAccountLinks as="p">My Account</EditAccountLinks>
      <EditAccountLinks as="p">Order History</EditAccountLinks>
      <EditAccountLinks as="p">fav List</EditAccountLinks>
      <EditAccountLinks as="p">Exit</EditAccountLinks>
    </EditAccountBox>
  );
};

export default HederEditAccount;
