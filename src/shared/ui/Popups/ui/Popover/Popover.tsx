import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, direction = 'bottom_right', trigger, children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}