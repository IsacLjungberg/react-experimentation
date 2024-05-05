import React, {useState, useEffect} from 'react';

export default function Minimizable({defaultState, buttonText, element}){

    const [minimized, setMinimized] = useState(defaultState);
    const [displayed, setDisplayed] = useState(element);

    const switchMinimized = () => {
        if(minimized){
            setMinimized(false);
        } else {
            setMinimized(true);
        }
    }

    useEffect(() => {
        if(minimized){
            setDisplayed(<button className="minimizedButton" onClick = {switchMinimized}>{buttonText}</button>);
        } else {
            setDisplayed(<div> <button className="minimizeButton" onClick = {switchMinimized}>-</button>{element}</div>);
        }
    }, [minimized])

    return displayed;

}