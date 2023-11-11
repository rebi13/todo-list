<template>
  <div class="todoFormWrap">
    <TodoInput
      label="제목을 입력하세요."
      :data="'title'"
      :initialData="title"
      @input-changed="handleInputChange"
    ></TodoInput>
    <TodoInput
      label="설명을 입력하세요."
      :data="'content'"
      :initialData="content"
      @input-changed="handleInputChange"
    ></TodoInput>
    <div class="todoStatusGroupWrap">
      <TodoDatePicker
        class="datePicker"
        :data="'date'"
        :initialData="createDate"
        @input-changed="handleInputChange"
      ></TodoDatePicker>
      <TodoStatus
        class="statusPicker"
        :data="'status'"
        :initialData="status"
        @input-changed="handleInputChange"
      ></TodoStatus>
    </div>
    <div class="buttonGroupWrap">
      <Button
        :name="_id.length ? '수정' : '추가'"
        :isAdd="true"
        @button-click="submitForm(true, _id)"
      ></Button>
      <Button :name="'취소'" :isAdd="false" @button-click="cancelForm"></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import TodoInput from "./TodoInput/TodoInput.vue";
import TodoDatePicker from "./TodoDatePicker/TodoDatePicker.vue";
import TodoStatus from "./TodoStatus/TodoStatus.vue";
import Button from "@/components/common/Button/Button.vue";
import axiosRequest from "@/api";
import { res, todo } from "@/@types";

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({
      _id: "",
      title: "",
      content: "",
      createDate: "",
      status: "",
      isEditMode: false,
    }),
  },
  handleTaskComplete: Function,
});
const _id = ref(props.initialData._id);
const title = ref(props.initialData.title);
const content = ref(props.initialData.content);
const createDate = ref(props.initialData.createDate);
const status = ref(props.initialData.status);
interface InputChangeObjType {
  [key: string]: (input: string) => void;
}

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

const submitForm = async (data: boolean, id: string) => {
  if (!checkValidation()) return;

  if (data) {
    const todoData = {
      title: title.value,
      content: content.value,
      createDate: createDate.value,
      status: status.value,
    };
    const response = id.length
      ? await axiosRequest.requestAxios<res<todo>>(
          "patch",
          `/todos/${id}`,
          todoData
        )
      : await axiosRequest.requestAxios<res<todo>>("post", "/todos", todoData);
    if (!response.error && props.handleTaskComplete) {
      props.handleTaskComplete();
    }
  }
  return; // 창 닫기
};

const checkValidation = () => {
  console.log(title.value, content.value, createDate.value, status.value);
  if (!title.value) {
    alert("제목을 입력하세요.");
    return false;
  }
  if (!content.value) {
    alert("설명을 입력하세요.");
    return false;
  }
  if (!createDate.value) {
    alert("날짜를 선택하세요.");
    return false;
  }

  return true;
};

const emit = defineEmits(["cancel-click"]);

const cancelForm = (data: boolean) => {
  if (!data) {
    emit("cancel-click");
  }
};
</script>

<style lang="scss">
@import "./TodoForm.scss";
</style>
