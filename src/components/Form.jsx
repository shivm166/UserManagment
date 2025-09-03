import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { formSchema } from "./Validation/ValidationSchema";

const Form = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  

  
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      contact: "",
    },
    validationSchema: formSchema,
    enableReinitialize: true, 
    onSubmit: (values, { resetForm }) => {
      try {
        let updatedData;
        if (editIndex !== null) {
          
          updatedData = data.map((item, index) =>
            index === editIndex ? values : item
          );
          setEditIndex(null); 
        } else {
          
          updatedData = [...data, values];
        }

        setData(updatedData);
        localStorage.setItem("formData", JSON.stringify(updatedData));
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDelete = (indexToDelete) => {
    const updatedData = data.filter((_, index) => index !== indexToDelete);
    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  const handleEdit = (index) => {
    const record = data[index];
    formik.setValues(record);
    setEditIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {editIndex !== null ? "Edit Student" : "Student Details"}
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-500 text-sm">
              {formik.touched.name && formik.errors.name}
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="age"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Age:
            </label>
            <input
              id="age"
              type="number"
              name="age"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-500 text-sm">
              {formik.touched.age && formik.errors.age}
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="contact"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Contact:
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.contact}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-500 text-sm">
              {formik.touched.contact && formik.errors.contact}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* ✅ Render from state */}
      <div className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stored Data</h2>
        <ul className="space-y-3">
          {data.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-200 pb-2 flex justify-between items-start"
            >
              <div>
               
                <strong>Name:</strong> {item.name} <br />
                <strong>Age:</strong> {item.age} <br />
                <strong>Contact:</strong> {item.contact}
              </div>
              <div className="flex flex-col space-y-1">
                <button
                  type="button"
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
