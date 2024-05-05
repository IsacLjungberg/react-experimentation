import React from 'react';
import './characterProfileStyle.css';

export default function Template({name, summary, elements, abilities, other, image}){

    var asList = [];

    if(elements){
        for(let i = 0; i < Object.keys(elements).length; i++){
            const currentKey = Object.keys(elements)[i];
            asList.push([currentKey, elements[currentKey]]);
        }
    }

    return  <div className = "characterProfileFull">
    <div className="characterProfileBox">
        <div className="characterProfileName">{name}</div>
        <div className="characterProfileSummary">{summary}</div>
            <div style={{columnCount: 2}}>
                {asList.map(([key, value]) => 
                    <div className = "characterProfileElementBox">
                        <div className = "characterProfileElementName">{key}</div>
                        <div className = "characterProfileElementValue">{value}</div>
                    </div>)
                }
            </div>

            {abilities && <div className ="characterProfileAbilities"><b>Abilities: </b>{abilities}</div>}

            {other}
    </div>
        <div className="characterProfileImg">{image}</div>
    </div>

}