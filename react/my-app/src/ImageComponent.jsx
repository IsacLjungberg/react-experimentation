import fish from'./fish.png';
import React, {useEffect, useState} from 'react';

function ImageComponent(){
    const [startPosition, setStartPosition] = useState(0);

    const mouseClick = (e) => {
        setStartPosition(e.clientX);
        setStartPosition(e.clientY);
        console.log("x: " + e.clientX);
        console.log("y: " + e.clientY);
    };


  useEffect(() => {
    window.addEventListener("mousedown", mouseClick)
  })

    console.log(this);

    return <img src={fish} alt = "fish" />
}

export default ImageComponent;