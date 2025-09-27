import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
const MonitorIconsInformation = ({ originalItems }) => {
  const items = [
    {
      id: 1,
      srcIcon:
        "https://img.icons8.com/?size=100&id=59872&format=png&color=000000",
      title: "refreshRate",
      text: originalItems.refreshRate,
    },
    {
      id: 2,
      srcIcon:
        "https://img.icons8.com/?size=100&id=40415&format=png&color=000000",
      title: "Characteristic-Of-Image-Resolution",
      text: originalItems.panelType,
    },
    {
      id: 3,
      srcIcon:
        "https://img.icons8.com/?size=100&id=aVHe2jHuORcA&format=png&color=000000",
      title: "PanelType",
      text: originalItems.PanelSize,
    },
    {
      id: 4,
      srcIcon: "https://cdn-icons-png.flaticon.com/128/16543/16543189.png",
      title: "PanelSize",
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

export default MonitorIconsInformation;
