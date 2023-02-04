import express from "express";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();
const PORT = process.env.PORT | 3001;
const whiteList = ["http://127.0.0.1:5173","http://127.0.0.1:3000","http://localhost:5173"]
app.use(cors({
  origin: function(origin, callback){
      if(whiteList.includes(origin)){
          return callback(null, origin)
      }
      return callback("Error de CORS origin: "+ origin+ " No autorizado")
  },
  // credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello world"));
app.post("/prueba", (req, res) => {
  const { prueba } = req.body;
  res.json(prueba);
});

app.listen(PORT);
