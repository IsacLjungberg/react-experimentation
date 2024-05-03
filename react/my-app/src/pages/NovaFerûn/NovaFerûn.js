import React from 'react';
import Notes from '../../Notes'

export default function NovaFerûn(){

    const pageTitle = "Nova Ferûn";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>
        {pageHTML}
    </>

    function FileText(){

        console.log({pageTitle})
        return <>
            Text

            

            

            <Notes saveName = {pageTitle}/>
        </>
    }
}