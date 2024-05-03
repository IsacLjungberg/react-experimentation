import React from 'react';

export default function FerûnWrapper({Contents, dictionary}){

    return <>
        
        <div className = "navBar">{dictionary.NovaFerûn}</div>
        <main>
            <Contents dictionary = {dictionary}/>
        </main>
    </>
}