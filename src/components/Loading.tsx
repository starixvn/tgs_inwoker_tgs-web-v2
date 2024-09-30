import { GetBrandDto } from "@/service";
import { GetQueryData, QUERY_KEYS } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "@/components";

/**
 * 全螢幕 Loading 畫面
 */
export const Loading = () => {
  const qc = useQueryClient();
  const data = qc.getQueryData([QUERY_KEYS.BRAND]) as GetQueryData<GetBrandDto>;
  const imageUrl = data?.data.data.loadingUrl;

  return (
    <div className="fixed inset-0 z-50 bg-black text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 flex flex-col  justify-center items-center">
      <div className="bg-transparent border-transparent shadow-none">
        {imageUrl && <img src={imageUrl} alt="loading" />}
        <Loader className="mt-10" size={80} />
      </div>
    </div>
  );
};
