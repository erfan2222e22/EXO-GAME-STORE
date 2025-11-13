import contextUse from "../../useContext/useContext";
import { useContext } from "react";
import styleComponent from "./Style-Component/StyleInformationEnqury";
const InformationEnquryBtn = () => {
  const { BtnSend } = styleComponent;
  const {
    elmentsInArray,
    setCorrectRequest,
    phoneNumberEroreBolean,
    setFailRequest,
    correctRequest,
    setElmentInArray,
    setRequest,
  } = useContext(contextUse);

  const resetInputValue = () => {
    const timeOut = 1000;
    setElmentInArray((prev) => prev.map((item) => ({ ...item, value: "" })));

    setRequest((prev) =>
      Object.fromEntries(Object.entries(prev).map(([_]) => [_, ""]))
    );

    setTimeout(() => {
      alert("welcome");
      setCorrectRequest(false);
    }, timeOut);
  };

  const handelOnclick = () => {
    const importantFildes = elmentsInArray
      .filter((fill) => fill.importeData)
      .every((fill) => fill.value.length > 0);
    if (importantFildes && phoneNumberEroreBolean === false) {
      setCorrectRequest(true);
      setFailRequest(false);
      console.log(`true handel onclick returns`);
    } else {
      setFailRequest(true);
      setCorrectRequest(false);
      console.log(`false handel onclick returns`);
    }
    correctRequest && resetInputValue();
    console.log(phoneNumberEroreBolean);
  };

  return <BtnSend onClick={handelOnclick}>send</BtnSend>;
};

export default InformationEnquryBtn;
