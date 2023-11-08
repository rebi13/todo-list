<template>
  <v-text-field :label="label" variant="underlined"></v-text-field>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
