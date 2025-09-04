import * as yup from "yup";

// ✅ Signup form validation
export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Minimum 3 characters required")
    .required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

// ✅ Student form validation
export const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Minimum 3 characters required")
    .required("Name is required"),
  age: yup
    .number()
    .min(0, "Age must be positive")
    .max(3, "Age must be less than 100")
    .required("Age is required"),
  contact: yup
    .string()
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit phone number")
    .required("Contact is required"),
});
