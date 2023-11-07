import { BrowserRouter, Routes, Route } from "react-router-dom";

import { KakaoCallBack } from "@/components/molecules/login/KakaoCallBack";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
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
          path="/login/kakao"
          element={<KakaoCallBack />}
        />
        <Route
          path="/register"
          element={<Signup />}
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
