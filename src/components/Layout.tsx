import { Outlet } from "react-router-dom";
import { Header, Loading, Modal } from "@/components";
import { useInitBrand } from "@/lib";

export function Layout() {
  const { isFetching } = useInitBrand();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <main className="min-h-dvh flex flex-col w-full">
      <Modal />
      <Header />
      <section className="flex-1">
        <Outlet />
      </section>
      <footer>footer</footer>
    </main>
  );
}
