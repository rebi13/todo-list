import { Router } from "express";

import todoRouter from "./todoRouter.js";

// 버전1 라우터
const v1Router = Router();

v1Router.use("/todos", todoRouter);

export const v1 = v1Router;
