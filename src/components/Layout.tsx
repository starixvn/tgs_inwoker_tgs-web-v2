import { Outlet } from "react-router-dom";
import {
  Footer,
  Head,
  Header,
  Loading,
  Modal,
  TemplateSelect,
} from "@/components";
import { useInitBrand } from "@/lib";
import { Toaster } from "./ui";

export function Layout() {
  const { isFetching } = useInitBrand();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <Head />
      <Toaster />
      <main className="min-h-dvh flex flex-col w-full">
        <Modal />
        <Header />
        <section className="flex-1 flex flex-col">
          <Outlet />
        </section>
        <Footer />
      </main>
      <TemplateSelect />
    </>
  );
}
