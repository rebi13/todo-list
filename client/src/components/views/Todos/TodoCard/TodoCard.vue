<template>
  <div class="todoCard">
    <div class="todoInfo">
      <h1 class="ellipsis">{{ todo.title }}</h1>
      <div class="ellipsis">{{ todo.content }}</div>
    </div>
    <div class="todoStatus">
      <div>{{ todo.createDate }}</div>
      <div>{{ todo.status }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
@import "./TodoCard.scss";
</style>
