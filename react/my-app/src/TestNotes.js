import React, {useState, useEffect} from 'react';

function TestNotes(){
    function saveText(){
        console.log("Trying to save");
    }

    const [textBoxValue, setTextBoxValue] = useState("Hello"); 

    const textChange = event => {
        const text = event.target.value;
        localStorage.setItem("testNote", text);
        setTextBoxValue(text);
    }

    useEffect(() => {
        setTextBoxValue(localStorage.getItem("testNote"))
    }, [])
    
    return <>
        <form>
            Write something:
            
        </form>

        <textarea name="someText" value = {textBoxValue} onChange={textChange}/>
    </>;
}

export default TestNotes;