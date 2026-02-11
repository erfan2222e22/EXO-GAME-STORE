import { useContext, useState, createContext } from "react";
const userIdContext = createContext();

export const UserIdContext = ({ childern }) => {
  const [userId, setUserID] = useState(0);

  return (
    <userIdContext.Provider value={{ userId, setUserID }}>
      {childern}
    </userIdContext.Provider>
  );
};

export const useUserIdContext = () => {
  return useContext(userIdContext);
};
