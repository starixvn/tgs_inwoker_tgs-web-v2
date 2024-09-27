import { useWindowSize } from "@uidotdev/usehooks";

/**
 * useRWD
 * 斷點參考 Tailwind CSS 斷點
 * @see https://tailwindcss.com/docs/responsive-design
 */
export const useRWD = () => {
  const { width } = useWindowSize();

  return {
    isMobile: width && width < 640,
    isTablet: width && width >= 640 && width < 1024,
    isLaptop: width && width >= 1024 && width < 1280,
    isDesktop: width && width >= 1280,
  };
};
