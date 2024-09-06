import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={(
                <Button variant="clear" onClick={toggle}>
                    {t(short ? 'Короткий язык' : 'Язык')}
                </Button>
            )}
            off={(
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={toggle}
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </ButtonDeprecated>
            )}
        />
    );
});
