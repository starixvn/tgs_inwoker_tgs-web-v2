import { Loader } from "@/components";
import { useBrandData } from "@/lib";

/**
 * 全螢幕 Loading 畫面
 */
export const Loading = () => {
  const brandData = useBrandData();

  return (
    <div className="fixed inset-0 z-50 bg-black text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 flex flex-col  justify-center items-center">
      <div className="bg-transparent border-transparent shadow-none">
        {brandData?.loadingUrl && (
          <img src={brandData?.loadingUrl} alt="loading" />
        )}
        <Loader className="mt-10" size={80} />
      </div>
    </div>
  );
};
