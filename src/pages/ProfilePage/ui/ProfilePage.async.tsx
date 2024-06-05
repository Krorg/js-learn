import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // Задержка для тест, потом удалить
            setTimeout(() => resolve(import('./ProfilePage')), 1500);
        })
);
