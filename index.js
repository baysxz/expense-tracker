import express from "express";
import cors from "cors";
import { userRouter } from "./router/user.router";

const app = express();

app.use(express.json());
app.use(cors());
const port = 8888;

app.use(userRouter);

// app.use("/testing", async (request, response) => {
//   try {
//     response.status(200).json({ users: "testing user" });
//   } catch (error) {
//     response.status(400).json({ message: "error" });
//   }
// });

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
