import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginContext();
  console.log("isloggedIn", isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
