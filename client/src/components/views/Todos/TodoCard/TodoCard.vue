<template>
  <div class="todoCard">
    <div class="todoInfo">
      as
      <h1>{{ todo.title }}</h1>
      <div>{{ todo.content }}</div>
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
    // title: {
    //   type: String,
    //   required: true,
    // },
    // content: {
    //   type: String,
    //   required: true,
    // },
    // createDate: {
    //   type: String,
    //   required: true,
    // },
    // status: {
    //   type: String,
    //   required: true,
    // },
  },
});
</script>

<style lang="scss">
@import "./TodoCard.scss";
</style>
