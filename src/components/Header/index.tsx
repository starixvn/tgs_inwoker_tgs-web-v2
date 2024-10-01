import { useRWD, useStoreToken } from "@/lib";
import {
  AccountHeaderContent,
  AnonymousHeaderContent,
  Nav,
  SystemTime,
  Logo,
} from "./components";

const MobileHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className="w-full p-2 justify-between flex text-nav-text"
      style={{
        background: "var(--header-background)",
      }}
    >
      <Logo />
      {children}
    </nav>
  );
};

export const Header = () => {
  const { token } = useStoreToken();
  const isAuth = !!token;
  const { isMobile, isDesktop, isLaptop } = useRWD();
  const authChidlren = isAuth ? (
    <AccountHeaderContent />
  ) : (
    <AnonymousHeaderContent />
  );

  if (isMobile) {
    return <MobileHeader>{authChidlren}</MobileHeader>;
  }

  return (
    <header className="w-full sticky top-0">
      <div
        className="w-full px-12 py-2 flex justify-between items-center"
        style={{
          background: "var(--header-background)",
        }}
      >
        <SystemTime />
        {authChidlren}
      </div>

      {(isDesktop || isLaptop) && (
        <nav className="w-full px-12 py-2 grid gap-4 grid-cols-[auto_1fr] bg-nav-background text-nav-text">
          <Logo />
          <Nav />
        </nav>
      )}
    </header>
  );
};
