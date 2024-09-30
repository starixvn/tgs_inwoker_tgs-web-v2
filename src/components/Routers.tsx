import { Routes, Route } from "react-router-dom";
import { ForgetPassword, Layout, Login, Register } from "@/components";
import { ROUTES } from "@/types";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public page */}

        {/* auth dialog */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.FORGET_PASSWORD} element={<ForgetPassword />} />

        {/* not found */}
        <Route path="*" element={<div>not found</div>} />
      </Route>
    </Routes>
  );
};
