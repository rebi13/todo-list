<template>
  <div class="todoStatusGroupWrap">
    <TodoDatePicker></TodoDatePicker>
    <TodoStatus></TodoStatus>
  </div>
</template>

<script lang="ts" setup>
import TodoDatePicker from "./TodoDatePicker/TodoDatePicker.vue";
import TodoStatus from "./TodoStatus/TodoStatus.vue";
</script>
<style lang="scss">
@import "./TodoStatusGroup.scss";
</style>
