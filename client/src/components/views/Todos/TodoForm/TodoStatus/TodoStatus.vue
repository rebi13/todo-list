<template>
  <v-select
    class="selectStatus"
    v-model="inputData"
    variant="solo"
    :items="['진행전', '진행중', '완료']"
    @blur="sendDataToParent"
  ></v-select>
</template>

<script setup lang="ts">
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

const inputData = ref(props.initialData || "진행전");
const emit = defineEmits(["input-changed"]);

const sendDataToParent = () => {
  emit("input-changed", inputData.value, props.data);
};
</script>
