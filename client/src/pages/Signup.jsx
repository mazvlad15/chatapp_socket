import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import useSignup from "../hooks/useSignup";

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must have at least 2 characters."),
    username: z.string().min(3, "Username must have at least 3 characters."),
    password: z.string().min(6, "Password must have at least 6 characters."),
    confirmPassword: z.string().min(6, "Password confirmation is required."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const { signup, isLoading, error } = useSignup();

  const submitInputs = async (e) => {
    e.preventDefault();

    try {
      signupSchema.parse(inputs);

      const result = await signup(inputs);

      if (result) {
        setInputs({
          fullName: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
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
          Sign Up <span className="text-[#DBE2EF]">ChatApp</span>
        </h1>
        <form onSubmit={submitInputs}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
            {validationErrors.fullName && (
              <p className="text-red-500 text-sm">{validationErrors.fullName}</p>
            )}
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
            {validationErrors.username && (
              <p className="text-red-500 text-sm">{validationErrors.username}</p>
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm">{validationErrors.password}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            {validationErrors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {validationErrors.confirmPassword}
              </p>
            )}
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            {error && (<div className="text-red-500 mt-2 text-center" >{error}</div>)}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
