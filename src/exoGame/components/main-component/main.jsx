import React from "react";
import rutes from "../../../routes";
import { useRoutes } from "react-router-dom";
export default function Main() {
  const router = useRoutes(rutes);
  return <>{router}</>;
}
