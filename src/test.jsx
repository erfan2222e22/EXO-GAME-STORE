import { useState, useEffect } from "react";
import FuqReact from "./fuqReact";

import { usePaginationConterCatgory } from "./exoGame/PaginationCatgoryProducts/PaginationCatgoryProducts";

import axios from "axios";
const Test = () => {
  const { pageConter, setPageConter } = usePaginationConterCatgory();

  const [labelText, setLabelText] = useState("");
  const [conter, setConter] = useState(1);
  const [showItems, setShowItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fuq = async () => {
    try {
      const { data: DATA } = await axios.get(
        `http://localhost:3300/ModemProduct?_page=${pageConter}&_limit=2`,
      );

      setShowItems(DATA);
      console.log(DATA);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const { data: Data } = await axios.get(
        "http://localhost:3300/ModemProduct",
      );
      const { data: DATA } = await axios.get(
        `http://localhost:3300/ModemProduct?_page=${pageConter}&_limit=2`,
      );

      setConter(Data.length / 2);
      setShowItems(DATA);
    } catch (err) {
      console.log(err);
    }
  };

  const c = async () => {
    try {
      const posted = {
        name: "test",
        age: 25,
        id: 1283419238128317239182381283,
      };
      const { data: DATA } = await axios.post(
        "http://localhost:3300/test",
        posted,
      );
      console.log(DATA);
    } catch (err) {
      id();
      console.log(err);
    }
  };

  const id = () => {
    const show = [{ id: "awdawd" }];

    console.log(show.flatMap((item) => item));
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "10px",
        color: "#ffff",
        border: "1px solid #03c03c",
      }}
    >
      test area
      <button onClick={fuq}>show</button>
      <FuqReact></FuqReact>
      {Array.from({ length: conter }).map((item, key) => {
        return (
          <p
            style={{ color: "red" }}
            onClick={(e) => setPageConter(e.currentTarget.innerText)}
          >
            {key + 1}
          </p>
        );
      })}
      {showItems?.map((item) => {
        return (
          <div style={{ backgroundColor: "black" }}>
            <p style={{ color: "red" }}>{item?.id}</p>
          </div>
        );
      })}
      <button onClick={() => setPageConter((prev) => (prev += 1))}>❤</button>
      <button onClick={c}>🖤</button>
      <button onClick={c}> idk </button>
    </div>
  );
};
export default Test;
