import "./App.css";
import { Routes, Route } from "react-router-dom";

import { SignUp } from "./SignUp";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
