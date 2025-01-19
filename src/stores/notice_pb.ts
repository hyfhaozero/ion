import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
//const server: string | null = localStorage.getItem("server");
const notice: any = ref("");
/*const fetchNotice = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/notice');
    notice.value = response.data; // 将请求的结果赋给 notice.value
  } catch (error) {
    console.error('Error fetching notice:', error);
    notice.value = 'Failed to fetch notice'; // 错误时赋默认值
  }
}; */
axios.get('http://localhost:3000/api/notice')
  .then(res => notice.value = res.data)
  .catch(error => {
    console.error(error);
    notice.value = error
  });

// 在适当的地方调用 fetchNotice，例如在 setup 中调用
//fetchNotice();
export const useNoticeStore = defineStore("notice", () => {
  return {
    notice
    //add more export
  };
});
