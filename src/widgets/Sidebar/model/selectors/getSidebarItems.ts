import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'О сайте',
            Icon: AboutIcon,
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData?.id,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
