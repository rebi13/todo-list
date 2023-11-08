<template>
  <div class="todoContent">
    <SearchBox></SearchBox>
    <AddButton></AddButton>
    <TodoForm></TodoForm>
  </div>
</template>

<script lang="ts" setup>
import SearchBox from "./SearchBox/SearchBox.vue";
import AddButton from "./AddButton/AddButton.vue";
import TodoForm from "./TodoForm/TodoForm.vue";
</script>

<style lang="scss">
@import "./Todos.scss";
</style>
