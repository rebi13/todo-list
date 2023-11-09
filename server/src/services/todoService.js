import { TodoModel } from "../db/models/index.js";

class TodoService {
  constructor() {
    this.todoModel = new TodoModel();
  }
  getTodo(id) {
    return this.todoModel.findById(id);
  }
  getTodos() {
    return this.todoModel.findTodos();
  }
  addTodo(todo) {
    return this.todoModel.create(todo);
  }
  updateTodo(id, todo) {
    return this.todoModel.update(id, todo);
  }
  deleteTodo(id) {
    return this.todoModel.delete(id);
  }
}
export default TodoService;
