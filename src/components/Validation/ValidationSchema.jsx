import React from "react";
import * as yup from "yup";

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "minimum 3 characters reqviures,")
    .required("name is missing "),
  email: yup.string().email().required("email reqvires"),
  password: yup
    .string()
    .min(8, "8 characheter ")
    .required("password is missing"),
});

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "minimum 3 characters required")
    .required("name is missing"),
  age: yup
    .number()
    .min(0, "age must be positive")
    .required("age is missing"),
  contact: yup
    .string()
    .matches(/^[0-9]{10}$/, "must be a valid 10-digit phone number")
    .required("contact is missing"),
});

export { signUpSchema, formSchema };
