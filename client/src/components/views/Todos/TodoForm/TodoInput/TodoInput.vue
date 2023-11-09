<template>
  <v-text-field
    class="textField"
    :label="label"
    variant="underlined"
    v-model="inputData"
    @blur="sendDataToParent"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});
// const { data } = props;
const inputData = ref("");
const emit = defineEmits(["input-changed"]);

const sendDataToParent = () => {
  emit("input-changed", inputData.value, props.data);
};
</script>

<style lang="scss">
@import "./TodoInput.scss";
</style>
