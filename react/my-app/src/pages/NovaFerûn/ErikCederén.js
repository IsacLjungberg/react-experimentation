import React from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import ErikCederénProfile from './Profiles/ErikCederénProfile'

export default function ErikCederén({dictionary}){

    const pageTitle = "Erik Cederén";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>

        <ErikCederénProfile/>

        {pageHTML}
        <Notes saveName = {pageTitle}/>
    </>

    function FileText(){
        return <>
            Text

            
        </>
    }
}