import { Routes, Route } from "react-router-dom";
import {
  AuthLayout,
  ForgetPassword,
  Layout,
  Login,
  Register,
} from "@/components";
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

        {/* auth protected page */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.VIP} element={<div>vip</div>} />
          <Route path={ROUTES.PROFILE} element={<div>profile</div>} />
          <Route path={ROUTES.TRANSFER} element={<div>transfer</div>} />
          <Route path={ROUTES.DEPOSIT} element={<div>deposit</div>} />
          <Route path={ROUTES.WITHDRAWAL} element={<div>WITHDRAWAL</div>} />
          <Route path={ROUTES.INBOX} element={<div>INBOX</div>} />
          <Route path={ROUTES.AGENT} element={<div>AGENT</div>} />
          <Route path={ROUTES.WAGERING} element={<div>WAGERING</div>} />
          <Route path={ROUTES.REPORT} element={<div>REPORT</div>} />
          <Route path={ROUTES.CONTACT} element={<div>CONTACT</div>} />
        </Route>

        {/* not found */}
        <Route path="*" element={<div>not found</div>} />
      </Route>
    </Routes>
  );
};
