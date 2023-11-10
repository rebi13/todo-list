<template>
  <v-text-field
    v-model="searchTerm"
    density="compact"
    variant="solo"
    label="검색어를 입력하세요."
    single-line
    hide-details
  ></v-text-field>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const searchTerm = computed({
  get: () => store.state.searchTerm,
  set: (value) => store.commit("updateSearchTerm", value),
});
</script>

<style lang="scss">
@import "./TextBox.scss";
</style>
