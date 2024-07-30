import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom_left: cls.optionsBottomLeft,
    bottom_right: cls.optionsBottomRight,
    top_left: cls.optionsTopLeft,
    top_right: cls.optionsTopRight,
};
