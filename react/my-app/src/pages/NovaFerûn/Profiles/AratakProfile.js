import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function AratakProfile({dictionary}){
    const elements = {
        Mask: "Ostoppbar och självsäker ledare",
        Hidden_Face: "Rädd för att allt ska falla samman",
        Appearence: <div> Grön, stor och kraftfull med ett flertal ärr </div>,
        Plans: <div>Konvertera {dictionary.VandrarUtposten}s befolkning, och samtidigt ta reda på om Senarax utgör ett hot.</div>,
    }

    return <>
        <CharacterProfile 
            name = "Aratak Flodspredikaren"
            summary = "Kraftfull krigare och ledare över Flodsvandrarna"
            elements = {elements}
            abilities = {
                <div>
                    Kraftfull krigare (CR 5)
                </div>
            }
        />
    </>
}