import { ROUTES } from "@/types";
import { useLocation, useNavigate } from "react-router-dom";

export const useRedirectUrl = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (location.search.includes("?redirectUrl=")) {
      navigate(location.search.replace("?redirectUrl=", ""));
      return;
    }

    navigate(ROUTES.HOME);
  };

  return {
    handleRedirect,
  };
};
