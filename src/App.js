import "./App.css";
import { Routes, Route } from "react-router-dom";

import { SignUp } from "./SignUp";
import SignIn from "./SignIn";
import { Todo } from "./Todo";

function App() {
  return (
    <div className="App">
      <h1>원티드 프리온보딩 프론트엔드 인턴십 과제</h1>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
