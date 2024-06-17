import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Project from "./Pages/Project.jsx"
import Pages from "./Pages/Pages.jsx"
import Contact from "./Pages/Contact.jsx"
import RootLayout from './Layout/RootLayout.jsx';
import Services from './Pages/Services.jsx';
import Faq from './Pages/Faq.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={ <About/> } />
      <Route path="/project" element={ <Project/> } />
      <Route path="/pages" element={ <Pages/> } />
      <Route path="/services" element={ <Services/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/faq" element={ <Faq/> } />

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
