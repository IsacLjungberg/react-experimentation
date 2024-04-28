import React from 'react';

export default function Magic({dictionary}){

    const pageTitle = "Fey";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>
        {pageHTML}
    </>

function FileText(){
    return <>
        {dictionary.Magic}
    </>
    }
}