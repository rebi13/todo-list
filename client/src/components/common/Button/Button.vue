<template>
  <v-btn> {{ name }} </v-btn>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
