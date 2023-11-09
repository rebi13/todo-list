<template>
  <div class="todoFormWrap">
    <TodoInput
      label="제목을 입력하세요."
      :data="'title'"
      @input-changed="handleInputChange"
    ></TodoInput>
    <TodoInput
      label="설명을 입력하세요."
      :data="'content'"
      @input-changed="handleInputChange"
    ></TodoInput>
    <div class="todoStatusGroupWrap">
      <TodoDatePicker
        :data="'date'"
        @input-changed="handleInputChange"
      ></TodoDatePicker>
      <TodoStatus
        :data="'status'"
        @input-changed="handleInputChange"
      ></TodoStatus>
    </div>
    <div class="buttonGroupWrap">
      <Button :name="'추가'" :isAdd="true" @button-click="submitForm"></Button>
      <Button :name="'취소'" :isAdd="false"></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import TodoInput from "./TodoInput/TodoInput.vue";
import TodoDatePicker from "./TodoDatePicker/TodoDatePicker.vue";
import TodoStatus from "./TodoStatus/TodoStatus.vue";
import Button from "@/components/common/Button/Button.vue";
import axiosRequest from "@/api";

const props = defineProps({
  handleTaskComplete: Function,
});

const title = ref("");
const content = ref("");
const createDate = ref("");
const status = ref("");

type InputChangeObjType = {
  [key: string]: (input: string) => void;
};

const inputChangeObj: InputChangeObjType = {
  title: (input: string) => {
    title.value = input;
  },
  content: (input: string) => {
    content.value = input;
  },
  date: (input: string) => {
    createDate.value = input;
  },
  status: (input: string) => {
    status.value = input;
  },
};

const handleInputChange = (input: string, data: string) => {
  inputChangeObj[data](input);
  console.log(input, data);
};

const submitForm = async (data: boolean) => {
  if (data) {
    const todoData = {
      title: title.value,
      content: content.value,
      createDate: createDate.value,
      status: status.value,
    };
    const response = await axiosRequest.requestAxios<any>(
      "post",
      "/todos",
      todoData
    );
    if (!response.error && props.handleTaskComplete) {
      console.log("성공");
      props.handleTaskComplete();
    }
    console.log(response);
  }

  return; // 창 닫기
};
</script>

<style lang="scss">
@import "./TodoForm.scss";
</style>
