import styleComponent from "./Style_Component/Style_HederEditAccount";

import { useUserIdContext } from "../../userIdContext/userIdContext";
import { TypePropsComponent } from "./types/type_HederEditAccount";
import { useNavigate } from "react-router-dom";

const HederEditAccount: TypePropsComponent = ({
  checkToRemoveNaviLinks,
  setShowEditAccountBox,
}) => {
  const { EditAccountBox, EditAccountLinks } = styleComponent;
  const navigate = useNavigate();
  const { userId } = useUserIdContext();

  const handelMyAccountClick = () => {
    const id = userId;
    navigate("/acount", { state: { id: id } });
    setShowEditAccountBox((prev) => (prev = false));
  };

  const handelLogOutUser = () => {
    navigate("/acount/logout");
    setShowEditAccountBox((prev) => (prev = false));
  };

  const handelNaviOrderWishlist = (routerAddress: string) => {
    const id = userId;
    navigate(routerAddress, { state: { id: id } });
  };

  return (
    <EditAccountBox
      sx={{
        top: checkToRemoveNaviLinks() && "12%",
        left: checkToRemoveNaviLinks() && "9%",
      }}
    >
      <EditAccountLinks as="p" onClick={handelMyAccountClick}>
        My Account
      </EditAccountLinks>
      <EditAccountLinks
        as="p"
        onClick={() => handelNaviOrderWishlist("/acount/order")}
      >
        Order History
      </EditAccountLinks>
      <EditAccountLinks
        as="p"
        onClick={() => handelNaviOrderWishlist("/acount/Wishlist")}
      >
        fav List
      </EditAccountLinks>
      <EditAccountLinks as="p" onClick={handelLogOutUser}>
        Exit
      </EditAccountLinks>
    </EditAccountBox>
  );
};

export default HederEditAccount;
