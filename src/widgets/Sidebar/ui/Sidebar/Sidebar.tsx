import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/shared/ui/deprecated/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/deprecated/LangSwitcher';
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeature } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ));
    }, [collapsed, sidebarItemsList]);

    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className]
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={cls.appLogo}
                    />
                    <VStack role="navigation" gap="12" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        Svg={ArrowIcon}
                        clickable
                        onClick={onToggle}
                        className={cls.collapseBtn}
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            )}
            off={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className]
                    )}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        square
                        size={ButtonSize.XL}
                        radius={ButtonRadius.RIGHT}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack role="navigation" gap="12" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            )}
        />
    );
});
