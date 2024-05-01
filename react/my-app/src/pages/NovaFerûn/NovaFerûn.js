import React from 'react';
import Notes from '../../Notes'
import Core from './Core'
import { Route, Routes} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function NovaFerûn(){

    const pageTitle = "NovaFerûn";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>
        {pageHTML}
    </>

    function FileText(){

        console.log({pageTitle})
        return <>
            Text

            <a href="/pages/NovaFerûn/Core">Test Core</a>

            

            <Notes saveName = {pageTitle}/>
        </>
    }
}