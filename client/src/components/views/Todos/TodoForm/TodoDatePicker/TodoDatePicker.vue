<template>
  <VueDatePicker
    class="datePicker"
    v-model="inputData"
    :format="format"
    @blur="sendDataToParent"
  ></VueDatePicker>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
  initialData: {
    type: String,
    required: true,
  },
});

const inputData = ref(props.initialData);
const emit = defineEmits(["input-changed"]);

const sendDataToParent = () => {
  emit("input-changed", inputData.value, props.data);
};

const format = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();

  // return `Selected date is ${day}/${month}/${year}`;
};
</script>

<style lang="scss">
@import "./TodoDatePicker.scss";
</style>
