import React, {useState, useEffect} from 'react';

export default function Notes({saveName}){
    const [textBoxValue, setTextBoxValue] = useState(""); 

    const textChange = event => {
        const text = event.target.value;

        localStorage.setItem(saveName, text);
        setTextBoxValue(text);
    }

    useEffect(() => {
        setTextBoxValue(localStorage.getItem(saveName))
    }, [])
    
    return <div>
        <textarea name="NoteText" value = {textBoxValue} onChange={textChange}/>
        Notes for: {saveName}
    </div>;
}