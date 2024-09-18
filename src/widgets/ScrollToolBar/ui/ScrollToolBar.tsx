import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolBar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolBarProps {
    className?: string;
}

export const ScrollToolBar = memo(({ className }: ScrollToolBarProps) => {
    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.ScrollToolBar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
