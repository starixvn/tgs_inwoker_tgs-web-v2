import { Button } from "@/components/ui";
import { useTranslation } from 'react-i18next';
export const AnonymousHeaderContent = () => {
    const { t } = useTranslation();
    return (
        <div className="flex gap-2">
            <Button>
               {t('auth.login')}
            </Button>
            <Button variant="secondary">
                {t('auth.register')}
            </Button>
        </div>
    );
};