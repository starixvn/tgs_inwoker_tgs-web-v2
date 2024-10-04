import { useWindowSize } from "@uidotdev/usehooks";

/**
 * useRWD
 * 斷點參考 Tailwind CSS 斷點
 * @see https://tailwindcss.com/docs/responsive-design
 */
export const useRWD = () => {
  const { width } = useWindowSize();
  const isMobile = width && width < 640;
  const isTablet = width && width >= 640 && width < 1024;
  const isLaptop = width && width >= 1024 && width < 1280;
  const isDesktop = width && width >= 1280;
  const isLargeSize = isLaptop || isDesktop;

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isLargeSize,
  };
};
