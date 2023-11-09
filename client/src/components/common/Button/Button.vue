<template>
  <v-btn
    :class="isAdd ? 'addButton' : 'cancleButton'"
    @click="sendDataToParent"
  >
    {{ name }}
  </v-btn>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isAdd: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["button-click"]);

const sendDataToParent = () => {
  emit("button-click", props.isAdd);
};
</script>
<style lang="scss">
@import "./Button.scss";
</style>
