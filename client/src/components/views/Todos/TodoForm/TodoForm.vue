<template>
  <TodoInput></TodoInput>
  <TodoInput></TodoInput>
  <TodoDatePicker></TodoDatePicker>
  <TodoStatus></TodoStatus>
  <Button name="추가"></Button>
  <Button name="취소"></Button>
</template>

<script lang="ts" setup>
import TodoDatePicker from "./TodoDatePicker/TodoDatePicker.vue";
import TodoInput from "./TodoInput/TodoInput.vue";
import TodoStatus from "./TodoStatus/TodoStatus.vue";
import Button from "@/components/common/Button/Button.vue";
</script>
