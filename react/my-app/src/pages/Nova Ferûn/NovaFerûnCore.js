import React from 'react';
import Notes from '../../Notes'

export default function NovaFerûnCore({dictionary}, {meta}){

    const pageTitle = "Nova Ferûn Core";
    const pageHTML = FileText();

    return <>
        {meta}
        <h3>{pageTitle}</h3>
        {pageHTML}
    </>

    function FileText(){
        return <>
            Ett fjärran land fyllt av faror och möjligheter.
            <br/>

            <b>Karaktärer</b>
            <ul>
                <li>{dictionary.ErikCederén}</li>
                <li>{dictionary.Karanax}</li>
                <li>{dictionary.Senarax}</li>
            </ul>

            <b>Platser</b>
            <ul>
                <li></li>
            </ul>

            <Notes saveName = {pageTitle}/>
        </>
    }
}