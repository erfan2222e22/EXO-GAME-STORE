import { useState, useEffect } from "react";
import contextUse from "../useContext/useContext";
import SelectPcProductBox from "./selectPcProductBox/SelectPcProductBox";
import ShoppingCart from "./shopping Cart Pc Parts/ShoppingCartPcParts";
import { Box } from "@mui/material";

const AssmbleContiner = () => {
  const [selectPCPartBox, setSelectPCPartBox] = useState([
    {
      id: 1,
      text: "CPU",
      iconSrc:
        "https://img.icons8.com/?size=100&id=1581&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/cpu-product",
      title: "cpu-product",
      SeveralChoices: true,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 2,
      text: "MOTHERBORD",
      iconSrc:
        "https://img.icons8.com/?size=100&id=24575&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/motherboardProduct",
      title: "motherboardProduct",
      SeveralChoices: false,
      MandatoryPcPart: true,
      ProductArray: [],
    },
    {
      id: 3,
      text: "RAM",
      iconSrc:
        "https://img.icons8.com/?size=100&id=kvIYJSEnxlJS&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/ramProduct",
      title: "ramProduct",
      SeveralChoices: true,
      MandatoryPcPart: true,
      ProductArray: [],
    },
    {
      id: 4,
      text: "GPU",
      iconSrc:
        "https://img.icons8.com/?size=100&id=8o9ZaJ8oGorj&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/gpu-product",
      title: "gpu-product",
      SeveralChoices: true,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 5,
      text: "CPU COOLER",
      iconSrc:
        "https://img.icons8.com/?size=100&id=3370&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/cpuAirConditionerProduct",
      title: "cpuAirConditioner",
      SeveralChoices: true,
      MandatoryPcPart: true,
      ProductArray: [],
    },
    {
      id: 6,
      text: "HARD DISK",
      iconSrc:
        "https://img.icons8.com/?size=100&id=68429&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/hardDiskProduct",
      title: "hardDisc",
      SeveralChoices: false,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 7,
      text: "SSD",
      iconSrc:
        "https://img.icons8.com/?size=100&id=176&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/ssdProduct",
      title: "ssdProduct",
      SeveralChoices: true,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 8,
      text: "OPTICAL DRIVE",
      iconSrc:
        "https://img.icons8.com/?size=100&id=1HVy5WGpGPAc&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/opticalDriveProduct",
      title: "optical drive",
      SeveralChoices: false,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 9,
      text: "CASE",
      iconSrc:
        "https://img.icons8.com/?size=100&id=AuB0GLxbriFZ&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/caseProduct",
      title: "CASE",
      SeveralChoices: false,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 10,
      text: "FAN CASE",
      iconSrc:
        "https://img.icons8.com/?size=100&id=68399&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/fanCaseProduct",
      title: "FanCase",
      SeveralChoices: true,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 11,
      text: "POWER",
      iconSrc:
        "https://img.icons8.com/?size=100&id=112421&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/PcPwoerProduct",
      title: "Power",
      SeveralChoices: false,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 12,
      text: "MONITOR",
      iconSrc:
        "https://img.icons8.com/?size=100&id=39210&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/monitorProduct",
      title: "monitorProduct",
      SeveralChoices: false,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 13,
      text: "GAME DATA",
      iconSrc:
        "https://img.icons8.com/?size=100&id=7314&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/PcGameData",
      title: "GameData",
      SeveralChoices: true,
      MandatoryPcPart: false,
      ProductArray: [],
    },
    {
      id: 14,
      text: "SOFTWARE",
      iconSrc:
        "https://img.icons8.com/?size=100&id=12641&format=png&color=000000",
      toChoose: false,
      jsonServer: "http://localhost:3300/PcsoftwareData",
      title: "softwareData",
      SeveralChoices: true,
      MandatoryPcPart: false,
      ProductArray: [],
    },
  ]);

  // Normalize MandatoryPcPart flags based on current selections
  useEffect(() => {
    setSelectPCPartBox((prev) => {
      let changed = false;

      const findProductCpu = prev.find(
        (i) => i.title === "cpu-product" && i.ProductArray.length > 0
      );
      const findProductMotherBord = prev.find(
        (i) => i.title === "motherboardProduct" && i.ProductArray.length > 0
      );
      const findProductRam = prev.find(
        (i) => i.title === "ramProduct" && i.ProductArray.length > 0
      );

      const next = prev.map((value) => {
        if (value.title === "motherboardProduct") {
          const testing = !findProductCpu;
          if (value.MandatoryPcPart !== testing) {
            changed = true;
            return { ...value, MandatoryPcPart: testing };
          }
        }
        if (value.title === "ramProduct") {
          const testing = !findProductMotherBord;
          if (value.MandatoryPcPart !== testing) {
            changed = true;
            return { ...value, MandatoryPcPart: testing };
          }
        }
        if (value.title === "cpuAirConditioner") {
          const testing = !findProductRam;
          if (value.MandatoryPcPart !== testing) {
            changed = true;
            return { ...value, MandatoryPcPart: testing };
          }
        }
        return value;
      });

      return changed ? next : prev;
    });
  }, [selectPCPartBox]);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <contextUse.Provider value={{ selectPCPartBox, setSelectPCPartBox }}>
        <SelectPcProductBox></SelectPcProductBox>
        <ShoppingCart></ShoppingCart>
      </contextUse.Provider>
    </Box>
  );
};
export default AssmbleContiner;
