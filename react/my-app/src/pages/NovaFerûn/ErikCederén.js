import React from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'

export default function ErikCederén({dictionary}){

    const pageTitle = "Erik Cederén";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>
        {pageHTML}
    </>

    function FileText(){
        return <>
            Text

            <Notes saveName = {pageTitle}/>
        </>
    }
}