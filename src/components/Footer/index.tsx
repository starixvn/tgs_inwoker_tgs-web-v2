import { useRWD } from "@/lib";
import {
  GamingLicense,
  Partners,
  QuickLinks,
  MobileFooter,
} from "./components";

export const Footer = () => {
  const { isSmallSize } = useRWD();
  const renderLargeFooter = () => {
    return (
      <>
        <GamingLicense />
        <QuickLinks />
        <Partners />
      </>
    );
  };

  return (
    <footer className="w-full p-2 lg:p-12 bg-footer-background text-footer-foreground grid lg:grid-cols-3 lg:gap-5 grid-cols-5 gap-2">
      {!isSmallSize ? renderLargeFooter() : <MobileFooter />}
    </footer>
  );
};
