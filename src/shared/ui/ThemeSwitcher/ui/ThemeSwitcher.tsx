import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import OrangeIcon from '@/shared/assets/icons/theme-orange.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    let icon;
    switch (theme) {
        case Theme.DARK:
            icon = <DarkIcon />;
            break;
        case Theme.LIGHT:
            icon = <LightIcon />;
            break;
        case Theme.ORANGE:
            icon = <OrangeIcon />;
            break;
        default:
            icon = <LightIcon />;
    }
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {/* {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />} */}
            {icon}
        </Button>
    );
});
