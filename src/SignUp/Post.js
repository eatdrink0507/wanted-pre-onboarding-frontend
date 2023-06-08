import axios from "axios";

export const Post = ({
  email,
  password,
  setMessage,
  setModalopen,
  navigate,
}) => {
  axios
    .post(
      "https://www.pre-onboarding-selection-task.shop/auth/signup",

      { email: email, password: password }
    )
    .then(() => {
      navigate("/signin");
    })
    .catch((error) => {
      setMessage(error.response.data.message);
      setModalopen(true);
    });
};
