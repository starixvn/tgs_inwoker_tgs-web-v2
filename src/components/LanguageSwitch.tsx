import { LOCALES } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useTranslation } from "react-i18next";
import { cn, useInitLanguage, useStoreLocales } from "@/lib";
import { Loader } from "@/components";

const languageConfig: Record<LOCALES, string> = {
  [LOCALES.EN]: "English",
  [LOCALES.ID]: "Indonesia",
  [LOCALES.PH]: "Tagalog",
  [LOCALES.CN]: "简体",
  [LOCALES.IN]: "हिन्दी",
  [LOCALES.TAIN]: "தமிழ்",
  [LOCALES.TH]: "ไทย",
  [LOCALES.TW]: "繁體",
  [LOCALES.VN]: "Tiếng Việt",
  [LOCALES.JP]: "日本語",
};

type Props = {
  className?: string;
  mode?: "outline" | "ghost";
};

/**
 * @todo 加入動態語系
 */
export const LanguageSwitch = ({ className, mode = "ghost" }: Props) => {
  const { languageList, isFetching } = useInitLanguage();
  const { i18n } = useTranslation();
  const { locale, onChange } = useStoreLocales();

  const handleOnChange = (locale: LOCALES) => {
    onChange(locale);
    i18n.changeLanguage(locale);
  };

  if (isFetching) {
    return <Loader />;
  }

  const modeClass = {
    outline: "",
    ghost: "border-none text-header-text",
  };

  return (
    <div className={cn("font-bold", className)}>
      <Select value={locale} onValueChange={handleOnChange}>
        <SelectTrigger className={modeClass[mode]}>
          <SelectValue placeholder="Language">
            {languageConfig[locale]}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languageList.map(({ culturecode }) => (
            <SelectItem key={culturecode} value={culturecode}>
              {languageConfig[culturecode]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
