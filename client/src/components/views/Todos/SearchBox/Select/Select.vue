<template>
  <v-select
    class="selectBox"
    v-model="defaultItem"
    :items="['제목', '설명', '상태', '날짜']"
    variant="solo"
  ></v-select>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const defaultItem = ref("제목");
</script>

<style lang="scss">
@import "./Select.scss";
</style>
