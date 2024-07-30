import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        return (
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                direction="bottom_left"
                trigger={(
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={NotificationIcon} inverted />
                    </Button>
                )}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        );
    }
);
