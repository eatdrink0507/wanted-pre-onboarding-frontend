import "./App.css";
import { Routes, Route } from "react-router-dom";

import { SignUp } from "./SignUp";
import SignIn from "./SignIn";
import { Todo } from "./Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
