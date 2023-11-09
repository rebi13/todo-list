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
    <div class="todoStatusGroupWrap">
      <TodoDatePicker
        :data="'date'"
        @input-changed="handleInputChange"
      ></TodoDatePicker>
      <TodoStatus
        :data="'status'"
        @input-changed="handleInputChange"
      ></TodoStatus>
    </div>
    <TodoButtonGroup></TodoButtonGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TodoButtonGroup from "./TodoButtonGroup/TodoButtonGroup.vue";
import TodoInput from "./TodoInput/TodoInput.vue";
import TodoDatePicker from "./TodoDatePicker/TodoDatePicker.vue";
import TodoStatus from "./TodoStatus/TodoStatus.vue";

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
  console.log(input, data);
};
</script>

<style lang="scss">
@import "./TodoForm.scss";
</style>
