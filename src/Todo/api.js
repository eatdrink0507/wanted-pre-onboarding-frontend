import axios from "axios";
export default function api(method, body, setData, id) {
  const url = {
    post: "/todos",
    get: "/todos",
    put: `/todos/${id}`,
    delete: `/todos/${id}`,
  };
  const token = localStorage.getItem("log-token");

  return axios({
    method: method,
    url: `https://www.pre-onboarding-selection-task.shop${url[method]}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      todo: body,
    },
  })
    .then((res) => {
      if (method === "get") setData(res.data);
    })
    .catch((error) => console.log(error, body));
}
