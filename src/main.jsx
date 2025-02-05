import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import { Page404 } from './pages/404.jsx';
import { SlepSluzba } from './pages/Slep-sluzba.jsx';
import { Transport } from './pages/Transport.jsx';
import { FaQ } from './pages/Faq.jsx';
import { About } from './pages/About.jsx';
import { Istorija } from './pages/History.jsx';
import { Contact } from './pages/Contact.jsx';
import { GalleryPage } from './pages/Gallery.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Page404 />,
    },
    {
        path: '/slep-sluzba',
        element: <SlepSluzba />,
    },
    {
        path: '/transport-masina',
        element: <Transport />,
    },
    {
        path: '/cesta-pitanja',
        element: <FaQ />,
    },
    {
        path: '/o-nama',
        element: <About />,
    },
    {
        path: '/istorija',
        element: <Istorija />,
    },
    {
        path: '/galerija',
        element: <GalleryPage />,
    },
    {
        path: '/kontakt',
        element: <Contact />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
