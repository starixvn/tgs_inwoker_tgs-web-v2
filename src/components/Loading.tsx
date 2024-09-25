import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 flex flex-col  justify-center items-center">
      <div className="bg-transparent border-transparent shadow-none">
        <Loader2 className="animate-spin mx-auto" size={40} />
      </div>
    </div>
  );
};
