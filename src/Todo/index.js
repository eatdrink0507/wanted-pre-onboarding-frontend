import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("log-token"));
    if (localStorage.getItem("log-token")) navigate("/todo");
  }, []);
  return (
    <div>
      <h1>this is todo</h1>
    </div>
  );
};
