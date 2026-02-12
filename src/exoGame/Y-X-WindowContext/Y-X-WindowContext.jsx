import { useContext, useState, createContext, useEffect } from "react";
const XandYwindowPositon = createContext();

export const YandXPositionWindow = ({ childern }) => {
  const [xWindow, setXwindow] = useState(0);
  const [yWindow, setYwindow] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", (e) => windowFunction(e));
    return () => window.removeEventListener("resize", (e) => windowFunction(e));
  }, []);

  const windowFunction = (e) => {
    setYwindow((prev) => (prev = e.currentTarget.innerHeight));
    setXwindow((prev) => (prev = e.currentTarget.innerWidth));
  };

  return (
    <XandYwindowPositon.Provider
      value={{
        xWindow,
        yWindow,
      }}
    >
      {childern}
    </XandYwindowPositon.Provider>
  );
};

export const useXandYWindowPosition = () => {
  return useContext(XandYwindowPositon);
};
