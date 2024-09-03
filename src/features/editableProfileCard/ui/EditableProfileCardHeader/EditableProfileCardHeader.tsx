import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthDataId } from '@/entities/User';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import {
    Button,
    ButtonRadius,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
    id: string | undefined;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
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
            <HStack justify="between" max>
                <Text title={t('Профиль')} align={TextAlign.CENTER} />
                {canEdit && (
                    <div>
                        {readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                radius={ButtonRadius.ALL}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    radius={ButtonRadius.ALL}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    radius={ButtonRadius.ALL}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        );
    }
);
