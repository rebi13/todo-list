import { Router } from "express";
import { TodoService } from "../services/index.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const todoRouter = Router();
const todoService = new TodoService();

// Todo 조회
todoRouter.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    return await todoService.getTodo(id);
  })
);

// Todo 전체 조회
todoRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    return await todoService.getTodos();
  })
);

// Todo 저장
todoRouter.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { title, content, createDate, status } = req.body;
    return await todoService.addTodo({
      title,
      content,
      createDate,
      status,
    });
  })
);

// Todo 수정
todoRouter.patch(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, content, createDate, status } = req.body;
    return await todoService.updateTodo(id, {
      title,
      content,
      createDate,
      status,
    });
  })
);

// Todo 삭제
todoRouter.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    return await todoService.deleteTodo(id);
  })
);

export default todoRouter;
