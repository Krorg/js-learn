import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import AboutIconDeprecated from '@/shared/assets/icons/about-page.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-page.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-page.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
import ArticleIcon from '@/shared/assets/icons/articleNew.svg';
import { toggleFeatures } from '@/shared/lib/features';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'О сайте',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                text: 'Профиль',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
