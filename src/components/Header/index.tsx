import { SystemTime } from "./components";

export const Header = () => {
    return (
        <header className="w-full p-2" style={{
            background: "var(--header-background)"
        }}>
            <SystemTime />
        </header>
    )
};