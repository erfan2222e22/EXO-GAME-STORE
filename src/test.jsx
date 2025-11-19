// import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";
import navigated from "./exoGame/navigateFailFetchDataPage/navigateFailedFetchData";
import Test2 from "./test2";

const Test = () => {
  const props = "(☞ﾟヮﾟ)☞";

  const test = () => {
    const array = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const string = "ERFAN";
    let conter = 0;

    array.map((item, index) => {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === item) {
          // console.log(conter);
          conter += index;
        }
      }
    });

    const positon = { width: 15, height: 10 };

    let area = positon.width * positon.height;
    console.log(5 / []);
  };

  return (
    <div>
      <Test2 props={props} />
      <h1 onClick={test}>click</h1>
    </div>
  );
};
export default Test;
