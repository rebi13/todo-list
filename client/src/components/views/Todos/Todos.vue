<template>
  <div class="todoContent">
    <SearchBox></SearchBox>
    <AddButton></AddButton>
    <TodoCard></TodoCard>
    <TodoForm></TodoForm>
  </div>
</template>

<script lang="ts" setup>
import SearchBox from "./SearchBox/SearchBox.vue";
import AddButton from "./AddButton/AddButton.vue";
import TodoForm from "./TodoForm/TodoForm.vue";
import TodoCard from "./TodoCard/TodoCard.vue";
</script>

<style lang="scss">
@import "./Todos.scss";
</style>
