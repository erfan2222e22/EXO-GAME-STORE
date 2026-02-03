import express from "express";
import router_home from "../routes/home.js";
const app = express();
const port = 5000;
app.use(router_home);
app.listen(port, console.log(`server is rouning on port ${port} ✅`));
