import { useBrandData } from "@/lib";
import { Helmet } from "react-helmet-async";

/**
 * html head component
 */
export const Head = () => {
  const brandData = useBrandData();
  const content = `${brandData?.code ?? ""} | The Biggest & Most Trusted Online Casino`;

  return (
    <Helmet>
      <title>{content}</title>
      <meta name="description" content={content} />
      <link
        rel="icon"
        type="image/svg+xml"
        href={`https://app12.srvptt.com/images/favicon/${brandData?.code}.ico`}
      />
    </Helmet>
  );
};
