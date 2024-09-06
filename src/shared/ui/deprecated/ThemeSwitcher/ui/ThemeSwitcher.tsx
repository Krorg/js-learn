import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import OrangeIcon from '@/shared/assets/icons/theme-orange.svg';
import ThemeIcon from '@/shared/assets/icons/themeSwitcher.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Icon as IconDeprecated } from '../../Icon';

interface ThemeSwitcherProps {
    className?: string;
}

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
            icon = (
                <IconDeprecated
                    Svg={DarkIcon}
                    width={40}
                    height={40}
                    inverted
                />
            );
            break;
        case Theme.LIGHT:
            icon = (
                <IconDeprecated
                    Svg={LightIcon}
                    width={40}
                    height={40}
                    inverted
                />
            );
            break;
        case Theme.ORANGE:
            icon = <IconDeprecated Svg={OrangeIcon} width={40} height={40} />;
            break;
        default:
            icon = (
                <IconDeprecated
                    Svg={LightIcon}
                    width={40}
                    height={40}
                    inverted
                />
            );
    }
    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
            off={(
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    {/* {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />} */}
                    {icon}
                </ButtonDeprecated>
            )}
        />
    );
});
