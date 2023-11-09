<template>
  <div class="todoContent">
    <SearchBox></SearchBox>
    <AddButton @click="showTodoForm"></AddButton>
    <TodoForm
      v-show="isShowTodoForm"
      @cancel-click="hideTodoForm"
      :handleTaskComplete="handleTaskComplete!"
    ></TodoForm>
    <TodoCard v-for="item in todoList" :todo="item" :key="item._id"></TodoCard>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import SearchBox from "./SearchBox/SearchBox.vue";
import AddButton from "./AddButton/AddButton.vue";
import TodoForm from "./TodoForm/TodoForm.vue";
import TodoCard from "./TodoCard/TodoCard.vue";
import axiosRequest from "@/api/index";
import { res, todo } from "@/@types/index";

const isShowTodoForm = ref(false);

const showTodoForm = () => {
  isShowTodoForm.value = true;
};

const hideTodoForm = () => {
  isShowTodoForm.value = false;
};

const todoList = ref<todo[]>([]);

onMounted(async () => {
  await getTodos();
});

const getTodos = async () => {
  const response = await axiosRequest.requestAxios<res<todo[]>>(
    "get",
    "/todos",
  );
  todoList.value = response.data;
};

const handleTaskComplete = async () => {
  await getTodos();
  console.log("재조회!");
  hideTodoForm();
};
</script>

<style lang="scss">
@import "./Todos.scss";
</style>
