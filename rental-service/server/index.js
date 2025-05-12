import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./config/database.js";
import cors from "cors";
import { router } from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "ONO RABOTAET!" });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server run on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

start();
