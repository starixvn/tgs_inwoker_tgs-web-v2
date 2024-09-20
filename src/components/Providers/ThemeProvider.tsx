import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui";
import { TEMPLATE } from "@/types";
import { useState } from "react";

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider= ({
    children
}: Props) => {
    const [value, setValue] = useState<TEMPLATE>(TEMPLATE.TWENTY_NIGHT)

    return (
        <>
            <main className={value}>
                {children}
            </main>
            <Select
                value={value}
                onValueChange={(value: TEMPLATE) => setValue(value)}
            >
                <SelectTrigger className="w-[180px] fixed top-1 right-1">
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