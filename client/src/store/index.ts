import { createStore } from "vuex";
import axiosRequest from "@/api/index";
import { res, todo } from "@/@types/index";
import { SELECT_STATUS } from "@/constants";

// Vuex 스토어 타입 정의
interface RootState {
  defaultItem: string;
  searchTerm: string;
  todos: todo[];
  filteredTodos: todo[];
  loading: boolean;
}

interface FilterObjType {
  [key: string]: (state: todo[], searchTerm: string) => todo[];
}

const filterObj: FilterObjType = {
  제목: (state, searchTerm) => {
    return state.filter((todo) => todo.title.includes(searchTerm));
  },
  설명: (state, searchTerm) => {
    return state.filter((todo) => todo.content.includes(searchTerm));
  },
  상태: (state, searchTerm) => {
    return state.filter((todo) => todo.status.includes(searchTerm));
  },
  날짜: (state, searchTerm) => {
    return state.filter((todo) => todo.createDate.includes(searchTerm));
  },
};
export default createStore<RootState>({
  state: {
    defaultItem: SELECT_STATUS.title,
    todos: [],
    filteredTodos: [],
    searchTerm: "",
    loading: false, // API 호출 상태를 나타내는 상태 추가
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
      state.filteredTodos = getFilteredTodos(state);
    },
    updateDefaultItem(state, newValue) {
      state.defaultItem = newValue;
      state.filteredTodos = getFilteredTodos(state);
    },
    updateSearchTerm(state, newValue) {
      state.searchTerm = newValue;
      state.filteredTodos = getFilteredTodos(state);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        // API 호출 전에 로딩 상태를 설정합니다.
        commit("setLoading", true);

        const response = await axiosRequest.requestAxios<res<todo>>(
          "get",
          "/todos",
        );
        commit("setTodos", response.data);
        // 데이터를 가져온 후에 로딩 상태를 변경합니다.
        commit("setLoading", false);
      } catch (error) {
        console.error("할 일 목록을 불러오는 중 에러가 발생했습니다.", error);

        // 에러 발생 시에도 로딩 상태를 변경합니다.
        commit("setLoading", false);
      }
    },
  },
  getters: {
    filteredTodos: (state) => (searchTerm: string) => {
      // 현재 필터링 함수를 가져옵니다.
      const currentFilter = filterObj[state.defaultItem];

      // 적절한 필터링 함수가 존재할 경우 해당 함수를 호출하여 결과를 반환합니다.
      if (currentFilter) {
        return currentFilter(state.todos, searchTerm);
      }
      // 적절한 필터링 함수가 없는 경우 전체 배열을 반환합니다.
      return state.todos;
    },
  },
});

function getFilteredTodos(state: RootState) {
  const currentFilter = filterObj[state.defaultItem];
  let filteredArray = state.todos;

  if (currentFilter) {
    filteredArray = currentFilter(state.todos, state.searchTerm);
  }

  return filteredArray;
}
