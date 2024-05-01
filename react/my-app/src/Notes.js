import React, {useState, useEffect} from 'react';

export default function TestNotes({saveName}){
    const [textBoxValue, setTextBoxValue] = useState(""); 

    const textChange = event => {
        const text = event.target.value;

        localStorage.setItem(saveName, text);
        setTextBoxValue(text);
    }

    useEffect(() => {
        setTextBoxValue(localStorage.getItem(saveName))
    }, [])
    
    return <>
        <form>
            Write something:
            
        </form>

        <textarea name="NoteText" value = {textBoxValue} onChange={textChange}/>
    </>;
}