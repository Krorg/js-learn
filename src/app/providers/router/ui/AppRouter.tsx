import React, { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader/PageLoader';
import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);
    return (
        // <Suspense fallback={<PageLoader />}>
        //     <Routes>
        //         {routes.map(({ element, path }) => (
        //             <Route
        //                 key={path}
        //                 path={path}
        //                 element={<div className="page-wrapper">{element}</div>}
        //             />
        //         ))}
        //     </Routes>
        // </Suspense>
        <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    );
};

export default memo(AppRouter);
