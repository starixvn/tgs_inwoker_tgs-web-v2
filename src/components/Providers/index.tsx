import { ThemeProvider } from "./ThemeProvider";

type Props = {
    children: React.ReactNode;
}

export const Providers = ({
    children
}: Props) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}