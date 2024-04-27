import React from 'react';
import { renderToString } from 'react-dom/server';

export default function Magic({dictionary}){

    const pageTitle = "Magic";
    const pageHTML = FileText();

    return <>
        <h1>{pageTitle}</h1>
        {pageHTML}
    </>

function FileText(){
    return <>
        {dictionary.words}
        Magic is a broad category, that can include a vast array of things, some of which have nothing in common. But in general, magic is effects brought about by the [weaveOfMagic], which can be used to cast [spells].

        <h2 id = "weaveOfMagic">Weave of Magic</h2>
        The Weave of Magic is an invisible field of "energy", permeating the world. It is sentient to an extent, and responsive to certain beings, objects and behaviors. Its responses can theoretically do nearly anything, and these responses are known as magical effects. Causing these responses is the life's work of many, most commonly those who study and practice the casting of [spells], i.e. spellcasters.

        <h2 id = "spells">Spells</h2>
        Spells are magical effects produced by manipulating the [weave of magic] through gestures and words, cast by a spellcaster who channels the magic through their own bodies and minds, shaping it. Some also require magical components or other appropriate circumstances.
        <br/>
        Such spells can produce almost any effect, at least in theory. But spellcasters are still limited by several factors:
        <ul>
            <li>Ability: Casting spells is difficult and requires theoretical understanding, practice, and often natural talent. These things increase complexity of spells one can properly cast, and lessens the strain caused by casting spells.</li>
            <li>Strain: To cast a spellcater must channel magic through themselves, which is taxing to the body, the mind, or both. With greater ability this strain is lessened, but it is still rarely something that can be ignored. This strain can prove permanently debilitating to either mind or body, or even fatal, especially when one attempts to cast a spell beyond their current ability.</li>
            <li>Knowledge: Beyond the more general knowledge of and ability for magic, a caster must also know the specific spells they mean to cast. Such knowledge can often be hard to acquire, and most spellcasters tend to know spells more geared towards certain fields than others, limiting the bredth of their castting.<br/>The <b>exception</b> to this are casters who invent their own spells. This is most often done by altering existing spells, and even this takes a caster of great ability. Truly powerful spellcasters can make up spells on the fly, but this is rare in most times and places.</li>
            <li>Material Components: Many spells require material components in one form or another. This can be anything, from precious stones to lizard tails.</li>
        </ul>
        Spells are distinct from other methods of using magic, such as [innateMagic] and [magicalItems], though there is overlap.
        <br/><br/><br/>
    </>
    }
}