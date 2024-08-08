import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteArticles,
    getRouteProfile,
} from '@/shared/const/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('Должна отбразиться "Станица не найдена"', async () => {
        ComponentRender(<AppRouter />, {
            route: '/asdasdasd',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    test('Редирект неавторизованного пользователя на главную', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ запрещен(отсутствует роль)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ разрешен(пользователь в списке допустимых ролей)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
    test('Редирект со страницы статей, если пользователь не авторизован', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteArticles(),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
});
