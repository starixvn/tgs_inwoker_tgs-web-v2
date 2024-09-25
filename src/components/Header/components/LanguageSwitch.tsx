import { LOCALES } from "@/types";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui"
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { useInitLanguage } from "@/lib";
import { Loading } from "@/components";

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

/**
 * @todo 加入動態語系
 */
export const LanguageSwitch = () => {
    const { languageList, isLoading } = useInitLanguage();
    const { i18n } = useTranslation();
    const [value, setValue] = useState<LOCALES>(LOCALES.EN);
    const handleOnChange = (value: LOCALES) => {
        setValue(value);
        i18n.changeLanguage(value);
    };

    if(isLoading) {
        return (
            <Loading />
        )
    }
    

    return (
        <div className="text-header-text font-bold">
            <Select value={value} onValueChange={handleOnChange}>
                <SelectTrigger className="w-auto border-none">
                    <SelectValue placeholder="Language">
                        {languageConfig[value]}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {languageList.map(({culturecode}) => (
                        <SelectItem key={culturecode} value={culturecode}>
                            {languageConfig[culturecode]}
                        </SelectItem>
                    ))}
                </SelectContent>
                </Select>
        </div>
    )
};