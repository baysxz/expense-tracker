import express from "express";

import { getUsers } from "../controller/get/getUsers";
import { getCategory } from "../controller/get/getCategory";
import { updateUser } from "../controller/put/updatedUser";
import { createCategory } from "../controller/post/createCategory";
import { getRecord } from "../controller/get/getRecord";
import { createRecord } from "../controller/post/createRecord";
import { updatedCategory } from "../controller/put/updatedCategory";
import { signUp } from "../controller/post/signUp";
import { signIn } from "../controller/post/signIn";
import { getUsersRecord } from "../controller/get/getUsersRecord";
import { deleteRecord } from "../controller/delete/deleteRecord";
import { deleteCategory } from "../controller/delete/deleteCategory";
export const userRouter = express.Router();

userRouter
  .get("/users", getUsers)
  .get("/category", getCategory)
  .get("/record", getRecord)
  .get("/userRecord", getUsersRecord)
  .post("/users", signUp)
  .post("/", signIn)
  .post("/category/addCategory", createCategory)
  .post("/record/addRecord", createRecord)
  .put("/users/:userId", updateUser)
  .put("/category/:categoryId", updatedCategory)
  .delete("/deleteRecord/:id", deleteRecord)
  .delete("/deleteCategory/:id", deleteCategory);
