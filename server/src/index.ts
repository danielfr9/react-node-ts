import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { prisma } from "./server/db";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello from the server!" });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({});

  res.status(200).send({ users });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
