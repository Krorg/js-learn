import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthDataId = (state: StateSchema) =>
    state.user.authData?.id;
