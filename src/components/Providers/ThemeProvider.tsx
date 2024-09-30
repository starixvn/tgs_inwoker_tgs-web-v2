import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui";
import { TEMPLATE } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<TEMPLATE>(TEMPLATE.TWENTY_NIGHT);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(TEMPLATE.TWENTY_NIGHT, TEMPLATE.THIRTY_SIX);
    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      {children}
      <Select
        value={theme}
        onValueChange={(theme: TEMPLATE) => setTheme(theme)}
      >
        <SelectTrigger className="w-[180px] fixed bottom-1 right-1">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(TEMPLATE).map((theme) => (
            <SelectItem key={theme} value={theme}>
              {theme}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
