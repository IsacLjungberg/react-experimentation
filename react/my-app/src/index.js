import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestNotes from './TestNotes'
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Magic from './pages/Magic';
import Fey from './pages/Fey';
import NovaFerûnCore from './pages/Nova Ferûn/NovaFerûnCore';
import Template from './pages/Template';

const dictionary = {
  Fey: <a href = "/pages/Fey">Fey</a>,
  Magic: <a href = "/pages/Magic">Magic</a>,

  ErikCederén: <a href = "/pages/NovaFerûn/ErikCederén">Erik Cederên</a>,
  Karanax: <a href = "/pages/NovaFerûn/Karanax">Karanax</a>,
  Senarax: <a href = "/pages/NovaFerûn/Senarax">Senarax Döttsbindaren</a>
};

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/testNotes', element: <TestNotes 
    dictionary = {dictionary}/>},
  {path: '/pages/Magic', element: <Magic 
    dictionary = {dictionary}/>},
  {path: '/pages/Fey', element: <Fey 
    dictionary = {dictionary}/>},
    {path: '/pages/Template', element: <Template 
    dictionary = {dictionary}/>},
  {path: '/pages/NovaFerûn/Core', element: <NovaFerûnCore 
    dictionary = {dictionary}/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
