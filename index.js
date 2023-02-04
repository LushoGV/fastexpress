import express from "express";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();
const PORT = process.env.PORT | 3001;

var whitelist = ['http://localhost:5173']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  }else{
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello world"));
app.post("/prueba", (req, res) => {
  const { prueba } = req.body;
  res.status(201).json(prueba);
});

app.listen(PORT);
