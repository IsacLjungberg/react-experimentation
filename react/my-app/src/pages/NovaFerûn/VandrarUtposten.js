import React, {useState} from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import { HashLink as Link } from 'react-router-hash-link';

import RosalindFostrenProfile from './Profiles/RosalindFostrenProfile';
import DurkanBrekkirProfile from './Profiles/DurkanBrekkirProfile';
import ErikCederénProfile from './Profiles/ErikCederénProfile';
import TenrekkProfile from './Profiles/TenrekkProfile';

export default function VandrarUtposten({dictionary}){

    const pageTitle = "Vandrar Utposten";

    const refreshPage = () => {
        window.location.reload()
    }

    return <>
        <h1>{pageTitle}</h1>

        <h2 id="LejonetsTaverna">Lejonets Taverna</h2>
        En relativt stor taverna, med mycket investeringar från partyt (1200 gp)
        <br/><br/>
        Ägt och opererat av <Link to="#RosalindFostren">Rosalind Fostren</Link>

        <h2 id="OrdningensSal">Ordningens Sal</h2>
        Den näst största byggnaden i utposten, hem till en teleporterings cirkel och beboningens administration, främst dess ledare, <Link to="#DurkanBrekkir">Durkan Brekkir</Link>.

        <h2 id="CederénGuildHall">Cederén Guild Hall</h2>
        En väldekorerad stenbyggnad, den största i staden, basen för <Link to="#ErikCederén">Erik Cederéns</Link> operation. Fungerar både som bas och regelbundet som auktionslokal för magiska artifakter.

        <h2>Alkemist stugan</h2>
        Relativt liten instängd trästuga där alkemisten <Link to="#Tenrekk">Tenrekk</Link> arbetar och säljer olika potions, primärt vanliga healing potions för 25 guld vardera.

        <h2>Karaktärer</h2>
        <h3 id ="RosalindFostren">Rosalind Fostren</h3>
        Ägaren av <Link to="#LejonetsTaverna">Lejonets Taverna</Link>
        <RosalindFostrenProfile dictionary = {dictionary}/>

        <h3 id = "DurkanBrekkir">Durkan Brekkir</h3>
        Utpostens ledare, håller hus i <Link to="#OrdningensSal">Ordningens Sal</Link>
        <DurkanBrekkirProfile dictionary = {dictionary}/>
        
        <h3 id = "ErikCederén">Erik Cederén</h3>
        <ErikCederénProfile dictionary = {dictionary}/>

        <h3>Andra</h3>
        <h4 id = "Tenrekk">Tenrekk</h4>
        <TenrekkProfile dictionary = {dictionary}/>

        <h4>Brief</h4>
        <ul>
            <li>Thomas Folke, Laharls tjänare, kräver 40 eller 80 gp per månad för sina tjänster</li>
        </ul>
    </>

}