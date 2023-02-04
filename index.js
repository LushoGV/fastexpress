import express from "express";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();
const PORT = process.env.PORT | 3001;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Hello world"));
app.post("/prueba", (req, res) => {
  const { prueba } = req.body;
  res.status(201).send(prueba);
});

app.listen(PORT);
