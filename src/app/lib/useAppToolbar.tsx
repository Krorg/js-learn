import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolBar } from '@/widgets/ScrollToolBar';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolBar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolBar />,
    };

    return toolbarByAppRoute[appRoute];
}
