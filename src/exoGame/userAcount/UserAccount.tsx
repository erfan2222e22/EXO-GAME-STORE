import styleComponent from "./style-Component/style-UserAccount";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const UserAccount = ({ Component }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { ParentDiv, HederImg, ParentLink, ContinerLink, Icon, LinkText } =
    styleComponent;

  const boxLinksElement = [
    { id: 0, text: "My Account", routeAddres: "/acount/My-Account" },
    {
      id: 1,
      text: "Edit Account",
      routeAddres: "/acount/Edit",
      icon: "https://img.icons8.com/?size=100&id=111473&format=png&color=737373",
    },
    {
      id: 2,
      text: "Change password",
      routeAddres: "/acount/password",
      icon: "https://img.icons8.com/?size=100&id=hQSVyu621s1v&format=png&color=737373",
    },
    {
      id: 3,
      text: "Address book",
      routeAddres: "/acount/address",
      icon: "https://img.icons8.com/?size=100&id=15989&format=png&color=737373",
    },
    {
      id: 4,
      text: "Wishlist",
      routeAddres: "/acount/Wishlist",
      icon: "https://img.icons8.com/?size=100&id=86721&format=png&color=737373",
    },
    {
      id: 5,
      text: "Order history",
      routeAddres: "/acount/order",
      icon: "https://img.icons8.com/?size=100&id=209&format=png&color=737373",
    },
    {
      id: 6,
      text: "Returned Goods",
      routeAddres: "/acount/return",
      icon: "https://img.icons8.com/?size=100&id=37213&format=png&color=737373",
    },
    {
      id: 8,
      text: "Exit",
      routeAddres: "/acount/logout",
      icon: "https://img.icons8.com/?size=100&id=2445&format=png&color=737373",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "550px",
        marginTop: "100px",
        gap: "5px",
      }}
    >
      <ParentDiv>
        <HederImg
          as="img"
          src="https://exo.ir/catalog/view/theme/exo/image/avatar.png"
          alt="."
        ></HederImg>
        <ParentLink>
          <div>
            {boxLinksElement.map((item) => {
              return (
                <ContinerLink>
                  <LinkText
                    style={{
                      color:
                        item.routeAddres === location.pathname && "#03c03c",
                    }}
                    as="p"
                    onClick={() => {
                      navigate(`${item.routeAddres}`, { state: "" });
                    }}
                  >
                    <Icon src={item.icon} alt="" as="img" />
                    {item.text}
                  </LinkText>
                </ContinerLink>
              );
            })}
          </div>
        </ParentLink>
      </ParentDiv>
      {Component !== undefined && <Component></Component>}
    </div>
  );
};
export default UserAccount;
