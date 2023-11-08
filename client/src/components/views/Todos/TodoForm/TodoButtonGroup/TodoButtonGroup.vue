<template>
  <div class="buttonGroupWrap">
    <Button :name="'추가'" :isAdd="true"></Button>
    <Button :name="'취소'" :isAdd="false"></Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/common/Button/Button.vue";
</script>
<style lang="scss">
@import "./TodoButtonGroup.scss";
</style>
