import React, {useState} from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import SageProfile from './Profiles/SageProfile'
import SerenadeProfile from './Profiles/SerenadeProfile'


export default function Nattsångarna({dictionary}){

    const pageTitle = "Nattsångarna";

    return <>
        <h1>{pageTitle}</h1>
        
        <h2>Karaktärer</h2>
        <SerenadeProfile/>
        <SageProfile/>

    </>

}