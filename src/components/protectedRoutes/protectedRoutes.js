import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useLoginContext } from "../../context/LoginContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // const { isLoggedIn } = useLoginContext();

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

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
