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
import { Link } from "react-router-dom";
import { LOCAL_STORAGE_KEY, ROUTES } from "@/types";
import { useLogin } from "@/lib";
import { PasswordInput } from "./PasswordInput";

export const Login = () => {
  const { t } = useTranslation();
  const { login, isPending } = useLogin();
  const formSchema = z.object({
    username: z
      .string()
      .min(6, { message: t("auth.username.errorMin") })
      .max(32, { message: t("auth.username.errorMax") }),
    password: z.string().min(1, { message: t("auth.password.errorMin") }),
    isRemember: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: localStorage.getItem(LOCAL_STORAGE_KEY.USERNAME) || "",
      password: "",
      isRemember:
        !!localStorage.getItem(LOCAL_STORAGE_KEY.REMEMBER_ME) || false,
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
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isRemember"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex justify-between items-center">
                    <Label className="cursor-pointer flex items-center gap-1">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      {t("auth.rememberMe")}
                    </Label>
                    <Link to={ROUTES.FORGET_PASSWORD} className="text-dialog-foreground">
                      {t("auth.forgetPassword")}?
                    </Link>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isPending}>
            {t("auth.login")}
          </Button>
        </form>
      </Form>
    </AuthDialog>
  );
};
