import { AccountHeaderContent, AnonymousHeaderContent, SystemTime } from "./components";

export const Header = () => {
    /**
     * @todo 改成動態判斷是否登入
     */
    const isAuth = false;

    return (
        <header className="w-full p-2 flex justify-between items-center" style={{
            background: "var(--header-background)"
        }}>
            <SystemTime />
            {isAuth ? <AccountHeaderContent /> : <AnonymousHeaderContent />}
        </header>
    )
};