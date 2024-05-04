import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function TemplateProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = ""
            summary = ""
            mask = ""
            hiddenFace = ""
            drives = 
            {<ul>
                <li></li>
            </ul>}
            appearence = {
                <div>
                    
                </div>
            }
            plans = {
                <div>
                    
                </div>
            }
            bio = {
                    <ul>
                        <li>Age: </li>
                        <li>Species: </li>
                    </ul>
                }
            
            abilities = {
                <div>
                    Test
                </div>
            }
        />
    </>
}