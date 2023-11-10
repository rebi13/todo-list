<template>
  <v-select
    class="selectBox"
    v-model="defaultItem"
    :items="['제목', '설명', '상태', '날짜']"
    variant="solo"
  ></v-select>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const defaultItem = computed({
  get: () => store.state.defaultItem,
  set: (value) => store.commit("updateDefaultItem", value),
});
</script>

<style lang="scss">
@import "./Select.scss";
</style>
