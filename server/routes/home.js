import express from "express";
const router_home = express();

router_home.get("/", (req, res) => {
  res.send("slame iran ");
});

export default router_home;
