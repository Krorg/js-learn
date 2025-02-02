import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import AlarmIcon from '@/shared/assets/icons/alarm.svg';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <ToggleFeature
                feature="isAppRedesigned"
                on={<Icon Svg={AlarmIcon} clickable onClick={onOpenDrawer} />}
                off={(
                    <ButtonDeprecated
                        onClick={onOpenDrawer}
                        theme={ButtonTheme.CLEAR}
                    >
                        <IconDeprecated
                            Svg={NotificationIcon}
                            width={35}
                            height={35}
                            inverted
                        />
                    </ButtonDeprecated>
                )}
            />
        );

        return (
            <div>
                <BrowserView>
                    <ToggleFeature
                        feature="isAppRedesigned"
                        on={(
                            <Popover
                                className={classNames(
                                    cls.NotificationButton,
                                    {},
                                    [className]
                                )}
                                direction="bottom_left"
                                trigger={trigger}
                            >
                                <NotificationList
                                    className={cls.notifications}
                                />
                            </Popover>
                        )}
                        off={(
                            <PopoverDeprecated
                                className={classNames(
                                    cls.NotificationButton,
                                    {},
                                    [className]
                                )}
                                direction="bottom_left"
                                trigger={trigger}
                            >
                                <NotificationList
                                    className={cls.notifications}
                                />
                            </PopoverDeprecated>
                        )}
                    />
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </div>
        );
    }
);
