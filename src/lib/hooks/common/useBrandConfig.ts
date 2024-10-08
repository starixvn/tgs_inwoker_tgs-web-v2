import { getBrandConfig, useBrandData } from "@/lib";

export const useBrandConfig = () => {
  const brandData = useBrandData();
  const brandCode = brandData?.code;

  return getBrandConfig(brandCode);
};
