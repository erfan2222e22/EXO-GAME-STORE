import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import EditAccount from "../Edit-account/Edit-account";
const EditUserAccountParent = () => {
  const location = useLocation();
  const elmentValueList = {
    EditAccount: [
      { id: 1, title: "name", importData: true },
      { id: 2, title: "Last name", importData: true },
      { id: 3, title: "email", importData: false },
      { id: 4, title: "phone-Number", importData: true },
    ],
    EditPasswrodAccount: [
      { id: 1, title: "New password", importData: true },
      { id: 2, title: "Repeat new password", importData: true },
      { id: 3, title: "Previous password", importData: true },
    ],
  };

  return (
    <Box sx={{ width: "100%" }}>
      {location.pathname === "/acount/Edit" ? (
        <EditAccount elmentValueList={elmentValueList.EditAccount} />
      ) : (
        <EditAccount elmentValueList={elmentValueList.EditPasswrodAccount} />
      )}
    </Box>
  );
};

export default EditUserAccountParent;
