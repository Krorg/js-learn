import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { RatingCard } from '@/entities/Rating';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });
    const [rateProfileMutatuion] = useRateProfile();

    const handleRateProfile = useCallback(
        (starCount: number, feedback?: string) => {
            try {
                rateProfileMutatuion({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [profileId, rateProfileMutatuion, userData?.id]
    );

    const onCancel = useCallback(
        (starCount: number) => {
            handleRateProfile(starCount);
        },
        [handleRateProfile]
    );

    const onAccept = useCallback(
        (starCount: number, feedback?: string) => {
            handleRateProfile(starCount, feedback);
        },
        [handleRateProfile]
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените пользователя')}
            feedbackTitle={t('Отставьте свой отзыв о пользователе')}
            hasFeedback
        />
    );
});

export default ProfileRating;
