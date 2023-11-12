<template>
  <v-select
    class="selectBox"
    v-model="defaultItem"
    :items="Object.values(SELECT_STATUS)"
    variant="solo"
  ></v-select>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { SELECT_STATUS } from "@/constants";

const store = useStore();
const defaultItem = computed({
  get: () => store.state.defaultItem,
  set: (value) => store.commit("updateDefaultItem", value),
});
</script>

<style lang="scss">
@import "./Select.scss";
</style>
