import express from "express";
import cors from "cors";
import { userRouter } from "./router/user.router";

const app = express();

app.use(express.json());
app.use(cors());
const port = 8888;

app.use(userRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
