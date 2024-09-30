import { useSocialMedia } from "@/lib";
import { SOCIAL_MEDIA } from "@/types";
import { Loading } from "./Loading";

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
    return <Loading />;
  }

  return (
    <div className="flex gap-2 justify-center">
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
