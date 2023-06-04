import { useState } from "react";

import { Post } from "../SignIn/Post";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(
    "이메일 주소는 @를 포함해야 합니다. 비밀번호는 8자리 이상이어야 합니다."
  );
  return (
    <>
      <div>회원가입 페이지</div>
      <input
        data-testid="email-input"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        data-testid="password-input"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        type="button"
        disabled={!email.includes("@") || password.length < 8}
        data-testid="signin-button"
        onClick={(e) => Post({ email, password, setMessage })}
      >
        회원가입
      </button>
      <div>{message}</div>
    </>
  );
};
