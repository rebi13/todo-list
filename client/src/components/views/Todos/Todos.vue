<template>
  <div class="todoContent">
    <SearchBox></SearchBox>
    <AddButton></AddButton>
    <TodoCard v-for="item in todoList" :todo="item"></TodoCard>
    <TodoForm></TodoForm>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import SearchBox from "./SearchBox/SearchBox.vue";
import AddButton from "./AddButton/AddButton.vue";
import TodoForm from "./TodoForm/TodoForm.vue";
import TodoCard from "./TodoCard/TodoCard.vue";
import axiosRequest from "@/api/index";

const todoList = ref([]);

onMounted(async () => {
  const response = await axiosRequest.requestAxios<any>("get", "/todos");
  todoList.value = response.data;
});
</script>

<style lang="scss">
@import "./Todos.scss";
</style>
