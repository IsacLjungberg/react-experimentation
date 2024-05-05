import React, {useState} from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import KaranaxProfile from './Profiles/KaranaxProfile'
import KaranaxStatblock from './Assets/blackDragonKaranax.png'
import VenryxProfile from './Profiles/VenryxProfile';
import SenaraxProfile from './Profiles/SenaraxProfile';

export default function ErikCederén({dictionary}){

    const pageTitle = "Dimdjupet";

    const [karaStatblockVisible, setKaraStatblockVisible] = useState(false);

    const expandKaraStatblock = () => {
        if(karaStatblockVisible){
            setKaraStatblockVisible(false);
        } else {
            setKaraStatblockVisible(true);
        }
    }

    return <>
        <h1>{pageTitle}</h1>
        
        <h2>Karanax</h2>
        <KaranaxProfile/>

        <button onClick = {expandKaraStatblock}>Karanax Statblock</button>
        {karaStatblockVisible && <img src = {KaranaxStatblock} alt = "altered black dragons statblock" width="100%"/>}
        <br/><br/>
        <VenryxProfile/>

        <h2>Döttsviskarna</h2>
        <SenaraxProfile/>

        <h2>Flodsvandrarna</h2>

        <h2>Skuggbladen</h2>
    </>

}