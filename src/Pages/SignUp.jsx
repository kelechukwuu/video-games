import React, { useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { CgPassword } from "react-icons/cg";

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email must be of a valid format")
          .required("Email Required"),
        password: Yup.string()
          .min(8, "Password must be 8 characters long")
          .required("Enter Password")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol"),
        cpassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          'Must match "password" field value'
        ),
        name: Yup.string()
          .min(2, "Enter full name")
          .required("Full name required"),
        phone: Yup.number()
          .min(2, "Enter complete number")
          .required("Enter phone number"),
      })}
      onSubmit={(values, { resetForm }) => {
        fetch(`/api/users`,{
            method:"POST",
             headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
        })
          .then((res) => {
            if (!res.ok) {
              console.log(res);
              throw new Error("Network response was not ok", res);
            }
            alert("Account Created Successfully");
          })
         
          .catch((error) => console.log(error));
      }}
    >
      <Form className=" shadow-xl w-[100%] flex justify-center">
        <div className=" bg-gray-900 p-6 text-white hs justify-center mt-[10%] mb-[60px]">
          <p className="mb-8 text-3xl flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 512 512"
              className="inline-block fill-current h-8 w-8 mr-2"
            >
              <path d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z" />
            </svg>
            Gaming Account
          </p>
          <div className="mb-4">
            <Field
              className="border w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-900 items-center text-[12px] mt-1 font-medium"
            />
          </div>
          <div className="mb-4">
            <Field
              className="border w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-900 items-center text-[12px] mt-1 font-medium"
            />
          </div>
          <div className="mb-4">
            <Field
              className="border w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Phone Number"
              name="phone"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-900 items-center text-[12px] mt-1 font-medium"
            />
          </div>
          <div className="mb-4">
            <Field
              className="border w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-900 items-center text-[12px] mt-1 font-medium"
            />
          </div>
          <div className="mb-6">
            <Field
              className="border w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
            />
            <ErrorMessage
              name="cpassword"
              component="div"
              className="text-red-900 items-center text-[12px] mt-1 font-medium"
            />
          </div>

          <button
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>

          <label className="block text-sm mb-4">
            <input type="checkbox" /> Remember me
          </label>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUp;
