import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestNotes from './TestNotes'
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Magic from './pages/Magic';
import Fey from './pages/Fey';
import Template from './pages/Template';


import NovaFerûn from './pages/NovaFerûn/NovaFerûn';
import FerûnWrapper from './pages/NovaFerûn/FerûnWrapper';
  import ErikCederén from './pages/NovaFerûn/ErikCederén';
  import Dimdjupet from './pages/NovaFerûn/Dimdjupet';
  import CurrentSession from './pages/NovaFerûn/CurrentSession';
import ferûnDictionaryFunction from './pages/NovaFerûn/dictionary';


const dictionary = {
  Fey: <a href = "/pages/Fey">Fey</a>,
  Magic: <a href = "/pages/Magic">Magic</a>,
};

const ferûnDictionary = ferûnDictionaryFunction();

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

  {path: '/pages/NovaFerûn/NovaFerûn', element: <FerûnWrapper Contents = {NovaFerûn} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn', element: <FerûnWrapper Contents = {NovaFerûn} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn/ErikCederén', element: <FerûnWrapper Contents = {ErikCederén} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn/Dimdjupet', element: <FerûnWrapper Contents = {Dimdjupet} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn/CurrentSession', element: <FerûnWrapper Contents = {CurrentSession} dictionary = {ferûnDictionary}/>},
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
