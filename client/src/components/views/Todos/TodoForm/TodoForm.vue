<template>
  <div class="todoFormWrap">
    <TodoInput label="제목을 입력하세요."></TodoInput>
    <TodoInput label="설명을 입력하세요."></TodoInput>
    <TodoStatusGroup></TodoStatusGroup>
    <TodoButtonGroup></TodoButtonGroup>
  </div>
</template>

<script lang="ts" setup>
import TodoButtonGroup from "./TodoButtonGroup/TodoButtonGroup.vue";
import TodoInput from "./TodoInput/TodoInput.vue";
import TodoStatusGroup from "./TodoStatusGroup/TodoStatusGroup.vue";
</script>

<style lang="scss">
@import "./TodoForm.scss";
</style>
