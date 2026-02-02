import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import contextUse from "../../useContext/useContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { elmentListStructure } from "./types/Type_EditUserAccountParent";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import EditPasswordUser from "../Edit-password-Account/editPasswordUser";
import EditUserAccount from "../EditUserName/EditUserAccount";

const EditUserAccountParent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(contextUse);
  const { stateId } = context;

  const [elmentValueList, setElmentValueList] = useState<elmentListStructure>({
    EditAccount: [
      { id: 1, title: "name", importData: true, value: "" },
      { id: 2, title: "phoneNumber", importData: true, value: "" },
      { id: 3, title: "LastName", importData: true, value: "" },
      { id: 4, title: "email", importData: true, value: "" },
    ],
    EditPasswrodAccount: [
      { id: 1, title: "New password", importData: true, value: "", error: "" },
      {
        id: 2,
        title: "Repeat new password",
        importData: true,
        value: "",
        error: "",
      },
      {
        id: 3,
        title: "Previous password",
        importData: true,
        value: "",
        error: "",
      },
    ],
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data: userData } = await axios.get(
        `http://localhost:3300/users/${stateId}`,
      );
      const { id, logined, password, ...rest } = userData;

      setElmentValueList((prev) => ({
        //add UserData on value of state
        ...prev,
        EditAccount: prev.EditAccount.map((item) =>
          Object.keys(rest).includes(item.title)
            ? { ...item, value: rest[item.title] }
            : item,
        ),
      }));
    } catch (err) {
      const errStatus = err as AxiosError;
      axios.isAxiosError(err) &&
        navigate("/failedToFetch", {
          state: { errorStatus: errStatus.status },
        });
    }
  };

  return (
    <Box sx={{ width: "80%" }}>
      {location.pathname === "/acount/Edit" ? (
        <EditUserAccount
          elmentValueList={elmentValueList.EditAccount}
          setElmentValueList={setElmentValueList}
          stateId={stateId}
        />
      ) : (
        <EditPasswordUser
          elmentValueList={elmentValueList.EditPasswrodAccount}
          setElmentValueList={setElmentValueList}
          stateId={stateId}
        />
      )}
    </Box>
  );
};

export default EditUserAccountParent;
