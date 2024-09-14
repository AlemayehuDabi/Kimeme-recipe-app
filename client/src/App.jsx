import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CreateRecipe from "./Pages/CreateRecipe/CreateRecipe";
import { useEffect, useState } from "react";
import FourOFour from "./component/FourOFour/fourOfour";
import Profile from "./Pages/profile/Profile";
import Search from "./Pages/Search/Search";

function App() {
  const [isFixed, setIsFixed] = useState("");

  const handleFixed = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixed);
    return () => window.removeEventListener("scroll", handleFixed);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignUp isFixed={isFixed} />} path="/sign-up" />
        <Route element={<Login isFixed={isFixed} />} path="/login" />
        <Route
          element={<CreateRecipe isFixed={isFixed} />}
          path="/create-recipe"
        />

        <Route element={<Profile isFixed={isFixed} />} path="/profile" />
        <Route element={<Search isFixed={isFixed} />} path="/search" />

        {/* four0four page */}
        <Route element={<FourOFour />} path="*" />
      </Routes>
    </>
  );
}

export default App;
