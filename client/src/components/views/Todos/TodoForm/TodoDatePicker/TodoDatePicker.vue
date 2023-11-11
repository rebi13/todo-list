<template>
  <VueDatePicker
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
  emit("input-changed", format(inputData.value.toString()), props.data);
};

const format = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};
</script>

<style lang="scss">
@import "./TodoDatePicker.scss";
</style>
