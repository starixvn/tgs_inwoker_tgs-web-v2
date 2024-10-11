import { useSocialMedia } from "@/lib";
import { SOCIAL_MEDIA } from "@/types";
import { Skeleton } from "./ui";

/**
 * @key SOCIAL_MEDIA
 * @value ./images/socialMedia 的檔案名稱
 */
const socialMediaLabel: Record<SOCIAL_MEDIA, string> = {
  [SOCIAL_MEDIA.Facebook]: "facebook",
  [SOCIAL_MEDIA.Instagram]: "instagram",
  [SOCIAL_MEDIA.X]: "x",
  [SOCIAL_MEDIA.Threads]: "threads",
  [SOCIAL_MEDIA.Tiktok]: "tiktok",
  [SOCIAL_MEDIA.Telegram]: "telegram",
  [SOCIAL_MEDIA.WhatsApp]: "whatsApp",
};

export const SocialMediaList = () => {
  const { isFetching, socialMediaList } = useSocialMedia();

  if (isFetching) {
    return <Skeleton className="h-10 w-full" />;
  }

  return (
    <div className="flex sm:gap-2 gap-1 justify-start flex-wrap">
      {socialMediaList?.map((socialMedia) => (
        <a
          className="block rounded-full bg-cover bg-center w-10 h-10"
          style={{
            backgroundImage: `url("/images/socialMedia/${socialMediaLabel[socialMedia.type]}.svg")`,
          }}
          key={socialMedia.id}
          href={socialMedia.url}
          target="_blank"
          rel="noreferrer"
        />
      ))}
    </div>
  );
};
