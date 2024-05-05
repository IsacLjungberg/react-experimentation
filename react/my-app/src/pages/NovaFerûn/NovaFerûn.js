import React from 'react';
import Notes from '../../Notes'
import Minimizable from './Minimizable';

export default function NovaFerûn({dictionary}){

    const pageTitle = "Nova Ferûn";

    var listOfAll = [];
    
    for(let i = 0; i < Object.keys(dictionary).length; i++){
        const currentKey = Object.keys(dictionary)[i];
        listOfAll.push(dictionary[currentKey]);
    }

    const listOfAllAsString = listOfAll.map((i) => <li>{i}</li>)
    

    return <>
        <h1>{pageTitle}</h1>
        {listOfAllAsString}
        

        <br/><br/>

        <Minimizable defaultState={false} buttonText = "Click here" element = {<div>Has been expanded</div>}/>


        <Notes saveName = {pageTitle}/>
    </>

}