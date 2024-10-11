import { useRWD, useStoreToken } from "@/lib";
import {
  AccountHeaderContent,
  AnonymousHeaderContent,
  Nav,
  SystemTime,
  MobileMenu,
} from "./components";
import { Logo } from "@/components";

const MobileHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header
      className="w-full p-2 justify-between flex text-nav-text sticky top-0"
      style={{
        background: "var(--header-background)",
      }}
    >
      <div className="flex gap-1 items-center">
        <MobileMenu />
        <Logo className="shrink-0 w-20" />
      </div>

      {children}
    </header>
  );
};

export const Header = () => {
  const { token } = useStoreToken();
  const isAuth = !!token;
  const { isLargeSize } = useRWD();
  const authChidlren = isAuth ? (
    <AccountHeaderContent />
  ) : (
    <AnonymousHeaderContent />
  );

  if (!isLargeSize) {
    return <MobileHeaderLayout>{authChidlren}</MobileHeaderLayout>;
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

      {isLargeSize && (
        <nav className="w-full max-w-full overflow-hidden px-12 py-2 gap-4 flex bg-nav-background text-nav-text">
          <Logo className="shrink-0 w-20" />
          <Nav />
        </nav>
      )}
    </header>
  );
};
