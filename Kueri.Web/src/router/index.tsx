import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <div>Inicio</div>
            },
            {
                path: 'cinturones',
                element: <div>Cinturones</div>
            },
            {
                path: 'nosotros',
                element: <div>Sobre Nosotros</div>
            }
        ]
    }
]);