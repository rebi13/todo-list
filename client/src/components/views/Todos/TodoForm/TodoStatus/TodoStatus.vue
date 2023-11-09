<template>
  <v-select
    class="selectStatus"
    v-model="inputData"
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
});

const inputData = ref("진행전");
const emit = defineEmits(["input-changed"]);

const sendDataToParent = () => {
  emit("input-changed", inputData.value, props.data);
};
</script>
