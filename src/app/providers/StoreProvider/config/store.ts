import { configureStore } from '@reduxjs/toolkit';
import { counetrReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counetrReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
