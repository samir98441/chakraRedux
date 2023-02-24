import { Box, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLoginContext } from "../../context/LoginContext";
import "./login.css";

const LoginPage = () => {
  const { handelLoginValidation, isLoggedIn } = useLoginContext();
  const navigate = useNavigate();
  console.log("yaha kina aatyo");
  useEffect(() => {
    if (isLoggedIn) {
      console.log("navigate", isLoggedIn);
      navigate("/home");
    }
  }, [isLoggedIn]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string("Must be string")
        .label("email")
        .required("email required"),
      password: Yup.string().required("Password Required"),
    }),

    onSubmit: function (values) {
      alert(`Items added
       email:${values.email}
      password:${values.password}`);
      handelLoginValidation(values);
    },
  });

  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          placeholder="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.errors.email && formik.touched.email ? (
          <Box ml="15px">{formik.errors.email}</Box>
        ) : null}

        <hr />

        <input
          type="text"
          name="password"
          value={formik.values.password}
          placeholder="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.errors.password && formik.touched.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <hr />

        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
