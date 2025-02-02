import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ScrollIcon from '@/shared/assets/icons/circle_button.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo(
    ({ className }: ScrollToTopButtonProps) => {
        const onClick = () => {
            window.scroll({ top: 0, behavior: 'smooth' });
        };

        return (
            <Icon
                Svg={ScrollIcon}
                width={32}
                height={32}
                clickable
                onClick={onClick}
                className={classNames(cls.ScrollToTopButton, {}, [className])}
            />
        );
    }
);
