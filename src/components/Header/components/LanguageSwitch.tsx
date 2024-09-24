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

const languageConfig: Record<LOCALES, string> = {
    [LOCALES.EN]: "English",
    [LOCALES.ID]: "Indonesia",
    [LOCALES.PH]: "Tagalog",
};


/**
 * @todo 加入動態語系
 */
export const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const [value, setValue] = useState<LOCALES>(LOCALES.EN);
    const handleOnChange = (value: LOCALES) => {
        setValue(value);
        i18n.changeLanguage(value);
    };

    const localeList = Object.values(LOCALES).map((locale) => {
        return {
            locale,
        }
    });

    return (
        <div className="text-header-text font-bold">
            <Select value={value} onValueChange={handleOnChange}>
                <SelectTrigger className="w-auto border-none">
                    <SelectValue placeholder="Language">
                        {languageConfig[value]}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {localeList.map((row) => (
                        <SelectItem key={row.locale} value={row.locale}>
                            {languageConfig[row.locale]}
                        </SelectItem>
                    ))}
                </SelectContent>
                </Select>
        </div>
    )
};