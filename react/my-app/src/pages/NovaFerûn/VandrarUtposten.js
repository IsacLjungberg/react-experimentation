import React, {useState} from 'react';
import Notes from '../../Notes'
import './FerûnStyle.css'
import { HashLink as Link } from 'react-router-hash-link';

import RosalindFostrenProfile from './Profiles/RosalindFostrenProfile';
import DurkanBrekkirProfile from './Profiles/DurkanBrekkirProfile';

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

        <h2>Karaktärer</h2>
        <h3 id ="RosalindFostren">Rosalind Fostren</h3>
        Ägaren av <Link to="#LejonetsTaverna">Lejonets Taverna</Link>
        <RosalindFostrenProfile dictionary = {dictionary}/>

        <h3 id ="DurkanBrekkir">Durkan Brekkir</h3>
        Utpostens ledare, håller hus i <Link to="#OrdningensSal">Ordningens Sal</Link>
        <DurkanBrekkirProfile dictionary = {dictionary}/>
        
        
    </>

}