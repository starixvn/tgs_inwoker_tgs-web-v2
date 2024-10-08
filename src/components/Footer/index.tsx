import { GamingLicense, Partners, QuickLinks } from "./components";

export const Footer = () => {
  return (
    <footer className="w-full px-12 py-2 bg-footer-background text-footer-foreground grid grid-cols-3 gap-5">
      <GamingLicense />
      <QuickLinks />
      <Partners />
    </footer>
  );
};
