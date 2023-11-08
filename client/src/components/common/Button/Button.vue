<template>
  <v-btn :class="isAdd ? 'addButton' : 'cancleButton'"> {{ name }} </v-btn>
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
</script>
<style lang="scss">
@import "./Button.scss";
</style>
