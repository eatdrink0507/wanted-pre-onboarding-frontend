import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "./api";
import { ListComponent } from "./ListComponent";

export const Todo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [newtodo, setNewtodo] = useState("");
  useEffect(() => {
    api("get", null, setData, null);

    if (!localStorage.getItem("log-token")) navigate("/signin");
  }, [navigate]);

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
            api("post", { todo: newtodo }, null, null).then(() =>
              api("get", "", setData, null)
            );
          }}
          data-testid="new-todo-add-button"
        >
          추가
        </button>
      </div>
      <ul>
        {data.map((e) => (
          <ListComponent e={e} key={e.id} setData={setData} />
        ))}
      </ul>
    </div>
  );
};
