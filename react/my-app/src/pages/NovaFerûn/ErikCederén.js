import React from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import ErikCederénProfile from './Profiles/ErikCederénProfile'
import ErikCederénImg from './Assets/ErikCederén.jpg'

export default function ErikCederén({dictionary}){

    const pageTitle = "Erik Cederén";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>
        

        <div style = {{columnCount: 2}}><ErikCederénProfile/>
        <img src={ErikCederénImg} width="300"></img>
        </div>

        {pageHTML}
        <Notes saveName = {pageTitle}/>
    </>

    function FileText(){
        return <>
            

            
        </>
    }
}