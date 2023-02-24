import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/loginReducer";

const initialState = {
  // defaultUsers: [
  //   { email: "sameer", password: "sa123" },
  //   { email: "suman", password: "su123" },
  //   { email: "hari", password: "ha123" },
  // ],
  isLoggedIn: false,
};

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogout = () => {
    return dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    console.log("loginCheck", state.isLoggedIn);
  }, [state.isLoggedIn]);

  const handelLoginValidation = (values) => {
    return dispatch({ type: "LOGINVALIDATE", payload: values });
  };
  return (
    <LoginContext.Provider
      value={{ ...state, handelLoginValidation, handleLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  return useContext(LoginContext);
};
export { LoginContextProvider, useLoginContext };
