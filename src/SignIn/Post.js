import axios from "axios";

export const Post = ({ email, password, setMessage }) => {
  axios
    .post(
      "https://www.pre-onboarding-selection-task.shop/auth/signup",

      { email: email, password: password }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error.response.data);
      setMessage(error.response.data.message);
    });
};
