import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Project from './Pages/Project.jsx';
import Contact from './Pages/Contact.jsx';
import RootLayout from './Layout/RootLayout.jsx';
import Services from './Pages/Services.jsx';
import Faq from './Pages/Faq.jsx';
import Error from './Pages/Error.jsx';
import PagePreloader from './Layout/PagePreloader.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<PagePreloader><Home /></PagePreloader>} />
      <Route path="/about" element={<PagePreloader><About /></PagePreloader>} />
      <Route path="/project" element={<PagePreloader><Project /></PagePreloader>} />
      <Route path="/services" element={<PagePreloader><Services /></PagePreloader>} />
      <Route path="/contact" element={<PagePreloader><Contact /></PagePreloader>} />
      <Route path="/faq" element={<PagePreloader><Faq /></PagePreloader>} />
      <Route path="*" element={<PagePreloader><Error /></PagePreloader>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
