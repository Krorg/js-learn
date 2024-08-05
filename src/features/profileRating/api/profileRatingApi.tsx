import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRatingArg {
    userId: string;
    profileId: string;
}

interface RateProfile {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-rating',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<Rating[], RateProfile>({
            query: (arg) => ({
                url: '/profile-rating',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
