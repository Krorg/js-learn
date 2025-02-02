import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copyNew.svg';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Icon
                Svg={CopyIcon}
                clickable
                onClick={onCopy}
                className={cls.copyBtn}
            />
            <code>{text}</code>
        </pre>
    );
});
