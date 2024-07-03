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
import { getUserAuthDataId } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    id: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const userId = useSelector(getUserAuthDataId);
    const canEdit = userId === id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData(id));
    }, [dispatch, id]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} align={TextAlign.CENTER} />
            {canEdit && (
                <div className={cls.btnWrapper}>
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
            )}
        </div>
    );
};
