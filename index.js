import express from "express";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();
const PORT = process.env.PORT | 3001;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello world"));
app.post("/prueba", (req, res) => {
  const { prueba } = req.body;
  res.json(prueba);
});

app.listen(PORT, () => {
  console.log("first")
});
