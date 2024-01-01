import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { path, authOnly, element } = route;

        const renderElement = (
            <div className="page-wrapper">{element}</div>
        );

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{renderElement}</RequireAuth> : renderElement}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
