import { Outlet } from "react-router-dom";
import { Footer, Head, Header, Loading, Modal } from "@/components";
import { useInitBrand } from "@/lib";
import { Toaster } from "./ui";
import { AnnouncementModal, PromotionModal } from "@/components";

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
        <AnnouncementModal />
        <PromotionModal />
        <Header />
        <section className="flex-1">
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  );
}
