import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CheckIcon from '@/shared/assets/icons/check.svg';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
    value: string;
    content: string;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom_right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4">
            {label && <span>{`${label}:`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    as={Button}
                    disabled={readonly}
                    variant="filled"
                    addonRight={<Icon Svg={ArrowIcon} />}
                >
                    {selectedItem?.content ?? defaultValue}
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    <HStack gap="4">
                                        {selected && <CheckIcon />}
                                        {item.content}
                                    </HStack>
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
