import express from "express";
import { userRouter } from "./router/user.router";

const app = express();

app.use(express.json());
const port = 8888;

app.use(userRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
