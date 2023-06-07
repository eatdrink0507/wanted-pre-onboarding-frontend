import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "./api";

export const Todo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [newtodo, setNewtodo] = useState("");
  useEffect(() => {
    api("get", null, setData);

    if (!localStorage.getItem("log-token")) navigate("/signin");
  }, []);

  return (
    <div>
      <h1>this is todo</h1>
      <div>
        <input
          onChange={(e) => {
            setNewtodo(e.target.value);
          }}
          data-testid="new-todo-input"
        />
        <button
          onClick={() => {
            api("post", newtodo, null, null).then(() =>
              api("get", "", setData, null)
            );
          }}
          data-testid="new-todo-add-button"
        >
          추가
        </button>
      </div>
      <ul>
        {data.map((e, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                onClick={(e) => console.log(e.target.checked)}
                defaultChecked={e.isCompleted}
              />
              <span>{e.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button
              onClick={() =>
                api("delete", null, null, e.id).then(() =>
                  api("get", "", setData, null)
                )
              }
              data-testid="delete-button"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
