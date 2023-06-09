import axios from "axios";

export const Post = ({
  email,
  password,
  setMessage,
  setModalopen,
  navigate,
}) => {
  axios
    .post("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("log-token", res.data.access_token);
      navigate("/todo");
    })
    .catch((error) => {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setModalopen(true);
    });
};
