import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./components/protectedRoutes";
import { Spinner } from "@chakra-ui/react";
import loadable from "@loadable/component";

// const HomePage = loadable(() => import("./pages/home/HomePage"));
const HomePage = loadable(() => import("./pages/home/HomePage"), {
  resolveComponent: (components) => components.HomePage,
});

const UserPage = lazy(() => import("./pages/user/UserPage"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const ContactUsPage = lazy(() => import("./pages/contactUs/ContactUsPage"));
const AboutUsPage = lazy(() => import("./pages/aboutUs/AboutUsPage"));

const MyRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutUsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactUsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MyRoutes;
