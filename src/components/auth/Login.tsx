import { AuthDialog } from "./AuthDialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Button,
  Input,
  Checkbox,
  Label,
} from "@/components/ui";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { LOCAL_STORAGE_KEY, ROUTES } from "@/types";
import { useLogin } from "@/lib";

export const Login = () => {
  const { t } = useTranslation();
  const { login, isPending, isSuccess } = useLogin();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const formSchema = z.object({
    username: z
      .string()
      .min(6, { message: t("auth.username.errorMin") })
      .max(32, { message: t("auth.username.errorMax") }),
    password: z.string().min(1, { message: t("auth.password.errorMin") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: localStorage.getItem(LOCAL_STORAGE_KEY.USERNAME) || "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values);
  }

  return (
    <AuthDialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("auth.username.placeholder")}
                    {...field}
                    autoComplete="username"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder={t("auth.password.placeholder")}
                      {...field}
                      autoComplete="current-password"
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <Label className="cursor-pointer flex items-center gap-1">
              <Checkbox />
              {t("auth.rememberMe")}
            </Label>
            <Link to={ROUTES.FORGET_PASSWORD} className="text-primary">
              {t("auth.forgetPassword")}?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            {t("auth.login")}
          </Button>
        </form>
      </Form>
    </AuthDialog>
  );
};
