import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}
export const Avatar = (props: AvatarProps) => {
    const { className, src, size, alt } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 150,
            height: size || 150,
        }),
        [size]
    );

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
