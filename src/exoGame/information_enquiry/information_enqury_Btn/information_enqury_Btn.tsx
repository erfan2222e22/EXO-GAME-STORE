import contextUse from "../../useContext/useContext";
import { useContext } from "react";
import styleComponent from "./Style-Component/StyleInformationEnqury";
import { UseContext_Type } from "./types/Type_information_enqury_Btn";
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
  }: UseContext_Type = useContext(contextUse);

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
    if (importantFildes && !phoneNumberEroreBolean) {
      setCorrectRequest(true);
      setFailRequest(false);
    } else {
      setFailRequest(true);
      setCorrectRequest(false);
    }
    correctRequest && resetInputValue();
  };

  return <BtnSend onClick={handelOnclick}>send</BtnSend>;
};

export default InformationEnquryBtn;
