import { Outlet } from "react-router-dom";
import { Footer, Header, Loading, Modal } from "@/components";
import { useInitBrand } from "@/lib";
import { Toaster } from "./ui";

export function Layout() {
  const { isFetching } = useInitBrand();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <Toaster />
      <main className="min-h-dvh flex flex-col w-full">
        <Modal />
        <Header />
        <section className="flex-1">
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  );
}
