import { ROUTES } from "@/types";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui";
import { useKeyboradEvent } from "@/lib";

export const CloseButton = () => {
  const navigate = useNavigate();
  const url = ROUTES.HOME;
  const handleEsc = () => navigate(url);
  useKeyboradEvent("Escape", handleEsc);

  return (
    <Link to={url} className="ml-auto">
      <Button size="icon" variant="ghost">
        <X />
      </Button>
    </Link>
  );
};
