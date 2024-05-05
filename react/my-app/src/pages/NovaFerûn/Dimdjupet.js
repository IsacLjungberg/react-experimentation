import React, {useState} from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import KaranaxProfile from './Profiles/KaranaxProfile'
import KaranaxStatblock from './Assets/blackDragonKaranax.png'
import VenryxProfile from './Profiles/VenryxProfile';
import SenaraxProfile from './Profiles/SenaraxProfile';
import Minimizable from './Minimizable';
import AratakProfile from './Profiles/AratakProfile';
import UrsaProfile from './Profiles/UrsaProfile';

export default function ErikCederén({dictionary}){

    const pageTitle = "Dimdjupet";

    return <>
        <h1>{pageTitle}</h1>
        
        <h2>Karanax</h2>
        <KaranaxProfile/>

        <Minimizable defaultState={true} buttonText = "Karanax Statblock" element = {<img src = {KaranaxStatblock} alt = "altered black dragons statblock" width="100%"/>}/>

        <VenryxProfile/>

        <h2>Döttsviskarna</h2>
        <SenaraxProfile/>

        <ul className = "standardList">Andra
            <li>Urak och Renara, lärlingar till Senarax</li>
        </ul>

        <h2>Flodsvandrarna</h2>

        <AratakProfile dictionary = {dictionary}/>

        <h2>Skuggbladen</h2>

        <UrsaProfile dictionary = {dictionary}/>
    </>

}