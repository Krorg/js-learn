import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarOldDesignProps {
    className?: string;
}

export const NavbarOldDesign = memo(({ className }: NavbarOldDesignProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('Learn APP')}
                theme={TextTheme.INVERTED}
            />
            <AppLink
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.SECONDARY}
                className={cls.createBtn}
            >
                {t('Создать статью')}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
});
