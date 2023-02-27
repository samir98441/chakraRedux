import { Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./login.css";

import { useSelector, useDispatch } from "react-redux";
import { loginValidate } from "../../store/slices/loginSlice";
import { loadProducts } from "../../store/slices/productsSlice";

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

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
      dispatch(loginValidate(values));
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
          <Box ml="15px" color="red">
            {formik.errors.email}
          </Box>
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
          <Box ml="15px" color="red">
            {formik.errors.password}
          </Box>
        ) : null}

        <hr />

        <Button mt="10px" type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
