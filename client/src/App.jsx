import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
