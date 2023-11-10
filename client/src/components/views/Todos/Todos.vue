<template>
  <div class="todoContent">
    <SearchBox></SearchBox>
    <AddButton @click="showTodoForm"></AddButton>
    <TodoForm
      v-if="isShowTodoForm"
      @cancel-click="hideTodoForm(null)"
      :handleTaskComplete="handleTaskComplete!"
      :initialData="todoFormData"
    ></TodoForm>
    <div v-for="item in todoList" :key="item._id">
      <TodoCard
        v-show="!item.isEditMode"
        :todo="item"
        @click="onTodoCardClick(item)"
      ></TodoCard>
      <TodoForm
        v-show="item.isEditMode"
        @cancel-click="hideTodoForm(item)"
        :handleTaskComplete="handleTaskComplete!"
        :initialData="item"
      ></TodoForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

import SearchBox from "./SearchBox/SearchBox.vue";
import AddButton from "./AddButton/AddButton.vue";
import TodoForm from "./TodoForm/TodoForm.vue";
import TodoCard from "./TodoCard/TodoCard.vue";
import { todo } from "@/@types/index";

const store = useStore();
const todoList = computed(() => store.state.filteredTodos);

const isShowTodoForm = ref(false);
const todoFormData = ref({
  _id: "",
  title: "",
  content: "",
  createDate: "",
  status: "진행전",
  isEditMode: false,
});

const showTodoForm = () => {
  resetData();
  isShowTodoForm.value = true;
};

const hideTodoForm = (item: todo | null) => {
  if (item) {
    item.isEditMode = !item.isEditMode;
    return;
  }

  isShowTodoForm.value = false;
};

onMounted(async () => {
  await store.dispatch("fetchTodos");
});

const handleTaskComplete = async () => {
  await store.dispatch("fetchTodos");
  hideTodoForm(null);
};

const onTodoCardClick = (item: todo) => {
  // TodoForm의 title, content, createDate, status에 item의 값을 설정합니다.
  const todoData = {
    _id: item._id,
    title: item.title,
    content: item.content,
    createDate: item.createDate,
    status: item.status,
    isEditMode: !item.isEditMode,
  };
  item.isEditMode = true;
  // TodoForm을 보이도록 설정합니다.
  todoFormData.value = todoData;
};

// 작성 완료 후 데이터 초기화
const resetData = () => {
  const inputData = {
    _id: "",
    title: "",
    content: "",
    createDate: "",
    status: "진행전",
    isEditMode: false,
  };
  Object.assign(todoFormData.value, inputData); // todoFormData를 inputData로 대체합니다.
};
</script>

<style lang="scss">
@import "./Todos.scss";
</style>
