import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

interface NavbarRedesignedProps {
    className?: string;
}

export const NavbarRedesigned = memo(({ className }: NavbarRedesignedProps) => {
    return (
        <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
});
