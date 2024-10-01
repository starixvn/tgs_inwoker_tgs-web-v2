import { AuthDialog } from "./AuthDialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
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
import { ROUTES } from "@/types";

const formSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "Username must be at least 6 characters.",
    })
    .max(32, {
      message: "Username must be at most 32 characters.",
    }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: localStorage.getItem("username") || "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                  <Input placeholder={t("auth.username")} {...field} />
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
                      placeholder={t("auth.password")}
                      {...field}
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
              Remember me
            </Label>
            <Link to={ROUTES.FORGET_PASSWORD} className="text-primary">
              Forget password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </AuthDialog>
  );
};
