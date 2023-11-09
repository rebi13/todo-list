import axios, { AxiosInstance } from "axios";

const allowMethod: string[] = ["get", "post", "put", "patch", "delete"];

// Axios 인스턴스 생성
const apiInstance: AxiosInstance = axios.create({
  baseURL: process.env.APP_API_URL || "http://localhost:4000/api/v1",
  timeout: 5000,
  withCredentials: true,
});

// post 요청 시 Content-Type 설정
apiInstance.defaults.headers.post["Content-Type"] = "application/json";

// 정의된 함수 시그니처에 맞게 인터페이스 생성
interface AxiosRequest {
  requestAxios: <T>(
    method: string,
    url: string,
    data?: {},
    headers?: {}
  ) => Promise<T>;
}

const axiosRequest: AxiosRequest = {
  /**
   * 작성자명   : 원종석
   * 작성일자   : 2023.08.02.(수)
   * 작성내용   : axios로 요청 보내기
   * 수정일자   : none
   * 수정내용   : none
   * @param method 어떤 형식의 method를 보내는지 설정 (get, post, put, patch, delete)
   * @param url 호출 url 작성. path param은 url에 같이 정의해준다.
   * @param data request body에 해당하는 사항. post, put 시 추가/수정할 객체를 지정해주면 된다. get은 빈 객체를 보낸다.
   * @param headers 특정 값을 전달하면 서버에서 검증하여 데이터의 위변조 방지
   */
  requestAxios: async <T>(
    method: string,
    url: string,
    data = {},
    headers = {}
  ) => {
    // 이상한 method 넣으면 실행 못하게 미리 에러 처리 한다.
    if (!allowMethod.includes(method.toLowerCase()))
      throw new Error("허용되지 않은 호출 method입니다.");
    try {
      const response = await apiInstance({
        method,
        url: `${apiInstance.defaults.baseURL}${url}`,
        data,
        headers,
      });

      return response.data as T;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default axiosRequest;
