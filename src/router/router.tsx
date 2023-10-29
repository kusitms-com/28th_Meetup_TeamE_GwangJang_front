import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "@/components/molecules/register";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import { LoginPage } from "@/pages/login";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
