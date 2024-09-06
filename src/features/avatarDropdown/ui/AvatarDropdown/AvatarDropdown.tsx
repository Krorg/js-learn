import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeature } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                {
                    content: t('Админка'),
                    href: getRouteAdmin(),
                },
            ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={(
                <Dropdown
                    direction="bottom_left"
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={<Avatar size={48} src={authData.avatar} />}
                />
            )}
            off={(
                <DropdownDeprecated
                    direction="bottom_left"
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={(
                        <AvatarDeprecated
                            size={30}
                            src={authData.avatar}
                            fallbackInverted
                        />
                    )}
                />
            )}
        />
    );
});
