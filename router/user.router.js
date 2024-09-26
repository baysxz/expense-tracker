import express from "express";

import { getUsers } from "../controller/user/getUsers";
import { createUser } from "../controller/user/createUser";
import { getCategory } from "../controller/category/getCategory";
import { updateUser } from "../controller/user/updateUser";
import { createCategory } from "../controller/category/createCategory";
import { getRecord } from "../controller/record/getRecord";
import { createRecord } from "../controller/record/createRecord";

export const userRouter = express.Router();

userRouter
  .get("/users", getUsers)
  .post("/addUser", createUser)
  .get("/category", getCategory)
  .put("/users/:userId", updateUser)
  .post("/category/addCategory", createCategory)
  .get("/record", getRecord)
  .post("/record/addRecord", createRecord);
