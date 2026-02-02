import axios from "axios";
import { useState, useEffect } from "react";
import { NavItem } from "react-bootstrap";

const FuqReact = () => {
  const [state, setState] = useState([
    { name: "erfan", id: 1, fuq: "awdawdawd" },
    { name: "mmd", id: 2, fuq: "awdawdawd" },
  ]);
  const test = () => {
    const test = [
      { name: "ehsan", id: 1 },
      { name: "korosh", id: 2 },
    ];
    setState((prev) => {
      const newState = [...prev];
      test.forEach((testItem) => {
        const exsisting = newState.findIndex(
          (stateItem) => stateItem.id === testItem.id,
        );
        if (exsisting !== -1) {
          newState[exsisting] = {
            ...newState[exsisting],
            ...testItem,
          };
        } else {
          newState.push(testItem as any);
        }
      });
      return newState;
    });
  };

  return (
    <div>
      <button onClick={test}>FuQreact</button>
      <button onClick={() => console.log(state)}>show</button>
    </div>
  );
};
export default FuqReact;
