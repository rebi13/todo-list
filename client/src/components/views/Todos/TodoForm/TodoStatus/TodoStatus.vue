<template>
  <v-select
    class="selectStatus"
    v-model="inputData"
    variant="solo"
    :items="Object.values(TODO_STATUS)"
    @blur="sendDataToParent"
  ></v-select>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TODO_STATUS } from "@/constants";

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

const inputData = ref((props.initialData as TODO_STATUS) || TODO_STATUS.before);
const emit = defineEmits(["input-changed"]);

const sendDataToParent = () => {
  emit("input-changed", inputData.value.toString(), props.data);
};
</script>
