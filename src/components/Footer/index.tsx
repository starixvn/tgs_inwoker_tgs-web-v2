import { GamingLicense, Partners, QuickLinks } from "./components";

export const Footer = () => {
  return (
    <footer className="w-full p-12 bg-footer-background text-footer-foreground grid grid-cols-3 gap-5">
      <GamingLicense />
      <QuickLinks />
      <Partners />
    </footer>
  );
};
