import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';
import { AboutPage, HomePage, CinturonesPage, AdminPage } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'cinturones',
                element: <CinturonesPage />
            },
            {
                path: 'nosotros',
                element: <AboutPage />
            },
            {
                path: 'admin',
                element: <AdminPage />
            }
        ]
    }
]);