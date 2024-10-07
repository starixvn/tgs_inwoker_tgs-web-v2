import { useState } from "react";
import { Button, Input, InputProps } from "../ui";
import { Eye, EyeOffIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props extends InputProps {
  placeholder?: string;
}

export const PasswordInput = ({
  placeholder = "auth.password.placeholder",
  ...props
}: Props) => {
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative text-input-foreground">
      <Input
        type={passwordVisible ? "text" : "password"}
        placeholder={t(placeholder)}
        autoComplete="current-password"
        {...props}
      />
      <Button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 w-auto h-auto"
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => setPasswordVisible(!passwordVisible)}
      >
        {passwordVisible ? <EyeOffIcon /> : <Eye />}
      </Button>
    </div>
  );
};
