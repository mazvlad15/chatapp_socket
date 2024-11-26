import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="h-screen flex items-center justify-center p-3">
        {/* <Home /> */}
        {/* <Signup /> */}
        <Login />
    </div>
  );
}

export default App;
