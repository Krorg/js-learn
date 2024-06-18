import React from 'react';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
    },
];