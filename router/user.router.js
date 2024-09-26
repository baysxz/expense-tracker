import express from "express";

import { getUser } from "../controller/getUser";

export const userRouter = express.Router();

userRouter.get("/", getUser);
