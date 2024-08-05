import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    console.log('asdasdasd', userRoles);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            console.log('hi');
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            console.log('hasRole', hasRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    if (!hasRequireRoles) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
