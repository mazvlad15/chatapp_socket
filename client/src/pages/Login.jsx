import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import useSingin from "../hooks/useSingin";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validationErrors, setValidationErrors] = useState({});
  const { login, isLoading, error } = useSingin();

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      loginSchema.parse({ username, password });

      const result = await login(username, password);

      if (result) {
        setUsername("");
        setPassword("");
        setValidationErrors({});
      }
    } catch (validationError) {
      if (validationError.errors) {
        const errors = validationError.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setValidationErrors(errors);
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-w-96 mx-auto"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full p-6 rounded-lg shadow-md bg-[#F9F7F7] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-75">
        <h1 className="text-3xl font-semibold text-center text-[#3F72AF]">
          Login<span className="text-[#DBE2EF]"> ChatApp</span>
        </h1>
        <form onSubmit={loginSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {validationErrors.username && (
              <p className="text-red-500 text-sm">
                {validationErrors.username}
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm">
                {validationErrors.password}
              </p>
            )}
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
            {error && (<div className="text-red-500 mt-2 text-center" >{error}</div>)}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
