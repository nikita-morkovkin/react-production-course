import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactNode } from 'react';

interface WithAuthProps {
    children: ReactNode;
}

export const WithAuth = ({ children }: WithAuthProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return <Navigate to={RoutePath.main} replace />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
