import React from 'react';
import Notes from '../../Notes'

export default function CurrentSession({dictionary}){

    const pageTitle = "Current Session";

    return <>
        <h1>{pageTitle}</h1>
        <ul>Grimroot loot, på personerna och utspridda i strukturen, främst olika ädelstenar och konstobjekt (4000/4000)
            <li>Ring of shield (1/long rest): 500gp</li>
            <li>Amulet of lost voices (speak with dead twice per long rest): 500gp</li>
            <li>Gauntlet of the dark touch (läder och järnhandske i mörk metall, 1/short rest inflict wounds): 500gp</li>
            <li>2500gp</li>
        </ul>

        <ul>Gråa damen loot (1500/1500gp)
            <li>2 doser oil of taggit (special, om en varelse redan är medvetslös misslyckas de automatiskt med saving throw): 800 gp</li>
            <li>700 gp värt av varierade antika mynt och konst objekt</li>
        </ul>

        <h3>Tillbaka till byn</h3>
        <ul>
            <li>Gruppen hör att underliga mardrömmar har drabbat byns befolkning, verket av Baba Gerishka, som är på resande fot men som installerat sina hundar för att hålla koll, som lever i en liten hydda mot utpostens utkant i formen av en familj enstöriga människor</li>
            <li>Handel har nu etablerats med fastlandet, och Erik Cederén har börjar ta in arbetskraft i form av kontraktsbunda arbetare (slavar i allt utom namn, som en gång varit slavar)<ul>
                <li>Bland dem finns en halv ork kvinna som Barry skulle finna bekant</li>    
            </ul></li>
            <li>Byn frodas, och i ordningsalen finns det nu en teleportation circle</li>
        </ul>
        
        <Notes saveName = {pageTitle}/>
    </>
}