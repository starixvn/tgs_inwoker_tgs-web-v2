import { useStoreToken } from "@/lib";
import { ROUTES } from "@/types";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useStoreToken();
  const location = useLocation();

  if (!token) {
    return <Navigate to={`${ROUTES.LOGIN}?redirectUrl=${location.pathname}`} />;
  }

  return children;
}
