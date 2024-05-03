import React from 'react';
import './characterProfileStyle.css';

export default function Template({name, summary, mask, hiddenFace, drives, plans, appearence, bio, abilities}){

    return  <div className="characterProfileBox">
        <div className="characterProfileName">{name}</div>
        <div className="characterProfileSummary">{summary}</div>
            <div style={{columnCount: 2}}>

                <div className="characterProfileElement"><path className = "fieldTitle">Mask: </path>{mask}</div>
                <div className="characterProfileElement"><path className = "fieldTitle">Hidden Face: </path>{hiddenFace}</div>

                
                {appearence && <div className="characterProfileElement"><path className = "fieldTitle">Appearence: </path>{appearence}</div>}
                <div className="characterProfileElement"><path className = "fieldTitle">Drives: </path>{drives}</div> 
                <div className="characterProfileElement"><path className = "fieldTitle">Plans: </path>{plans}</div> 
                <div className="characterProfileElement"><path className = "fieldTitle">Bio: </path>{bio}</div> 
            </div>

            {abilities && <div className ="characterProfileAbilities"><b>Abilities: </b>{abilities}</div>}
    </div>

}