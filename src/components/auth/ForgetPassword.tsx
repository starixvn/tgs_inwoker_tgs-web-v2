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
} from "@/components/ui";
import { useTranslation } from "react-i18next";
import { PasswordInput } from "./PasswordInput";
import { useBrandConfig } from "@/lib";

export const ForgetPassword = () => {
  const brandConfig = useBrandConfig();
  const { t } = useTranslation();
  const formSchema = z.object({
    password: z.string().min(1, { message: t("auth.password.errorMin") }),
    confirmPassword: z
      .string()
      .min(1, { message: t("auth.password.errorMin") })
      .refine(
        (data) => {
          // data must equal to password
          if (data !== form.getValues().password) {
            return false;
          }

          return true;
        },
        {
          message: t("auth.password.errorMatch"),
        },
      ),
    phoneNumber: z.string().min(1, { message: t("auth.phoneNumber.errorMin") }),
    verifyCode: z.string().min(1, { message: t("auth.verifyCode.errorMin") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      phoneNumber: "",
      confirmPassword: "",
      verifyCode: "",
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <Input
                      className="w-full"
                      disabled
                      value={brandConfig.phonePrefix}
                    />
                    <Input
                      placeholder={t("auth.phoneNumber.placeholder")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="verifyCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex justify-between gap-2">
                    <Input
                      className="w-full"
                      placeholder={t("auth.verifyCode.placeholder")}
                      {...field}
                    />
                    <Button type="button" onClick={() => {}}>
                      {t("auth.sendCode")}
                    </Button>
                  </div>
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder="auth.password.confirmPassword"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* @todo add disabled state */}
          <Button type="submit" className="w-full" disabled={false}>
            {t("common.submit")}
          </Button>
        </form>
      </Form>
    </AuthDialog>
  );
};
