import React, {useState} from 'react';
import './FerûnStyle.css'


export default function ZarasterCalendar({dictionary}){

    const pageTitle = "Zaraster Calendar";

    return <>
        <h1>{pageTitle}</h1>
        The Zaraster calendar is a calendar popularized by an ancient civilisation which remains in use long after its fall. It has 12 months, with 30 days each, for 360 days in a year. The seasons tied to each are based on the northern hemisphere of a standard planet, so the southern hemisphere would experience the reversal. The year starts with the first month of spring.
        <br/><br/>

    <ul className = "standardList"> Spring
        <li>1st, Novar: Generally seen as the first month of spring, and a time of new life and rebirth as winter has come to a close. (equivelent March)</li>
        <li>2nd, Florenar: A month known for plants flowering. (equivelent April)</li>
        <li>3rd, Antecalius: The last month before summer. (equivelent May)</li>
    </ul>

    <ul className = "standardList"> Summer
        <li>4th, Solis: The month with the longest days, marked by the summer solstice (20th), the longest day of the year (equivelent June)</li>
        <li>5th, Calidan/Kalidan: Usually the warmest month of the year, and the height of summer. (equivelent July)</li>
        <li>6th, Arastran: A month known for commonly having meteor showers and other stellar events. (equivelent August)</li>
    </ul>

    <ul className = "standardList"> Fall
        <li>7th, Luteum: The beginning of the autumn season, when leaves begin to yellow in many places. (equivelent September)</li>
        <li>8th, Zeres/Ceres: The primary harvest month, and filled with plenty of work for the farming folk, but also a great deal of celebration as food is plentiful and harvest festivals are common. (equivelent October)</li>
        <li>9th, Terminur: A month associated with death and endings as winter draws near, often believed to be the month when the world of the dead is at its closest, and home to many festivals relating to death and the afterlife. (equivelent November)</li>
    </ul>

    <ul className = "standardList"> Winter
        <li>10th, Tenebar: The darkest month of the year, marked by the winter solstice (22nd), the shortest day of the year. (equivelent December)</li>
        <li>11th, Corizan: The coldest and harshest month of the year. (equivelent January)</li>
        <li>12th, Horizan: A cold month, but one that beckons a new beginning as winter comes to a close. (equivelent February)</li>
    </ul>
        

    </>

}