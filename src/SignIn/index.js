import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "../Modal";
import { Post } from "./Post";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [modalopen, setModalopen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("log-token"));
    if (localStorage.getItem("log-token")) navigate("/todo");
  }, []);
  return (
    <>
      <div>로그인ㅇ 페이지</div>
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
        onClick={(e) =>
          Post({ email, password, setMessage, setModalopen, navigate })
        }
      >
        로그인
      </button>
      <button onClick={(e) => navigate("/todo")}></button>

      <Modal open={modalopen} message={message} toclose={setModalopen} />
    </>
  );
}
