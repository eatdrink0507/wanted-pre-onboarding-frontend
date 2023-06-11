import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "./Post";
import { Modal } from "../Modal";
export const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("log-token")) navigate("/todo");
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [modalopen, setModalopen] = useState(false);
  return (
    <div className="signbox">
      <h1>회원가입 페이지</h1>
      <span>이메일</span>
      <input
        data-testid="email-input"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      비밀번호
      <input
        data-testid="password-input"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        type="button"
        disabled={!email.includes("@") || password.length < 8}
        data-testid="signup-button"
        onClick={() =>
          Post({ email, password, setMessage, setModalopen, navigate })
        }
      >
        회원가입
      </button>
      <div>
        이메일 주소는 @를 포함해야 합니다. 비밀번호는 8자리 이상이어야 합니다.
      </div>
      <Modal open={modalopen} message={message} toclose={setModalopen} />
    </div>
  );
};
