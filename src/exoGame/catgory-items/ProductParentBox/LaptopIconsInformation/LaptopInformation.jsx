import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
const LaptopInformation = ({ originalItems }) => {
  const items = [
    {
      id: 1,
      srcIcon: "https://cdn-icons-png.flaticon.com/128/4617/4617745.png",
      title: "GPUmodel",
      text: originalItems.gpuModel,
    },
    {
      id: 2,
      srcIcon: "https://cdn-icons-png.flaticon.com/128/900/900330.png",
      title: "RAMcapacity",
      text: originalItems.ram,
    },
    {
      id: 3,
      srcIcon: "https://cdn-icons-png.flaticon.com/128/2432/2432574.png",
      title: "CpuModel",
      text: originalItems.Processor,
    },
    {
      id: 4,
      srcIcon: "https://cdn-icons-png.flaticon.com/128/16543/16543189.png",
      title: "monitorSize",
      text: originalItems.monitorSize,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item) => {
        return (
          <Tooltip title={item.title} key={item.id}>
            <img
              alt=""
              src={item.srcIcon}
              style={{ width: "60%", height: "60%" }}
            ></img>
            <span style={{ fontSize: "13px", color: "#6c757d" }}>
              {item.text}
            </span>
          </Tooltip>
        );
      })}
    </Box>
  );
};
export default LaptopInformation;
