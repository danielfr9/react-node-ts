import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
