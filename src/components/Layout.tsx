import { Outlet } from "react-router-dom";
import { Header } from "@/components";

export function Layout() {
    return (
      <section className="min-h-screen flex flex-col w-full">
        <Header />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <div className="flex-1">
            <Outlet />
        </div>
        <footer>
            footer
        </footer>
      </section>
    );
  }