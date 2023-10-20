import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import KakaoLogin from "@/pages/login/KakaoLogin";

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
            element={<KakaoLogin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
