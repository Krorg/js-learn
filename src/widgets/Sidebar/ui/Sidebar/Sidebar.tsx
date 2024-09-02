import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeature } from '@/shared/lib/features';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/AppLogo';

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
                        { [cls.collapsed]: collapsed },
                        [className]
                    )}
                >
                    <AppLogo className={cls.appLogo} />
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
