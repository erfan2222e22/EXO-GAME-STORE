import { useContext, useState } from "react";
import contextUse from "./exoGame/useContext/useContext";

function MyProvider({ childern }) {
  const [name, setName] = useState("erfan");

  return (
    <contextUse.Provider value={(name, setName)}>
      {childern}
    </contextUse.Provider>
  );
}

export function useMyContext() {
  return useContext(contextUse);
}
