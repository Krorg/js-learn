import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { useModal } from '../../../lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

const ANIMATED_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATED_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
