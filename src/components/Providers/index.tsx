import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter } from "react-router-dom";
type Props = {
    children: React.ReactNode;
}

export const Providers = ({
    children
}: Props) => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </BrowserRouter>
    );
}