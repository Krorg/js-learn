import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme, ButtonRadius } from 'shared/ui/Button/Button';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} align={TextAlign.CENTER} />
            {readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    radius={ButtonRadius.ALL}
                    className={cls.editBtn}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <div>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        radius={ButtonRadius.ALL}
                        className={cls.saveBtn}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        radius={ButtonRadius.ALL}
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                </div>
            )}
        </div>
    );
};
