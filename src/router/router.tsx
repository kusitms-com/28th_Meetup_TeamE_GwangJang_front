import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import { LoginPage } from "@/pages/login";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/auth"
            element={<LoginPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
