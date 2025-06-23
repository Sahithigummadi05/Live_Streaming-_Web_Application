import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import mongoose from "mongoose";
import User from "./src/models/User.js";
import Channel from "./src/models/Channel.js";
import Message from "./src/models/Message.js";
import channelsRoutes from "./src/routes/channelsRoutes.js";
import settingsRoutes from "./src/routes/settingRoutes.js"
import { registerSocketServer } from "./src/io/io.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("hello your server is up");
});

app.use("/api/auth", authRoutes);
app.use("/api/channels", channelsRoutes);
app.use("/api/settings", settingsRoutes);

const server = http.createServer(app);
registerSocketServer(server);

mongoose.connect(process.env.MONGO_URL).then(()=>{
  server.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}`);
  });

}).catch(err=>{
  console.log("The DB connection failed. Server not started")
  console.log(err)
})

