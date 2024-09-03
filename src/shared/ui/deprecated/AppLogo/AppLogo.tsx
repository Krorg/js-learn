import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '../../../assets/icons/cube.svg';
import { Icon } from '../Icon';

interface AppLogoProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Icon Svg={AppSvg} className={cls.appLogo} width={60} height={60} />
            {/* <AppSvg className={cls.appLogo} /> */}
        </HStack>
    );
});
