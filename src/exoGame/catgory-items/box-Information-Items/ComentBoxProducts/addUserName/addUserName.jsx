import { useEffect, useState } from "react";
const AddUserName = ({ comentValue, setArray, array }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (comentValue.trim() !== "" && userName.trim() !== "") {
      // "It will run if the item is not equal to an empty string"
      setArray([
        ...array,
        {
          name: userName,
        },
      ]);
      setUserName("");
    }
  }, [array, comentValue, setArray, userName]);

  return (
    <div>
      <h4>youname:</h4>
      <input
        placeholder="Username:"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      ></input>
    </div>
  );
};
export default AddUserName;
