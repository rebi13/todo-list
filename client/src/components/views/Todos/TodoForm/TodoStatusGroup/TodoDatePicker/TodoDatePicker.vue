<template>
  <VueDatePicker class="datePicker" v-model="date"></VueDatePicker>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const date = ref();
</script>

<style lang="scss">
@import "./TodoDatePicker.scss";
</style>
