import React from "react";
import { useFormik } from "formik";
import {signUpSchema} from "./Validation/ValidationSchema";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        
        resetForm();
        const existingUser = localStorage.getItem("users");
        const users = existingUser ? JSON.parse(existingUser) : [];
        const foundUser = users.find(
          (u) => u.email === formik.values.email.toLowerCase()
        );
        
        if (foundUser) {
          alert("User already exists");
          return navigate("/login") ;
        } else {
          alert("Signup successful! please login");
        }
        
        if (foundUser) return;

        const updatedUsers = [...users, values];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        
        navigate("/login");
      } catch (error) {
        console.log(error, "signup fails");
      }
    },
  });
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800">Signup</h1>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="mt-1 text-sm text-red-600">{formik.errors.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email.trim()}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="mt-1 text-sm text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password :
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password.trim()}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="mt-1 text-sm text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;