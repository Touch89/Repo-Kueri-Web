import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'carrito', Component: Cart },
      { path: 'login', Component: Login },
      { path: 'nosotros', Component: About },
      { path: ':category', Component: CategoryPage },
      { path: '*', Component: NotFound },
    ],
  },
]);