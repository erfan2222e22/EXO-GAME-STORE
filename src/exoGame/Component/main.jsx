import React from "react";
import rutes from "../../../routes";
import { useRoutes } from "react-router-dom";
const Main = () => {
  const router = useRoutes(rutes);
  return <>{router}</>;
};
export default Main;
