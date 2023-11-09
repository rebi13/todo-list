<template>
  <div class="todoFormWrap">
    <TodoInput
      label="제목을 입력하세요."
      :data="'title'"
      @input-changed="handleInputChange"
    ></TodoInput>
    <TodoInput
      label="설명을 입력하세요."
      :data="'content'"
      @input-changed="handleInputChange"
    ></TodoInput>
    <TodoStatusGroup></TodoStatusGroup>
    <TodoButtonGroup></TodoButtonGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TodoButtonGroup from "./TodoButtonGroup/TodoButtonGroup.vue";
import TodoInput from "./TodoInput/TodoInput.vue";
import TodoStatusGroup from "./TodoStatusGroup/TodoStatusGroup.vue";

const titleInput = ref("");
const contentInput = ref("");

const handleInputChange = (input: string, data: string) => {
  switch (data) {
    case "title":
      titleInput.value = input;
      break;
    case "content":
      contentInput.value = input;
      break;
    case "date":
      break;
    case "status":
      break;
  }
};
</script>

<style lang="scss">
@import "./TodoForm.scss";
</style>
