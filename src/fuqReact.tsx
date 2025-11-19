type Ab = { man: string };
type AV2 = { company: string };

type total = Ab | AV2;

interface Test {
  name: string;
  mmd: number;
  mmd2?: boolean;
  [key: string]: number | string | boolean | null;
}

const FuqReact = () => {
  const handelTest1 = (string1: string, string2: string) => {
    const awd: Test = {
      mmd: 12,
      name: "mmd",
      awd: "vvv",
      // awd2:false,
    };

    // const letters: string[] = [
    //   "a",
    //   "b",
    //   "c",
    //   "d",
    //   "e",
    //   "f",
    //   "g",
    //   "h",
    //   "i",
    //   "j",
    //   "k",
    //   "l",
    //   "m",
    //   "n",
    //   "o",
    //   "p",
    //   "q",
    //   "r",
    //   "s",
    //   "t",
    //   "u",
    //   "v",
    //   "w",
    //   "x",
    //   "y",
    //   "z",
    // ];
    // let cunterString1: number = 0;
    // let cunterString2: number = 0;
    // const lovercased1: string = string1.toLowerCase().trim();
    // const lovercased2: string = string2.toLowerCase().trim();
    // // letters.map((value, index) => {
    // //   // return () => {
    // //   for (let j = 0; j < lovercased1.length; j++) {
    // //     if (value === lovercased1[j]) {
    // //       cunterString1 += index;
    // //       console.log(index);
    // //       console.log(value);
    // //     }
    // //   }
    // //   for (let j = 0; j < lovercased2.length; j++) {
    // //     if (lovercased2[j] === value) {
    // //       cunterString2 += index;
    // //       // console.log(index);
    // //       // console.log(value);
    // //     }
    // //   }
    // //   // };
    // // });
    // for (let i in letters) {
    //   for (let j = 0; j < lovercased1.length; j++) {
    //     if (letters[i] === lovercased1[j]) {
    //       cunterString1 += letters.indexOf(letters[i]);
    //       // console.log(lovercased1[j]);
    //       // console.log(letters.indexOf(letters[i]));
    //     }
    //   }
    //   for (let j = 0; j < lovercased2.length; j++) {
    //     if (letters[i] === lovercased2[j]) {
    //       cunterString2 += letters.indexOf(letters[i]);
    //       console.log(lovercased2[j]);
    //       console.log(letters.indexOf(letters[i]));
    //     }
    //   }
    // }
    // // console.log(lovercased1);
    // // console.log(lovercased2);
    // console.log(cunterString1);
    // console.log(cunterString2);
    // if (cunterString1 <= cunterString2) {
    //   console.log(`${lovercased1} is better choise `);
    // } else {
    //   console.log(`${lovercased2} is better choise `);
    // }
    // return cunterString1 < cunterString2
    //   ? `${string1} is better choise `
    //   : `${string2} is better choise`;
  };
  const handelTest12 = (nume1: Test, num2: Test) => {};
  return (
    <div>
      <button onClick={() => handelTest1("Wuling Hongguang", "Toyota Corolla")}>
        testSecend
      </button>
      <button
        onClick={() =>
          handelTest12(
            { name: "mmd", mmd: 12, company: "sony" },
            { name: "mmd", mmd: 12, man: "microsoft" }
          )
        }
      >
        fuq that shit{" "}
      </button>
    </div>
  );
};
export default FuqReact;
// "Volkswagen Golf"
// "Volkswagen Beetle"
