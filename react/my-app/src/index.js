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
  import Dimdjupet from './pages/NovaFerûn/Dimdjupet';
  import Nattsångarna from './pages/NovaFerûn/Nattsångarna';
  import VandrarUtposten from './pages/NovaFerûn/VandrarUtposten';
  import CurrentSession from './pages/NovaFerûn/CurrentSession';
import ferûnDictionaryFunction from './pages/NovaFerûn/dictionary';
import ZarasterCalendar from './pages/NovaFerûn/ZarasterCalendar';


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
  {path: '/pages/NovaFerûn/Dimdjupet', element: <FerûnWrapper Contents = {Dimdjupet} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn/Nattsångarna', element: <FerûnWrapper Contents = {Nattsångarna} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn/VandrarUtposten', element: <FerûnWrapper Contents = {VandrarUtposten} dictionary = {ferûnDictionary}/>},
  {path: '/pages/NovaFerûn/ZarasterCalendar', element: <FerûnWrapper Contents = {ZarasterCalendar} dictionary = {ferûnDictionary}/>},
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
