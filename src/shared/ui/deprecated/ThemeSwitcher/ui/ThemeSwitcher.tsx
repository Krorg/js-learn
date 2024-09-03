import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import OrangeIcon from '@/shared/assets/icons/theme-orange.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '../../Icon';

interface ThemeSwitcherProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    let icon;

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            console.log(`Тема сменилась на ${newTheme}`);
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    switch (theme) {
        case Theme.DARK:
            icon = <Icon Svg={DarkIcon} width={40} height={40} inverted />;
            break;
        case Theme.LIGHT:
            icon = <Icon Svg={LightIcon} width={40} height={40} inverted />;
            break;
        case Theme.ORANGE:
            icon = <Icon Svg={OrangeIcon} width={40} height={40} />;
            break;
        default:
            icon = <Icon Svg={LightIcon} width={40} height={40} inverted />;
    }
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            {/* {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />} */}
            {icon}
        </Button>
    );
});
