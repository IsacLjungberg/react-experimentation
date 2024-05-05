import React from 'react';
import Notes from '../../Notes'
import Minimizable from './Minimizable';
import CharacterProfile from './CharacterProfile'
import KaranaxProfile from './Profiles/KaranaxProfile';

export default function NovaFerûn({dictionary}){

    const pageTitle = "Nova Ferûn";

    var listOfAll = [];
    var listOfAllNames = [];
    
    for(let i = 0; i < Object.keys(dictionary).length; i++){
        const currentKey = Object.keys(dictionary)[i];
        listOfAll.push(dictionary[currentKey]);
    }


    const listOfAllAsString = listOfAll.map((i) => <li>{i}</li>)
    

    const davesElements = {
        Personality: "Mind numbingly boring",
        Drives: "Going with the flow",
        Plans: "Follow along and do some heroism that other people plan"
    }

    return <>
        <h1>{pageTitle}</h1>
        {listOfAllAsString}
        
        <br/><br/>

        <Minimizable defaultState={false} buttonText = "Click here" element = {
                <CharacterProfile 
                    name = "Dave"
                    summary = "An average human fighter"
                    elements = {davesElements}
                    abilities = "1st level fighter"
                />}/>

        <Notes saveName = {pageTitle}/>
    </>

}