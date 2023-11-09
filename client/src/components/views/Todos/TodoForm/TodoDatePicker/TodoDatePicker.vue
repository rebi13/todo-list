<template>
  <VueDatePicker
    class="datePicker"
    v-model="inputData"
    @blur="sendDataToParent"
  ></VueDatePicker>
</template>

<script lang="ts" setup>
import { ref } from "vue";

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
</script>

<style lang="scss">
@import "./TodoDatePicker.scss";
</style>
