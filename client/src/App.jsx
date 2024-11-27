import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuthContext } from "./context/AuthContect";

function App() {
  return (
    <Router>
      <div className="h-screen flex items-center justify-center p-3">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const { authState } = useAuthContext();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={!authState ? <Navigate to="/login" /> : <Home />}
        />
        <Route
          path="/login"
          element={authState ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authState ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
