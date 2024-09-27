import { Loading } from "@/components";
import { useGameProvider } from "@/lib";

export const GameProviderList = () => {
  const { data, isFetching } = useGameProvider();

  if (isFetching) {
    return <Loading />;
  }

  console.log(data);

  return <div>test</div>;
};
