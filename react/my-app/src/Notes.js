import React, {useState, useEffect} from 'react';

export default function Notes({saveName}){
    const [textBoxValue, setTextBoxValue] = useState(""); 

    const textChange = event => {
        const text = event.target.value;

        const actualSaveName = "Notes " + saveName;

        localStorage.setItem(actualSaveName, text);
        setTextBoxValue(text);
    }

    useEffect(() => {
        const actualSaveName = "Notes " + saveName;

        setTextBoxValue(localStorage.getItem(actualSaveName))
    }, [saveName])
    
    return <div>
        <textarea name="NoteText" value = {textBoxValue} onChange={textChange}/>
        Notes for: {saveName}
    </div>;
}